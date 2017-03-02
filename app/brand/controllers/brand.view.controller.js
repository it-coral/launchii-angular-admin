(function() {
    'use strict';

    angular.module('app')
        .controller('BrandViewController', BrandViewController);

    BrandViewController.$inject = ['BrandService', '$stateParams', '$scope', 'prepSelBrand', 'HelperService'];

    /* @ngInject */
    function BrandViewController(BrandService, $stateParams, $scope, prepSelBrand, HelperService) {
        var vm = this;

        vm.mode = "View";
        vm.response = {};
        vm.brandId = $stateParams.id;
        vm.brand = prepSelBrand;
        vm.isDone = false;

        vm.prevState = HelperService.getPrevState();

        //activate();

        ///////////////////

        function activate() {
            BrandService.find(vm.brandId).then(function(data) {
                vm.brand = data;
            });
        }
    }
})();