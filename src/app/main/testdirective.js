  angular.module('yeomanTest')
    .directive('testdirective', function(){
      return {
        restrict: 'EA',
        templateUrl: '../../../assets/views/testdirective.html',
        controller: 'AboutController',
        link: function(scope, element, attrs, controller){
            element.bind('click', function(){
              alert('that is it dude');
            });
            }
      };

    });
