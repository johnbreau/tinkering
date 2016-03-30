  angular.module('yeomanTest')
    .directive('testdirective', function(){
      return {
        restrict: 'EA',
        templateUrl: '../../../assets/views/testdirective.html'
      };
    });
