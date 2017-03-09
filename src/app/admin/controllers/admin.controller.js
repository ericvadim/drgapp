(function () {
    'use strict';

    angular
        .module('app')
        .controller('AdminController', AdminController);

    /** @ngInject */
    function AdminController($rootScope) {
        var vm = this;

        vm.tabs = [
            {"id": "categories", "heading": "Categories", "active": true, "template": "app/admin/views/category.admin.html"},
            {"id": "restaurants", "heading": "Restaurants", "active": false, "template": "app/admin/views/restaurant.admin.html"},
            {"id": "address", "heading": "Addresses", "active": false, "template": "app/admin/views/address.admin.html"},
            {"id": "ads", "heading": "Advertisements", "active": false, "template": "app/admin/views/ads.admin.html"}
        ];

        vm.onTabSelect = function (tabId) {
            $rootScope.activedTab = tabId;
        };
    }
})();
