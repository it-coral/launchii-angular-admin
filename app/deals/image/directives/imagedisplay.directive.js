(function() {
    'use strict';

    angular
        .module('app.deals.image')
        .directive('imageDisplay', imageDisplay);

    imageDisplay.$inject = ['$compile', '$document'];
    /* @ngInject */
    function imageDisplay($compile, $document) {

        var directive = {
            restrict: 'E',
            templateUrl: 'app/deals/image/imagedisplay.html',
            replace: true,
            scope: {
                selFormImage: '&',
                formMode: '=',
                removeImage: '=',
                insertImg: '=',
            },
            link: function(scope, element, attrs) {

                scope.remove = remove;
                scope.formImage = scope.selFormImage();

                scope.insertImg();
                /////////////

                function remove(elem, image) {
                    angular.element(elem).parents('.image-field-container').remove();
                    scope.removeImage(image);
                }
            }
        };

        return directive;
    }

})();