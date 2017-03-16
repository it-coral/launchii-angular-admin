(function() {
    'use strict';

    angular.module('app.deals')
        .controller('DealViewController', DealViewController);

    DealViewController.$inject = ['DealService', '$stateParams', '$scope', 'prepSelDeal', 'HelperService', 'prepSelHighlights', 'prepSelTemplates'];

    /* @ngInject */
    function DealViewController(DealService, $stateParams, $scope, prepSelDeal, HelperService, prepSelHighlights, prepSelTemplates) {
        var vm = this;

        vm.mode = "View";
        vm.response = {};
        vm.dealId = $stateParams.id;
        vm.deal = prepSelDeal;
        vm.isDone = false;
        vm.highlights = prepSelHighlights;
        vm.templates = prepSelTemplates;
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