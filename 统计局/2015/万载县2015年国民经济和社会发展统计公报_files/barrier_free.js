// JavaScript Document

// 无障碍阅读功能
	$(function(){
	// 1、纯文本
	$(".top_tools_txt").click(function(){
		if(!$(this).hasClass("on")){
			$("link[id != 'base_style']").each(function(index, element) {
				var e =  $(element);
				e.attr("url",e.attr("href"));
			});
			$(".main_container").css("text-align","center");
			$("link[id != 'base_style']").attr("href","");
			$(".main_container img").hide();
			$(".section_index_pics").hide();
			$(".section_index_swiper").hide();
			$(".section_news_swiper").hide();
			$(this).addClass("on");
			$("table").addClass("margin_auto");
			$(".main_container").addClass("bf_main_font");
			//首页
			$(".banner").addClass("display_none");
		}else{
			$("link[id != 'base_style']").each(function(index, element) {
				var e =  $(element);
				e.attr("href",e.attr("url"));
			});
			$(".main_container").css("text-align","left");
			$(".main_container img").show();
			$(".section_index_pics").show();
			$(".section_index_swiper").show();
			$(".section_news_swiper").show();
			$(this).removeClass("on");
			$("table").removeClass("margin_auto");
			$(".main_container").removeClass("bf_main_font");
			//首页
			$(".banner").removeClass("display_none");
		}
	});
	
	// 2、页面放大、缩小
	var zoon = 1;
	$(".top_tools_pageB").click(function(){zoonfun(0);});
	$(".top_tools_pageS").click(function(){zoonfun(1);});
	var zoonfun = function(bool){
		if(bool==0){
			zoon+=.1;
			if(zoon > 2){
				zoon=2;
			}
		}else if(bool==1){
			if(zoon < .5){
				zoon=.5;
			}else if(zoon>1){
				zoon-=.1;
			}
		}
		if(bool == -1){
			zoon = 1;
		}
		var bodym = $(".main_container");
		bodym.css({'transform-origin':'top center'});
		bodym.css({'transform':'scale('+zoon+','+zoon+')'});
		if(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion .split(";")[1].replace(/[ ]/g,"")=="MSIE8.0"){ 
			bodym.css("zoom",zoon);
		}
	};
	
	// 3、配色
	var element_styles = new Array(); // 修改的对象样式集合(记录已修改的)
	var element_doms = new Array(); // 修改的对象集合(记录已修改的)
	var changeColorFlag = false;
	$(".top_tools_color").click(function(){
		var index = $(".top_tools_color").index(this);
		if(index !=0){
			$(".main_container").addClass("text_decoration");
			//a_color(index);
			change_color($(this).css("background-color"),$(this).css("color"));
			changeColorFlag = true;
			if (index==1 || index==3) {
				if ("a[href != '']") {
					$(".main_container a").css("color","#fff");
				};
			}else if(index==2 || index==4){
				if ("a[href != '']") {
					$(".main_container a").css("color","#0000ff");
				}
			}
			return;
		}else{
			$(".main_container").removeClass("text_decoration");
			if(changeColorFlag){
				for(var i=0; i<element_doms.length; i++){
					$(element_doms[i]).attr("style",element_styles[i]);
				}
				$('body').removeAttr("style");
				changeColorFlag = false;
			}
		}
	});
	
	var change_color = function(bgcolor,txtcolor){
		var e = $($(".main_container").find("div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,form,fieldset,input,textarea,p,blockquote,th,td,ul, ol input,select,textare ,a ,span, header"));
		if(!changeColorFlag){
			for(var i =0; i<e.length; i++){
				element_doms[i] = $(e[i]);
				element_styles[i] = $(e[i]).attr('style')?$(e[i]).attr('style'):'';
			}
		}
		e.css("background",bgcolor);
		e.css("color",txtcolor);
		$('body').css("background",bgcolor);
	};
	
	
	// 4、辅助线
	$(".top_tools_line").click(
		function(){
			// $(this).html("开").css("background-position","left bottom");
			assistant_line();
		}, function(){
			// $(this).html("关").css("background-position","left top");
			assistant_line();
		});
	//$(".top_tools_line").click(function(){assistant_line();});
	var assistant_line = function(){
		if($(".page_x").size()>0){
			$(".page_x").remove();	
			$(".page_y").remove();	
		}else{
			$("body").append('<div class="page_x"></div>');
			$("body").append('<div class="page_y"></div>');
			$(document).mousemove(function (o){
				var m = $(".page_y").outerWidth(true);
				var n = $(".page_x").outerHeight(true);
				var l = o.clientX - m;
				var k = o.clientY - n;
				$(".page_x").css({left : 0, top : k});
				$(".page_y").css({left : l, top : 0});
			});
		}
	};
	
	// 5、放大器
	var txt = '<table class="accessibility_txt_content">'
			   + '<tr>'
			   + '<td id="accessibility_txt_content_td"></td>'
		       + '</tr>'	
		       + '</table>';
	$("body").append(txt); //插入放大框
	$(".top_tools_enlarger").click(function(){
		assistant_txt();
	});
	var assistant_txt = function(){
		$(".accessibility_txt_content").fadeToggle();
		$(".main_container").mousemove(function (e){	
			var tar = e.target;
			var txt = $(tar).text();
			if(txt.length>20){
				$("#accessibility_txt_content_td").css("font-size","40px");
			}
			if($(tar).is("a")||$(tar).is("span")||$(tar).is("p")||$(tar).is("td")||$(tar).is("dd")||$(tar).is("li")){
				$("#accessibility_txt_content_td").html(txt);
			}
		});
	};
	
	// 无障碍阅读重置
	$(".top_tools_reset").click(function(){window.location.reload();});

	//点击按钮
    $(".bf_main .barrier_free_btn").each(function(index, element) {
        $(this).click(function(){
            if(!$(this).hasClass("top_tools_txt")) {
                //$(this).parents("li").siblings().find("a").removeClass("on");
                if($(this).parents("li").hasClass("click_li")){
                    $(this).toggleClass("on"); 
                    if($(this).parents("li").hasClass("zt")){
                        $(".zt_select").toggle();
                    }
                }
            };
        })
    });
         
    //点击下拉
      $(".zt_select dd a").click(function(){
        $(".zt_select dd").removeClass("selected");
        $(this).parents().addClass("selected");
      });

	    //返回首页
	$(".barrier_free_btn11").click(function(){
		window.location.reload();
	});
	//返回上一页
	$(".barrier_free_btn08").click(function(){
	    history.go(-1);
	});
	//前进一页
	$(".barrier_free_btn09").click(function(){
	    history.go(+1);
	});
	

    //点击其他地方关闭 下拉
   $(document).bind("click",function(e){
    var target =$(e.target);
    if(target.closest(".zt").length==0){
        $(".zt_select").hide();
        $(".barrier_free_btn05").removeClass("on")
        }
    });
   $(".bf_button").click(function(){
	    $(".barrier_free").toggle();
   })
   $(".barrier_free_btn12").click(function(){
	   $(".barrier_free").toggle();
	    //window.location.href="http://www.huadu.gov.cn/";
   })
});


// var a_color = function(index){
// 	if (index==1 && index==3) {
// 		if ("a[href != '']") {
// 			$("a").css("color","#fff");
// 		};
// 	}else if(index==2 && index==4){
// 		if ("a[href != '']") {
// 			$("a").css("color","#0000ff");
// 		}
// 	}
// 	// $("a").mousemove(function(){
// 	// 	$(this).css("background","#fff");
// 	// }).mouseout(function(){
// 	// 	$(this).css("background","#0000ff");
// 	// });
// }