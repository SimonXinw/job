
$(document).ready(function() {
    // 信息公开网站无障碍
	$('.xxgk-header .xxgk-logo').append('<p><a href="javascript:void(0)" onclick="aria.start()" class="skipAutoFix" id="ariao4ylua5nzkw">网站无障碍</a><a class="oldFixedStart" href="javascript:void(0)" onclick="aria.oldFixedStart()">关怀版</a></p>');
    // 信息公开头部名称
    $("#bm-name").text("万载县人民政府");
	var crumbStr = $(".xxgk-crumb").text();
	if($(".xxgk-crumb a").length == 0){  
		$("#bm-name").text("万载县人民政府");
	} else {  //各部门、区县
		var crumbStr2 = crumbStr.split(">")[3];
		console.log(crumbStr2)
		if ($.trim(crumbStr2) != '') {
			$("#bm-name").text(crumbStr2);
		}
		if(crumbStr.indexOf('部门信息公开目录')<0&&crumbStr.indexOf('乡镇街道信息公开目录')<0){
			$("#bm-name").text("万载县人民政府");
		}

	}
    var zdname = $("#bm-name").text();
    if(zdname == "万载县人民政府"){
        $(".zz-name").remove();
    }
   //选项卡
    if ($(".js-tab").length > 0) {
        jQuery(".js-tab").slide({
            delayTime: 0,
            triggerTime: 0,
            targetCell: ".common-mores a"
        });
    }
    //导航选中效果
    try{
        var str = $(".crumb").text();
        var str1 = str.split(">")[1];
        if($.trim(str1)!=''){
            $(".mainNav li").each(function(){
                if( $.trim($(this).find("a").text()).search($.trim(str1))>-1){
                    $(this).addClass("on");
                }
            })
        }
    }catch(e){}

    $(".footer_yqlj .select dt").click(function(event) {
        if($(this).siblings('dd').find('p').length>0){
            $(this).siblings('dd').slideToggle('400');
            $(this).parent().siblings().find('dd').slideUp(400);
            event.stopPropagation();//阻止冒泡
        }
    });
    $(document).click(function(event){
        $(".footer_yqlj .select dd").slideUp(400);
        event.stopPropagation();//阻止冒泡
    })
    
    //非政府网站跳转提示
    //点击外链询问离开
    //截取URL域名部份
    var getHost = function(url) {
        var host = "null";
        if (typeof url == "undefined" || null == url) url = window.location.href;
        var regex = /.*\:\/\/([^\/]*).*/;
        var match = url.match(regex);
        if (typeof match != "undefined" && null != match) host = match[1];
        return host;
    };
    //外链跳转弹框
    _outHtml = '<DIV class="alert-warning"><DIV class="alert-delete"><SPAN id="closets">X</SPAN> </DIV><DIV class="alert-wzsm"><P>您访问的链接即将离开\''+ $("meta[name='SiteName']").attr('content') +'网站\'是否继续？</P></DIV><DIV class="alert-footer"><DIV class="xuanze"><SPAN class="continue">继续访问</SPAN>\t\t\t\t<SPAN class="fangqi">放弃</SPAN>\t\t\t     </DIV></DIV></DIV><DIV class="alert-mengban"></DIV><DIV class="Whidden" style="display: none;"></DIV>', $("body").append(_outHtml);
    

    
    
    $(document).on('click','a',function(e){
//		e.preventDefault()
        if ( $(this).hasClass('selflink') ) return;
        var o = $(this), host, ckhost;
        var href = o.attr('href');
        if(href && !/^(?=javascript:)/.test(href) && /^(?=http)/.test(href)) {
            host = getHost(href);
            // ckhost = host.indexOf('gov.cn');
        }

        if( href && host ){
            if( host != document.domain){
                o.attr('target','_blank');
                if(o.data('ask')!='1'){
	                $(".alert-mengban").fadeIn("fast");
	                $(".alert-warning").fadeIn("fast");
	                $("#closets,.fangqi, .alert-mengban").click(function () {
	                    $(".alert-warning").fadeOut(300);
	                    $(".alert-mengban").fadeOut(300);
	                }); 
	                $(".continue").one("click", function () {
	                    $(".alert-warning").fadeOut(300);
	                    $(".alert-mengban").fadeOut(200);
	                    o.data('ask','1');
	                    o[0].click();
	                    $("#closets").click();
	                });
	                return false;
	            }
            }else{

            	 window.open(href)
            	 return false;
            }
            
        }
    });
    
    //浏览量
    var viewAjaxUrl = "/u/hit/count";
    // 站点浏览量
     try{
		$.ajax({
            url: viewAjaxUrl,
            type: "post",
			data:{
				hType: 1, //类型（1、站点；2、栏目；3、稿件）
				hId: websiteId, //对象ID
				isView:2
			},
			success: function(data){
                
			},
			error: function(){
                
			}
		}); 
    }catch(e){}

    //栏目浏览量
     if(typeof channelId != "undefined"  && typeof manuscriptId == "undefined") {
        try{
            $.ajax({
                url: viewAjaxUrl,
                type: "post",
                data:{
                    hType: 2, //类型（1、站点；2、栏目；3、稿件）
                    hId: channelId , //对象ID
					isView:2
                }
            }); 
        }catch(e){}
    } 
    
     $.ajax({
        url: "/u//userCenter/userTrack/add",
        type: "post",
        data:{
            type: typeof manuscriptId == "undefined" ? '2' : '3',
            url: window.location.href,
            title: $("title").text(),
            keyword: $("#cmsproTags").val() || ""
        },
        success: function(data){
            
        },
        error: function(){

        }
    });
});


//截取网址参数
function QueryString(qs){
    var Ohref = location.href;
    Ohref = Ohref.replace("?","?&").split("&");
    var re = "";
    for(i=1;i<Ohref.length;i++){
        if(Ohref[i].indexOf(qs+"=")==0){
            re=Ohref[i].replace(qs+"=","");
        }
    }
    return re;
}



