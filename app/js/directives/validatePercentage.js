'use strict';
app.directive('validatePercentage', function () {
    var hint;
    var isCorrectPercentage = function (number) {
        var percentage = Number(number);
        if (!isNaN(percentage)) {
            if (percentage > 0 && percentage <= 100) {
                return true;
            } else if (percentage > 100) {
                hint = 'Shouldn\'t be greater than 100';
                return false;
            } else {
                hint = 'Should be positive';
                return false;
            }
        } else {
            hint = 'Please, enter the number';
            return false;
        }
    };

    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, elem, attr, ctrl) {
            ctrl.$parsers.unshift(function (value) {
                var valid = false;
                if (value) {
                    valid = isCorrectPercentage(value);
                    ctrl.$setValidity('validatePercentage', valid);
                    scope.hints.percentage = hint;
                }
                return valid ? value / 100 : null;
            });
            ctrl.$formatters.unshift(function (value) {
                var valid = false;
                if (value) {
                    valid = isCorrectPercentage(value);
                    ctrl.$setValidity('validatePercentage', valid);
                    scope.hints.percentage = hint;
                }
                return value * 100;
            });
        }
    };
});
