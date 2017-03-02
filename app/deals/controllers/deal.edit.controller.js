(function() {
    'use strict';

    angular.module('app')
        .controller('DealEditController', DealEditController);

    DealEditController.$inject = ['DealService', '$stateParams', '$scope', 'prepSelDeal', 'HelperService', '$state', 'brandPrepService'];

    /* @ngInject */
    function DealEditController(DealService, $stateParams, $scope, prepSelDeal, HelperService, $state, brandPrepService) {
        var vm = this;

        vm.mode = "Edit";
        vm.response = {};
        vm.dealId = $stateParams.id;
        vm.selectedDeal = prepSelDeal;
        vm.form = vm.selectedDeal;
        vm.isDone = false;
        vm.brands = brandPrepService.brands;
        vm.default = vm.brands[0];

        vm.prevState = HelperService.getPrevState();
        vm.submitAction = editDeal;

        activate();

        ///////////////////

        function activate() {
            // DealService.find(vm.dealId).then(function(data) {
            //     vm.selectedDeal = data;
            //     vm.form = vm.selectedDeal;
            // });
            //temporary workaround
            jQuery(document).ready(function() {
                ComponentsDateTimePickers.init();
            });
        }

        function editDeal() {
            vm.form.starts_at = HelperService.combineDateTime(vm.form.date_starts, vm.form.time_starts);
            vm.form.ends_at = HelperService.combineDateTime(vm.form.date_ends, vm.form.time_ends);

            DealService.edit(vm.dealId, vm.form).then(function() {
                vm.response['success'] = "alert-success";
                vm.response['alert'] = "Success!";
                vm.response['msg'] = "Updated deal: " + vm.form.name;
                vm.isDone = true;

                $scope.$parent.vm.isDone = true;
                $scope.$parent.vm.response = vm.response;
                $scope.$parent.vm.getDeals();
                $state.go(vm.prevState);

            }).catch(function(err) {
                console.log(err);
                vm.response['success'] = "alert-danger";
                vm.response['alert'] = "Error!";
                vm.response['msg'] = "Failed to update deal.";
                vm.isDone = true;

                $scope.$parent.vm.isDone = false;
                HelperService.goToAnchor('msg-info');
            });
        }
    }
})();