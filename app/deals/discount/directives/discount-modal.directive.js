(function() {
    'use strict';

    angular
        .module('app')
        .directive('discountModal', discountModal);

    discountModal.$inject = ['$compile', '$document'];
    /* @ngInject */
    function discountModal($compile, $document) {

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
                //scope.disableAdd = true;
                //scope.statusChange = statusChange;

                /////////////

                function statusChange() {
                    var status = scope.$parent.vm.form.discounts[scope.$parent.vm.selDiscountIndex].status;

                    if (status == 'active') {
                        angular.forEach(scope.$parent.vm.form.discounts, function(t, index) {
                            if (scope.$parent.vm.discountCounter != index && t.discount_type == 'standard') {
                                if (t.status == 'active') {
                                    t.status = 'suspended';
                                }
                            }

                        });

                        if (scope.formMode == 'Edit') {
                            angular.forEach(scope.$parent.vm.discounts, function(t, index) {
                                if (t.discount_type == 'standard') {
                                    if (t.status == 'active') {
                                        t.status = 'suspended';
                                    }

                                }
                            });
                        }

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
                }
            }
        };

        return directive;
    }

})();