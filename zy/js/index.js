$(function(){
	var container=document.getElementById("container");
		     container.addEventListener("touchstart",function(ev){
				ev.preventDefault()
			})
		     var w=$(".container").find("div").eq(0).width();
		     $(function(){
		     	var n=0;
		     	$("#container").on("swipeLeft",function(){
		     		n++;
		     		if(n>$(".container").find("div").size()-1){
		     			n=$(".container").find("div").size()-1;
		     			
		     		}
		     		 $(".container").css("transform","translate3d(-"+n*w+"px,0,0)");
		     		 $(".h-list li").addClass("active").siblings().removeClass("active");
		     	})
		     		$("#container").on("swipeRight",function(){
		     		n--;
		     		if(n<0){
		     			n=0;
		     		}
		     		 $(".container").css("transform","translate3d(-"+n*w+"px,0,0)");
		     	})
		     		$(".h-list").on("touchstart","li",function(){
		     			var index=$(this).index();
		     			 $(this).addClass("active").siblings().removeClass("active");
		     			$(".container").css("transform","translate3d(-"+index*w+"px,0,0)");
		     			index++;
		     			if(index>=5){
		     				$(this).removeClass("active");
		     			}
		     		
		     		})
		     		
		     		var mySwiper = new Swiper('.swiper-container',{
								autoplay:3000,
					            pagination : '.swiper-pagination',
					            autoplayDisableOnInteraction : false,
					//pagination : '#swiper-pagination1',
					})
		     })
	
	  $(".list").on("touchstart",function(){
	       $(".header-container").css("display","block");
	         $("section").css("display","none");
	  })
	  $(".h-change").on("touchstart",function(){
	       $(".header-container").css("display","none");
	         $("section").css("display","block");
	  })
	  $("#btn1").on("touchstart",function(){
	  	window.location.href="view/sy.html";
	  })
	  $(".lis").on("touchstart","li",function(){
	  	 var index=$(this).index();
	  	 $(this).addClass("l-active").siblings().removeClass("l-active")
	  })
	   $(".sy").on("touchstart",function(){
	  	 window.location.href="index.html";
	  })
	  $(".xc").on("touchstart",function(){
	  	 window.location.href="view/xc.html";
	  })
	   $(".wo").on("touchstart",function(){
	  	 window.location.href="view/sz.html";
	  })
})
//var app=angular.module("app",[])
//  app.controller("two",["$scope",function($scope){
//  	     $scope.gretting={
//  	     		templateUrl:'view/app.html',
//  	     }
//  }])
//   app.controller("three",["$scope",function($scope){
//  	     $scope.gretting={
//  	     text:"hello"
//  	     }
//  }])
//    app.controller("four",["$scope",function($scope){
//  	     $scope.gretting={
//  	     	text:"第四面"
//  	     }
// }])
//app.config(function($roueProvider){
//	  $routeProvider.when('/app.html',{
//	  	templateUrl:'view/app.html',
//	  	controller:'two'
//	  }).when('/index2.html',{
//	  	templateUrl:'view/app.html',
//	  	controller:'two'
//	  }).otherwise({
//	  	redirextTo:'/hello'
//})
