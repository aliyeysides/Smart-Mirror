angular.module('smartWeather', []).service('smartWeather', ['$http', function($http){
	// Simple GET request example:

	this.getForcast = function(){
	$http({
	  method: 'GET',
	  // params: {
	  // 	id:  cityId
	  // },
	  url: 'http://api.openweathermap.org/data/2.5/forecast/city?id=524901&APPID=bddc7840d4dc3f3939a0b6b56c1fa5c7'
	}).then(function successCallback(response) {
	    // this callback will be called asynchronously
	    // when the response is available
	  }, function errorCallback(response) {
	  	console.error(response);
	    // called asynchronously if an error occurs
	    // or server returns response with an error status.
	  });
	}
}])