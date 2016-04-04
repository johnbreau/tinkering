  angular.module('yeomanTest')
    .directive('testdirective', function(){
      return {
        restrict: 'EA',
        templateUrl: '../../../assets/views/testdirective.html',
        link: function(scope, element, attrs){
            element.bind('click', function(){
              alert('that is it dude');
            })
        }
      };

    });
