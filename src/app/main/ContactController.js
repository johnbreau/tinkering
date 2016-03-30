
angular.module('yeomanTest')
        .controller('ContactController', ['$scope', function($scope) {
    $scope.greeting = 'Hola';

    $scope.runBaby = function(){
      if($scope.greeting === 'Hola'){
      $scope.greeting = 'Howdy';
    } else ($scope.greeting = 'Hola')
      };
}]);
