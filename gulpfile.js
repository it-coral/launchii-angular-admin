var gulp = require('gulp'),
    concat = require('gulp-concat'),
    watch = require('gulp-watch');

var files = [
    //Libraries
    './node_modules/angular/angular.min.js',
    './node_modules/angular-animate/angular-animate.min.js',
    './node_modules/angular-resource/angular-resource.min.js',
    './node_modules/angular-ui-router/release/angular-ui-router.min.js',
    './node_modules/satellizer/dist/satellizer.min.js',
    './node_modules/async/dist/async.min.js',
    //'./bower_components/angular-cookie/angular-cookie.min.js',
    //'./bower_components/angular-cookies/angular-cookies.min.js',
    //'./bower_components/ng-token-auth/dist/ng-token-auth.js',
    './node_modules/bootbox/bootbox.min.js',
    './bower_components/angular-auto-validate/dist/jcs-auto-validate.min.js',
    './node_modules/ngprogress-lite/ngprogress-lite.min.js',
    './node_modules/ladda/js/spin.js',
    './node_modules/ladda/js/ladda.js',
    './node_modules/angular-ladda/dist/angular-ladda.min.js',
    // './node_modules/angular-ui-bootstrap/dist/ui-bootstrap.js',
    './node_modules/ng-file-upload/dist/ng-file-upload-shim.min.js',
    './node_modules/ng-file-upload/dist/ng-file-upload.min.js',
    './node_modules/angular-scroll/angular-scroll.min.js',
    './bower_components/angular-file-model/angular-file-model.js',
    './node_modules/angular-base64-upload/dist/angular-base64-upload.min.js',

    //Cores
    './app/core/app.module.js',
    './app/core/constants.js',
    './app/core/app.core.js',
    //'./app/core/exceptionhandler.js',
    './app/core/app.config.js',
    './app/core/app.route.js',
    './app/core/authinterceptor.js',
    './app/core/app.helpers.js',
    './app/nav/*.js',
    './app/nav/*/*.js',

    //Common Module
    './app/common/*.js',
    './app/common/*/*.js',

    //Auth Module
    './app/login/*.js',
    './app/login/*/*.js',

    //Dashboard Module
    './app/dashboard/*.js',

    //Brand Module
    './app/brand/*.js',
    './app/brand/*/*.js',

    //Deal Module
    './app/deals/*.js',
    './app/deals/*/*.js',

    //Image Module
    './app/deals/image/*.js',
    './app/deals/image/*/*.js',

    //Highlight Module
    './app/deals/highlight/*.js',
    './app/deals/highlight/*/*.js',

    //Template Module
    './app/deals/template/*.js',
    './app/deals/template/*/*.js',

    //Discount Module
    './app/deals/discount/*.js',
    './app/deals/discount/*/*.js',

    //User Module
    './app/user/*.js',
    './app/user/*/*.js',

];

gulp.task('scripts', function() {
    return gulp.src(files)
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./dist/js/'));
});

gulp.task('js-watch', function() {
    gulp.watch(files, ['scripts']);
});