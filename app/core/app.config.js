(function() {
    'use strict';

    angular.module('app')
        .config(config)
        .run(run);

    config.$inject = ['$authProvider', '$resourceProvider', '$httpProvider', 'CONST'];

    /* @ngInject */
    function config($authProvider, $resourceProvider, $httpProvider, CONST) {

        $authProvider.loginUrl = CONST.api_domain + '/auth/sign_in';
        //$authProvider.tokenHeader = 'Access-Token';
        //$authProvider.withCredentials = true;
        // $authProvider.configure({
        //     apiUrl: CONST.api_domain
        //         //validateOnPageLoad: false
        // });

        //$httpProvider.defaults.withCredentials = true;
        $resourceProvider.defaults.stripTrailingSlashes = false;
        $httpProvider.interceptors.push('myInterceptor');
    }

    // csrf.$inject = ['$http', '$cookies'];
    // /* @ngInject */
    // function csrf($http, $cookies) {
    //     $http.defaults.headers.post['X-CSRFToken'] = $cookies.csrftoken;
    // }

    run.$inject = ['$rootScope', '$state', '$auth', 'bootstrap3ElementModifier', 'ngProgressLite'];
    /* @ngInject */
    function run($rootScope, $state, $auth, bootstrap3ElementModifier, ngProgressLite) {
        bootstrap3ElementModifier.enableValidationStateIcons(true);

        $rootScope.$on('$stateChangeStart', function(event, toState) {
            ngProgressLite.start();
            if (localStorage.getItem('user') != 'undefined') {
                var user = JSON.parse(localStorage.getItem('user'));
                if (user && $auth.isAuthenticated()) {
                    //if (user && $auth.validateUser()) {
                    $rootScope.authenticated = true;
                    $rootScope.currentUser = user;

                    if (toState.name === "auth") {
                        event.preventDefault();
                        $state.go('dashboard');
                    }
                } else {
                    localStorage.removeItem('user');
                    $rootScope.authenticated = false;
                    $rootScope.currentUser = null;

                    if (toState.name !== "auth") {
                        event.preventDefault();
                        $state.go('auth');
                    }
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