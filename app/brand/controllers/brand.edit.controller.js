(function() {
    'use strict';

    angular.module('app')
        .controller('BrandEditController', BrandEditController);

    BrandEditController.$inject = ['BrandService', '$stateParams', '$scope', 'prepSelBrand'];

    /* @ngInject */
    function PostEditController(BrandService, $stateParams, $scope, prepSelBrand) {
        var vm = this;

        vm.mode = "Edit";
        vm.form = {};
        vm.response = {};
        vm.BrandId = $stateParams.id;
        vm.selectedBrand = prepSelBrand;
        vm.isDone = false;

        vm.prevState = HelperService.getPrevState();
        vm.submitAction = editPost;

        //activate();

        ///////////////////

        function activate() {
            BrandService.find(vm.BrandId).then(function(data) {
                vm.selectedBrand = data;
                vm.form = vm.selectedBrand;
            });
        }

        function editPost() {
            BrandService.edit(vm.form).then(function() {
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