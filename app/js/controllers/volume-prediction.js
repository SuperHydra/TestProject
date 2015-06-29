/*================================================================
 =>                  Controller = VolumePredictionCtrl
 ==================================================================*/
/*global app*/

app.controller('VolumePredictionCtrl', ['$scope','$rootScope','VolumeCalculator','ServerAPI', function ($scope, $rootScope, VolumeCalculator, ServerAPI) {

    'use strict';
    $scope.formData = {};
    $scope.hints = {};
    $scope.futureVolume = [];
    $rootScope.titleHeader = 'Volume Prediction';

    $scope.calculateFutureVolume = function () {
        $scope.futureVolume = VolumeCalculator.getFutureVolume($scope.formData, 3);
        console.log($scope.futureVolume);
        ServerAPI.sendDataToServer({
            time: new Date(),
            initialValues: $scope.formData,
            futureVolume: $scope.futureVolume
        }, 'localhost:3000/endpoint');
    };
}]);


/*-----  End of Controller = VolumePredictionCtrl  ------*/



