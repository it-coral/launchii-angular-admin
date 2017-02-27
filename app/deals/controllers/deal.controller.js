(function() {
    'use strict';

    angular.module('app')
        .controller('DealController', DealController);

    DealController.$inject = ['DealService', 'dealPrepService'];

    /* @ngInject */
    function DealController(DealService, dealPrepService) {
        var vm = this;

        vm.deals = dealPrepService;
        vm.getDeals = getDeals;
        vm.hasDeleted = false;
        vm.response = {};
        vm.deleteDeal = deleteDeal;

        activate();

        ////////////////

        function activate() {
            return getDeals();
        }

        function getDeals() {
            return DealService.getDeals().then(function(data) {
                vm.deals = data;
                return vm.deals;
            });
        }

        function deleteDeal(deal) {
            bootbox.confirm({
                title: "Confirm Delete",
                message: "Are you sure you want to delete deal: <b>" + deal.title + "</b>?",
                buttons: {
                    confirm: {
                        label: 'Yes',
                        className: 'btn-success'
                    },
                    cancel: {
                        label: 'No',
                        className: 'btn-danger'
                    }
                },
                callback: function(result) {
                    if (result) {
                        doDelete(deal.id);
                    }
                }
            });

        }

        function doDelete(id) {
            DealService.deleteDeal(id).then(function(resp) {
                vm.hasDeleted = true;
                vm.response['success'] = "alert-success";
                vm.response['alert'] = "Success!";
                vm.response['msg'] = resp.data.message;
                getDeals();
                vm.hasAdded = true;
            }).catch(function() {
                vm.response['success'] = "alert-danger";
                vm.response['alert'] = "Error!";
                vm.response['msg'] = "Failed to delete deal.";
                vm.hasAdded = true;
            });
        }
    }
})();