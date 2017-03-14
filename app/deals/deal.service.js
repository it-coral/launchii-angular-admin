(function() {
    'use strict';

    angular.module('app.deals', ['app.deals.highlightadd', 'app.deals.highlightedit', 'app.deals.highlightfield'])
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
            addTemplates: addTemplates,
            search: search,
            searchedList: [],
            highlights: [],
            templates: [],
            getHighlights: getHighlights,
            getTemplates: getTemplates,
            removeHighlights: removeHighlights,
            updateHighlights: updateHighlights,
            //removeTemplates: removeTemplates,
            //updateTemplates: updateTemplates,
            templateNames: [],
            templateTypes: [],
            getTemplateNames: getTemplateNames,
            getTemplateTypes: getTemplateTypes,
            getStandardDiscounts: getStandardDiscounts,
            getEarlyBirdDiscounts: getEarlyBirdDiscounts
        }

        return service;

        //////// SERIVCE METHODS ////////

        function getEarlyBirdDiscounts(dealId) {
            var d = $q.defer();
            var url = api + '/' + dealId + '/discounts/early_bird';

            $http.get(url).then(function(resp) {
                var discounts = resp.data.discounts;
                angular.forEach(discounts, function(discount, index) {
                    if (discount.is_active) {
                        discounts[index]['status'] = 'active';
                    } else if (discount.is_suspended) {
                        discounts[index]['status'] = 'suspended';
                    }

                    if (discount.is_percentage) {
                        discounts[index]['value_type'] = 'percentage';
                    } else if (discount.is_unit) {
                        discounts[index]['value_type'] = 'unit';
                    }
                });
                d.resolve(discounts);
            }).catch(function(err) {
                console.log(err);
                d.reject(err);
            });

            return d.promise;
        }

        function getStandardDiscounts(dealId) {
            var d = $q.defer();
            var url = api + '/' + dealId + '/discounts/standard';

            $http.get(url).then(function(resp) {
                console.log(resp);
                var discounts = resp.data.discounts;
                angular.forEach(discounts, function(discount, index) {
                    if (discount.is_active) {
                        discounts[index]['status'] = 'active';
                    } else if (discount.is_suspended) {
                        discounts[index]['status'] = 'suspended';
                    }

                    if (discount.is_percentage) {
                        discounts[index]['value_type'] = 'percentage';
                    } else if (discount.is_unit) {
                        discounts[index]['value_type'] = 'unit';
                    }
                });
                d.resolve(discounts);
            }).catch(function(err) {
                console.log(err);
                d.reject(err);
            });

            return d.promise;
        }

        function getTemplateTypes() {
            var d = $q.defer();

            if (service.templateTypes.length > 0) {
                d.resolve(service.templateTypes);
            } else {
                var url = CONST.api_domain + '/templates/types';
                $http.get(url).then(function(resp) {
                    service.templateTypes = resp.data.template_types;
                    d.resolve(resp.data.template_types);
                }).catch(function(err) {
                    console.log(err);
                    d.reject(err);
                });
            }

            return d.promise;
        }

        function getTemplateNames() {
            var d = $q.defer();

            if (service.templateNames.length > 0) {
                d.resolve(service.templateNames);
            } else {
                var url = CONST.api_domain + '/templates/names';
                $http.get(url).then(function(resp) {
                    service.templateNames = resp.data.template_names;
                    d.resolve(resp.data.template_names);
                }).catch(function(err) {
                    console.log(err);
                    d.reject(err);
                });
            }

            return d.promise;
        }

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

        function getTemplates(dealId) {
            var url = api + '/' + dealId + '/templates';
            var d = $q.defer();

            $http.get(url).then(function(resp) {
                service.templates = resp.data.templates;

                angular.forEach(service.templates, function(template, index) {
                    if (template.is_archived) {
                        service.templates[index]['status'] = 'archived';
                    } else if (template.is_draft) {
                        service.templates[index]['status'] = 'draft';
                    } else if (template.is_published) {
                        service.templates[index]['status'] = 'published';
                    } else {
                        service.templates[index]['status'] = 'draft';
                    }
                });



                d.resolve(service.templates);
            }).catch(function(err) {
                console.log(err);
                service.errors.push(err);
                d.reject(err);
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
                    //d.reject(error);
                    d.resolve('but failed to add highlight')
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

            return service.lists.total == 0;
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

        function addTemplates(deal_id, templates) {
            var d = $q.defer();

            var url = api + '/' + deal_id + '/templates';

            var tasks = [];

            angular.forEach(templates, function(template, index) {
                if (angular.isDefined(template.name) && template.name.trim() != '') {
                    tasks.push(function(cb) {
                        template['templatable_id'] = deal_id;

                        $http.post(url, template).then(function(resp) {
                            //d.resolve(resp);
                            cb(null, resp);
                        }).catch(function(err) {
                            console.log(err);
                            // service.errors = error;
                            // d.reject(error);
                            //cb(err);
                            cb(null, 'but failed to add template.');
                        });

                    });
                }

            });

            async.parallel(tasks, function(error, results) {
                if (error) {
                    console.log(error);
                    service.errors = error;
                    d.reject('template');
                } else {
                    d.resolve(results);
                }

            });

            return d.promise;
        }

        function addDiscounts(deal_id, discounts) {
            var d = $q.defer();

            var url = api + '/' + deal_id + '/discounts';

            var tasks = [];

            angular.forEach(discounts, function(discount, index) {
                // console.log(discount);
                // return false;
                if (angular.isDefined(discount.value) && discount.value.trim() != '') {
                    tasks.push(function(cb) {
                        var formData = new FormData();
                        discount.coupons_file_expire_at = HelperService.combineDateTime(discount.coupons_file_expire_at, '00:00:00');
                        // var coupons_txt = discount.coupons_txt;

                        // delete discount.coupons_txt;
                        //formData.append('coupons_txt', discount.coupons_txt);
                        //discount.coupons_txt = "JELLANQD";
                        //var f_data = new FormData(discount);
                        // var formData = new FormData();

                        // angular.forEach(discount, function(item, attr) {
                        //     formData.append(attr, item);
                        // });

                        //formData.append("coupons_txt", data.coupons_txt);
                        console.log(discount);
                        $http.post(url, discount, {
                            //transformRequest: angular.identity,
                            // transformRequest: function(data) {
                            //     console.log(data);
                            //     var formData = new FormData();

                            //     angular.forEach(data, function(item, attr) {
                            //         formData.append(attr, item);
                            //     });

                            //     //formData.append("coupons_txt", data.coupons_txt);
                            //     console.log(formData.get("coupons_txt"));
                            //     return formData;
                            // },
                            headers: { 'Content-Type': undefined }
                        }).then(function(resp) {
                            //d.resolve(resp);
                            cb(null, resp);
                        }).catch(function(err) {
                            console.log(err);
                            // service.errors = error;
                            // d.reject(error);
                            //cb(err);
                            var errors = HelperService.setErrorStr(err);
                            cb(null, 'but failed to add discount. Reason: ' + errors);
                        });

                        // Upload.upload({
                        //     url: url,
                        //     method: "POST",
                        //     data: discount,
                        //     file: coupons_txt,
                        //     fileFormDataName: "discounts[coupons_txt]",
                        //     formDataAppender: function(fd, key, val) {
                        //         if (angular.isArray(val)) {
                        //             angular.forEach(val, function(v) {
                        //                 fd.append('discounts[' + key + ']', v);
                        //             });
                        //         } else {
                        //             fd.append('discounts[' + key + ']', val);
                        //         }
                        //     }
                        // }).then(function(resp) {
                        //     cb(null, resp);
                        // }).catch(function(err) {
                        //     cb(err);
                        // });

                    });
                }

            });

            async.parallel(tasks, function(error, results) {
                if (error) {
                    console.log(error);
                    service.errors = error;
                    d.reject('discount');
                } else {
                    console.log(results);
                    d.resolve(results);
                }

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

                    var tasks = [];

                    if (data.highlights.length > 0) {
                        //console.log(data.highlights);
                        tasks.push(function(cb) {
                            addHighlights(dealId, data.highlights).then(function(resp) {
                                cb(null, resp);
                            }).catch(function(err) {
                                console.log(err);
                                cb(err);
                            });
                        });
                    }

                    if (angular.isDefined(data.templates[0]) && angular.isDefined(data.templates[0].name) && data.templates[0].name.trim() != '') {
                        tasks.push(function(cb) {
                            addTemplates(dealId, data.templates).then(function(resp) {
                                cb(null, resp);
                            }).catch(function(err) {
                                console.log(err);
                                cb(err);
                            });
                        });
                    }

                    if (angular.isDefined(data.discounts[0]) && angular.isDefined(data.discounts[0].value) && data.discounts[0].value.trim() != '') {
                        tasks.push(function(cb) {
                            addDiscounts(dealId, data.discounts).then(function(resp) {
                                cb(null, resp);
                            }).catch(function(err) {
                                console.log(err);
                                cb(err);
                            });
                        });
                    }

                    if (tasks.length > 0) {
                        async.parallel(tasks, function(error, results) {
                            if (error) {
                                console.log(error);
                                service.errors = error;
                                d.reject(error);
                            } else {
                                d.resolve(results);
                            }

                        });
                    } else {
                        d.resolve(resp);
                    }


                }).catch(function(error) {
                    console.log(error);
                    service.errors = error;
                    d.reject('deal');
                });

            return d.promise;
        }

        function setOnePublish(templates) {
            var hasPublish = false;
            angular.forEach(templates, function(template, index) {
                if (template.status == 'published' && !hasPublish) {
                    hasPublish = true;
                } else if (template.status == 'published' && hasPublish) {
                    templates[index].status = 'draft';
                }
            });

            return templates;
        }

        function edit(id, data) {
            var url = api + "/" + id;
            var d = $q.defer();

            var tasks = [];
            var tasksSeries = [];

            //TEMPLATE ADD
            if (angular.isDefined(data.form.templates) && data.form.templates.length > 0) {
                var url_ah = api + '/' + id + '/templates';

                angular.forEach(data.form.templates, function(template, index) {
                    //console.log(angular.isDefined(template.name));
                    //console.log(template.name);
                    if (angular.isDefined(template.name) && template.name.trim() != '') {
                        tasks.push(function(cb) {
                            template['templatable_id'] = id;
                            $http.post(url_ah, template)
                                .then(function(resp) {
                                    cb(null, resp);
                                }).catch(function(err) {
                                    console.log(err);
                                    cb(err);
                                });
                        });
                    }

                });
            }

            //HIGHLIGHT
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
                            console.log(err);
                            cb(err);
                        });
                    });
                });
            }
            //HIGHLIGHT
            if (angular.isDefined(data.removedHighlights) && data.removedHighlights.length > 0) {
                angular.forEach(data.removedHighlights, function(val, index) {
                    var url_h = url + '/highlights/' + val.uid;

                    tasks.push(function(cb) {
                        $http.delete(url_h).then(function(resp) {
                            cb(null, resp);
                        }).catch(function(err) {
                            console.log(err);
                            cb(err);
                        });
                    });
                });
            }
            //TEMPLATE UPDATE
            if (angular.isDefined(data.templates) && data.templates.length > 0) {
                angular.forEach(data.templates, function(template, index) {
                    var url_h = url + '/templates/' + template.uid;

                    tasks.push(function(cb) {
                        template['templatable_id'] = id;
                        $http.patch(url_h, template).then(function(resp) {
                            cb(null, resp);
                        }).catch(function(err) {
                            console.log(err);
                            cb(err);
                        });
                    });
                });
            }
            //TEMPLATE DELETE
            if (angular.isDefined(data.removedTemplates) && data.removedTemplates.length > 0) {
                angular.forEach(data.removedTemplates, function(val, index) {
                    var url_h = url + '/templates/' + val.uid;

                    tasks.push(function(cb) {
                        $http.delete(url_h).then(function(resp) {
                            cb(null, resp);
                        }).catch(function(err) {
                            console.log(err);
                            cb(err);
                        });
                    });
                });
            }
            //HIHGLIGHT
            if (angular.isDefined(data.form.highlights) && data.form.highlights.length > 0) {
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
                console.log(data_h);
                tasks.push(function(cb) {
                    $http.post(url_ah, data_h)
                        .then(function(resp) {
                            cb(null, resp);
                        }).catch(function(err) {
                            console.log(err);
                            cb(err);
                        });
                });

            }

            tasks.push(function(cb) {
                $http.patch(url, data.form)
                    .then(function(resp) {
                        cb(null, resp);
                    }).catch(function(err) {
                        console.log(err);
                        cb(err);
                    });
            });

            tasksSeries.push(function(cb) {
                async.parallel(tasks, function(err, results) {
                    if (err) {
                        // console.log(err);
                        // service.errors = err;
                        // d.reject(err);
                        cb(err);
                    } else {
                        //d.resolve(results);
                        cb(null, results);
                    }

                });
            });
            // async.parallel(tasks, function(err, results) {
            //     if (err) {
            //         console.log(err);
            //         service.errors = err;
            //         d.reject(err);
            //     } else {
            //         d.resolve(results);
            //     }

            // });

            //DISCOUNT DELETE
            if (angular.isDefined(data.removedDiscounts) && data.removedDiscounts.length > 0) {
                angular.forEach(data.removedDiscounts, function(val, index) {
                    var url_h = url + '/discounts/' + val.uid;

                    tasksSeries.push(function(cb) {
                        $http.delete(url_h).then(function(resp) {
                            cb(null, resp);
                        }).catch(function(err) {
                            console.log(err);
                            cb(err);
                        });
                    });
                });
            }

            //DISCOUNT UPDATE
            if (angular.isDefined(data.discounts) && data.discounts.length > 0) {
                angular.forEach(data.discounts, function(discount, index) {
                    var url_h = url + '/discounts/' + discount.uid;

                    tasksSeries.push(function(cb) {

                        $http.patch(url_h, discount).then(function(resp) {
                            cb(null, resp);
                        }).catch(function(err) {
                            console.log(err);
                            cb(err);
                        });
                    });
                });
            }

            //DISCOUNT ADD
            if (angular.isDefined(data.form.discounts) && data.form.discounts.length > 0) {
                var url_ah = url + '/discounts';

                angular.forEach(data.form.discounts, function(discount, index) {
                    if (angular.isDefined(discount.value) && discount.value.trim() != '') {
                        tasksSeries.push(function(cb) {

                            $http.post(url_ah, discount)
                                .then(function(resp) {
                                    cb(null, resp);
                                }).catch(function(err) {
                                    console.log(err);
                                    cb(err);
                                });
                        });
                    }

                });
            }

            //DISCOUNT only
            async.series(tasksSeries, function(err, results) {
                if (err) {
                    console.log(err);
                    service.errors = err;
                    d.reject(err);
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