(function () {
    'use strict';

    angular
        .module('3RuedelevangileApp')
        .factory('Register', Register);

    Register.$inject = ['$resource'];

    function Register ($resource) {
        return $resource('api/register', {}, {});
    }
})();
