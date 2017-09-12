
	$(function(){
		$(".left-up").on("mouseenter",function(){
		   var $this=$(this).children(1).prev();
			$($this).css("transform","scale("+1.2+")");
			
		})
		$(".left-up").on("mouseleave",function(){
		   var $this=$(this).children(1).prev();
			$($this).css("transform","scale("+1+")");
			
		})
		$(".left-down").on("mouseenter",function(){
		   var $this=$(this).children(1).prev();
			$($this).css("transform","scale("+1.1+")");
			
		})
		$(".left-down").on("mouseleave",function(){
		   var $this=$(this).children(1).prev();
			$($this).css("transform","scale("+1.0+")");
			
		})
		$(".pull-right").on("mouseenter", function() {
		var $this = $(this).children().children(1).prev();
		$($this).css("transform", "scale(" + 1.1 + ")");
	}).on("mouseleave", function() {
		var $this = $(this).children().children(1).prev();
		$($this).css("transform", "scale(" + 1 + ")");
	});
	    $(".foot-logo2").on("mouseenter",function(){
	    	$(".wx-ewm").css("display","block");
	    })
	     $(".foot-logo2").on("mouseleave",function(){
	    	$(".wx-ewm").css("display","none");
	    })
	      $(".foot-logo3").on("mouseenter",function(){
	    	$(".zfb-ewm").css("display","block");
	    })
	     $(".foot-logo3").on("mouseleave",function(){
	    	$(".zfb-ewm").css("display","none");
	    })
	
	})
