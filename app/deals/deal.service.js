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
            isEmpty: isEmpty,
            addHighlights: addHighlights,
            search: search,
            searchedList: [],
            highlights: [],
            getHighlights: getHighlights,
            removeHighlights: removeHighlights,
            updateHighlights: updateHighlights
        }

        return service;

        //////// SERIVCE METHODS ////////

        function removeHighlights(dealId, highlights) {
            var url = api + '/' + dealId + '/highlights';
            var d = $q.defer();
            var tasks = [];

            angular.forEach(highlights, function(val, index) {
                tasks.push(function(cb) {
                    $http.delete(url + '/' + val.uid).then(function(resp) {
                        //d.resolve(resp);
                        cb(null, resp);
                    }).catch(function(err) {
                        console.log(error);
                        // service.errors = error;
                        // d.reject(error);
                        cb(err);
                    });
                });
            });

            async.parallel(tasks, function(error, results) {
                if (error) {
                    console.log(error);
                    d.reject(error);
                } else {
                    d.resolve(results);
                }

            });

            return d.promise;
        }

        function updateHighlights(dealId, highlights) {
            var url = api + '/' + dealId + '/highlights';
            var d = $q.defer();
            var tasks = [];

            angular.forEach(highlights, function(val, index) {
                tasks.push(function(cb) {
                    var data = {
                        title: val.title
                    };

                    $http.patch(url + '/' + val.uid, data).then(function(resp) {
                        //d.resolve(resp);
                        cb(null, resp);
                    }).catch(function(err) {
                        console.log(error);
                        // service.errors = error;
                        // d.reject(error);
                        cb(err);
                    });
                });
            });

            async.parallel(tasks, function(error, results) {
                if (error) {
                    console.log(error);
                    d.reject(error);
                } else {
                    d.resolve(results);
                }

            });

            return d.promise;
        }

        function getHighlights(dealId) {
            var url = api + '/' + dealId + '/highlights';
            var d = $q.defer();

            $http.get(url).then(function(resp) {
                service.highlights = resp.data.highlights;
                d.resolve(service.highlights);
            }).catch(function(err) {
                console.log(err);
                service.errors.push(err);
                d.reject(err);
            });

            return d.promise;
        }

        function search(str) {
            var url = api + '/search';
            var d = $q.defer();
            var q = str.toLowerCase();
            var results = [];

            if (str.trim() == '') {
                d.resolve(service.lists.deals);
            } else {
                angular.forEach(service.lists.deals, function(brand, index) {
                    if (brand.name.toLowerCase().indexOf(q) > -1) {
                        results.push(brand);
                    }
                });

                if (results.length > 0) {
                    d.resolve(results);
                } else {
                    $http.get(url, { query: str }).then(function(resp) {
                        service.searchedList = resp.data;
                        d.resolve(resp.data.deals);
                    }).catch(function(err) {
                        console.log(err);
                        d.reject(err);
                    });
                }
            }

            return d.promise;
        }

        function addHighlights(dealId, highlights) {
            var d = $q.defer();

            var url = api + '/' + dealId + '/highlights/collection';

            var highlightsArr = [];
            angular.forEach(highlights, function(val, key) {
                var obj = {
                    title: val
                };

                highlightsArr.push(obj);

                // function handleCb(cb) {
                //     $http.post(url, highlights).then(function(resp) {
                //         //d.resolve(resp);
                //         cb(null, resp);
                //     }).catch(function(err) {
                //         // console.log(error);
                //         // service.errors = error;
                //         // d.reject(error);
                //         cb(err);
                //     });
                // }

            });
            var data = {
                highlight: {
                    highlights: highlightsArr
                }
            };

            $http.post(url, data)
                .then(function(resp) {
                    // var dealId = resp.uid;
                    // addHighlights(dealId, data.highlights).then(function(resp) {
                    //     d.resolve(resp);
                    // }).catch(function(err) {
                    //     d.reject(err);
                    // });
                    d.resolve(resp);
                }).catch(function(error) {
                    console.log(error);
                    service.errors = error;
                    d.reject(error);
                });

            // async.parallel(tasks, function(error, results) {
            //     if (error) {
            //         d.reject(error);
            //     } else {
            //         d.resolve(results);
            //     }

            // });

            return d.promise;
        }

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

                    //DISABLED
                    BrandService.findInList(deal.brand_id).then(function(brand) {
                        deal['brand'] = brand;
                        d.resolve(deal);
                    });
                    //d.resolve(deal);
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
                    //console.log(resp);
                    //return false;
                    var dealId = resp.data.deal.uid;
                    console.log(data.highlights);
                    addHighlights(dealId, data.highlights).then(function(resp) {
                        console.log(resp);
                        d.resolve(resp);
                    }).catch(function(err) {
                        console.log(err);
                        d.reject(err);
                    });
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

            var tasks = [];

            if (angular.isDefined(data.highlights) && data.highlights.length > 0) {
                angular.forEach(data.highlights, function(val, index) {
                    var url_h = url + '/highlights/' + val.uid;
                    var data_h = {
                        highlight: {
                            title: val.title
                        }
                    };

                    tasks.push(function(cb) {
                        $http.patch(url_h, data_h).then(function(resp) {
                            cb(null, resp);
                        }).catch(function(err) {
                            console.log(error);
                            cb(err);
                        });
                    });
                });
            }

            if (angular.isDefined(data.removedHighlights) && data.removedHighlights.length > 0) {
                angular.forEach(data.removedHighlights, function(val, index) {
                    var url_h = url + '/highlights/' + val.uid;

                    tasks.push(function(cb) {
                        $http.delete(url_h).then(function(resp) {
                            cb(null, resp);
                        }).catch(function(err) {
                            console.log(error);
                            cb(err);
                        });
                    });
                });
            }

            if (angular.isDefined(data.form.highlights)) {
                var highlightsArr = [];
                angular.forEach(data.form.highlights, function(val, index) {
                    var obj = {
                        title: val
                    };

                    highlightsArr.push(obj);
                });

                var data_h = {
                    highlight: {
                        highlights: highlightsArr
                    }
                };

                var url_ah = api + '/' + id + '/highlights/collection';

                tasks.push(function(cb) {
                    $http.post(url_ah, data_h)
                        .then(function(resp) {
                            cb(null, resp);
                        }).catch(function(error) {
                            console.log(error);
                            cb(err);
                        });
                });

            }

            tasks.push(function(cb) {
                $http.patch(url, data.form)
                    .then(function(resp) {
                        cb(null, resp);
                    }).catch(function(error) {
                        console.log(error);
                        cb(err);
                    });
            });

            async.parallel(tasks, function(error, results) {
                if (error) {
                    console.log(error);
                    service.errors = error;
                    d.reject(error);
                } else {
                    d.resolve(results);
                }

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