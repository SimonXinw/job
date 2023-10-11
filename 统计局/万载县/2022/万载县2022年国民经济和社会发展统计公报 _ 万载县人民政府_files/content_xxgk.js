///* 文章页通用 */
//$('body').append('<script type="text/javascript" src="/wzxrmzf/xhtml/layui/layui.js"></script>');
//layui.use(['laypage', 'layer'], function(){
//	var laypage = layui.laypage,
//	layer = layui.layer;
//});	
$(function() {
	//	if($('.fbr .display-block').html()==undefined ){
	//		$('.addWidth').hide();
	//	}
	$('.wp_editor_art_paste_table').css({
		border: '1px solid',
		borderCollapse: 'collapse'
	})
	// document.getElementsByClassName("wp_editor_art_paste_table").style.border-collapse = "collapse"
	$('.wp_editor_art_paste_table tr').css({
		border: '1px solid'
	})
	$('.wp_editor_art_paste_table td').css({
		border: '1px solid'
	})
	
	$('#wp_editor_art_table').css({
		border: '1px solid',
		borderCollapse: 'collapse'
	})
	// document.getElementsByClassName("wp_editor_art_paste_table").style.border-collapse = "collapse"
	$('#wp_editor_art_table tr').css({
		border: '1px solid'
	})
	$('#wp_editor_art_table td').css({
		border: '1px solid'
	})
	
	
	
	if ($(".article-reldocuments ul li").length > 0) {
		$(".article-reldocuments").fadeIn('fast');
	}
	$('.display-block').each(function () {
		if ($.trim($(this).html()) == '') {
			$(this).parent('.addWidth').remove()
		}
	})
	//头部部门名称
	var crumbStr = $(".xxgk-crumb").text();
	var crumbStr2 = '';

	//当前位置链接
	var hlength = $(".xxgk-crumb a").length;
	var bmLink = '';
	var nblink = '';
	var crumbA = $(".xxgk-crumb a"),
		parentCode = ''; //法定主动公开二级栏目
	if (hlength > 3) {
		nblink = crumbA.eq(2).attr('href')
		if (nblink.indexOf('xxgk_list_nb.shtml') >= 0) {
			crumbA.eq(3).attr('href', nblink)
		}
		bmLink = crumbA.eq(3).attr('href')
		if (bmLink.indexOf('xxgk.shtml') < 0) {
			crumbStr2 = '万载县人民政府'
		} else {
			crumbStr2 = crumbStr.split(">")[3];
			parentCode = crumbA.eq(4).attr('href').split("/")[2]
			$.each(crumbA, function(index, item) {
				if (index > 3) {
					var href = $(item).attr('href'),
						linkCode = href.split("/")[2],
						tempName = href.split("/")[3].split(".")[0],
						newHref = bmLink + '?code=' + linkCode + '&temp=' + tempName;
					if (parentCode && index > 4) {
						//如果法定主动公开有二级栏目，携带parentCode参数，用来做列表页选中效果
						newHref += '&parentCode=' + parentCode;
					}
					$(item).attr('href', newHref);
				}
			})
		}
	} else {
		crumbStr2 = '万载县人民政府'
	}
	if ($.trim(crumbStr2) != '') {
		$("#bm-name").text(crumbStr2);
	} else {
		$("#bm-name").text('万载县人民政府');
	}
	// 县本级信息公开头部名称
	// var zzname = $("#bm-name").text();
	// if(zzname == "万载县人民政府"){
	// 	$(".zz-name").remove();
	// }
	//	// 用户行为 我的足迹
	//  $.ajax({
	//      url: "/u//userCenter/userTrack/add",
	//      type: "post",
	//      data:{
	//          type: typeof manuscriptId == "undefined" ? '2' : '3',
	//          url: window.location.href,
	//          title: $("title").text(),
	//          keyword: $("#cmsproTags").val() || ""
	//      },
	//      success: function(data){
	//          
	//      },
	//      error: function(){
	//
	//      }
	//  });
	////	/*浏览量*/
	//	try{
	//		$.ajax({
	//			url: "/u/hit/count",
	//			type: "post",
	//			data:{
	//				hType: 3, //类型（1、站点；2、栏目；3、稿件）
	//				hId: manuscriptId //对象ID
	//			},
	//			success: function(data){
	//				$("#view").text(data.data);
	//			},
	//			error: function(){
	//				$("#view").text("1");
	//			}
	//		}); 
	//	}catch(e){}
	//
	////	// 收藏
	//	var loginCode, collectCode, needIsCollectAjax = 1, $fav = $(".favorite");
	//	function collectStatus () {
	//
	//		//调用【接口-统一认证】中的【获取用户信息】的接口，获取用户ID
	//		$.ajax({
	//			url: "/u/ssoLogin/loadUserInfo",
	//			type: "post",
	//			data:{},
	//			success: function(data){
	//				// var data = JSON.parse(data);
	//				//【code】响应码（0、成功，1、失败，9、未登录，999、系统异常）;
	//				if(data.code == 9 ) {
	//					//未登陆
	//					loginCode = 0;
	//				} else if(data.code == 0 ){
	//					//登陆成功
	//					loginCode = 1; 
	//
	//					//只在加载页面的时候执行一次判断是否已收藏
	//					if( needIsCollectAjax ) {
	//
	//						//判断是否已收藏
	//						$.ajax({
	//							url: "/u/userCenter/collect/collect/isCollectAjax/" + manuscriptId,
	//							type: "post",
	//							data:{},
	//							success: function(data){
	//								if(data.code == 0){
	//									// console.log(data.data.data)
	//									if(data.data.data == null) {
	//										//未收藏
	//										collectCode = 0;
	//										// console.log(data.data.data+ '未收藏')
	//									} else{
	//										$fav.addClass("collected").attr("title","取消收藏");
	//										//已收藏
	//										collectCode = 1;
	//										// console.log(data.data.data+ '已收藏')
	//									}
	//								}
	//								needIsCollectAjax = 0
	//							}
	//						});
	//
	//					}
	//				}
	//			},
	//			error: function(){
	//				
	//			}
	//		}); 
	//
	//	}
	//	collectStatus();
	//	layui.use('layer', function(){
	//		var layer = layui.layer;
	//		$fav.on("click",function(){
	//			collectStatus();
	//			// console.log(collectCode);
	//			var that = this;
	//			if(loginCode == 0) {
	//				//未登录
	//				layer.tips('请先登陆！', that, {
	//					tips: [1, '#5d7ea9'],
	//					time: 3000
	//				});
	//			} else if(loginCode == 1){
	//				//登陆成功
	//				//判断是否已收藏
	//				if(collectCode == 1) {
	//					//已收藏
	//					$.ajax({
	//						url: "/u/userCenter/collect/collect/delAjax/" + manuscriptId,
	//						type: "post",
	//						data:{},
	//						success: function(data){
	//							layer.msg("<span class='favorite-tips'>取消收藏成功！</span>", {
	//								time: 2000
	//							});
	//							$fav.removeClass("collected").attr("title","添加收藏");
	//							// console.log(collectCode);
	//							collectCode = 0;
	//						}
	//					});
	//				} else if(collectCode == 0){
	//					//未收藏
	//					$.ajax({
	//						url: "/u/userCenter/collect/collect/addAjax",
	//						type: "post",
	//						data:{
	//							dataId: manuscriptId
	//						},
	//						success: function(data){
	//							$fav.addClass("collected").attr("title","取消收藏");
	//							layer.msg("<span class='favorite-tips'>添加收藏成功！</span>", {
	//								time: 2000 //2秒关闭（如果不配置，默认是3秒）
	//							});
	//							collectCode = 1;
	//							// console.log(collectCode);
	//						}
	//					}); 
	//				}
	//			}
	//		})
	//	})
	//调整字体大小
	$(".fontsize i").click(function() {
		var thisEle = $("#zoomcon").css("font-size");
		//parseFloat的第二个参数表示转化的进制，10就表示转为10进制
		var textFontSize = parseFloat(thisEle, 10);
		var unit = thisEle.slice(-2); //获取单位
		var cName = $(this).attr("class");
		if (cName != "l" && cName != "s") {
			return;
		}
		if (cName == "l" && textFontSize < 30) {
			textFontSize += 2;
		} else if (cName == "s" && textFontSize > 12) {
			textFontSize -= 2;
		} else if (cName == "m") {
			textFontSize = 16;
		}
		//设置para的字体大小
		$("#zoomcon").css("font-size", textFontSize + unit);
		$("#zoomcon").find("*").css("font-size", textFontSize + unit);
	});

});

