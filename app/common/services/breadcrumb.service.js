(function() {
    'use strict';

    angular.module('app')
        .factory('BreadCrumbService', BreadCrumbService);

    BreadCrumbService.$inject = [];

    /* @ngInject */
    function BreadCrumbService() {

        var service = {
            crumbs: [],
            set: set,
            getCrumbs: getCrumbs
        }

        return service;

        //////// SERIVCE METHODS ////////

        function getCrumbs() {
            return service.crumbs;
        }

        function set(str) {
            //console.log('test')
            var res = str.split('.');
            service.crumbs = [];
            angular.forEach(res, function(val, index) {
                service.crumbs.push(ucFirst(val));
            });
        }

        function ucFirst(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }
    }

})();