//$(function() {
//  //浏览量
//  var viewAjaxUrl = "/u/hit/count";
//  // 站点浏览量
//  try {
//      $.ajax({
//          url: viewAjaxUrl,
//          type: "post",
//          data: {
//              hType: 1, //类型（1、站点；2、栏目；3、稿件）
//              hId: websiteId //对象ID
//          },
//          success: function(data) {
//
//          },
//          error: function() {
//
//          }
//      });
//  } catch(e) {}
//
//  //栏目浏览量
//  if(typeof channelId != "undefined" && typeof manuscriptId == "undefined") {
//      try {
//          $.ajax({
//              url: viewAjaxUrl,
//              type: "post",
//              data: {
//                  hType: 2, //类型（1、站点；2、栏目；3、稿件）
//                  hId: channelId //对象ID
//              },
//              success: function(data) {
//
//              }
//          });
//      } catch(e) {}
//  }
//
//  //文章页浏览量
//
//});