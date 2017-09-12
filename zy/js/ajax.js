$(function(){
				$.getJSON("http://query.yahooapis.com/v1/public/yql",
			{ q: "select * from json where url=\"http://api.avatardata.cn/ActNews/Query?key=0fa64736456d44469ff392cedda78110&keyword=科比\"",format: "json"},
				function(data){
					var box=data.query.results.json.result;
                    $(".full_title").html(box[0].full_title);
                    $(".full_title").on("touchstart",function(){
                    	  $(".f_img").attr("src",box[0].img);
                    	  $(".f_content").html(box[0].content);
                    })
                    $(".full_title1").html(box[1].full_title);
                    $(".full_title1").on("touchstart",function(){
                    	   $(".f_img1").attr("src",box[1].img);
                    	  $(".f_content1").html(box[1].content);
                    })
                    $(".full_title2").html(box[2].full_title);
                    $(".full_title2").on("touchstart",function(){
                    	    $(".f_img2").attr("src",box[2].img);
                    	  $(".f_content2").html(box[2].content);
                    })
                    $(".full_title3").html(box[3].full_title);
                    $(".full_title3").on("touchstart",function(){
                   	       $(".f_img3").attr("src",box[3].img);
                    	  $(".f_content3").html(box[3].content);
                    })
                    $(".full_title4").on("touchstart",function(){
                    	   $(".f_img4").attr("src",box[4].img);
                    	  $(".f_content4").html(box[4].content);
                    })
                     	 
                 
//					$("#show").html(box[0].bottomlink[0].text);
//					$("#show").click(function(){
//						window.location.href=box[0].bottomlink[0].url;
//					})
				});
				
				$.getJSON("http://query.yahooapis.com/v1/public/yql",
				{ q: "select * from json where url=\"http://api.avatardata.cn/ActNews/Query?key=0fa64736456d44469ff392cedda78110&keyword=NBA\"",format: "json"},
				function(data){
					var box1=data.query.results.json.result;
					console.log(box1)
				      $(".n-top").html(box1[0].full_title);
                      $(".n-top").on("touchstart",function(){
                    	  $(".n-img").attr("src",box1[0].img);
                    	  $(".n-header").html(box1[0].content);
                    })
                      $(".n-top1").html(box1[1].full_title);
                      $(".n-top1").on("touchstart",function(){
                    	  $(".n-img1").attr("src",box1[1].img);
                    	  $(".n-header1").html(box1[1].content);
                    })
                      $(".n-top2").html(box1[2].full_title);
                      $(".n-top2").on("touchstart",function(){
                    	  $(".n-img2").attr("src",box1[2].img);
                    	  $(".n-header2").html(box1[2].content);
                    	 
                    })
                      $(".n-top3").html(box1[3].full_title);
                      $(".n-top3").on("touchstart",function(){
                    	  $(".n-img3").attr("src",box1[3].img);
                    	  $(".n-header3").html(box1[3].content);
                    })
				})
				
				$.getJSON("http://query.yahooapis.com/v1/public/yql",
				{ q: "select * from json where url=\"http://api.avatardata.cn/ActNews/Query?key=0fa64736456d44469ff392cedda78110&keyword=视频\"",format: "json"},
				function(data){
					var box2=data.query.results.json.result;
					console.log(box2)
				      $(".x-header").html(box2[0].full_title);
                    	  $(".x-main").attr("src",box2[0].img);
                    	  $(".x-footer").html(box2[0].content);
                    	  $(".x-header1").html(box2[1].full_title);
                    	  $(".x-main1").attr("src",box2[2].img);
                    	  $(".x-footer1").html(box2[1].content);
                    	  $(".x-header2").html(box2[2].full_title);
                    	  $(".x-main2").attr("src",box2[2].img);
                    	  $(".x-footer2").html(box2[2].content);
                    	  $(".x-header3").html(box2[3].full_title);
                    	  $(".x-main3").attr("src",box2[3].img);
                    	  $(".x-footer3").html(box2[3].content);
			
				})
			})