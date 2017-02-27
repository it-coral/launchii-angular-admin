(function() {
    'use strict';

    angular.module('app')
        .controller('BrandAddController', BrandAddController);

    BrandAddController.$inject = ['BrandService', '$scope'];

    /* @ngInject */
    function BrandAddController(BrandService, $scope) {
        var vm = this;

        vm.mode = "Add";
        vm.form = {};
        vm.response = {};
        vm.isDone = false;

        vm.prevState = HelperService.getPrevState();
        vm.submitAction = addBrand;

        ///////////////////

        function addBrand() {

            BrandService.add(vm.form).then(function() {
                vm.response['success'] = "alert-success";
                vm.response['alert'] = "Success!";
                vm.response['msg'] = "Added new Brand.";
                vm.isDone = true;

                $scope.$parent.vm.getBrands();
            }).catch(function() {
                vm.response['success'] = "alert-danger";
                vm.response['alert'] = "Error!";
                vm.response['msg'] = "Failed to add new Brand.";
                vm.isDone = true;
            });
        }
    }
})();