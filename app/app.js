angular.module('smartMirror', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider){
    $routeProvider
      .when('/', {
        templateUrl: 'app/src/mainView.html'
      })
  }])

  .directive('smTimeWidget', function(){
    return {
      restrict: 'E',
      scope: {},
      templateUrl: 'app/src/widgets/_timeWidget.html',
      link: function(scope, ele, attr){
      	scope.moment = moment;

      	scope.date = moment().format('LTS');

      	function refreshTime(){
        	scope.date = moment().format('LTS');
      	}

      	scope.$watch('date', function(newVal, oldVal){
      		console.log('new:', newVal, 'oldVal:', oldVal);
      		refreshTime();
      	})

      }
    }
  })
