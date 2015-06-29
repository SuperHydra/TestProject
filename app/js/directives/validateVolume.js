'use strict';
app.directive('validateVolume', function () {
    var hint;
    var isCorrectVolume = function (number) {
        var volume = Number(number);
        if (!isNaN(volume)) {
            if (volume > 0) {
                return true;
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
                    valid = isCorrectVolume(value);
                    ctrl.$setValidity('validateVolume', valid);
                    scope.hints.volume = hint;
                }
                return valid ? value : undefined;
            });
            ctrl.$formatters.unshift(function (value) {
                var valid = false;
                if (value) {
                    valid = isCorrectVolume(value);
                    ctrl.$setValidity('validateVolume', valid);
                    scope.hints.volume = hint;

                }
                return value;
            });
        }
    };
});
