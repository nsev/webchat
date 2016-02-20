angular.module('webchat').factory('SocketService', [function() {
  var ios = io();
  return ios;
}]);