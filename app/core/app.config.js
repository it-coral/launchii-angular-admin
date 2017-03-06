(function() {
    'use strict';

    angular.module('app')
        .config(config)
        .run(run)
        .run(customHeaders);

    config.$inject = ['$authProvider', '$resourceProvider', '$httpProvider', 'CONST'];

    /* @ngInject */
    function config($authProvider, $resourceProvider, $httpProvider, CONST) {
        Layout.init();
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

    run.$inject = ['$rootScope', '$state', '$auth', 'bootstrap3ElementModifier', 'ngProgressLite', 'AuthService'];
    /* @ngInject */
    function run($rootScope, $state, $auth, bootstrap3ElementModifier, ngProgressLite, AuthService) {
        //bootstrap3ElementModifier.enableValidationStateIcons(true);
        var curr_state_name = $state.current.name;

        $rootScope.$on('unauthorized', function(event) {
            console.log('test');
            //AuthService.destroyAuthUser().then(function() {
            //if (toState.name !== "auth") {
            event.preventDefault();
            $state.go('auth');
            //}
            //});
        });

        $rootScope.$on('$stateChangeStart', function(event, toState) {
            ngProgressLite.start();


            //$rootScope.breadcrumbs = curr_state_name.split(".");

            if (localStorage.getItem('user') != 'undefined') {
                var user = JSON.parse(localStorage.getItem('user'));
                if (user && $auth.isAuthenticated()) {
                    //AuthService.setHeaders();
                    //if (user && $auth.validateUser()) {
                    $rootScope.authenticated = true;
                    $rootScope.currentUser = user;

                    if (toState.name === "auth") {
                        event.preventDefault();
                        $state.go('dashboard');
                    }
                } else {
                    ngProgressLite.done();
                    //AuthService.destroyAuthUser().then(function() {
                    if (toState.name !== "auth") {
                        event.preventDefault();
                        $state.go('auth');
                    }
                    //});
                    // localStorage.removeItem('user');
                    // $rootScope.authenticated = false;
                    // $rootScope.currentUser = null;

                    // if (toState.name !== "auth") {
                    //     event.preventDefault();
                    //     $state.go('auth');
                    // }
                }
            }

        });

        $rootScope.$on('$stateChangeSuccess', function(event, toState) {
            ngProgressLite.done();
        });

        $rootScope.$on('$stateChangeError', function(event, toState) {
            ngProgressLite.done();
        });
    }
})();