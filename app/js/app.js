
/*================================================================
=>                  App = oneHydraMini
==================================================================*/
/*global angular*/

var app = angular.module('oneHydraMini', ["ngCookies", "ngResource", "ngSanitize", "ngRoute", "ngAnimate", "ui.utils", "ui.bootstrap", "ui.router"]);


app.config(['$stateProvider', '$urlRouterProvider','$locationProvider','$httpProvider',
    function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
	'use strict';

    $urlRouterProvider.otherwise('/volume-prediction');

    $stateProvider

        .state('volume-prediction', {
            url: '/volume-prediction',
            templateUrl: 'templates/volume-prediction.html'
        })

        .state('about', {
            // we'll get to this in a bit
        });

	// This is required for Browser Sync to work poperly
	$httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
}]);


/*================================================================
=>                  oneHydraMini App Run()
==================================================================*/

app.run(['$rootScope', function ($rootScope) {

	'use strict';

	console.log('Angular.js run() function...');
}]);




/* ---> Do not delete this comment (Values) <--- */

/* ---> Do not delete this comment (Constants) <--- */
