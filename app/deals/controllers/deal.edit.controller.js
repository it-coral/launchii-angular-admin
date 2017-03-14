(function() {
    'use strict';

    angular.module('app.deals')
        .controller('DealEditController', DealEditController);

    DealEditController.$inject = ['DealService', '$stateParams', '$scope', 'prepSelDeal', 'HelperService', '$state', 'brandPrepService', 'prepSelHighlights', 'prepSelTemplates', 'prepTemplateNames', 'prepTemplateTypes', 'prepStandardD', 'prepEarlyBirdD'];

    /* @ngInject */
    function DealEditController(DealService, $stateParams, $scope, prepSelDeal, HelperService, $state, brandPrepService, prepSelHighlights, prepSelTemplates, prepTemplateNames, prepTemplateTypes, prepStandardD, prepEarlyBirdD) {
        var vm = this;

        vm.mode = "Edit";
        vm.response = {};
        vm.dealId = $stateParams.id;
        vm.selectedDeal = prepSelDeal;
        vm.form = vm.selectedDeal;
        vm.form.highlights = [];
        vm.form.templates = [];
        //vm.form.highlights = vm.selectedDeal.highlights;
        vm.highlights = prepSelHighlights;
        vm.isDone = true;
        vm.brands = brandPrepService.brands;
        vm.default = vm.brands[0];
        vm.removeHighlight = removeHighlight;
        vm.removedHighlightObjs = [];

        //template
        vm.templates = prepSelTemplates;
        vm.removedTemplateObjs = [];
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
        vm.discounts = prepStandardD.concat(prepEarlyBirdD);
        vm.removedDiscountObjs = [];
        vm.discountCounter = 0;
        vm.increDiscountCounter = increDiscountCounter;
        vm.selDiscountIndex = 0;
        vm.setSelDiscountIndex = setSelDiscountIndex;
        vm.selDiscountObj = {};
        vm.setSelDiscountObj = setSelDiscountObj;
        vm.removeDiscount = removeDiscount;
        vm.standardDiscounts = prepStandardD;
        vm.earlyBirdDiscounts = prepEarlyBirdD;

        vm.updateDateDiff = updateDateDiff;
        vm.prevState = HelperService.getPrevState();
        vm.submitAction = editDeal;

        activate();

        ///////////////////

        function activate() {
            // angular.element('.start-date').datepicker({
            //     orientation: "left",
            //     autoclose: true
            // });
            //console.log(vm.discounts);
            priceFormat();
            // DealService.find(vm.dealId).then(function(data) {
            //     vm.selectedDeal = data;
            //     vm.form = vm.selectedDeal;
            // });
            //temporary workaround
            $(document).ready(function() {
                ComponentsDateTimePickers.init();
            });
        }

        function updateDateDiff() {
            vm.form.date_ends = '';

            var dateNow = new Date();
            var dateComp = new Date(vm.form.date_starts);

            var timeDiff = Math.abs(dateComp.getTime() - dateNow.getTime());
            var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

            $('#ending_date').datepicker({
                autoclose: true
            });

            $('#ending_date').datepicker('setStartDate', '+' + diffDays + 'd');

        }

        //Discount
        function removeDiscount(discount_index) {
            console.log(discount_index);
            angular.forEach(vm.form.discounts, function(val, index) {
                if (index == discount_index) {
                    vm.form.discounts.splice(index, 1);
                }
            });
            vm.removedDiscountObjs.push(template);
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

        function priceFormat() {
            var price = vm.form.price;

            vm.form.price = parseFloat(price).toFixed(2) + '';
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

        function removeTemplate(template) {
            angular.forEach(vm.templates, function(val, index) {
                if (val.uid == template.uid) {
                    vm.templates.splice(index, 1);
                }
            });
            vm.removedTemplateObjs.push(template);
        }

        function removeHighlight(highlight) {
            angular.forEach(vm.highlights, function(val, index) {
                if (val.uid == highlight.uid) {
                    vm.highlights.splice(index, 1);
                }
            });
            vm.removedHighlightObjs.push(highlight);
        }

        function deleteHighligts() {

        }

        function editDeal() {
            vm.isDone = false;
            //temporary
            //vm.form.brand_id = '3228eb88-6810-4b28-ae52-88a62e4655c3';

            vm.form.starts_at = HelperService.combineDateTime(vm.form.date_starts, vm.form.time_starts);
            vm.form.ends_at = HelperService.combineDateTime(vm.form.date_ends, vm.form.time_ends);
            // console.log(vm.form);
            // console.log(vm.highlights);
            // console.log(vm.removedHighlightObjs);
            // return false;
            vm.form.templates.splice(vm.form.templates.length - 1, 1);
            //vm.form.highlights.splice(vm.form.highlights.length - 1, 1);
            //console.log(vm.form);
            var data = {
                form: vm.form,
                highlights: vm.highlights,
                removedHighlights: vm.removedHighlightObjs,
                templates: vm.templates,
                removedTemplates: vm.removedTemplateObjs,
                discounts: vm.discounts,
                removedDiscounts: vm.removedDiscountObjs
            };

            // console.log(data);
            // return false;

            DealService.edit(vm.dealId, data).then(function() {
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

                $scope.$parent.vm.isDone = true;
                HelperService.goToAnchor('msg-info');

            });
        }
    }
})();