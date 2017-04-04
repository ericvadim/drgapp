(function () {
    'use strict';

    angular
        .module('app')
        .controller('CategoriesController', CategoriesController);

    /** @ngInject */
    function CategoriesController($state, $http, ServerURL) {
        var vm = this;
        vm.keyword = "";

        vm.foodcates = {};
        vm.getCategories = function () {
            $http.get(ServerURL + "categories/getcategories").then(function (response) {
                vm.foodcates = response.data;
            });
        };
        vm.getCategories();

        vm.ads = [1, 2, 3];

        vm.openRestaurants = function (categoryId) {
            $state.go('restaurants', {'category': categoryId});
        };

        vm.search = function () {
            $state.go('restaurants', {'q': vm.keyword});
        };

        vm.onKeyUp = function () {
            if (event.keyCode == 13) {
                vm.search();
            }
        };

        vm.goBack = function () {
            $state.go('home');
        };

    }
})();
