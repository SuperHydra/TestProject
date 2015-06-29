"use strict";

app.service('ServerAPI', ['$http', function ($http) {
    this.sendDataToServer = function (data, endpoint) {
        $http.post(endpoint + '/', data).
            success(function (data, status, headers, config) {
                console.log('data sent successfully. Server responded: ', status)
            }).
            error(function (data, status, headers, config) {
                console.log('Error, data was not sent: ', status);
            });
    }
}]);
