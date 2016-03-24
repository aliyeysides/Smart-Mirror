angular.module('smartMirror', ['ngRoute', 'smartWeather'])
  .config(['$routeProvider', function($routeProvider){
    $routeProvider
      .when('/', {
        templateUrl: 'app/src/mainView.html'
      })
  }])

  .directive('smTimeWidget', ['$interval', function($interval){
    return {
      restrict: 'E',
      scope: {},
      templateUrl: 'app/src/widgets/_timeWidget.html',
      link: function(scope, ele, attr){

      	scope.date = _returnCurrentTime();

      	// 1 sec refresh rate
      	$interval(function(){
      		scope.date = _returnCurrentTime();
      	}, 1000);

      }

    }

		function _returnCurrentTime(){
			return moment().format('MMMM Do YYYY, h:mm a');
		}

  }])

  .directive('smWeatherWidget', ['smartWeather', function(smartWeather){
  	return {
  		restrict: 'E',
  		scope: {},
  		templateUrl: 'app/src/widgets/_weatherWidget.html',
  		link: function(scope, ele, attr){
  			console.log(smartWeather);

  			_getForcast();
  		}

  	}

		function _getForcast(){
			smartWeather.getForcast().then(function(results){
				console.log('results:', results);
			})
		}

  }])
