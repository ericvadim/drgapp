(function () {
    'use strict';

    angular
        .module('app')
        .directive('searchBox', function () {
            var directive = {};

            directive.restrict = 'E';

            directive.template = '<div class="input-group search-box">';
            directive.template += '<input type="text" class="form-control" placeholder="Search for...">';
            directive.template += '<span class="input-group-btn">';
            directive.template += '<button class="btn btn-primary" type="button"><i class="glyphicon glyphicon-search"></i></button>';
            directive.template += '</span>';
            directive.template += '</div>';


            directive.scope = {
                keyword: "=keyword"
            }

            directive.compile = function (/*element, attributes*/) {
                // element.css("border", "1px solid #cccccc");

                return function (/*$scope, element, attributes*/) {
                    // element.css("background-color", "#ff00ff");
                }
            }
            return directive;
        });
})();
