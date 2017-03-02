(function() {
    'use strict';

    angular
        .module('app')
        .directive('breadCrumbs', breadCrumbs);

    breadCrumbs.$inject = ['$state', '$stateParams'];
    /* @ngInject */
    function breadCrumbs($state, $stateParams) {

        var directive = {
            restrict: 'E',
            templateUrl: '/app/common/breadcrumbs.html',
            replace: true,
            compile: function(tElement, tAttrs) {
                return function($scope, $elem, $attr) {
                    $scope.show = function(state) {
                        if (!angular.isDefined(state.data)) {
                            return false;
                        } else if (!angular.isDefined(state.data.breadcrumbs)) {
                            return false;
                        }
                        return true;
                    };

                    $scope.states = $state.$current.path;
                }
            }
        };

        return directive;
    }

})();