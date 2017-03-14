(function() {
    'use strict';

    angular
        .module('app.deals')
        .directive('addTemplate', addTemplate);

    addTemplate.$inject = ['$compile', '$document'];
    /* @ngInject */
    function addTemplate($compile, $document) {

        var directive = {
            restrict: 'E',
            templateUrl: '/app/deals/template/template.html',
            replace: true,
            scope: {
                fieldModel: '=',
                formMode: '=',
                templatesData: '='
            },
            transclude: true,
            link: function(scope, element, attrs) {
                element.find('button#add-template-btn').bind('click', function() {
                    // var html = '<template-field field-model="hl.fieldModel" ></template-field>';

                    // var input = angular.element(html);

                    // var compile = $compile(input)(scope);

                    // element.find('#template-container').append(input);

                    scope.hl.openModal();
                    scope.hl.increCounter();
                    //scope.$parent.vm.increTemplateCounter();
                });

            },
            controller: 'TemplateController',
            controllerAs: 'hl',
            bindToController: true
        };

        return directive;
    }

})();