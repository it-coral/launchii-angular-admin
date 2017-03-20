(function() {
    'use strict';

    angular.module('app.brands', [])
        .factory('BrandService', BrandService);

    BrandService.$inject = ['$http', 'CONST', '$q', '$rootScope', '$log'];

    /* @ngInject */
    function BrandService($http, CONST, $q, $rootScope, $log) {
        var api = CONST.api_domain + '/admin/brands';

        var service = {
            lists: [],
            errors: [],
            add: add,
            edit: edit,
            delete: _delete,
            getAll: getAll,
            find: find,
            findInList: findInList,
            isEmpty: isEmpty,
            search: search,
            searchedList: []
        }

        return service;

        //////// SERIVCE METHODS ////////

        function search(str) {
            var url = api + '/search';
            var d = $q.defer();
            var q = str.toLowerCase();
            var results = [];

            if (str.trim() == '') {
                d.resolve(service.lists.brands);
            } else {
                angular.forEach(service.lists.brands, function(brand, index) {
                    if (brand.name.toLowerCase().indexOf(q) > -1) {
                        results.push(brand);
                    }
                });

                if (results.length > 0) {
                    d.resolve(results);
                } else {
                    $http.get(url, { query: str }).then(function(resp) {
                        service.searchedList = resp.data;
                        d.resolve(resp.data.brands);
                    }).catch(function(err) {
                        $log.log(err);
                        d.reject(err);
                    });
                }
            }

            return d.promise;
        }

        function isEmpty() {
            if (!angular.isDefined(service.lists.brands)) {
                return true;
            }

            return service.lists.total == 0;
        }

        function findInList(id) {
            var d = $q.defer();

            if (angular.isDefined(id)) {
                if (!isEmpty()) {
                    angular.forEach(service.lists.brands, function(value, key) {
                        if (id == service.lists.brands[key].uid) {
                            d.resolve(service.lists.brands[key]);
                        }
                    });
                } else {
                    find(id).then(function(brand) {
                        d.resolve(brand);
                    }).catch(function(err) {
                        d.reject(err);
                    });
                }
            } else {
                d.resolve('Brand does not exist.');
            }

            return d.promise;
        }

        function getAll() {
            var d = $q.defer();

            var req = {
                method: 'GET',
                url: api
            };

            $http(req)
                .then(function(data) {
                    service.lists = data.data;
                    d.resolve(data.data);
                })
                .catch(function(error) {
                    $log.log(error);
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
                    var brand = data.data;
                    brand["facebook"] = brand.facebook_url;
                    brand["twitter"] = brand.twitter_url;
                    brand["instagram"] = brand.instagram_url;
                    d.resolve(brand);
                })
                .catch(function(error) {
                    service.errors = error;
                    d.reject(error);
                });

            return d.promise;
        }

        function setLogoImage(img) {
            var filebase64 = 'data:' + img.filetype + ';base64,' + img.base64;

            var data = {
                logo_image: {
                    file: filebase64,
                    description: img.description
                }
            };

            return data;
        }

        function setCoverImage(img) {
            var filebase64 = 'data:' + img.filetype + ';base64,' + img.base64;

            var data = {
                cover_image: {
                    file: filebase64,
                    description: img.description
                }
            };

            return data;
        }

        function add(data) {
            var url = api;
            var d = $q.defer();

            data.logo_image = setLogoImage(data.logo);
            data.cover_image = setCoverImage(data.cover);

            $log.log(data);
            // return false;

            $http.post(url, data)
                .then(function(resp) {
                    //$log.log(resp);
                    d.resolve(resp);
                }).catch(function(error) {
                    $log.log(error);
                    service.errors = error;
                    d.reject(error.data.errors);
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
                    $log.log(error);
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
                    $log.log(error);
                    service.errors = error;
                    d.reject(error);
                });

            return d.promise;
        }
    }

})();