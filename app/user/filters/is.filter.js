(function() {
    'use strict';

    angular
        .module('app')
        .filter('isYesNo', isYesNo);

    function isYesNo() {
        return function(input) {
            if (input) {
                return 'Yes';
            }

            return 'No';
        }

    }

})();