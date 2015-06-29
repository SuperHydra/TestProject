"use strict";

app.service('ServerAPI', ['$http', function ($http) {
    this.sendDataToServer = function (data, endpoint) {
        $http.post(endpoint + '/', data).
            success(function (data, status, headers, config) {
                console.log('data sent successfully ', status)
            }).
            error(function (data, status, headers, config) {
                console.log('error, ', status);
            });
    }
}]);
