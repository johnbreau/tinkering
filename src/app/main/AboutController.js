angular.module('yeomanTest')
  .controller('AboutController', ['$scope', function($scope) {
      this.dailyEntry1 = 'Daily Entry';
      this.dailyEntry2 = 'Name';
      this.dailyEntry3 = 'Favorite Baseball Team';

      $scope.addItem = function(){
        alert('hey baby');
      };
}]);
