angular.module('webchat').factory('SocketService', [function() {
  return io();
}]);