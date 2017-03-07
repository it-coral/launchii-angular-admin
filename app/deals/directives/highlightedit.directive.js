(function() {
    'use strict';

    angular
        .module('app')
        .directive('highlightEdit', highlightEdit);

    highlightEdit.$inject = ['$compile'];
    /* @ngInject */
    function highlightEdit($compile) {

        var directive = {
            restrict: 'E',
            templateUrl: '/app/deals/highlight-edit-field.html',
            replace: true,
            scope: {
                highlightItem: '=',
                formMode: '='
            },
            link: function(scope, element, attrs) {
                scope.hl.fieldModel = scope.$parent.hl.fieldModel;
                scope.hl.counter = scope.$parent.hl.counter;
                scope.hl.formMode = scope.$parent.hl.formMode;

                scope.remove = remove;

                function remove(target, highlight) {
                    var parent = $(target).parent();
                    scope.$parent.$parent.$parent.$parent.vm.removeHighlight(highlight);
                    parent.remove();
                }
            },
            controller: 'HighlightController',
            controllerAs: 'hl',
            bindToController: true
        };

        return directive;
    }

})();