//mp4格式视频兼容方法：
function convertMedia() {
	if (!document.getElementById("zoomcon")) return;
	var mediaDom = document.getElementById("zoomcon").getElementsByTagName("embed");
	var videoDom = document.createElement("video");
	if (typeof(videoDom.canPlayType) != "undefined" && mediaDom && mediaDom.length > 0) {
		for (var i = 0; i < mediaDom.length; i++) {
			var el = mediaDom[i];
			var newMediaDom = document.createElement("video");
			newMediaDom.setAttribute("controls", "controls");
			newMediaDom.setAttribute("preload", "preload");
			newMediaDom.setAttribute("src", el.getAttribute("flashvars").replace(/^vcastr_file=/, ""));
			newMediaDom.setAttribute("width", "60%"); // el.width
			newMediaDom.setAttribute("height", "auto"); // el.height
			var parentDom = el.parentNode;
			el.style.display = "none";
			parentDom.appendChild(newMediaDom);
			//parentDom.removeChild(el) ;
		}
		var len = mediaDom.length;
		for (var i = 1; mediaDom.length > 0; i++) {

			var parentDom = mediaDom[0].parentNode;
			parentDom.removeChild(mediaDom[0]);

			if (i >= len) {
				break;
			}
		}
	}
}
convertMedia();
