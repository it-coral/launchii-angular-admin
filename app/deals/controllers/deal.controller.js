(function() {
    'use strict';

    angular.module('app')
        .controller('DealController', DealController);

    DealController.$inject = ['DealService', 'dealPrepService'];

    /* @ngInject */
    function DealController(DealService, dealPrepService) {
        var vm = this;

        vm.prepDeals = dealPrepService;
        vm.deals = vm.prepDeals.deals;
        vm.getDeals = getDeals;
        vm.hasDeleted = false;
        vm.response = {};
        vm.deleteDeal = deleteDeal;
        vm.response = {};
        vm.isDone = false;

        //activate();

        ////////////////

        function activate() {
            return getDeals();
        }

        function getDeals() {
            return DealService.getAll().then(function(data) {
                vm.prepDeals = data;
                vm.deals = vm.prepDeals.deals;
                return vm.deals;
            });
        }

        function deleteDeal(deal) {
            bootbox.confirm({
                title: "Confirm Delete",
                message: "Are you sure you want to delete deal: <b>" + deal.name + "</b>?",
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
                        doDelete(deal);
                    }
                }
            });

        }

        function doDelete(deal) {
            DealService.delete(deal.uid).then(function(resp) {
                vm.hasDeleted = true;
                vm.response['success'] = "alert-success";
                vm.response['alert'] = "Success!";
                vm.response['msg'] = "Deleted deal: " + deal.name;
                getDeals();
                vm.hasAdded = true;
                vm.isDone = true;
            }).catch(function() {
                vm.response['success'] = "alert-danger";
                vm.response['alert'] = "Error!";
                vm.response['msg'] = "Failed to delete deal: " + deal.name;
                vm.hasAdded = true;
                vm.isDone = true;
            });
        }
    }
})();