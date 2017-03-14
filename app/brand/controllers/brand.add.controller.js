(function() {
    'use strict';

    angular.module('app.brands')
        .controller('BrandAddController', BrandAddController);

    BrandAddController.$inject = ['BrandService', '$scope', 'HelperService', '$state'];

    /* @ngInject */
    function BrandAddController(BrandService, $scope, HelperService, $state) {
        var vm = this;

        vm.mode = "Add";
        vm.form = {};
        vm.form.facebook = "https://facebook.com/";
        vm.form.twitter = "https://twitter.com/";
        vm.form.instagram = "https://instagram.com/";
        vm.response = {};
        vm.isDone = true;

        vm.prevState = HelperService.getPrevState();
        vm.submitAction = addBrand;

        ///////////////////

        function addBrand() {
            vm.isDone = false;
            vm.form.logo_image = "default.png"; //temporary
            vm.form.brand_image = "default.png"; //temporary

            BrandService.add(vm.form).then(function() {
                vm.response['success'] = "alert-success";
                vm.response['alert'] = "Success!";
                vm.response['msg'] = "Added brand: " + vm.form.name;
                vm.isDone = true;

                $scope.$parent.vm.isDone = true;
                $scope.$parent.vm.response = vm.response;
                $scope.$parent.vm.getBrands();
                $state.go(vm.prevState);

            }).catch(function(errors) {
                vm.response['success'] = "alert-danger";
                vm.response['alert'] = "Error!";
                vm.response['msg'] = "Failed to add new Brand.";
                vm.isDone = true;

                $scope.$parent.vm.isDone = true;
                HelperService.goToAnchor('msg-info');
            });
        }
    }
})();