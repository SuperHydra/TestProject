/*================================================================
 =>                  App = oneHydraMini
 ==================================================================*/
/*global angular*/

var app = angular.module('oneHydraMini', ['ngMessages', 'ngCookies', 'ngResource', 'ngSanitize', 'ngRoute', 'ngAnimate', 'ui.bootstrap', 'ui.router']);


app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider',
    function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
        'use strict';

        $stateProvider

            .state('volume-prediction', {
                url: '/volume-prediction',
                controller: 'VolumePredictionCtrl',
                templateUrl: '../templates/pages/volume-prediction.html'
            })

            .state('about', {
                url: '/about',
                controller: 'AboutCtrl',
                templateUrl: '../templates/pages/about.html'
            });

        $urlRouterProvider.otherwise('/volume-prediction');

        // This is required for Browser Sync to work poperly
        $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
    }]);


/*================================================================
 =>                  oneHydraMini App Run()
 ==================================================================*/

app.run(['$rootScope', function ($rootScope) {
    'use strict';
}]);


/* ---> Do not delete this comment (Values) <--- */

/* ---> Do not delete this comment (Constants) <--- */
