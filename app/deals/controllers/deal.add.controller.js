(function() {
    'use strict';

    angular.module('app')
        .controller('DealAddController', DealAddController);

    DealAddController.$inject = ['DealService', '$scope', 'HelperService', '$state', 'brandPrepService', 'prepTemplateNames', 'prepTemplateTypes'];

    /* @ngInject */
    function DealAddController(DealService, $scope, HelperService, $state, brandPrepService, prepTemplateNames, prepTemplateTypes) {
        var vm = this;

        vm.mode = "Add";
        vm.form = {};
        vm.form.highlights = [];
        vm.form.templates = [];
        vm.form.discounts = [];
        vm.response = {};
        vm.isDone = true;
        vm.brands = brandPrepService.brands;
        vm.default = vm.brands[0];
        vm.removeHighlight = removeHighlight;
        //template
        vm.templateCounter = 0;
        vm.increTemplateCounter = increTemplateCounter;
        vm.selTemplateIndex = 0;
        vm.setSelTemplateIndex = setSelTemplateIndex;
        vm.selTemplateObj = {};
        vm.setSelTemplateObj = setSelTemplateObj;
        vm.templateNames = prepTemplateNames;
        vm.templateTypes = prepTemplateTypes;
        vm.removeTemplate = removeTemplate;
        vm.priceFormat = priceFormat;
        //discount
        vm.discountCounter = 0;
        vm.increDiscountCounter = increDiscountCounter;
        vm.selDiscountIndex = 0;
        vm.setSelDiscountIndex = setSelDiscountIndex;
        vm.selDiscountObj = {};
        vm.setSelDiscountObj = setSelDiscountObj;
        vm.removeDiscount = removeDiscount;

        vm.prevState = HelperService.getPrevState();
        vm.submitAction = addDeal;

        activate();

        ///////////////////

        function activate() {
            ComponentsDateTimePickers.init();

            // vm.$watch('vm.form.price', function(newVal, oldVal) {
            //     console.log(newVal);
            //     return newVal.toFixed(2);
            // });
        }
        //Discount
        function removeDiscount(discount_index) {
            console.log(discount_index);
            angular.forEach(vm.form.discounts, function(val, index) {
                if (index == discount_index) {
                    console.log('test')
                    vm.form.discounts.splice(index, 1);
                }
            });
        }

        function setSelDiscountObj(dobj) {
            vm.selDiscountObj = dobj;
        }

        function setSelDiscountIndex(index) {
            vm.selDiscountIndex = index;
        }

        function increDiscountCounter() {
            vm.discountCounter++;
        }
        //End Discount

        //Template
        function priceFormat() {
            var price = vm.form.price;

            vm.form.price = parseFloat(price).toFixed(2) + '';
        }

        function removeTemplate(template_index) {
            angular.forEach(vm.form.templates, function(val, index) {
                if (index == template_index) {
                    console.log('test')
                    vm.form.templates.splice(index, 1);
                }
            });
        }

        function setSelTemplateObj(tobj) {
            vm.selTemplateObj = tobj;
        }

        function setSelTemplateIndex(index) {
            vm.selTemplateIndex = index;
        }

        function increTemplateCounter() {
            vm.templateCounter++;
        }
        //END Template


        function addDeal() {
            vm.isDone = false;
            //temporary
            //vm.form.brand_id = '3228eb88-6810-4b28-ae52-88a62e4655c3';

            vm.isDone = false;
            vm.form.starts_at = HelperService.combineDateTime(vm.form.date_starts, vm.form.time_starts);
            vm.form.ends_at = HelperService.combineDateTime(vm.form.date_ends, vm.form.time_ends);

            console.log(vm.form);
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

                $scope.$parent.vm.isDone = true;
                HelperService.goToAnchor('msg-info');
            });
        }

        function removeHighlight(highlightId) {

        }
    }
})();