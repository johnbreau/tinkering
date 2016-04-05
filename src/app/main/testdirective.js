  angular.module('yeomanTest')
    .directive('testdirective', function(){
      return {
        restrict: 'EA',
        templateUrl: '../../../assets/views/testdirective.html',
        controller: 'AboutController',
        link: function(scope, element, attrs){
            scope = true,

            element.bind('click', function(){
              alert('that is it dude');
            });

            if (scope === true){
              console.log('scope is true');
            } else {
              console.log('scope is false');
            }
            }
      };

    });
