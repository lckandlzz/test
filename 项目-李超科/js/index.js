
//var timer = null; 
//function banner(s){
//	$("#lo-lis li").eq(s).siblings().fadeOut(1000).end().fadeIn(1000);
//}
//function zdlb(){
//	i++;
//	if(i>3){
//		i=0;
//	}
//	banner(i);
//}
//timer = setInterval(zdlb,2000);
window.onload=function(){
$(function(){
	

var i = 0;	
function lbs(s){
			$("#lo-lis").children().eq(s).fadeIn(400).siblings("li").fadeOut(400);
			$("#olis").children().eq(s).addClass("active").siblings("li").removeClass("active");
		}
        var timer=null;
        timer=setInterval(lb,2000);
function lb(){
	    i++;
	    if(i>3){
		i=0;
	}
	   lbs(i);
}
      $("#olis").children().click(function(){
  	     clearInterval(timer);
  	      var index=$(this).index();
  	      i=index;
  	      lbs(i);
   
})
    
    $("#lo-lis").mouseenter(function(){
    	clearInterval(timer);
    })
    $("#lo-lis").mouseleave(function(){
    	timer=setInterval(lb,2000)
    })
    $("#prev").click(function(){
    	clearInterval(timer)
    	if(i==0){
    		i=4;
    	}else{
    		i--;
    	}
    	lbs(i);
    })
    $("#next").click(function(){
    	clearInterval(timer)
    	if(i==4){
    		i=0;
    	}else{
    		i++;
    	}
    	lbs(i);
    })
    $(".bottom-top").mouseenter(function(){
    	  $(".f-top").css("display","block");
    })
    
      $(".bottom-top").mouseleave(function(){
    	 $(".f-top").css("display","none");
    })
    
    
    })


     
}
