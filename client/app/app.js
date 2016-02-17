// var socket = io();
// $('form').submit(function() {
//   socket.emit('chat message', $('#m').val());
//   $('#m').val('');
//   return false;
// });
// socket.on('chat message', function(msg) {
//   $('#messages').append($('<li>').text(msg));
// });

angular.module('webchat', ['ui.router','webchat.tpl']);
angular.module('webchat.tpl', []);


angular.module('webchat').run(['UserService', function(UserService){
  UserService.init();
}]);