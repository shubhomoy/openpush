var app = angular.module('app', ['ngRoute', 'ngProgress']);

app.factory('topprService', function() {
	return {
		websiteListApi : 'https://hackerearth.0x10.info/api/one-push?type=json&query=list_websites'
	};
});

app.run(function($rootScope, $location) {
	$rootScope.gotoView = function(path) {
		$location.path(path);
	};
	$
});

app.controller('homeCtrl', function($rootScope, $scope, $http, topprService, ngProgressFactory) {

	$scope.websites = [];
	$scope.total = 0;
	$scope.searchText = "";
	$scope.progressbar = ngProgressFactory.createInstance();
	$scope.progressbar.setHeight('3px');
	$scope.progressbar.setColor('#0d47a1');
	$scope.push_title = "";
	$scope.push_url = "";
	$scope.push_tag = "";

	$('.modal-trigger').leanModal();

	var fetchWebsites = function() {
		$scope.progressbar.start();
		$http.get(topprService.websiteListApi)
		.success(function(response) {
			$scope.websites = response.websites;
			$scope.total = response.websites.length;
			$scope.progressbar.complete();
			$('#loading-screen').fadeOut(function() {
				$('#contents').show();
			});
		});
	};
	fetchWebsites();

	$scope.search = function() {
		$scope.total = $scope.websites.length;
	};

	$scope.closeModal = function() {
		$scope.push_title = "";
		$scope.push_url = "";
		$scope.push_tag = "";
	};

	$scope.push = function() {
		if($scope.push_title != '' && $scope.push_tag != '' && $scope.push_url != '') {
			$('#modal1').closeModal();
			$('#push_status').html('Pushing your website...');
			$('#modal2').openModal();
			$http.get('https://hackerearth.0x10.info/api/one-push?type=json&query=push&title='+$scope.push_title+'&url='+$scope.push_url+'&tag='+$scope.push_tag)
			.then(function(response) {
				$('#push_status').html("Your portfolio has been successfully added");
			}, function(response) {
				console.log(response);
				$('#push_status').html("Our servers are haing a huge amount of traffic. Please try again later :(");
			});
		}else{
			alert('Some fields are missing');
		}
	};
});