var app = angular.module('TravelTogether', ['ui.bootstrap', 'ngRoute'])

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
    .when('/', {
      templateUrl: '../views/partials/main.html',
      controller: 'MainCtrl'
    })
    // .when('/addcrew', {
    //   templateUrl: '../views/partials/addcrew.html',
    //   controller: 'InviteFriendsCtrl'
    // })
    .when('/addtrip', {
      templateUrl: '../views/partials/addtrip.html',
      controller: 'AddTripCtrl'
    })
    .when('/viewtrips', {
      templateUrl: '../views/partials/viewtrips.html',
      controller: 'ViewTripsCtrl'
    })
    .when('/trippage', {
      templateUrl: '../views/partials/trippage.html',
      controller: 'TripPageCtrl'
    })
    .otherwise({
        redirectTo: '/'
    });
    $locationProvider.html5Mode(false).hashPrefix('!')
}])

app.controller('MainCtrl', ['$scope', '$http', function($scope, $http){

}])

app.controller('InviteFriendsCtrl', ['$scope', '$http', function($scope, $http){

}])

app.controller('AddTripCtrl', ['$scope', '$http', function($scope, $http){

}])

app.controller('DatePickerCtrl', ['$scope', '$http', function($scope, $http){

}])

app.controller('TargetPriceCtrl', ['$scope', '$http', function($scope, $http){

}])

app.controller('EditCategoriesCtrl', ['$scope', '$http', function($scope, $http){

}])

app.controller('ViewTripsCtrl', ['$scope', '$http', function($scope, $http){
  $scope.trips = [{name: 'blah'}, {name: 'yadda'}]
  var userurl = 'http://10.1.106.245:9000/mongoOps'
    +'/trips'+'/user'+'/57255ef8d09e392a591994e8'

  $http({
            method: 'GET',
            url: userurl
          })
          .then(function queryResolve(response){
            $scope.searchResults = response.data;
          }, function queryReject(error){
            console.log('it didnt work')
          });
}])

app.controller('TripPageCtrl', ['$scope', '$http', '$location', function($scope, $http, $location){

  $scope.people = []

  $scope.trip = $location.hash()

  var tripurl = 'http://10.1.106.245:9000/mongoOps'+'/trips'+'/'+ $scope.trip
  $http({
            method: 'GET',
            url: tripurl
          })
          .then(function queryResolve(response){
            $scope.searchResults = response.data;
            $scope.people = $scope.searchResults.users
            $scope.hasHistory = (!!$scope.searchResults.priceHistory[0])
          }, function queryReject(error){
            console.log('it didnt work')
          });

}])

app.controller('SummaryCtrl', ['$scope', '$http', function($scope, $http){

}])

app.controller('MessageCtrl', ['$scope', '$http', function($scope, $http){

}])

app.controller('EditOrBuyButtonCtrl', ['$scope', '$http', function($scope, $http){

}])
