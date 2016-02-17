angular.module('webchat').factory('SocketService', ['$state', function($state) {
  // var SocketService = {};

  // var socket;

  // SocketService.init = function(){
  //   if(angular.isUndefined(socket)){
  //     socket = io();
  //   }
  // };

  // SocketService.sendMessage = function(message){
  //   socket.emit('chat message', message);
  // };


  return io();
}]);