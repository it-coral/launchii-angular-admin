(function() {
    'use strict';

    angular
        .module('app.deals')
        .directive('discountModal', discountModal);

    discountModal.$inject = ['$compile', '$document', '$q'];
    /* @ngInject */
    function discountModal($compile, $document, $q) {

        var directive = {
            restrict: 'E',
            templateUrl: '/app/deals/discount/discount-modal.html',
            replace: true,
            scope: {
                fieldModel: '=',
                formMode: '=',
                discountsData: '='
            },
            transclude: true,
            link: function(scope, element, attrs) {
                ComponentsDateTimePickers.init();

                scope.$parent.vm.setSelDiscountIndex(scope.$parent.vm.discountCounter);
                scope.addDiscount = addDiscount;
                scope.checkActiveDiscount = checkActiveDiscount;
                //scope.disableAdd = true;
                //scope.statusChange = statusChange;

                /////////////

                function checkActiveDiscount() {
                    var d = $q.defer();

                    var selDiscount = scope.$parent.vm.form.discounts[scope.$parent.vm.selDiscountIndex];
                    var status = selDiscount.status;
                    var countStandard = 0;
                    //console.log(selDiscount);
                    var activeStandard = countActiveStandard();

                    if (status == 'active' && activeStandard > 0) {
                        bootbox.confirm({
                            title: "Confirm Active Standard",
                            message: "You have an active standard discount running at the moment. Do you want to create a new active standard discount?",
                            buttons: {
                                confirm: {
                                    label: 'Yes',
                                    className: 'btn-success'
                                },
                                cancel: {
                                    label: 'No',
                                    className: 'btn-danger'
                                }
                            },
                            callback: function(result) {
                                if (result) {
                                    d.resolve(result);
                                } else {
                                    d.reject(false);
                                }
                            }
                        });
                    } else {
                        d.resolve(null);
                    }

                    return d.promise;
                }

                function countActiveStandard() {
                    var tobj = scope.$parent.vm.form.discounts[scope.$parent.vm.selDiscountIndex];
                    var countStandard = 0;
                    angular.forEach(scope.$parent.vm.form.discounts, function(t, index) {
                        if (t.discount_type == 'standard' && angular.isDefined(t.value) && t.value.trim() != "" && t.value.trim() != "null") {
                            if (t.status == 'active') {
                                countStandard++;
                            }
                        }

                    });

                    angular.forEach(scope.$parent.vm.discounts, function(t, index) {
                        if (tobj.uid != t.uid && t.discount_type == 'standard') {
                            if (t.status == 'active') {
                                countStandard++;
                            }

                        }
                    });
                    return countStandard;
                }

                function statusChange() {
                    var selDiscount = scope.$parent.vm.form.discounts[scope.$parent.vm.selDiscountIndex];
                    var status = selDiscount.status;
                    var countStandard = 0;
                    //console.log(selDiscount);
                    var activeStandard = countActiveStandard();
                    if (status == 'active') {

                        angular.forEach(scope.$parent.vm.form.discounts, function(t, index) {
                            if (scope.$parent.vm.discountCounter != index && t.discount_type == 'standard') {
                                countStandard++;
                                if (t.status == 'active') {
                                    t.status = 'suspended';
                                }
                            }

                        });

                        if (scope.formMode == 'Edit' && selDiscount.discount_type == 'standard') {
                            angular.forEach(scope.$parent.vm.discounts, function(t, index) {
                                countStandard++;
                                if (t.discount_type == 'standard') {
                                    if (t.status == 'active') {
                                        t.status = 'suspended';
                                    }

                                }
                            });
                        }
                        if (countStandard == 0 && selDiscount.discount_type == 'standard') {
                            scope.$parent.vm.form.discounts[scope.$parent.vm.selDiscountIndex].status = 'active';
                        }
                    } else if (selDiscount.discount_type == 'standard' && activeStandard == 0) {
                        scope.$parent.vm.form.discounts[scope.$parent.vm.selDiscountIndex].status = 'active';
                    }


                }

                // scope.$watch('$parent.vm.form.discounts[$parent.vm.selDiscountIndex].name', function(newValue, oldValue) {
                //     if (angular.isDefined(newValue)) {
                //         if (newValue.trim() == '') {
                //             scope.disableAdd = true;
                //         } else {
                //             scope.disableAdd = false;
                //         }
                //     } else {
                //         scope.disableAdd = true;
                //     }

                // });

                function addDiscount() {
                    checkActiveDiscount().then(function() {
                        statusChange();

                        var html = '<discount-field discount-counter="' + scope.$parent.vm.selDiscountIndex + '" ></discount-field>';
                        var input = angular.element(html);
                        var compile = $compile(input)(scope);

                        $document.find('#discount-container').append(input);
                        $('#discount-modal').modal('hide');
                        scope.$parent.vm.increDiscountCounter();
                        scope.$parent.vm.setSelDiscountIndex(scope.$parent.vm.discountCounter);

                        scope.$parent.vm.form.discounts[scope.$parent.vm.selDiscountIndex] = {};

                        scope.$parent.vm.form.discounts[scope.$parent.vm.selDiscountIndex].value_type = 'percentage';
                        scope.$parent.vm.form.discounts[scope.$parent.vm.selDiscountIndex].discount_type = 'standard';
                        scope.$parent.vm.form.discounts[scope.$parent.vm.selDiscountIndex].status = 'active';
                    }).catch(function(err) {
                        //Nothing to do here
                    });

                }
            }
        };

        return directive;
    }

})();