angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('mobileApp', {
    url: '/page1',
    templateUrl: 'templates/mobileApp.html',
    controller: 'mobileAppCtrl'
  })

  .state('contactUs', {
    url: '/page5',
    templateUrl: 'templates/contactUs.html',
    controller: 'contactUsCtrl'
  })

  .state('iOS', {
    url: '/page2',
    templateUrl: 'templates/iOS.html',
    controller: 'iOSCtrl'
  })

  .state('aNDROID', {
    url: '/page4',
    templateUrl: 'templates/aNDROID.html',
    controller: 'aNDROIDCtrl'
  })

  .state('aPP', {
    url: '/page3',
    templateUrl: 'templates/aPP.html',
    controller: 'aPPCtrl'
  })

  .state('page', {
    url: '/page6',
    templateUrl: 'templates/page.html',
    controller: 'pageCtrl'
  })

$urlRouterProvider.otherwise('/page6')


});