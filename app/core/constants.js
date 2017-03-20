(function() {
    'use strict';

    angular.module('app')
        .constant('CONST', CONST);

    CONST.$inject = ['$window'];
    /* @ngInject */
    function CONST($window) {
        return {
            //api_domain: "http://api.launchii.com/" //api domain
            //api_domain: "https://stageapi.launchii.com/v1"
            api_domain: $window.__env.apiUrl,
            __env: $window.__env
        }
    }
})();