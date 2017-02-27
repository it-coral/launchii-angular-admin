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

        var deals = {
            name: "deals",
            url: "/deals/list",
            views: {
                "main": {
                    templateUrl: "./admin/app/deals/deal.html",
                    controller: "DealController",
                    controllerAs: "vm",
                    resolve: {
                        //postPrepService: postPrepService
                    }
                },
                //"nav": nav
            }
        };
        /*
        var postAdd = {
            name: "post.add",
            url: "/add",
            parent: post,
            views: {
                "page_body": {
                    templateUrl: "./admin/app/post/post.add.html",
                    controller: "PostAddController",
                    controllerAs: "vm",
                    resolve: {
                        categoryPrepService: categoryPrepService,
                        tagPrepService: tagPrepService
                    }
                }
            }
        };

        var postEdit = {
            name: "post.edit",
            url: "/edit/:id",
            parent: post,
            views: {
                "page_body": {
                    templateUrl: "./admin/app/post/post.add.html",
                    controller: "PostEditController",
                    controllerAs: "vm",
                    resolve: {
                        categoryPrepService: categoryPrepService,
                        tagPrepService: tagPrepService
                    }
                }
            }
        };
        */

        ////////////

        $stateProvider
            .state(auth)
            .state(dashboard)
            .state(deals);

        ////////////

        // navPrepService.$inject = ['NavService'];
        // /* @ngInject */
        // function navPrepService(NavService) {
        //     return NavService.getNavs();
        // }

        // usersPrepService.$inject = ['UserService'];
        // /* @ngInject */
        // function usersPrepService(UserService) {
        //     return UserService.getUsers();
        // }

        // postPrepService.$inject = ['PostService'];
        // /* @ngInject */
        // function postPrepService(PostService) {
        //     return PostService.getPosts();
        // }

        // categoryPrepService.$inject = ['CategoryService'];
        // /* @ngInject */
        // function categoryPrepService(CategoryService) {
        //     return CategoryService.getCategories();
        // }

        // tagPrepService.$inject = ['TagService'];
        // /* @ngInject */
        // function tagPrepService(TagService) {
        //     return TagService.getTags();
        // }
    }

})();