(function() {
    'use strict';

    angular.module('app')
        .config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    /* @ngInject */
    function config($stateProvider, $urlRouterProvider) {

        // For any unmatched url, redirect to /login 
        $urlRouterProvider.otherwise("/auth");

        //////STATES//////

        //admin navigation menu
        /*
        var nav = {
            templateUrl: "./admin/app/nav/nav.html",
            controller: "NavController",
            controllerAs: "vm",
            resolve: {
                navPrepService: navPrepService
            }
        };
        */
        var auth = {
            name: "auth",
            url: "/auth",
            views: {
                "main": {
                    templateUrl: "./admin/app/login/login.html",
                    controller: "LoginController",
                    controllerAs: "vm"
                }
            }
        };

        var logout = {
            name: "logout",
            url: "/logout",
            views: {
                "main": {
                    templateUrl: "/admin/app/login/login.html",
                    controller: "LoginController",
                    controllerAs: "vm",
                    resolve: {
                        doLogout: doLogout
                    }
                }
            }
        };

        var dashboard = {
            name: "dashboard",
            url: "/",
            views: {
                "main": {
                    templateUrl: "./admin/app/dashboard/dashboard.html",
                    controller: "DashboardController",
                    controllerAs: "vm",
                    resolve: {
                        usersPrepService: usersPrepService
                    }
                },
                //"nav": nav
            }
        };

        var deal = {
            name: "deal",
            url: "/deal",
            views: {
                "main": {
                    templateUrl: "./admin/app/deals/deal.html",
                    controller: "DealController",
                    controllerAs: "vm",
                    resolve: {
                        dealPrepService: dealPrepService
                    }
                },
                //"nav": nav
            }
        };

        var dealAdd = {
            name: "deal.add",
            url: "/add",
            parent: deal,
            views: {
                "page_body": {
                    templateUrl: "./admin/app/deals/deal.add.html",
                    controller: "DealAddController",
                    controllerAs: "vm"
                }
            }
        };

        var dealEdit = {
            name: "deal.edit",
            url: "/edit/:id",
            parent: deal,
            views: {
                "page_body": {
                    templateUrl: "./admin/app/deals/deal.add.html",
                    controller: "DealEditController",
                    controllerAs: "vm",
                    resolve: {
                        prepDealId: prepDealId
                    }
                }
            }
        };


        ////////////

        $stateProvider
            .state(auth)
            .state(logout)
            .state(dashboard)
            .state(deal);

        ////////////

        doLogout.$inject = ['AuthService'];
        /* @ngInject */
        function doLogout(AuthService) {
            AuthService.logout();
        }

        dealPrepService.$inject = ['DealService'];
        /* @ngInject */
        function dealPrepService(DealService) {
            return DealService.getDeals();
        }

        prepDealId.$inject = ['$stateParams'];
        /* @ngInject */
        function prepDealId($stateParams) {
            return $stateParams.id;
        }
    }

})();