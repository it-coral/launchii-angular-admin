(function() {
    'use strict';

    angular.module('app')
        .controller('DealEditController', DealEditController);

    DealEditController.$inject = ['DealService', '$stateParams', '$scope', 'prepSelDeal', 'HelperService', '$state', 'brandPrepService', 'prepSelHighlights', 'prepSelTemplates', 'prepTemplateNames', 'prepTemplateTypes'];

    /* @ngInject */
    function DealEditController(DealService, $stateParams, $scope, prepSelDeal, HelperService, $state, brandPrepService, prepSelHighlights, prepSelTemplates, prepTemplateNames, prepTemplateTypes) {
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
        vm.templates = prepSelTemplates;
        vm.isDone = true;
        vm.brands = brandPrepService.brands;
        vm.default = vm.brands[0];
        vm.removeHighlight = removeHighlight;
        vm.removedHighlightObjs = [];
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
            vm.form.highlights.splice(vm.form.highlights.length - 1, 1);
            //console.log(vm.form);
            var data = {
                form: vm.form,
                highlights: vm.highlights,
                removedHighlights: vm.removedHighlightObjs,
                templates: vm.templates,
                removedTemplates: vm.removedTemplateObjs
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