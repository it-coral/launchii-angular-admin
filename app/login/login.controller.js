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

        ///////////

        function login() {

            AuthService.login(vm.form).then(function(response) {
                console.log(response);
                $state.go('dashboard');
            }, function(error) {
                vm.loginError = true;
                vm.loginErrorText = error;
            });
        }
    }
})();