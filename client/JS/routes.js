//inject the ngRoute dependency to the module
var link = angular.module('link', ['ngRoute', 'angularMoment']);
//Use the config method to set up routing
link.config(function ($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: './partials/home.html'
		})
		.when('/forum', {
			templateUrl: './partials/forum.html'
		})
		.when('/instagram', {
			templateUrl: './partials/instagram.html',
			controller: 'InstagramController'
		})
		// .when('/contribution', {
		// 	templateUrl: './partials/contribution.html'
		// })
		.when('/contribution/add', {
			templateUrl: './partials/addContribution.html'
		})
		.when('/maps', {
			templateUrl: './partials/maps.html'
		})
		.when('/updates', {
			templateUrl: './partials/contribution.html'
		})
		.otherwise({
			redirectTo: '/'
		})
});
// *******************************************************************************
// ****************************** INSTAGRAM FACTORY AND CONTROLLER ***************
link.factory("InstagramFactory", function($http){
	factory = {}
	var object;

	$.ajax( {
		type: 'GET',
		dataType: 'jsonp',
		data: {},
		crossDomain: 'true',
		url: "https://api.instagram.com/v1/tags/LibertyInNorthKorea/media/recent?access_token=1368406440.4f2e0c5.645c887cde2e46faa62f8d182d837060",
		error: function(textStatus, errorThrown) {
			alert("error");
		},
		success: function(msg) {
			// console.log(msg);
			callback(msg);
			object = msg;
		}
	});

	factory.getPhotos = function(callback) {
		// $http.get("https://api.instagram.com/v1/tags/LibertyInNorthKorea/media/recent?access_token=1368406440.4f2e0c5.645c887cde2e46faa62f8d182d837060").success(function(output){
		// 	callback(output);
		// })
		callback(object);

	}
	return factory
})

link.controller("InstagramController", function($scope, InstagramFactory){
	// var object;
	InstagramFactory.getPhotos(function(data){
		console.log(data);
		console.log("console logging the data");
		// object = data;
		$scope.pictures = "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0CAcQjRxqFQoTCLDw4J_W6MgCFYSUiAodQMgADg&url=http%3A%2F%2Fangularconnect.com%2F&psig=AFQjCNHbTHNAgUZ_UBxYxSHKUF5V30WkrA&ust=1446242219371032";;
		$scope.testing = "string";
		console.log("non working one", Date());
		// $scope.testing = "This is a test";
	})
	console.log("Working one", Date());

})
