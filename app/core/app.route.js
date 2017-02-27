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
                        prepSelDeal: prepSelDeal
                    }
                }
            }
        };

        var brand = {
            name: "brand",
            url: "/brand",
            views: {
                "main": {
                    templateUrl: "./admin/app/brand/brand.html",
                    controller: "BrandController",
                    controllerAs: "vm",
                    resolve: {
                        brandPrepService: brandPrepService
                    }
                },
                //"nav": nav
            }
        };

        var brandAdd = {
            name: "brand.add",
            url: "/add",
            parent: brand,
            views: {
                "page_body": {
                    templateUrl: "./admin/app/brand/brand.add.html",
                    controller: "BrandAddController",
                    controllerAs: "vm"
                }
            }
        };

        var brandEdit = {
            name: "brand.edit",
            url: "/edit/:id",
            parent: brand,
            views: {
                "page_body": {
                    templateUrl: "./admin/app/brand/brand.add.html",
                    controller: "BrandEditController",
                    controllerAs: "vm",
                    resolve: {
                        prepSelBrand: prepSelBrand
                    }
                }
            }
        };

        ////////////

        $stateProvider
            .state(auth)
            .state(logout)
            .state(dashboard)
            .state(deal)
            .state(dealAdd)
            .state(dealEdit)
            .state(brand)
            .state(brandAdd)
            .state(brandEdit);

        ////////////

        doLogout.$inject = ['AuthService'];
        /* @ngInject */
        function doLogout(AuthService) {
            AuthService.logout();
        }

        dealPrepService.$inject = ['DealService'];
        /* @ngInject */
        function dealPrepService(DealService) {
            return DealService.getAll();
        }

        brandPrepService.$inject = ['BrandService'];
        /* @ngInject */
        function brandPrepService(BrandService) {
            return BrandService.getAll();
        }

        prepSelBrand.$inject = ['$stateParams', 'BrandService'];
        /* @ngInject */
        function prepSelBrand($stateParams, BrandService) {
            return BrandService.find($stateParams.id);
        }

        prepSelDeal.$inject = ['$stateParams', 'DealService'];
        /* @ngInject */
        function prepSelDeal($stateParams, DealService) {
            return DealService.find($stateParams.id);
        }
    }

})();