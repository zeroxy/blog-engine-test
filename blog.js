angular.module('blog',['ngRoute'])
.filter('nonamed', function(){
	return function(input){return (input == undefined || input == null)?'no-named':input;}
}).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider
	.when('/', {templateUrl:'posting/'+list[list.length-1], controller:'blogC'})
	.otherwise({ redirectTo: '/'+list[list.length-1].substring(0,list[list.length-1].lastIndexOf('.')) });
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

var list = [
'github_blog_making.html'
];