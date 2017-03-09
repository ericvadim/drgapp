(function () {
    'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController);

    /** @ngInject */
    function HomeController($state) {
        var vm = this;
        vm.langInd = 0;
        vm.languages = ["Choose language ...", "English", "Spanish", "French", "German", "Japanese", "Korean", "Chinese", "Russian", "Hindi", "Dutch"];

        vm.openFoodlist = function () {
            $state.go('categories');
        };
    }
})();
