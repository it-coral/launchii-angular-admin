(function() {
    'use strict';

    angular.module('app')
        .constant('CONST', {
            //api_domain: "http://api.launchii.com/" //api domain
            //api_domain: "https://stageapi.launchii.com/v1"
            api_domain: __env.apiUrl
        });

})();