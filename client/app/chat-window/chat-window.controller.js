angular.module('webchat').controller('ChatWindowController', ['UserService', 'SocketService', 'NotificationService', '$scope',
  function (UserService, SocketService, NotificationService, $scope) {
    var vm = this;
    vm.messages = [];

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

    SocketService.on('chat message', function (msg) {
      $scope.$apply(function () {
        vm.messages.push(msg);
        NotificationService.showDesktopNotification('Message from ' + msg.sender, null, msg.message);
      });
    });
  }
]);
