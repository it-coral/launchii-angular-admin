(function() {
    'use strict';

    angular.module('app')
        .factory('AuthService', AuthService);

    AuthService.$inject = ['$auth', '$rootScope', '$http', '$q', '$injector'];

    /* @ngInject */
    function AuthService($auth, $rootScope, $http, $q, $injector) {
        var service = {
            login: login,
            errors: [],
            isAuthenticated: isAuthenticated,
            createAuthUser: createAuthUser,
            destroyAuthUser: destroyAuthUser,
            getAuthUser: getAuthUser,
            logout: logout
        }

        return service;

        ////////////////

        function logout() {
            $auth.logout().then(function() {
                destroyAuthUser();
            });
        }

        function login(credentials) {
            var d = $q.defer();

            // var credentials = {
            //     email: email,
            //     password: password
            // }

            // $auth.submitLogin(credentials).then(function(response) {
            //     console.log(response);
            //     if (typeof response === 'undefined' || response === false) {
            //         d.reject();
            //     } else {
            //         var user = JSON.stringify(response.data.user);

            //         localStorage.setItem('user', user);
            //         $rootScope.authenticated = true;
            //         $rootScope.currentUser = response.data.user;

            //         d.resolve(response);
            //     }
            // }).catch(function(err) {
            //     console.log(err);
            //     service.errors = err.errors;
            //     d.reject(service.errors);
            //     //throw (service.errors);
            //     d.reject();
            // });


            $auth.login(credentials).then(function(data) {
                var headers = data.headers();

                //console.log(headers["access-token"]);
                $auth.setToken(headers["access-token"]);
                return data;
                //return $http.get('api/authenticate/user');
            }, function(err) {
                console.log(err);
                service.errors = err;
                d.reject(err);
                throw (err);
            }).then(function(response) {
                if (typeof response === 'undefined' || response === false) {
                    d.reject();
                } else {
                    var user = JSON.stringify(response.data.user);

                    localStorage.setItem('user', user);
                    $rootScope.authenticated = true;
                    $rootScope.currentUser = response.data.user;

                    d.resolve();
                }

            });

            // $auth.login(credentials).then(function(r) {
            //     console.log(r);
            // }).catch(function(e) {
            //     console.log(e)
            // });

            return d.promise;
        }

        function isAuthenticated() {
            var d = $q.defer();
            var $state = $injector.get('$state');
            if ($auth.isAuthenticated()) {
                //if ($auth.validateUser()) {
                d.resolve();
            } else {
                d.reject();
                $state.go('auth');
            }

            return d.promise;
        }

        function createAuthUser() {
            var user = JSON.parse(localStorage.getItem('user'));
            if (user && $auth.isAuthenticated()) {
                $rootScope.authenticated = true;
                $rootScope.currentUser = user;
            }
        }

        function destroyAuthUser() {
            $auth.logout();
            localStorage.removeItem('user');
            $rootScope.authenticated = false;
            $rootScope.currentUser = null;
        }

        function getAuthUser() {
            if (service.isAuthenticated) {
                return JSON.parse(localStorage.getItem('user'));
            }

            return null;
        }
    }

})();