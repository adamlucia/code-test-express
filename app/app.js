'use strict';
var angular;

angular.module('carney', ['ui.bootstrap', 'ngRoute'])
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  // $locationProvider.html5Mode(true);

  $routeProvider
  .when('/index', {
    template: '<members></members>'
  })
  .otherwise('/index');
}])
.run(['$rootScope', '$http', function ($rootScope, $http) {

}]);
