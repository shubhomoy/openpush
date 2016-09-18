<!DOCTYPE html>
<html>
<head>
	<title>Toppr</title>
	<base href="/">
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Varela+Round" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Rancho" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Handlee" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
	<link rel="stylesheet" type="text/css" href="/libs/css/materialize.min.css">
	<link rel="stylesheet" type="text/css" href="/libs/css/ngProgress.css">
	<link href="https://fonts.googleapis.com/css?family=Bree+Serif" rel="stylesheet">
	<link rel="stylesheet" type="text/css" href="/res/css/main.css">
	<script type="text/javascript" src="/libs/js/jquery.js"></script>
	<script type="text/javascript" src="/libs/js/materialize.min.js"></script>
	<script type="text/javascript" src="/libs/js/angular.min.js"></script>
	<script type="text/javascript" src="/libs/js/angular-route.min.js"></script>
	<script type="text/javascript" src="/libs/js/ngprogress.min.js"></script>
	<script type="text/javascript" src="/res/js/main.js"></script>
	<script type="text/javascript" src="/res/js/router.js"></script>
</head>
<body ng-app="app">
	<div class="navbar blue">
		<div class="row">
			<div class="col s12 m6">
				<h4 class="titlelogo">OnePush</h4> <span style="padding:20px;float:left;"> <span style="font-family: 'Handlee', cursive;">- finding the best online portfolio/person!</span>
			</div>
			<div class="col s12 m6">
				<a href="http://shubhomoy.pinpost.in" class="titlelink" target="_blank">About Me</a>
			</div>
		</div>
	</div>
	<div ng-view></div>
</body>
</html>