(function() {
    'use strict';

    angular.module('app')
        .controller('HighlightController', HighlightController);

    HighlightController.$inject = ['$scope', '$compile'];

    /* @ngInject */
    function HighlightController($scope, $compile) {
        var hl = this;

        hl.remove = remove;
        hl.counter = 0;
        hl.increCounter = increCounter;
        hl.modelo = {};
        hl.we = 'test';

        //////////////

        function remove(target) {
            var parent = $(target).parent();

            parent.remove();
        }

        function increCounter() {
            hl.counter++;
        }
    }
})();