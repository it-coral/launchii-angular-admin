(function() {
    'use strict';

    angular.module('app')
        .factory('DashboardService', DashboardService);

    DashboardService.$inject = [
        '$http',
        'CONST',
        '$q',
        '$rootScope',
        '$filter',
        '$log'
    ];

    /* @ngInject */
    function DashboardService(
        $http,
        CONST,
        $q,
        $rootScope,
        $filter,
        $log) {

        var api = CONST.api_domain + '/admin/dashboard';

        var service = {
            fetchSummary: fetchSummary
        }

        return service;

        function fetchSummary() {
            var d = $q.defer();

            $http.get(api).then(function(resp) {
                d.resolve(resp.data);
            }).catch(function(err) {
                d.reject(err);
            });

            return d.promise;
        }

    }

})();
