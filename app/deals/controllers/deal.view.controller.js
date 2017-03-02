(function() {
    'use strict';

    angular.module('app')
        .controller('DealViewController', DealViewController);

    DealViewController.$inject = ['DealService', '$stateParams', '$scope', 'prepSelDeal', 'HelperService'];

    /* @ngInject */
    function DealViewController(DealService, $stateParams, $scope, prepSelDeal, HelperService) {
        var vm = this;

        vm.mode = "View";
        vm.response = {};
        vm.dealId = $stateParams.id;
        vm.deal = prepSelDeal;
        vm.isDone = false;

        vm.prevState = HelperService.getPrevState();

        //activate();

        ///////////////////

        function activate() {
            DealService.find(vm.dealId).then(function(data) {
                vm.deal = data;
            });
        }
    }
})();