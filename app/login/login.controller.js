(function() {
    'use strict';

    angular.module('app')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['AuthService', '$state'];

    /* @ngInject */
    function LoginController(AuthService, $state) {
        var vm = this;

        //vm.email = "";
        //vm.password = "";
        vm.form;
        vm.login = login;
        vm.loggingIn = false;

        ///////////

        function login() {
            vm.loggingIn = true;
            AuthService.login(vm.form).then(function(response) {
                vm.loggingIn = false;
                $state.go('dashboard');
            }, function(error) {
                vm.loggingIn = false;
                vm.loginError = true;
                vm.loginErrorText = error.data.errors[0];
            });
        }
    }
})();