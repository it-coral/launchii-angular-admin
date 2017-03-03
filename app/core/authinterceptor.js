(function() {
    'use strict';

    angular.module('app')
        .factory('authInterceptor', authInterceptor);

    authInterceptor.$inject = ['$q', '$rootScope', '$injector', 'CONST'];

    /* @ngInject */
    function authInterceptor($q, $rootScope, $injector, CONST) {
        var interceptor = {
            request: request,
            responseError: responseError
        }

        return interceptor;

        ////////////////

        function request(config) {
            var headers = {};

            if (localStorage.getItem("access-token") !== null) {
                headers["access-token"] = localStorage.getItem("access-token");
                headers["client"] = localStorage.getItem("client");
                headers["cache-control"] = localStorage.getItem("cache-control");
                headers["content-type"] = localStorage.getItem("content-type");
                headers["expiry"] = localStorage.getItem("expiry");
                headers["token-type"] = localStorage.getItem("token-type");
                headers["uid"] = localStorage.getItem("uid");
            }

            config.headers.common = headers;

            return config;
            /*
            var d = $q.defer();
            var $state = $injector.get('$state');

            if (config.method != "GET") {
                if ($rootScope.authenticated) {
                    d.resolve(config);
                } else if (config.url == CONST.api_domain + '/auth/sign_in') {
                    d.resolve(config);
                } else {
                    d.reject(config);
                    $state.go('auth');
                }
            } else {
                d.resolve(config);
            }

            return d.promise;
            */
        }

        function responseError(response) {
            if (response.status === 401) {
                $rootScope.$broadcast('unauthorized');
            }
            return response;
        }
    }

})();