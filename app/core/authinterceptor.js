(function() {
    'use strict';

    angular.module('app')
        .factory('authInterceptor', authInterceptor);

    authInterceptor.$inject = ['$q', '$rootScope', '$injector', 'CONST', '$timeout'];

    /* @ngInject */
    function authInterceptor($q, $rootScope, $injector, CONST, $timeout) {
        var canceller = $q.defer();
        var maxRetries = 10;
        var resetTime = 0;

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
            //console.log(localStorage.getItem("content-type"));
            //console.log(config.headers["content-type"]);
            //config.headers = headers;

            //config.timeout = canceller.promise;

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

        function responseError(rejection) {
            if (rejection.status === -1) {
                var config = rejection.config;
                config.retryCount = config.retryCount || 0;
                config.retryTime = (new Date()).getTime();

                if (config.retryCount < maxRetries &&
                    (!config.retryTime || config.retryTime > resetTime)) {
                    config.retryCount++;
                    config.retryTime = (new Date()).getTime();

                    var $http = $injector.get('$http');
                    var deferred = $q.defer();

                    // do timeout to give some time in between retries
                    $timeout(function() {
                        $http(config)
                            .then(function(respData) {
                                deferred.resolve(respData);
                            })
                            .catch(function(respData) {
                                deferred.reject(respData);
                            });
                    }, 200 * config.retryCount);

                    return deferred.promise;
                }

                //give up
                return $q.reject(rejection);
            } else
            if (rejection.config.headers['access-token'] == 'undefined') {
                //console.log('test');
                return $q.reject(rejection);
            } else
            if (rejection.status === 401) {
                $rootScope.$broadcast('unauthorized');
                rejection.config.timeout = canceller.promise;
                canceller.resolve('Unauthorized');
                //return rejection;
            } else
            if (rejection.status === 422 && angular.isDefined($rootScope.currentUser) && !$rootScope.currentUser.is_admin) {
                $rootScope.$broadcast('nonadminaccess');
                rejection.config.timeout = canceller.promise;
                canceller.resolve('No permission to access resource.');
                //return rejection;
            }

            return $q.reject(rejection);
        }
    }

})();