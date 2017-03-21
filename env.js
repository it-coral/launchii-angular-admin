(function(window) {
    'use strict';

    window.__env = window.__env || {};

    // API url
    window.__env.apiUrl = getApiUrl();

    // Base url
    //window.__env.baseUrl = '/';

    // Whether or not to enable debug mode
    // Setting this to false will disable console output
    window.__env.enableDebug = true;

    function getApiUrl() {
        var url = window.location.origin;

        if (url.indexOf('launchii.dev')) { //Jellan's local
            return 'https://stageapi.launchii.com/v1';
        }

        return url + '/v1';

    }

})(this);