angular.module('webchat').controller('ChatMessagesController', ['NotificationService', 'SocketService', '$scope',
  function (NotificationService, SocketService, $scope) {
    var vm = this;

    vm.messages = [];

    SocketService.on('chat message', function (message) {
      $scope.$apply(function () {
        vm.messages.push(message);
        NotificationService.showDesktopNotification('Message from ' + message.sender, null, message.message);
      });
    });

    SocketService.on('chat history', function (messages) {
      $scope.$apply(function () {
        console.log(messages);
        vm.messages = messages;
        // vm.messages.push(messages);
        // NotificationService.showDesktopNotification('Message from ' + msg.sender, null, msg.message);
      });
    });
  }
]);
