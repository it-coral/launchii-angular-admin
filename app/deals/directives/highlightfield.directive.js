(function() {
    'use strict';

    angular
        .module('app')
        .directive('highlightField', highlightField);

    highlightField.$inject = ['$compile'];
    /* @ngInject */
    function highlightField($compile) {

        var directive = {
            restrict: 'E',
            templateUrl: '/app/deals/highlight-field.html',
            replace: true,
            scope: true,
            link: function(scope, element, attrs) {
                scope.hl.fieldModel = scope.$parent.hl.fieldModel;
                scope.hl.counter = scope.$parent.hl.counter;
                scope.hl.formMode = scope.$parent.hl.formMode;
            },
            controller: 'HighlightController',
            controllerAs: 'hl',
            bindToController: true
        };

        return directive;
    }

})();