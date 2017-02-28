(function() {
    'use strict';

    angular.module('app')
        .factory('HelperService', HelperService);

    HelperService.$inject = ['$state', '$rootScope'];

    /* @ngInject */
    function HelperService($state, $rootScope) {
        var service = {
            getCurrentState: getCurrentState,
            getPrevState: getPrevState,
            removeFromList: removeFromList,
            addToList: addToList,
            refreshList: refreshList,
            emptyList: emptyList,
            setCss: setCss
        }

        return service;

        ////////////////
        //css is an array e.g. ['/templates/assets/layouts/layout/css/layout.min.css']
        function setCss(css) {
            $rootScope.stylesheets = [];
            $rootScope.stylesheets = css;
        }

        function getCurrentState() {
            return $state;
        }

        function getPrevState() {
            var prevState = $state.current.parent;

            if (typeof prevState != 'undefined') {
                return prevState;
            }

            return false;
        }

        function removeFromList(list, id) {
            for (var x = 0; x < list.length; x++) {
                if (list[x].id == id) {
                    list.splice(x, 1);
                }
            }

            return list;
        }

        function addToList(list, newData) {
            list.push(newData);

            return list;
        }

        function refreshList(list, data) {
            list.splice(0, list.length);

            for (var x = 0; x < data.length; x++) {
                list.push(data[x]);
            }

            return list;
        }

        function emptyList(list) {
            list.splice(0, list.length);

            return list;
        }
    }

})();