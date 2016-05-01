var app = angular.module('TravelTogether', ['ui.bootstrap', 'ngRoute'])

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl: '../views/partials/main.html',
      controller: 'MainCtrl'
    })
    // .when('/addtrip', {
    //
    // })
    .otherwise({
        redirectTo: '/'
    });

}])

app.controller('MainCtrl', ['$scope', '$http', function($scope, $http){

}])
