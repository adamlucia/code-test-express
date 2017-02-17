'use strict';
angular.module('carney')
  .component('members', {
    templateUrl: '/app/default/default.html',
    controller: function membersController ($scope, $http){
      var self = this;
      $scope.oneAtATime = true;

      $scope.status = {
        isCustomHeaderOpen: false,
        isFirstOpen: true,
        isFirstDisabled: false
      };

      $scope.filter = 'test';

      $http({
        method: 'GET',
        url: '/members'
      }).then(function(response){
        self.members = response.data.data;
        self.error = response.data.error;
      }).catch(function(error){
        console.log('Uh oh!', error);
      })
    }
  });
