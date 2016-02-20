angular.module('webchat').controller('SidebarController', ['SocketService', 'NotificationService', '$scope',
  function (SocketService, NotificationService, $scope) {
    var vm = this;
    vm.users = [];

    SocketService.on('user joined', function (users) {
      $scope.$apply(function () {
        vm.users = users;
        console.log(users);
        if(users.length > 1){
          var user = users[users.length - 1];
          NotificationService.showDesktopNotification('User joined ' + user.username, null, null);
        }
      });
    });

    SocketService.on('user left', function (users) {
      $scope.$apply(function () {
        vm.users = users;
        if(users.length > 1){
          var user = users[users.length - 1];
        }
      });
    });
  }
]);
