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
        'prepEarlyBirdD',
        'prepDealImages',
        '$window'
    ];

    /* @ngInject */
    function DealViewController(
        DealService,
        $stateParams,
        $scope,
        prepSelDeal,
        HelperService,
        prepSelHighlights,
        prepSelTemplates,
        prepStandardD,
        prepEarlyBirdD,
        prepDealImages,
        $window
    ) {

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
        vm.hasImages = hasImages;

        //Images
        vm.images = prepDealImages;
        vm.openEditImageModal = openEditImageModal;
        vm.prevState = HelperService.getPrevState();

        if ($window.__env.apiUrl.toLowerCase().indexOf('stageapi') > -1) {
          vm.customerHost = 'http://staging.launchii.com';
        } else {
          vm.customerHost = 'http://www.launchii.com';
        }

        //activate();

        ///////////////////

        function activate() {
            DealService.find(vm.dealId).then(function(data) {
                vm.deal = data;
            });
        }

        function openEditImageModal(elem) {
            $(elem).parents('.image-view-container').find('.image-modal').modal('show');
        }

        function hasStandardDiscounts() {
            return angular.isDefined(vm.standardDiscounts) && vm.standardDiscounts.length > 0;
        }

        function hasEarlybirdDiscounts() {
            return angular.isDefined(vm.earlyBirdDiscounts) && vm.earlyBirdDiscounts.length > 0;
        }

        function hasImages() {
          return angular.isDefined(vm.images) && vm.images.length > 0;
        }
    }
})();
