(function() {
    'use strict';

    angular.module('app')
        .config(config)
        .run(run)
        .run(customHeaders);

    config.$inject = ['$authProvider', '$resourceProvider', '$httpProvider', 'CONST', 'laddaProvider', '$logProvider'];

    /* @ngInject */
    function config($authProvider, $resourceProvider, $httpProvider, CONST, laddaProvider, $logProvider) {
        //Layout.init();
        $logProvider.debugEnabled(CONST.env.enableDebug);
        $authProvider.loginUrl = CONST.api_domain + '/auth/sign_in';
        $authProvider.tokenHeader = 'access-token';
        $authProvider.tokenType = '';
        //$authProvider.tokenHeader = 'Access-Token';
        //$authProvider.withCredentials = true;
        // $authProvider.configure({
        //     apiUrl: CONST.api_domain
        //         //validateOnPageLoad: false
        // });

        //$httpProvider.defaults.withCredentials = true;
        $resourceProvider.defaults.stripTrailingSlashes = false;
        $httpProvider.interceptors.push('authInterceptor');
        laddaProvider.setOption({
            style: 'expand-right'
        });

    }

    // csrf.$inject = ['$http', '$cookies'];
    // /* @ngInject */
    // function csrf($http, $cookies) {
    //     $http.defaults.headers.post['X-CSRFToken'] = $cookies.csrftoken;
    // }

    customHeaders.$inject = ["$http"];
    /* @ngInject */
    function customHeaders($http) {
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

        $http.defaults.headers.common = headers;
    }

    run.$inject = ['$rootScope', '$state', '$auth', 'bootstrap3ElementModifier', 'ngProgressLite', 'AuthService', 'BreadCrumbService', '$location', '$window', '$templateCache'];
    /* @ngInject */
    function run($rootScope, $state, $auth, bootstrap3ElementModifier, ngProgressLite, AuthService, BreadCrumbService, $location, $window, $templateCache) {
        //bootstrap3ElementModifier.enableValidationStateIcons(true);

        //$templateCache.get('app/login/login.html');

        //Force redirect to https protocol
        var forceSSL = function(event) {
            if ($location.protocol() !== 'https') {
                event.preventDefault();
                $window.location.href = $location.absUrl().replace('http', 'https');
                return false;
            }
        };

        //$log.log(!$rootScope.authenticated);
        var curr_state_name = $state.current.name;

        $rootScope.$on('unauthorized', function(event) {

            event.preventDefault();
            $rootScope.loginError = "Your session has expired. Please login again.";
            AuthService.removeUserStorage();
            //AuthService.destroyAuthUser().then(function() {
            //if (toState.name !== "auth") {
            $state.go('auth');
            ngProgressLite.done();
            return false;
            //}
            //});
        });

        $rootScope.$on('$stateChangeStart', function(event, toState) {
            // if (toState.name != 'auth') {
            //     event.preventDefault();
            // }

            //$log.log(toState.name);
            forceSSL(event);
            BreadCrumbService.set(toState.name);
            $rootScope.crumbs = BreadCrumbService.getCrumbs();

            ngProgressLite.start();

            if (localStorage.getItem('user') != 'undefined') {
                var user = JSON.parse(localStorage.getItem('user'));
                if (user && $auth.isAuthenticated()) {
                    $rootScope.authenticated = true;
                    $rootScope.currentUser = user;
                    $('.auth-dash').attr('style', 'display: block !important');
                    if (toState.name === "auth") {
                        event.preventDefault();
                        $state.go('dashboard');
                        ngProgressLite.done();
                    }
                } else {
                    localStorage.removeItem('user');
                    $rootScope.authenticated = false;
                    $rootScope.currentUser = null;

                    if (toState.name !== "auth") {
                        event.preventDefault();
                        $state.go('auth');
                        ngProgressLite.done();
                    }
                }
            } else {
                $state.go(toState.name);
            }
            //AuthService.redirectIfUnauthorized(event, toState, ngProgressLite);

        });

        $rootScope.$on('$stateChangeSuccess', function(event, toState) {
            ngProgressLite.done();
        });

        $rootScope.$on('$stateChangeError', function(event, toState) {
            ngProgressLite.done();
        });
    }
})();