(function() {
    'use strict';

    angular.module('app')
        .controller('BrandEditController', BrandEditController);

    BrandEditController.$inject = ['BrandService', '$stateParams', '$scope', 'prepSelBrand', 'HelperService'];

    /* @ngInject */
    function BrandEditController(BrandService, $stateParams, $scope, prepSelBrand, HelperService) {
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
                vm.response['msg'] = "Updated Brand.";
                vm.isDone = true;
                $scope.$parent.vm.getBrands();
            }).catch(function() {
                vm.response['success'] = "alert-danger";
                vm.response['alert'] = "Error!";
                vm.response['msg'] = "Failed to update Brand.";
                vm.isDone = true;
            });
        }
    }
})();