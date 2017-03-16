(function() {
    'use strict';

    angular
        .module('app.deals.image')
        .directive('imageForm', imageForm);

    imageForm.$inject = ['$compile', '$document'];
    /* @ngInject */
    function imageForm($compile, $document) {

        var directive = {
            restrict: 'E',
            templateUrl: 'app/deals/image/imageform.html',
            replace: true,
            scope: {
                formImage: '=',
                formMode: '=',
                insertImg: '=',
                removeImage: '=',
                noBtn: '@'
            },
            link: function(scope, element, attrs) {
                scope.addNewImageObj = addNewImageObj;
                scope.selFormImage = scope.formImage;
                scope.clearFile = clearFile;
                scope.fileIsBlank = fileIsBlank;

                scope.$watch('formImage', function() {
                    scope.selFormImage = scope.formImage;
                });

                ///////////

                function fileIsBlank() {
                    if (scope.formMode == 'Edit') {
                        return !angular.isObject(scope.formImage.file);
                    } else {
                        return false;
                    }
                }

                function clearFile() {
                    scope.formImage.file = null;
                    scope.formImage.file = "";
                    scope.formImage.description = "";
                }

                function addNewImageObj() {
                    if (angular.isObject(scope.formImage.file)) {
                        var html = '<image-display sel-form-image="selFormImage" form-mode="formMode" remove-image="removeImage" insert-img="insertImg" ></image-display>';
                        var input = angular.element(html);
                        var compile = $compile(input)(scope);
                        //console.log(scope.selFormImage);
                        $('#image-display-container').append(compile);

                        $('.fileinput').fileinput('clear')
                            //scope.insertImg();
                        $('.image-modal').modal('hide');
                    }
                }
            }
        };

        return directive;
    }

})();