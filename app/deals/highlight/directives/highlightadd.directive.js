(function() {
    'use strict';

    angular
        .module('app.deals')
        .directive('addHighlight', addHighlight);

    addHighlight.$inject = ['$compile'];
    /* @ngInject */
    function addHighlight($compile) {

        var directive = {
            restrict: 'E',
            templateUrl: '/app/deals/highlight/highlight.html',
            replace: true,
            scope: {
                fieldModel: '=',
                formMode: '=',
                highlightsData: '='
            },
            transclude: true,
            link: function(scope, element, attrs) {
                element.find('button#add-highlight-btn').bind('click', function() {
                    var html = '<highlight-field field-model="hl.fieldModel" ></highlight-field>';

                    var input = angular.element(html);

                    var compile = $compile(input)(scope);

                    element.find('#highlight-container').append(input);

                    scope.hl.increCounter();
                });

            },
            controller: 'HighlightController',
            controllerAs: 'hl',
            bindToController: true
        };

        return directive;
    }

})();