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
            fetchSummary: fetchSummary,
            getGAReportingData: getGAReportingData
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

        function getGAReportingData(type) {
            var d = $q.defer();

            var url = '/ga-reporting-data?type=' + type;

            $http.get(url).then(function(resp) {
                d.resolve(resp.data);
            }).catch(function(err) {
                $log.log(err);
                d.reject(err);
            });

            return d.promise;
        }

    }

})();
