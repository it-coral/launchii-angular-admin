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
            templateUrl: '/app/deals/highlight/highlight-field.html',
            replace: true,
            scope: {
                fieldModel: '='
            },
            link: function(scope, element, attrs) {
                $('[data-toggle="tooltip"]').tooltip();
                //console.log(scope);
                // console.log(scope.hl.highlightItem);
                scope.hl.fieldModel = scope.$parent.hl.fieldModel;
                scope.hl.counter = scope.$parent.hl.counter;
                scope.hl.formMode = scope.$parent.hl.formMode;

                scope.remove = remove;

                function remove(target) {
                    var parent = $(target).parent();
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