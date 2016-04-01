angular.module('yeomanTest')
  .directive('aboutdirective', function(){
    return {
      template: '<div>{{ test }}</div>',
      restrict: 'E',
      link: function (scope, elem) {
        scope.addElement = function(){
        console.log(elem);
        elem.after($compile('<ng-portlet></ng-portlet>')(scope));
      }
    }
  }
});
