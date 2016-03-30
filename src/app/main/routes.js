

  angular
    .module('yeomanTest')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '../assets/views/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/contact', {
        templateUrl: '../assets/views/contact.html',
        controller: 'ContactController'
      })
      .when('/about', {
        templateUrl: '../assets/views/about.html',
        controller: 'AboutController',
      })
      .otherwise({
        redirectTo: '/'
      });
  }
