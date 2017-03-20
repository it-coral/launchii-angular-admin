(function() {
    'use strict';

    angular.module('app.deals')
        .controller('DealViewController', DealViewController);

    DealViewController.$inject = [
        'DealService',
        '$stateParams',
        '$scope',
        'prepSelDeal',
        'HelperService',
        'prepSelHighlights',
        'prepSelTemplates',
        'prepStandardD',
        'prepEarlyBirdD'
    ];

    /* @ngInject */
    function DealViewController(DealService, $stateParams, $scope, prepSelDeal, HelperService, prepSelHighlights, prepSelTemplates, prepStandardD, prepEarlyBirdD) {
        var vm = this;

        vm.mode = "View";
        vm.response = {};
        vm.dealId = $stateParams.id;
        vm.deal = prepSelDeal;
        vm.isDone = false;

        //Highlights
        vm.highlights = prepSelHighlights;

        //Templates
        vm.templates = prepSelTemplates;

        //Discounts
        vm.standardDiscounts = prepStandardD;
        vm.earlyBirdDiscounts = prepEarlyBirdD;
        vm.hasStandardDiscounts = hasStandardDiscounts;
        vm.hasEarlybirdDiscounts = hasEarlybirdDiscounts;

        vm.prevState = HelperService.getPrevState();

        //activate();

        ///////////////////

        function activate() {
            DealService.find(vm.dealId).then(function(data) {
                vm.deal = data;
            });
        }

        function hasStandardDiscounts() {
            return angular.isDefined(vm.standardDiscounts) && vm.standardDiscounts.length > 0;
        }

        function hasEarlybirdDiscounts() {
            return angular.isDefined(vm.earlyBirdDiscounts) && vm.earlyBirdDiscounts.length > 0;
        }
    }
})();