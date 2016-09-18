app.config(function($routeProvider, $locationProvider) {
	$routeProvider.
	when('/', {
		templateUrl : '/tmpl/home.html',
		controller : 'homeCtrl'
	})
	.otherwise({
		redirectTo : '/'
	});

	$locationProvider.html5Mode(true);
});