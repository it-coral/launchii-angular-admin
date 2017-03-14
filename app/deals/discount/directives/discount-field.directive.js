(function() {
    'use strict';

    angular
        .module('app.deals')
        .directive('discountField', discountField);

    discountField.$inject = ['$compile'];
    /* @ngInject */
    function discountField($compile) {

        var directive = {
            restrict: 'E',
            templateUrl: '/app/deals/discount/discount-field.html',
            replace: true,
            scope: {
                discountCounter: '='
            },
            link: function(scope, element, attrs) {
                $('[data-toggle="tooltip"]').tooltip();
                scope.fieldModel = scope.$parent.$parent.vm.form.discounts[scope.discountCounter];

                scope.openModal = openModal;
                scope.remove = remove;

                ///////////////////

                function openModal() {
                    $('#discount-modal-edit').modal('show');
                    scope.$parent.$parent.vm.setSelDiscountObj(scope.fieldModel);
                }

                function remove(target) {
                    var parent = $(target).parent();
                    parent.remove();
                    scope.$parent.$parent.vm.removeDiscount(scope.discountCounter);
                }
            }
        };

        return directive;
    }

})();