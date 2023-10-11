/* 文章页通用 */
$(function () {
	$('#wp_editor_art_table').css({
		border: '1px solid',
		borderCollapse: 'collapse'
	})
	$('#wp_editor_art_table tr').css({
		border: '1px solid'
	})
	$('#wp_editor_art_table td').css({
		border: '1px solid'
	})
	$('body').append('<script type="text/javascript" src="/wzxrmzf/xhtml/layui/layui.js"></script>');
//	$('body').append('<link rel="stylesheet" type="text/css" href="/wzxrmzf/xhtml/layui/css/layui.css" />');
	//扫码浏览
	$('body').append('<script type="text/javascript" src="/wzxrmzf/xhtml/js/qrcode.js"></script>');
	$('body').append('<script type="text/javascript" src="/wzxrmzf/xhtml/js/jquery.qrcode.js"></script>');

	//相关稿件列表
	if($(".article-reldocuments ul li").length > 0){
		$(".article-reldocuments").fadeIn('fast');
	}

	//调整字体大小
	$(".fontsize i").click(function(){
		var thisEle = $("#zoomcon").css("font-size"); 
		//parseFloat的第二个参数表示转化的进制，10就表示转为10进制
		var textFontSize = parseFloat(thisEle , 10);
		var unit = thisEle.slice(-2); //获取单位
		var cName = $(this).attr("class");
		if(cName == "l" && textFontSize <30){
			textFontSize += 2;
		}else if(cName == "s" && textFontSize >12){
			textFontSize -= 2;
		}else if(cName == "m"){
			textFontSize = 16;
		}
		//设置para的字体大小
		$("#zoomcon").css("font-size",  textFontSize + unit );
		$("#zoomcon").find("*").css("font-size",  textFontSize + unit );
	});

	// 分享
	$("#content-share").append('<div class="bdsharebuttonbox"><a href="#" class="bds_weixin" data-cmd="weixin" title="分享到微信"></a><a href="#" class="bds_tsina" data-cmd="tsina" title="分享到新浪微博"></a><a href="#" class="bds_sqq" data-cmd="sqq" title="分享到QQ好友"></a><a href="#" class="bds_qzone" data-cmd="qzone" title="分享到QQ空间"></a></div>')
	window._bd_share_config = {
		"common": {
			"bdSnsKey": {},
			"bdText": "",
			"bdMini": "2",
			"bdMiniList": false,
			"bdPic": "",
			"bdStyle": "0",
			"bdSize": "24"
		},
		"share": {}
	};
	with(document) 0[body.appendChild(createElement('script')).src = 'http://bdimg.share.baidu.com/static/api/js/share.js?cdnversion=' + ~(-new Date() / 36e5)];
	
		/*浏览量*/
					var viewAjaxUrl = "/u/hit/count";
						try {
							$.ajax({
								url: viewAjaxUrl,
								type: "post",
								data: {
									hType: 3, //类型（1、站点；2、栏目；3、稿件）
									hId: manuscriptId, //对象ID
									isView:2
								},
								success: function(data) {
									$("#view").text(data.data); //文章页对应显示访问量地方的id
								}
							});
						} catch(e) {}
	
	$(".article-icon").prepend('<i class="favorite " title="添加收藏"></i>');
		
		var loginCode, collectCode, needIsCollectAjax = 1, $fav = $(".favorite");
		function collectStatus () {
	
			//调用【接口-统一认证】中的【获取用户信息】的接口，获取用户ID
			$.ajax({
				url: "/u/ssoLogin/loadUserInfo",
				type: "post",
				data:{},
				success: function(data){
					// var data = JSON.parse(data);
					//【code】响应码（0、成功，1、失败，9、未登录，999、系统异常）;
					if(data.code == 9 ) {
						//未登陆
						loginCode = 0;
					} else if(data.code == 0 ){
						//登陆成功
						loginCode = 1; 
	
						//只在加载页面的时候执行一次判断是否已收藏
						if( needIsCollectAjax ) {
	
							//判断是否已收藏
							$.ajax({
								url: "/u/userCenter/collect/collect/isCollectAjax/" + manuscriptId,
								type: "post",
								data:{},
								success: function(data){
									if(data.code == 0){
										// console.log(data.data.data)
										if(data.data.data == null) {
											//未收藏
											collectCode = 0;
											// console.log(data.data.data+ '未收藏')
										} else{
											$fav.addClass("on").attr("title","取消收藏");
											//已收藏
											collectCode = 1;
											// console.log(data.data.data+ '已收藏')
										}
									}
									needIsCollectAjax = 0
								}
							});
	
						}
					}
				},
				error: function(){
					
				}
			}); 
	
		}
		collectStatus();
		layui.use('layer', function(){
			var layer = layui.layer;
			$fav.on("click",function(){
				collectStatus();
				// console.log(collectCode);
				var that = this;
				if(loginCode == 0) {
					//未登录
					layer.tips('请先登陆！', that, {
						tips: [1, '#5d7ea9'],
						time: 3000
					});
				} else if(loginCode == 1){
					//登陆成功
					//判断是否已收藏
					if(collectCode == 1) {
						//已收藏
						$.ajax({
							url: "/u/userCenter/collect/collect/delAjax/" + manuscriptId,
							type: "post",
							data:{},
							success: function(data){
								layer.msg("<span class='favorite-tips'>取消收藏成功！</span>", {
									time: 2000
								});
								$fav.removeClass("on").attr("title","添加收藏");
								// console.log(collectCode);
								collectCode = 0;
							}
						});
					} else if(collectCode == 0){
						//未收藏
						$.ajax({
							url: "/u/userCenter/collect/collect/addAjax",
							type: "post",
							data:{
								dataId: manuscriptId
							},
							success: function(data){
								$fav.addClass("on").attr("title","取消收藏");
								layer.msg("<span class='favorite-tips'>添加收藏成功！</span>", {
									time: 2000 //2秒关闭（如果不配置，默认是3秒）
								});
								collectCode = 1;
								// console.log(collectCode);
							}
						}); 
					}
				}
			})
		})
});


//mp4格式视频兼容方法：
function convertMedia(){
	if (!document.getElementById("zoomcon")) return ;
	var mediaDom = document.getElementById("zoomcon").getElementsByTagName("embed") ;
	var videoDom = document.createElement("video") ;
	if (typeof(videoDom.canPlayType) != "undefined" && mediaDom && mediaDom.length > 0){
		for(var i = 0 ; i < mediaDom.length ; i++) {
			var el = mediaDom[i] ;
			var newMediaDom = document.createElement("video") ;
			newMediaDom.setAttribute("controls" , "controls") ;
			newMediaDom.setAttribute("preload" , "preload") ;
			newMediaDom.setAttribute("src" , el.getAttribute("flashvars").replace(/^vcastr_file=/ , "")) ;
			newMediaDom.setAttribute("width" , "60%") ; // el.width
			newMediaDom.setAttribute("height" , "auto") ; // el.height
			var parentDom = el.parentNode ;
			el.style.display="none" ;
			parentDom.appendChild(newMediaDom) ;
			//parentDom.removeChild(el) ;
		}
		var len = mediaDom.length ;
		for(var i = 1 ; mediaDom.length > 0 ; i++ ) {
			
			var parentDom = mediaDom[0].parentNode ;
			parentDom.removeChild(mediaDom[0]) ;
			
			if (i >= len){
				break ;
			}
		}
	}
}
// convertMedia() ;