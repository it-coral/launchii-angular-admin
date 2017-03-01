(function() {
    'use strict';

    angular
        .module('app')
        .directive('breadCrumbs', breadCrumbs);

    breadCrumbs.$inject = ['$rootScope', '$state'];
    /* @ngInject */
    function breadCrumbs($rootScope, $state) {
        var directive = {
            restrict: 'E',
            link: function(scope) {
                var curr_state_name = $state.current.name;
                //$rootScope.breadcrumbs = curr_state_name.split(".");
                //scope.crumbs = curr_state_name.split(".");
            },
            replace: true,
            templateUrl: "/app/common/breadcrumbs.html",
        };

        return directive;
    }

})();