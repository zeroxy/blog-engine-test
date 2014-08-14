!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');
angular.module('blog',['ngRoute'])
.filter('nonamed', function(){
	return function(input){return (input == undefined || input == null)?'no-named':input;}
}).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider
	.when('/', {templateUrl:'posting/'+list[0], controller:'blogC'})
	.when('/menu/bloglist', {templateUrl:'partial/menu.html', controller:'blogC'})
	.otherwise({ redirectTo: '/'});
	for(var i in list){
		$routeProvider.when('/'+list[i].substring(0,list[i].lastIndexOf('.')), {templateUrl:'posting/'+list[i], controller:'blogC'});
	}
}]).controller('blogC', function($scope){
	$scope.test = 'asdf';
	$scope.menu = list;
}).directive('blogmenu', function(){
	return {
		templateUrl:'partial/menu.html'
		, restrict:'E'
	}
}).directive('introduction', function(){
	return {
		templateUrl:'partial/introduction.html'
		, restrict:'E'
	}
}).directive('blognavbar', function(){
	return {
		templateUrl:'partial/blognavbar.html'
		, restrict:'E'
	}
});
