(function() {
    'use strict';

    angular.module('app')
        .factory('DealService', DealService);

    DealService.$inject = ['$http', 'CONST', '$q', 'HelperService', 'BrandService'];

    /* @ngInject */
    function DealService($http, CONST, $q, HelperService, BrandService) {
        var api = CONST.api_domain + '/admin/deals';

        var service = {
            lists: [],
            errors: [],
            add: add,
            edit: edit,
            delete: _delete,
            getAll: getAll,
            find: find,
            findInList: findInList,
            isEmpty: isEmpty
        }

        return service;

        //////// SERIVCE METHODS ////////

        function isEmpty() {
            if (!angular.isDefined(service.lists.deals)) {
                return true;
            }

            return service.lists.deals.length == 0;
        }

        function findInList(id) {
            var d = $q.defer();

            if (angular.isDefined(id)) {
                if (!isEmpty()) {
                    var deal = null;

                    angular.forEach(service.lists.deals, function(value, key) {
                        if (id == service.lists.deals[key].uid) {
                            deal = service.lists.deals[key];
                        }
                    });

                    deal["price"] = parseFloat(deal.price);
                    deal["amazon_rating"] = parseFloat(deal.amazon_rating);

                    var dateStart = HelperService.convertToDateTime(deal.starts_at);
                    var dateEnd = HelperService.convertToDateTime(deal.ends_at);
                    deal['date_start'] = dateStart;
                    deal['date_end'] = dateEnd;

                    BrandService.findInList(deal.brand_id).then(function(brand) {
                        deal['brand'] = brand;
                        d.resolve(deal);
                    });

                    d.resolve(deal);
                } else {
                    find(id).then(function(deal) {
                        d.resolve(deal);
                    }).catch(function(err) {
                        d.reject(err);
                    });
                }
            } else {
                d.resolve('Deal does not exist.');
            }

            return d.promise;
        }

        function getAll() {
            var d = $q.defer();

            $http.get(api)
                .then(function(data) {
                    service.lists = data.data;
                    d.resolve(data.data);
                })
                .catch(function(error) {
                    console.log(error.data);
                    service.errors = error;
                    d.reject(error);
                });

            return d.promise;
        }

        function find(id) {
            var d = $q.defer();
            var url = api + '/' + id;

            $http({
                    method: 'GET',
                    url: url,
                    //params: {id: id}
                })
                .then(function(data) {
                    ComponentsDateTimePickers.init();
                    var deal = data.data;
                    deal["price"] = parseFloat(deal.price);
                    deal["amazon_rating"] = parseFloat(deal.amazon_rating);

                    var dateStart = HelperService.convertToDateTime(deal.starts_at);
                    var dateEnd = HelperService.convertToDateTime(deal.ends_at);
                    deal['date_start'] = dateStart;
                    deal['date_end'] = dateEnd;
                    //console.log(dateStart);
                    //console.log(dateStart.date);
                    deal['date_starts'] = dateStart.date;
                    deal['time_starts'] = dateStart.time;

                    deal['date_ends'] = dateEnd.date;
                    deal['time_ends'] = dateEnd.time;

                    BrandService.findInList(deal.brand_id).then(function(brand) {
                        deal['brand'] = brand;
                        d.resolve(deal);
                    });

                })
                .catch(function(error) {
                    console.log(error);
                    service.errors = error;
                    d.reject(error);
                });

            return d.promise;
        }

        function add(data) {
            var url = api;
            var d = $q.defer();

            $http.post(url, data)
                .then(function(resp) {
                    d.resolve(resp);
                }).catch(function(error) {
                    console.log(error);
                    service.errors = error;
                    d.reject(error);
                });

            return d.promise;
        }

        function edit(id, data) {
            var url = api + "/" + id;
            var d = $q.defer();

            $http.patch(url, data)
                .then(function(resp) {
                    d.resolve(resp);
                }).catch(function(error) {
                    console.log(error);
                    service.errors = error;
                    d.reject(error);
                });

            return d.promise;
        }

        function _delete(id) {
            var url = api + "/" + id;
            var d = $q.defer();

            $http.delete(url, {})
                .then(function(resp) {
                    d.resolve(resp);
                }).catch(function(error) {
                    console.log(error);
                    service.errors = error;
                    d.reject(error);
                });

            return d.promise;
        }
    }

})();