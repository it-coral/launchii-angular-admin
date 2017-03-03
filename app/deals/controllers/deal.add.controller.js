(function() {
    'use strict';

    angular.module('app')
        .controller('DealAddController', DealAddController);

    DealAddController.$inject = ['DealService', '$scope', 'HelperService', '$state', 'brandPrepService'];

    /* @ngInject */
    function DealAddController(DealService, $scope, HelperService, $state, brandPrepService) {
        var vm = this;

        vm.mode = "Add";
        vm.form = {};
        vm.form.highlights = {};
        vm.response = {};
        vm.isDone = false;
        vm.brands = brandPrepService.brands;
        vm.default = vm.brands[0];

        vm.prevState = HelperService.getPrevState();
        vm.submitAction = addDeal;

        activate();

        ///////////////////

        function activate() {
            ComponentsDateTimePickers.init();
        }

        function addDeal() {
            //vm.form.starts_at = HelperService.combineDateTime(vm.form.date_starts, vm.form.time_starts);
            //vm.form.ends_at = HelperService.combineDateTime(vm.form.date_ends, vm.form.time_ends);
            //console.log(vm.form.highlights);
            //return false;
            DealService.add(vm.form).then(function() {
                vm.response['success'] = "alert-success";
                vm.response['alert'] = "Success!";
                vm.response['msg'] = "Added new deal: " + vm.form.name;
                vm.isDone = true;

                $scope.$parent.vm.isDone = true;
                $scope.$parent.vm.response = vm.response;
                $scope.$parent.vm.getDeals();
                $state.go(vm.prevState);

            }).catch(function() {
                vm.response['success'] = "alert-danger";
                vm.response['alert'] = "Error!";
                vm.response['msg'] = "Failed to add new deal.";
                vm.isDone = true;

                $scope.$parent.vm.isDone = false;
                HelperService.goToAnchor('msg-info');
            });
        }
    }
})();