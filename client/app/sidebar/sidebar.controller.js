angular.module('webchat').controller('SidebarController', ['SocketService', 'NotificationService', 'UserService', '$scope',
  function (SocketService, NotificationService, UserService, $scope) {
    var vm = this;
    vm.users = [];
    vm.user = {};
    function getUser(){
      vm.user = UserService.getUser();
    }

    vm.updateUserSetting = function(setting, value){
      UserService.updateSetting(setting, value);
      getUser();
    };

    SocketService.on('user joined', function (users) {
      $scope.$apply(function () {
        vm.users = users;
        console.log(users);
        if(users.length > 1){
          var user = users[users.length - 1];
          console.log(user)
          NotificationService.showDesktopNotification('User joined channel', null, user.username);
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

    function init(){

    }

    init();
  }
]);
