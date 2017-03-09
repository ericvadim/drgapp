(function () {
    'use strict';

    angular
        .module('app')
        .controller('AdsAdminController', AdsAdminController)
        .controller('AdsModalController', AdsModalController);

    /** @ngInject */
    function AdsAdminController($http, $uibModal, ServerURL) {
        var vm = this;
        vm.category = 0;
        vm.restaurant = 0;
        vm.currRowId = 0;
        vm.tableData = {};
        vm.categories = {};
        vm.isNoData = false;

        vm.getCategories = function () {
            $http.get(ServerURL + "categories/getcategories").then(function (response) {
                vm.categories = response.data;
                for (var c in vm.categories) {
                    vm.category = vm.categories[c].id;
                    break;
                }
                vm.getRestaurants();
            });
        };
        vm.getCategories();

        vm.getRestaurants = function () {
            $http.get(ServerURL + "restaurants/getrestaurants?category=" + vm.category).then(function (response) {
                vm.restaurants = response.data;
                for (var r in vm.restaurants) {
                    vm.restaurant = vm.restaurants[r].id;
                    break;
                }
                vm.getData();
            });
        };

        vm.getData = function () {
            $http.get(ServerURL + "advertisements/getads?restaurant=" + vm.restaurant).then(function (response) {
                vm.tableData = response.data;
                for (var r in vm.tableData) {
                    vm.tableData[r].image += '?' + Date.now();
                }
                vm.isNoData = !r;
            });
        };


        vm.saveData = function (data) {
            data['id'] = vm.currRowId;
            data['restaurant_id'] = vm.restaurant;
            $http({
                method: 'POST',
                url: ServerURL + "advertisements/saveads",
                headers: {'Content-Type': 'multipart/form-data'},
                data: data
            }).then(function mySucces(/*response*/) {
                vm.modal.close();
                vm.getData();
            });
        };

        vm.deleteData = function (rowId) {
            if (confirm('Are you sure want to delete this?')) {
                $http.get(ServerURL + "advertisements/deleteads?id=" + rowId).then(function (/*response*/) {
                    vm.getData();
                });
            }
        }

        vm.openModal = function (rowId) {
            vm.currRowId = rowId;
            if (vm.restaurant) {
                vm.modal = $uibModal.open({
                    animation: true,
                    ariaLabelledBy: 'modal-title',
                    ariaDescribedBy: 'modal-body',
                    templateUrl: 'ads_form.html',
                    controller: 'AdsModalController',
                    controllerAs: 'vm',
                    size: 'lg',
                    resolve: {
                        pvm: function () {  // giving parent scope.
                            return vm;
                        }
                    }
                });
            }

            vm.modal.result.then(function () {  // originally used selectedItem for parameter.
                vm.currRowId = 0;
            }, function () {
                vm.currRowId = 0;
            });
        };
    }

    function AdsModalController(pvm) {
        var vm = this;
        vm.data = {};
        if (pvm.currRowId) {
            vm.data.image = pvm.tableData[pvm.currRowId]['image'];
        }

        vm.save = function () {
            pvm.saveData(vm.data);
        };

        vm.close = function () {
            pvm.modal.close();
        };

    }
})();


