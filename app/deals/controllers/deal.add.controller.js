(function() {
    'use strict';

    angular.module('app')
        .controller('DealAddController', DealAddController);

    DealAddController.$inject = ['DealService', '$scope'];

    /* @ngInject */
    function DealAddController(DealService, $scope) {
        var vm = this;

        vm.mode = "Add";
        vm.form = {};
        vm.response = {};
        vm.isDone = false;

        vm.prevState = HelperService.getPrevState();
        vm.submitAction = addDeal;

        ///////////////////

        function addDeal() {

            DealService.addDeal(vm.form).then(function() {
                vm.response['success'] = "alert-success";
                vm.response['alert'] = "Success!";
                vm.response['msg'] = "Added new deal.";
                vm.isDone = true;

                $scope.$parent.vm.getDeals();
            }).catch(function() {
                vm.response['success'] = "alert-danger";
                vm.response['alert'] = "Error!";
                vm.response['msg'] = "Failed to add new deal.";
                vm.isDone = true;
            });
        }
    }
})();