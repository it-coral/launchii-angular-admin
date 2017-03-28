(function() {
    'use strict';

    angular.module('app.brands')
        .controller('BrandController', BrandController);

    BrandController.$inject = ['BrandService', 'brandPrepService', '$log', '$timeout'];

    /* @ngInject */
    function BrandController(BrandService, brandPrepService, $log, $timeout) {
        var vm = this;

        vm.prepBrands = brandPrepService;
        vm.brands = vm.prepBrands.brands;
        vm.getBrands = getBrands;
        vm.hasDeleted = false;
        vm.response = {};
        vm.deleteBrand = deleteBrand;
        vm.response = {};
        vm.isDone = false;
        vm.search = search;
        vm.searchItem = '';
        vm.isLoading = false;
        vm.isRetrieving = false;
        vm.isSearch = false;
        vm.clearSearch = clearSearch;
        vm.isBrandEmpty = isBrandEmpty;

        //activate();

        ////////////////

        function activate() {
            return getBrands();
        }

        function isBrandEmpty() {
            return vm.prepBrands.total == 0;
        }

        function clearSearch() {
            vm.searchItem = '';
            search();
        }

        function search() {
            vm.isLoading = true;

            if (vm.searchItem.trim().length > 0) {
                vm.isSearch = true;
            } else {
                vm.isSearch = false;
            }

            BrandService.search(vm.searchItem).then(function(resp) {
                vm.brands = resp;
                vm.isLoading = false;
            }).catch(function(err) {
                $log.log(err);
            });
        }

        function getBrands() {
            vm.isRetrieving = true;
            return BrandService.getAll().then(function(data) {
                vm.prepBrands = data;
                console.log(vm.prepBrands);
                console.log(vm.prepBrands.total == 0);
                vm.brands = vm.prepBrands.brands;
                vm.isRetrieving = false;
                $timeout(function() {
                    vm.response.msg = false;
                }, 3000);
                return vm.brands;
            });
        }

        function deleteBrand(element, brand) {
            bootbox.confirm({
                title: "Confirm Delete",
                message: "Are you sure you want to delete brand: <b>" + brand.name + "</b>?",
                buttons: {
                    confirm: {
                        label: 'Yes',
                        className: 'btn-success'
                    },
                    cancel: {
                        label: 'No',
                        className: 'btn-danger'
                    }
                },
                callback: function(result) {
                    if (result) {
                        var ladda = Ladda.create(element);
                        ladda.start();
                        if (!doDelete(brand)) {
                          ladda.stop();
                        }
                    }
                }
            });

        }

        function doDelete(brand) {
            BrandService.delete(brand.uid).then(function(resp) {
                vm.hasDeleted = true;
                vm.response['success'] = "alert-success";
                vm.response['alert'] = "Success!";
                vm.response['msg'] = "Deleted brand: " + brand.name;
                getBrands();
                vm.hasAdded = true;
                vm.isDone = true;
                return true;
            }).catch(function(error) {
                vm.response['success'] = "alert-danger";
                vm.response['alert'] = "Error!";
                vm.response['msg'] = error.data.errors;
                vm.hasAdded = true;
                vm.isDone = true;
                return false;
            });
        }
    }
})();
