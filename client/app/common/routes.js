angular.module('webchat').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  
  $urlRouterProvider.otherwise("/chat");
  
  $stateProvider
    .state('user', {
      url: "/user",
      template: "<ws-user></ws-user>"
    })
    .state('chat', {
      url: "/chat",
      template: "<ws-chat-window></ws-chat-window>"
    });
}]);