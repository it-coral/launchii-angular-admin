(function() {
    'use strict';

    angular.module('app')
        .controller('NavController', NavController);

    NavController.$inject = ['$auth', '$rootScope', 'NavService']

    /* @ngInject */
    function NavController($auth, $rootScope, NavService) {
        var vm = this;

        vm.navs = [];
        vm.getNavs = getNavs;

        activate();

        /////////////

        function activate() {
            return getNavs();
        }

        function getNavs() {
            /*
            return NavService.getNavs().then(function(data) {
                vm.navs = data;

                return vm.navs;
            });
            */
        }
    }
})();