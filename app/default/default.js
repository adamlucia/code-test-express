'use strict';
angular.module('carney')
  .component('members', {
    templateUrl: '/app/default/default.html',
    controller: function membersController ($scope, $http){
      var self = this;

      $scope.oneAtATime = true;
      self.prices = 0;
      self.avgPrice;
      self.members = [];

      $http({
        method: 'GET',
        url: '/members'
      }).then(function(response){
        //get the error if we need it...
        self.error = response.data.error;

        //loop over member object and push it to an array (so angular can sort)
        //while tallying prices for the average sub price
        angular.forEach(response.data.data, function(value, key){
            self.members.push(value);
            self.prices += value.subscription.price;
        });

        //calculate average
        self.avgPrice = self.prices / self.members.length;

      }).catch(function(error){
          console.log('Uh oh!', error);
      })
    }
  });
