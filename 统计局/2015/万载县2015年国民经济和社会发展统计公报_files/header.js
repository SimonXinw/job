$(function(){

    $(".mainNav li").each(function(index, el) {
      $(this).addClass('li'+(index+1));
    });

    setHeader();
    $(window).scroll(function(){
      setHeader();
    });

    $(".menubtn,.menubtn_close").on("click", function (e) {
        if ($(".sticky").hasClass("mobile_mainNav")) {
          $(".fixed").css({ right: -260 });
          $(".sticky").removeClass("mobile_mainNav");
        } else {
          $(".sticky").addClass("mobile_mainNav");
          $(".mobile_mainNav").css({right: 0 });
        }
    });

				 $.ajax({
				        url: "/u/ssoLogin/loadUserInfo",
				        type: "GET",
				        success: function (data) {
				            // var data = JSON.parse(data);
				            if(data.code == 9){
				                //未登录
				                $(".header_top .left").prepend('<a class="user"  target="_blank" href="/u/userCenter/index.html#personal_index">登录/注册</a>');
				                $(".top .left").prepend('<a class="user"  target="_blank" href="/u/userCenter/index.html#personal_index">登录/注册</a>');
				            } else if(data.code == 0){
				                //已登录
				                var data = data.data,
				                    name = '';
				                // console.log(data);
				                if(data.userVO.usertype == 0) {  //用户类型，0：个人，1：法人
				                    name = data.userVO.name;
				                } else if(data.userVO.usertype == 1){
				                    name = data.userVO.corname;
				                }
				                $(".header_top .left").prepend("<a target='_blank' href='/u/userCenter/index.html#personal_index'>"+ name  +"</a><a target='_blank' href='/u/ssoLogin/logout'>退出</a>");
				           		$(".top .left").prepend("<a target='_blank' href='/u/userCenter/index.html#personal_index'>"+ name  +"</a><a target='_blank' href='/u/ssoLogin/logout'>退出</a>");
				            }
				        }
				    });
		
})

// 顶部导航
function setHeader(){
  var sticky = $('.sticky'),
      scroll = $(window).scrollTop();

  if (scroll >= 90){
    sticky.addClass('fixed');
    $(".menubtn").show();
    $(".home_header .logo").css({marginTop: "90px"});
    $(".home_header .fixed").css({ right: -260 })
  }else{
    sticky.removeClass('fixed');
    $(".menubtn").hide();
    $(".home_header .logo").css({marginTop: "0"});
    $(".home_header .mainnav").css({ right: "unset" })
  }
}

// 简繁体
var font="t";
function jft(){
   zh_tran(font);
   if(font=="s"){
     font = "t";
     $('.jft').html('<i>繁</i>繁體版')
   }else{
     font="s";
     $('.jft').html('<i>简</i>简体版')
   }
}

//头部日期
var today=new Date(),
  year=today.getFullYear(),
  month=today.getMonth()+1,
  day=today.getDate(),
  week=today.getDay(),
  weeks=['日','一','二','三','四','五','六'];
document.getElementById('date').innerHTML=year+'年'+month+'月'+day+'日 星期'+weeks[week];