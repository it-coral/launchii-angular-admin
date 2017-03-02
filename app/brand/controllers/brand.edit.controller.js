(function() {
    'use strict';

    angular.module('app')
        .controller('BrandEditController', BrandEditController);

    BrandEditController.$inject = ['BrandService', '$stateParams', '$scope', 'prepSelBrand', 'HelperService', '$state'];

    /* @ngInject */
    function BrandEditController(BrandService, $stateParams, $scope, prepSelBrand, HelperService, $state) {
        var vm = this;

        vm.mode = "Edit";
        vm.response = {};
        vm.brandId = $stateParams.id;
        vm.selectedBrand = prepSelBrand;
        vm.form = vm.selectedBrand;
        vm.isDone = false;

        vm.prevState = HelperService.getPrevState();
        vm.submitAction = editPost;

        //activate();

        ///////////////////

        function activate() {
            BrandService.find(vm.brandId).then(function(data) {
                vm.selectedBrand = data;
                vm.form = vm.selectedBrand;
            });
        }

        function editPost() {
            vm.form.logo_image = "default.png"; //temporary
            vm.form.brand_image = "default.png"; //temporary

            BrandService.edit(vm.brandId, vm.form).then(function() {
                vm.response['success'] = "alert-success";
                vm.response['alert'] = "Success!";
                vm.response['msg'] = "Updated brand: " + vm.form.name;
                vm.isDone = true;

                $scope.$parent.vm.isDone = true;
                $scope.$parent.vm.response = vm.response;
                $scope.$parent.vm.getBrands();
                $state.go(vm.prevState);

            }).catch(function(err) {
                console.log(err);
                vm.response['success'] = "alert-danger";
                vm.response['alert'] = "Error!";
                vm.response['msg'] = "Failed to update Brand.";
                vm.isDone = true;

                $scope.$parent.vm.isDone = false;
                HelperService.goToAnchor('msg-info');
            });
        }
    }
})();