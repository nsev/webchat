angular.module('webchat').controller('ChatWindowController', ['UserService', 'SocketService', 'NotificationService', '$scope',
  function (UserService, SocketService, NotificationService, $scope) {
    var vm = this;
    vm.messages = [];

    SocketService.on('chat message', function (msg) {
      $scope.$apply(function () {
        vm.messages.push(msg);
        NotificationService.showDesktopNotification('Message from ' + msg.sender, null, msg.message);
      });
    });
  }
]);
