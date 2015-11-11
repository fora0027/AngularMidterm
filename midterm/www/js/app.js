angular.module('starter', ['ionic', 'starter.controllers',  'LocalStorageModule', 'ngToast'])


.config(function($stateProvider, $urlRouterProvider, localStorageServiceProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: '/:listId',
    views: {
      'menuContent': {
        templateUrl: 'templates/mainList.html',
        controller: 'AppCtrl'
      }
    }
  })
$urlRouterProvider.otherwise('/app/FirstList');
    localStorageServiceProvider
    .setPrefix('')
    .setNotify(true, true);

});
