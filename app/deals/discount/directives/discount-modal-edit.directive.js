(function() {
    'use strict';

    angular
        .module('app.deals')
        .directive('discountModalEdit', discountModalEdit);

    discountModalEdit.$inject = ['$compile', '$document'];
    /* @ngInject */
    function discountModalEdit($compile, $document) {

        var directive = {
            restrict: 'E',
            templateUrl: '/app/deals/discount/discount-modal-edit.html',
            replace: true,
            scope: {
                fieldModel: '=',
                formMode: '=',
                discountsData: '='
            },
            transclude: true,
            link: function(scope, element, attrs) {
                ComponentsDateTimePickers.init();

                scope.closeModal = closeModal;

                scope.$parent.vm.setSelDiscountIndex(scope.$parent.vm.discountCounter);
                //scope.statusChange = statusChange;

                //////////////////////////

                function statusChange() {
                    var tobj = scope.$parent.vm.selDiscountObj;

                    if (tobj.discount_type == 'standard' && tobj.status == 'active') {
                        angular.forEach(scope.$parent.vm.form.discounts, function(t, index) {
                            if (t.uid != tobj.uid && t.discount_type == 'standard') {
                                if (t.status == 'active') {
                                    t.status = 'suspended';
                                }
                            }

                        });

                        angular.forEach(scope.$parent.vm.discounts, function(t, index) {
                            if (scope.$parent.vm.discountCounter != index && t.discount_type == 'standard') {
                                if (t.status == 'active') {
                                    t.status = 'suspended';
                                }

                            }
                        });
                    }
                }

                $("#discount-modal-edit").on("hidden.bs.modal", function() {
                    statusChange();
                });

                function closeModal() {
                    $('#discount-modal-edit').modal('hide');
                }
            }
        };

        return directive;
    }

})();