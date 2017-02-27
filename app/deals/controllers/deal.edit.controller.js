(function() {
    'use strict';

    angular.module('app')
        .controller('DealEditController', DealEditController);

    DealEditController.$inject = ['DealService', '$stateParams', '$scope', 'prepDealId'];

    /* @ngInject */
    function PostEditController(DealService, $stateParams, $scope, prepDealId) {
        var vm = this;

        vm.mode = "Edit";
        vm.form = {};
        vm.response = {};
        vm.dealId = prepDealId;
        vm.selectedDeal = null;
        vm.isDone = false;

        vm.prevState = HelperService.getPrevState();
        vm.submitAction = editPost;

        activate();

        ///////////////////

        function activate() {
            DealService.getDeal(vm.dealId).then(function(data) {
                vm.selectedDeal = data;
                vm.form = vm.selectedDeal;
            });
        }

        function editPost() {
            DealService.editPost(vm.form).then(function() {
                vm.response['success'] = "alert-success";
                vm.response['alert'] = "Success!";
                vm.response['msg'] = "Updated deal.";
                vm.isDone = true;
                $scope.$parent.vm.getDeals();
            }).catch(function() {
                vm.response['success'] = "alert-danger";
                vm.response['alert'] = "Error!";
                vm.response['msg'] = "Failed to update deal.";
                vm.isDone = true;
            });
        }
    }
})();