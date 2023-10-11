$(function(){
	$('body').append('<script type="text/javascript" src="/wzxrmzf/xhtml/layui/layui.js"></script>');
layui.use(['laypage', 'layer'], function(){
	var laypage = layui.laypage,
	layer = layui.layer;
});	
$(".article-icon").prepend('<i class="favorite " title="添加收藏"></i>');
//	/*浏览量*/
	try{
		$.ajax({
			url: "/u/hit/count",
			type: "post",
			data:{
				hType: 3, //类型（1、站点；2、栏目；3、稿件）
				hId: manuscriptId //对象ID
			},
			success: function(data){
				$("#view").text(data.data);
			},
			error: function(){
				$("#view").text("1");
			}
		}); 
	}catch(e){}

//	// 收藏
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
										$fav.addClass("collected").attr("title","取消收藏");
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
							$fav.removeClass("collected").attr("title","添加收藏");
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
							$fav.addClass("collected").attr("title","取消收藏");
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
})
