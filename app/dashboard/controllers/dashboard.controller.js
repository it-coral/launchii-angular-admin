(function() {
    'use strict';

    angular.module('app')
        .controller('DashboardController', DashboardController);

    DashboardController.$inject = ['DashboardService', 'HelperService', '$window'];

    /* @ngInject */
    function DashboardController(DashboardService, HelperService, $window) {
        var vm = this;

        vm.summaryLoaded = false;
        vm.registeredUserCount = 0;
        vm.claimedCouponCount = 0;
        vm.couponClaimedValue = '';
        vm.registeredVendorCount = 0;
        vm.runningDealCount = 0;

        vm.response = {};

        activate();

        function activate() {
            vm.page_title = "Dashboard";

            getSummary();
        }

        function getSummary() {
            DashboardService.fetchSummary().then(function(resp) {

                vm.registeredUserCount = resp.registered_user_count;
                vm.claimedCouponCount = resp.claimed_coupon_count;
                vm.couponClaimedValue = resp.coupon_claimed_value;
                vm.registeredVendorCount = resp.registered_vendor_count;
                vm.runningDealCount = resp.running_deal_count;

                vm.summaryLoaded = true;

            }).catch(function(err) {
                vm.response['success'] = "alert-danger";
                vm.response['alert'] = "Error!";
                vm.response['msg'] = "Failed to pull dashboard info.";
                vm.response['error_arr'] = err.data == null ? '' : err.data.errors;

                HelperService.goToAnchor('msg-info');
            })
        }
        
    }
})();
