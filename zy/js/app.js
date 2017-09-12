//var app=angular.module("app",["ui.router","indexmodule","newsModule"]);
//  app.directive("app",function(){
//  	return{
//  		restrict:"AE",
//  		templateUrl:"view/app.html",
//  		replace:true
//  	}
//  })
//   app.config(function($stateProvider,$urlRouterprovider){
//   	      $urlRouterprovider.otherwise("hello");
//   	      $stateProvider.state({
//   	      	name:'hello',
//   	      	url:'/hello',
//   	      	templateUrl:'view/index2.html',
//   	      	controller:'index'
//   	      })
//   })
var one=angular.module("one",["ui.router","indexmodule","newsModule"]);
one.config(function($roueProvider){
	  $routeProvider.when('/app.html',{
	  	templateUrl:'view/app.html',
	  	controller:'two'
	  }).when('/index2.html',{
	  	templateUrl:'view/app.html',
	  	controller:'two'
	  }).otherwise({
	  	redirextTo:'/hello'
})
})