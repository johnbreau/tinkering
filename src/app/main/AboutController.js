angular.module('yeomanTest')
  .controller('AboutController', ['$scope', function($scope) {
      var vm = this;

      vm.customers = {
        name: 'Haley', name: 'Ella', name: 'Landon', name: 'John'
      };

      vm.dailyEntry1 = 'Daily Entry';
      vm.dailyEntry2 = 'Name';
      vm.dailyEntry3 = 'Favorite Baseball Team';

      $scope.submit = function() {
        $scope.list = [];
        $scope.list.push(this.dailyEntry1, this.dailyEntry2, this.dailyEntry3);
        $scope.dailyEntry1 = '';
        $scope.dailyEntry2 = '';
        $scope.dailyEntry3 = '';
      }

      $scope.alertItNow = function() {
        alert('alert it now');
      }

      $scope.viewModelTest = function() {
        $scope.numbers = [];
        var yourNumber = prompt('gimme a number');
        var myNumber = Math.random();
        var total = myNumber * yourNumber;
        var roundedTotal = Math.round(total);
        alert('your total is ' + roundedTotal);
      }
}]);
