(function() {
    'use strict';

    angular
        .module('app')
        .filter('isLoading', isLoading);

    function isLoading() {
        return function(target) {
            console.log(target);
            if (target) {
                var scope = angular.element(target).scope();

                if (angular.isDefined(scope.isLoading) && scope.isLoading) {
                    return true;
                }

                return false;
            }

            return false;
        }

    }

})();