angular.module("app", [ui-router])
  .config (function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    // HOME STATE
    .state('home', {
      url: '/home',
      // templateUrl: './app/routes/home/homeTmpl.html',
      // controller: 'homeCtrl'
    });


  })
