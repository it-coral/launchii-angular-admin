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
                config.headers["access-token"] = localStorage.getItem("access-token");
                config.headers["client"] = localStorage.getItem("client");
                config.headers["cache-control"] = localStorage.getItem("cache-control");
                config.headers["content-type"] = localStorage.getItem("content-type");
                config.headers["expiry"] = localStorage.getItem("expiry");
                config.headers["token-type"] = localStorage.getItem("token-type");
                config.headers["uid"] = localStorage.getItem("uid");
            }

            //config.headers = headers;

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
            console.log(response);
            if (response.status === 401) {
                $rootScope.$broadcast('unauthorized');
            }
            return response;
        }
    }

})();