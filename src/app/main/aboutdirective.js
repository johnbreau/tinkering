angular.module('yeomanTest')
  .directive('aboutdirective', function(){
    return {
      restrict: 'EA',
      controller: "AboutController",
      controllerAs: "vm",
      restrict: 'E',
      link: function($scope, element, attrs){
        element.bind('click', function(){
          alert('thats what its about.');
        })
      }
  }
});
