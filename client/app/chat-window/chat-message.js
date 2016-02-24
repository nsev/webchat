angular.module('webchat').component('wsChatMessage', {
  templateUrl: 'chat-window/chat-message.html',
  controller: 'ChatMessageController as message',
  bindings: {
    message: '='
  }
});