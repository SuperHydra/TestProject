"use strict";

app.service('VolumeCalculator', function () {
    this.getFutureVolume = function (initial, monthsCount) {
        var result = [];
        for (var i = 0; i < monthsCount; i++) {
            if (result[i - 1]) {
                result[i] = (result[i - 1] * (1 + initial.percentage)).toFixed(2);
            } else {
                result [i] = (initial.volume * (1 + initial.percentage)).toFixed(2);
            }
        }
        return result;
    }
});
