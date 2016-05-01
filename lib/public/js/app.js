var app = angular.module('TravelTogether', ['ui.bootstrap', 'ngRoute'])

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl: '../views/partials/main.html',
      controller: 'MainCtrl'
    })
    .when('/addcrew', {
      templateUrl: '../views/partials/addcrew.html',
      controller: 'InviteFriendsCtrl'
    })
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

}])

app.controller('TripPageCtrl', ['$scope', '$http', function($scope, $http){

}])

app.controller('SummaryCtrl', ['$scope', '$http', function($scope, $http){

}])

app.controller('MessageCtrl', ['$scope', '$http', function($scope, $http){

}])

app.controller('EditOrBuyButtonCtrl', ['$scope', '$http', function($scope, $http){

}])
