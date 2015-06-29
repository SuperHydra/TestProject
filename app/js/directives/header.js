'use strict';

function headerDirective() {
    return {
        templateUrl: '../templates/directives/header.html',
        scope: {},

        controller: function ($scope) {
        }
    }
}
app.directive('headerDirective', headerDirective);
