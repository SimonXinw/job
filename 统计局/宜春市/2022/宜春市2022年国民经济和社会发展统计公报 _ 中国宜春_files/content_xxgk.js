///* 文章页通用 */
/*$('body').append('<script type="text/javascript" src="/wzxrmzf/xhtml/layui/layui.js"></script>');
	var laypage = layui.laypage,
	layer = layui.layer;
});	*/
$(function () {
	//夸站点抄送稿件 关联稿件链接地址失效
	var links = [
		{
			"WEBSITE_ID" : "1dc66cd020dd49c0bf684d4761f558b7",
			"CODE_NAME" : "ycsjgswj",
			"NAME" : "宜春市机关事务管理中心",
			"WEBSITE_DOMAIN" : "jgswj.yichun.gov.cn"
		},
		{
			"WEBSITE_ID" : "6ccbeede7a2449fcb7ae7c7e42ce0daa",
			"CODE_NAME" : "ycszfbgs",
			"NAME" : "宜春市政府办公室",
			"WEBSITE_DOMAIN" : "www.yichun.gov.cn"
		},
		{
			"WEBSITE_ID" : "c57263c0c30f4028a76ff7c577eefd65",
			"CODE_NAME" : "ycsrmzf",
			"NAME" : "中国宜春",
			"WEBSITE_DOMAIN" : "www.yichun.gov.cn"
		},
		{
			"WEBSITE_ID" : "e053e8b87bb546b49a94a2eeb5d216d7",
			"CODE_NAME" : "tgxjw",
			"NAME" : "铜鼓县纪委",
			"WEBSITE_DOMAIN" : "www.tgxjw.gov.cn"
		},
		{
			"WEBSITE_ID" : "f42ce6e8046c43b9965b4a3e2fc55dcc",
			"CODE_NAME" : "yzqrmzf",
			"NAME" : "袁州区政府网",
			"WEBSITE_DOMAIN" : "www.yzq.gov.cn"
		},
		{
			"WEBSITE_ID" : "04771de6d1fd4151b633bd0d7b3c5ffa",
			"CODE_NAME" : "gasrmzf",
			"NAME" : "高安市人民政府",
			"WEBSITE_DOMAIN" : "www.gaoan.gov.cn"
		},
		{
			"WEBSITE_ID" : "443329197b5f464cb280cd47a24e369c",
			"CODE_NAME" : "ycsjtjt",
			"NAME" : "宜春交通投资集团有限公司",
			"WEBSITE_DOMAIN" : "www.ycjttzjt.com"
		},
		{
			"WEBSITE_ID" : "788aee39a5b74f57a18accce9de9161f",
			"CODE_NAME" : "ycscl",
			"NAME" : "宜春市残疾人联合会",
			"WEBSITE_DOMAIN" : "www.ycdpf.gov.cn"
		},
		{
			"WEBSITE_ID" : "9b769fc30be54bc9a1e32aa01ac5a3ae",
			"CODE_NAME" : "ycsglj",
			"NAME" : "宜春公路信息网",
			"WEBSITE_DOMAIN" : "gonglu.yichun.gov.cn"
		},
		{
			"WEBSITE_ID" : "b40d7c0e09eb426ab5652a3501056a90",
			"CODE_NAME" : "ycsfgw",
			"NAME" : "宜春市发展和改革委员会",
			"WEBSITE_DOMAIN" : "drc.yichun.gov.cn"
		},
		{
			"WEBSITE_ID" : "028368cc738143698b2a1cff7b64aff0",
			"CODE_NAME" : "ycsctgs",
			"NAME" : "宜春市城投公司",
			"WEBSITE_DOMAIN" : "www.jxycct.com"
		},
		{
			"WEBSITE_ID" : "350af531a0dc40edae24066a666fafff",
			"CODE_NAME" : "ycsdaj",
			"NAME" : "宜春市档案馆",
			"WEBSITE_DOMAIN" : "da.yichun.gov.cn"
		},
		{
			"WEBSITE_ID" : "c7585d786c0948a695cedca92c0d6e17",
			"CODE_NAME" : "ycsfnw",
			"NAME" : "宜春女性网",
			"WEBSITE_DOMAIN" : "www.ycfl.org.cn"
		},
		{
			"WEBSITE_ID" : "f2c9eb56dd984ccbb9389bdc2c0c7cdf",
			"CODE_NAME" : "wzxrmzf",
			"NAME" : "万载县人民政府",
			"WEBSITE_DOMAIN" : "www.wanzai.gov.cn"
		},
		{
			"WEBSITE_ID" : "fddf59abb66e40e1b3166187fbd5fb25",
			"CODE_NAME" : "ycsjytyj",
			"NAME" : "宜春市教育体育局",
			"WEBSITE_DOMAIN" : "jytyj.yichun.gov.cn"
		},
		{
			"WEBSITE_ID" : "084c535700164914a70b487a33a6ca31",
			"CODE_NAME" : "ycskjj",
			"NAME" : "宜春市科学技术局",
			"WEBSITE_DOMAIN" : "kjj.yichun.gov.cn"
		},
		{
			"WEBSITE_ID" : "d78b687c1b8c4124b372f56426e3b58e",
			"CODE_NAME" : "sgxrmzf",
			"NAME" : "上高县人民政府",
			"WEBSITE_DOMAIN" : "www.shanggao.gov.cn"
		},
		{
			"WEBSITE_ID" : "93e5ec72f3634cb49b406c2abc7c8c18",
			"CODE_NAME" : "ycsgxj",
			"NAME" : "宜春市工业和信息化局",
			"WEBSITE_DOMAIN" : "gxj.yichun.gov.cn"
		},
		{
			"WEBSITE_ID" : "bd2300cb977f4b1c9aca30735efcd034",
			"CODE_NAME" : "yfxrmzf",
			"NAME" : "宜丰县人民政府",
			"WEBSITE_DOMAIN" : "www.jxyf.gov.cn"
		},
		{
			"WEBSITE_ID" : "4962221e5e914071abf9277b6714f800",
			"CODE_NAME" : "ycsgaj",
			"NAME" : "宜春市公安局",
			"WEBSITE_DOMAIN" : "gaj.yichun.gov.cn"
		},
		{
			"WEBSITE_ID" : "85dcbbfb90e14d55a7a48975d9b0878d",
			"CODE_NAME" : "fxxrmzf",
			"NAME" : "奉新县人民政府",
			"WEBSITE_DOMAIN" : "www.fengxin.gov.cn"
		},
		{
			"WEBSITE_ID" : "d3933651d70b4e0d9b4c93554cf665ac",
			"CODE_NAME" : "ycsdx",
			"NAME" : "宜春市委党校",
			"WEBSITE_DOMAIN" : "www.jxycdx.gov.cn"
		},
		{
			"WEBSITE_ID" : "0bb253ea8f9d43d1bd83838c669d6804",
			"CODE_NAME" : "jaxrmzf",
			"NAME" : "靖安县人民政府",
			"WEBSITE_DOMAIN" : "www.jxjaxzf.gov.cn"
		},
		{
			"WEBSITE_ID" : "6cfbbc941f6b4fda8bae1d8f39fcdbc1",
			"CODE_NAME" : "ycsbb",
			"NAME" : "宜春市机构编制网",
			"WEBSITE_DOMAIN" : "www.ycbwb.gov.cn"
		},
		{
			"WEBSITE_ID" : "e169b33183d8483f8de03966d528612c",
			"CODE_NAME" : "ycsmzj",
			"NAME" : "宜春市民政局",
			"WEBSITE_DOMAIN" : "mz.yichun.gov.cn"
		},
		{
			"WEBSITE_ID" : "7bc1060a65154c089a6e10a44d61d06a",
			"CODE_NAME" : "tgxrmzf",
			"NAME" : "铜鼓县人民政府",
			"WEBSITE_DOMAIN" : "www.tonggu.gov.cn"
		},
		{
			"WEBSITE_ID" : "b80103fcd7a44835861f5b0361c3321f",
			"CODE_NAME" : "ycssfj",
			"NAME" : "宜春市司法局",
			"WEBSITE_DOMAIN" : "sf.yichun.gov.cn"
		},
		{
			"WEBSITE_ID" : "7e046768b7e54b2e9c03c5e273b23c11",
			"CODE_NAME" : "fcsrmzf",
			"NAME" : "丰城市人民政府",
			"WEBSITE_DOMAIN" : "www.jxfc.gov.cn"
		},
		{
			"WEBSITE_ID" : "81812d5208da4199bc9f0d8e3012728e",
			"CODE_NAME" : "ycshszh",
			"NAME" : "宜春市红十字会",
			"WEBSITE_DOMAIN" : "www.ycredcross.org.cn"
		},
		{
			"WEBSITE_ID" : "f0c1130c80bb45f48483ce44ca8969bd",
			"CODE_NAME" : "ycswjw",
			"NAME" : "宜春市卫生健康委员会",
			"WEBSITE_DOMAIN" : "wjw.yichun.gov.cn"
		},
		{
			"WEBSITE_ID" : "034c21e1dd7944aea653e1a3db5a0144",
			"CODE_NAME" : "ycsczj",
			"NAME" : "宜春市财政局",
			"WEBSITE_DOMAIN" : "czj.yichun.gov.cn"
		},
		{
			"WEBSITE_ID" : "a01262580b434e48ab7875d923e587c8",
			"CODE_NAME" : "zssrmzf",
			"NAME" : "樟树市人民政府",
			"WEBSITE_DOMAIN" : "www.zhangshu.gov.cn"
		},
		{
			"WEBSITE_ID" : "74f8237b9bd04eb2a7a9f01c812cf15e",
			"CODE_NAME" : "myszww",
			"NAME" : "明月山温泉风景名胜区政务网",
			"WEBSITE_DOMAIN" : "mys.yichun.gov.cn"
		},
		{
			"WEBSITE_ID" : "d2d8907d301c4c5cb33debe83facc680",
			"CODE_NAME" : "ycsgzw",
			"NAME" : "宜春市国有资产监督管理委员会",
			"WEBSITE_DOMAIN" : "gzw.yichun.gov.cn"
		},
		{
			"WEBSITE_ID" : "0a3690d23d3a4202ac20dd461614d867",
			"CODE_NAME" : "ycsyjglj",
			"NAME" : "宜春市应急管理局",
			"WEBSITE_DOMAIN" : "yjglj.yichun.gov.cn"
		},
		{
			"WEBSITE_ID" : "3c511b41b33e4cf9a7f296b688f489ee",
			"CODE_NAME" : "ycsjkq",
			"NAME" : "宜春经济技术开发区",
			"WEBSITE_DOMAIN" : "jkq.yichun.gov.cn"
		},
		{
			"WEBSITE_ID" : "4acc92007628495c99ff294692143c53",
			"CODE_NAME" : "yyxqzfw",
			"NAME" : "宜阳新区政府网",
			"WEBSITE_DOMAIN" : "yyxq.yichun.gov.cn"
		},
		{
			"WEBSITE_ID" : "6572ad03c1154267b1f911d76a81b32f",
			"CODE_NAME" : "ycsshbzj",
			"NAME" : "宜春市人力资源和社会保障局",
			"WEBSITE_DOMAIN" : "hrss.yichun.gov.cn"
		},
		{
			"WEBSITE_ID" : "dea2b9713f4241d1ae5217958170dac5",
			"CODE_NAME" : "ycszrzyj",
			"NAME" : "宜春市自然资源局网站",
			"WEBSITE_DOMAIN" : "bnr.yichun.gov.cn"
		},
		{
			"WEBSITE_ID" : "5cdf4ed64b9444f39b5b25c7489a809c",
			"CODE_NAME" : "ycssthjj",
			"NAME" : "宜春市生态环境局",
			"WEBSITE_DOMAIN" : "sthjj.yichun.gov.cn"
		},
		{
			"WEBSITE_ID" : "bb577b0cc50047819770c88ad01fb90a",
			"CODE_NAME" : "ycswgxlj",
			"NAME" : "宜春市文化广电新闻出版旅游局",
			"WEBSITE_DOMAIN" : "wh.yichun.gov.cn"
		},
		{
			"WEBSITE_ID" : "30f53b0f08da41f78ba1aff0d1f85428",
			"CODE_NAME" : "ycszjw",
			"NAME" : "宜春市住房和城乡建设网",
			"WEBSITE_DOMAIN" : "zjj.yichun.gov.cn"
		},
		{
			"WEBSITE_ID" : "7aae474a267e4fdfa6678edff5e61d55",
			"CODE_NAME" : "yctjj",
			"NAME" : "宜春市统计局",
			"WEBSITE_DOMAIN" : "www.yichun.gov.cn"
		},
		{
			"WEBSITE_ID" : "a612fe744e3546acb3526fb05a5b6dd3",
			"CODE_NAME" : "ycsswj",
			"NAME" : "宜春市商务局",
			"WEBSITE_DOMAIN" : "ycwjmw.yichun.gov.cn"
		},
		{
			"WEBSITE_ID" : "9cfa05b2c8d44dd4a48f64836f044426",
			"CODE_NAME" : "ycsslj",
			"NAME" : "宜春市水利局",
			"WEBSITE_DOMAIN" : "slj.yichun.gov.cn"
		},
		{
			"WEBSITE_ID" : "ef4ed22c26024100965979546bcc1b64",
			"CODE_NAME" : "ycsjrb",
			"NAME" : "宜春市政府金融工作办公室",
			"WEBSITE_DOMAIN" : "www.yichun.gov.cn"
		},
		{
			"WEBSITE_ID" : "4cd0795622ca4c87aaa7bbc3973291df",
			"CODE_NAME" : "ycslyj",
			"NAME" : "宜春林业信息网",
			"WEBSITE_DOMAIN" : "ly.yichun.gov.cn"
		},
		{
			"WEBSITE_ID" : "7a3f653a2c934157aaa9c435ed01cfae",
			"CODE_NAME" : "ycsybj",
			"NAME" : "宜春市医疗保障局",
			"WEBSITE_DOMAIN" : "ylbzj.yichun.gov.cn"
		},
		{
			"WEBSITE_ID" : "f6ad339dd4a14aa7bad691f7f496aff2",
			"CODE_NAME" : "ycjtysj",
			"NAME" : "宜春市交通运输局",
			"WEBSITE_DOMAIN" : "www.yichun.gov.cn"
		},
		{
			"WEBSITE_ID" : "8cbd840e9b824c5d99d2dbcc216e8b14",
			"CODE_NAME" : "ycsfpb",
			"NAME" : "宜春市乡村振兴局",
			"WEBSITE_DOMAIN" : "www.yichun.gov.cn"
		},
		{
			"WEBSITE_ID" : "d1d83fe1f5fd424f82ab5cedf9aede66",
			"CODE_NAME" : "ycsnyncj",
			"NAME" : "宜春市农业农村局",
			"WEBSITE_DOMAIN" : "nyncj.yichun.gov.cn"
		},
		{
			"WEBSITE_ID" : "6b3a2f9d4ae44a5996bb705f18587a1f",
			"CODE_NAME" : "ycscgj",
			"NAME" : "宜春市综合行政执法局",
			"WEBSITE_DOMAIN" : "zhxzzfj.yichun.gov.cn"
		},
		{
			"WEBSITE_ID" : "40d7d2d2b5f24577b9f88b25b96b81e6",
			"CODE_NAME" : "ycsscjgj",
			"NAME" : "宜春市市场监督管理局",
			"WEBSITE_DOMAIN" : "sjj.yichun.gov.cn"
		},
		{
			"WEBSITE_ID" : "6d09aa59e0fe4481902e46c319006415",
			"CODE_NAME" : "ycssjj",
			"NAME" : "宜春市审计局",
			"WEBSITE_DOMAIN" : "sj.yichun.gov.cn"
		},
		{
			"WEBSITE_ID" : "1adca07d109947dcae19123272e8cf9e",
			"CODE_NAME" : "ycstyjrswj",
			"NAME" : "宜春市退役军人事务局",
			"WEBSITE_DOMAIN" : "ycstyjrswj.yichun.gov.cn"
		},
		{
			"WEBSITE_ID" : "9a5ac5d7283f4e05bf1daf35e0f47b28",
			"CODE_NAME" : "ycsrfb",
			"NAME" : "宜春市人民防空办公室",
			"WEBSITE_DOMAIN" : "rfb.yichun.gov.cn"
		},
		{
			"WEBSITE_ID" : "7c8b12ec08ab4fdaa2d03cb3b414eb2c",
			"CODE_NAME" : "ycsxzspj",
			"NAME" : "宜春市行政审批局",
			"WEBSITE_DOMAIN" : "xzspj.yichun.gov.cn"
		},
		{
			"WEBSITE_ID" : "87bed2b84d3546c08c9420879192e79c",
			"CODE_NAME" : "ycsw",
			"NAME" : "宜春市税务局",
			"WEBSITE_DOMAIN" : "www.yichun.gov.cn"
		},
		{
			"WEBSITE_ID" : "55d82ccbe4654db8b4521ec62030b34e",
			"CODE_NAME" : "ycsgxs",
			"NAME" : "宜春市供销合作社",
			"WEBSITE_DOMAIN" : "www.yichun.gov.cn"
		},
		{
			"WEBSITE_ID" : "92d77db61ff24eeb99bff96a90952a92",
			"CODE_NAME" : "ycsqxj",
			"NAME" : "宜春市气象局",
			"WEBSITE_DOMAIN" : "qxj.yichun.gov.cn"
		},
		{
			"WEBSITE_ID" : "7c77a7c551294a5ca8975305f18bc2be",
			"CODE_NAME" : "ycszxzh",
			"NAME" : "人民银行宜春市中心支行",
			"WEBSITE_DOMAIN" : "rmyh.yichun.gov.cn"
		}
	]
	$(".article-reldocuments ul.common_newslist li a").each(function(index){
		let conlink = $(this).attr("href");
		console.log(conlink)
		if(!conlink.indexOf("http") >= 0){
			let cons=conlink.split("/")
			let sitecode=cons[1];
			for (let i = 0; i < links.length; i++) {
				const element = links[i];
				if(sitecode==element.CODE_NAME){
					$(this).attr("href","http://"+element.WEBSITE_DOMAIN+conlink);
				}
			}
		}
	});

	//宜春市政府规范性文件内容页 
	$('.addWidth div').each(function () {
		if ($.trim($(this).html()) == '过期废止') {
			$(".article-attr .xxgk_gfxwjyfz").show();
		}
	})
	// 表格文字缩进
	$("table").parent("div").css({"text-indent":"0"});
	// 表格超出滑动
	if($(window).width() < 1100){
		$("table").css({"overflow":"scroll"});
		$("table").parent("div").css({"overflow":"scroll"});
		$("table").parent("p").css({"overflow":"scroll"});
	}
	// 部门信息公开iframe框架结构当前位置链接处理
	function changeCrumbLink(n) {
		var crumbA = $(".xxgk-crumb a"),
			bmLink = crumbA.eq(n).attr('href');
		$.each(crumbA, function (index, item) {
			if (index >= Number(n + 1)) {
				var href = $(item).attr('href'),
					linkCode = href.split("/")[2],
					tempName = href.split("/")[3].split(".")[0],
					newHref = bmLink + '?code=' + linkCode + '&temp=' + tempName;
				$(item).attr('href', newHref);
			}
		})
	}

	if ($(".xxgk-crumb").text().indexOf('部门信息公开') > 0 || $(".xxgk-crumb").text().indexOf('乡镇信息公开') > 0 || $(".xxgk-crumb").text().indexOf('乡镇街道信息公开') > 0) {
		if (websiteCode === 'gasrmzf') {
			changeCrumbLink(5);
		}
		if (websiteCode === 'fxxrmzf') {
			changeCrumbLink(4);
		}
		if (websiteCode === 'yfxrmzf') {
			changeCrumbLink(3);
		}
		if (websiteCode === 'fcsrmzf') {
			changeCrumbLink(3);
		}
		if (websiteCode === 'tgxrmzf') {
			changeCrumbLink(4);
		}
		if (websiteCode === 'zssrmzf') {
			changeCrumbLink(4);
		}
		if (websiteCode === 'sgxrmzf') {
			changeCrumbLink(5);
		}
		if (websiteCode === 'jaxrmzf') {
			changeCrumbLink(4);
		}
	}

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

	// 用户行为 我的足迹
	$.ajax({
		url: "/u//userCenter/userTrack/add",
		type: "post",
		data: {
			type: typeof manuscriptId == "undefined" ? '2' : '3',
			url: window.location.href,
			title: $("title").text(),
			keyword: $("#cmsproTags").val() || ""
		},
		success: function (data) {

		},
		error: function () {

		}
	});
	//	/*浏览量*/
	try {
		$.ajax({
			url: "/u/hit/count",
			type: "post",
			data: {
				hType: 3, //类型（1、站点；2、栏目；3、稿件）
				hId: manuscriptId //对象ID
			},
			success: function (data) {
				$("#view").text(data.data);
			},
			error: function () {
				$("#view").text("1");
			}
		});
	} catch (e) {}
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
	$(".fontsize i").click(function () {
		var thisEle = $("#zoomcon").css("font-size");
		//parseFloat的第二个参数表示转化的进制，10就表示转为10进制
		var textFontSize = parseFloat(thisEle, 10);
		var unit = thisEle.slice(-2); //获取单位
		var cName = $(this).attr("id");
		if (cName != "f-add" && cName != "f-dec") {
			return;
		}
		if (cName == "f-add" && textFontSize < 30) {
			textFontSize += 2;
		} else if (cName == "f-dec" && textFontSize > 12) {
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
	if (typeof (videoDom.canPlayType) != "undefined" && mediaDom && mediaDom.length > 0) {
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