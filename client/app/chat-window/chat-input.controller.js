angular.module('webchat').controller('ChatInputController', ['UserService', 'SocketService',
  function (UserService, SocketService) {
    var vm = this;

    vm.sendMessage = function (msg) {
      var user = UserService.getUsername();
      if (msg != null) {
        SocketService.emit('chat message', {
          message: msg,
          sender: user
        });
      }

      vm.message = null;
    };
  }
]);
