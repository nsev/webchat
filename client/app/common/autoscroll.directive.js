//https://stackoverflow.com/questions/7303948/how-to-auto-scroll-to-end-of-div-when-data-is-added
angular.module('webchat').directive('wsAutoscroll', [function () {
  return {
    restrict: 'A',
    link: function (scope, iElement, iAttrs) {
      scope.$watch(function(){
        return iElement[0].scrollHeight;
      },function(newVal){
        var lastElm = $(iElement).children().last()
        if(lastElm[0] != null){
          lastElm[0].scrollIntoView(true);
        }

      });
    }
  };
}])