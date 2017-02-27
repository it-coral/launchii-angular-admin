(function() {
    'use strict';

    angular.module('app')
        .controller('DealEditController', DealEditController);

    DealEditController.$inject = ['DealService', '$stateParams', '$scope', 'prepSelDeal'];

    /* @ngInject */
    function PostEditController(DealService, $stateParams, $scope, prepSelDeal) {
        var vm = this;

        vm.mode = "Edit";
        vm.form = {};
        vm.response = {};
        vm.dealId = $stateParams.id;
        vm.selectedDeal = prepSelDeal;
        vm.isDone = false;

        vm.prevState = HelperService.getPrevState();
        vm.submitAction = editPost;

        //activate();

        ///////////////////

        function activate() {
            DealService.find(vm.dealId).then(function(data) {
                vm.selectedDeal = data;
                vm.form = vm.selectedDeal;
            });
        }

        function editPost() {
            DealService.edit(vm.form).then(function() {
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