/*
* @Author: d
* @Date:   2016-12-20 11:00:20
* @Last Modified by:   Administrator
* @Last Modified time: 2017-03-05 22:11:34
*/

'use strict';
$(function() {
  //数据处理
var answer_shi=8;
var answer_fen=18;
//参数处理

  //内容js
  var finger = document.getElementById('J_finger1');
  var fingers = document.getElementById('J_finger2');
    finger.addEventListener('touchmove',function(event) {
      event.preventDefault();
      var touch = event.targetTouches[0];
      var f = $('#J_cir').offset().left;
      var g = $('#J_cir').offset().top;
      var x = touch.pageX;
      var y = touch.pageY;
      if (x > f && y < g) {
        var pl = x - f;
        var pd = g - y;
        var a = Math.atan(pd / pl);
        var angel = parseInt(a * 180 / Math.PI);
        //console.log(1);
        var angels = 90 - angel + 60;
        $('#J_finger1').css({
          'transform': 'rotate(' + angels + 'deg)'
        });
      } else {
        if (x > f && y > g) {
          var pl = x - f;
          var pd = y - g;
          var a = Math.atan(pd / pl);
          var angel = parseInt(a * 180 / Math.PI);
          //console.log(2);
          var angels = 90 + angel + 60;
          $('#J_finger1').css({
            'transform': 'rotate(' + angels + 'deg)'
          });
        } else {
          if (x < f && y > g) {
            var pl = f - x;
            var pd = y - g;
            var a = Math.atan(pd / pl);
            var angel = parseInt(a * 180 / Math.PI);
            //console.log(3);
            var angels = 270 - angel + 60;
            $('#J_finger1').css({
              'transform': 'rotate(' + angels + 'deg)'
            });
          } else {
            if (x < f && y < g) {
              var pl = f - x;
              var pd = g - y;
              var a = Math.atan(pd / pl);
              var angel = parseInt(a * 180 / Math.PI);
              //console.log(4);
              if (angel > 30) {
                var angels = angel - 30;
              } else {
                if (angel < 30) {
                  var angels = 270 + angel + 60;
                }
              };
              $('#J_finger1').css({
                'transform': 'rotate(' + angels + 'deg)'
              });
            }
          }
        }
      }
      //时
      var tm = angels % 30;
      var tms = parseInt(angels / 30);
      if (tms < 3) {
        $('#J_shi').html(10 + tms);
      } else {
        $('#J_shi').html(10 + tms - 12);
      }
    },false);
     fingers.addEventListener('touchmove',function(event) {
      event.preventDefault();
      var touch = event.targetTouches[0];
      var f = $('#J_cir').offset().left;
      var g = $('#J_cir').offset().top;
      var x = touch.pageX;
      var y = touch.pageY;
      if (x > f && y < g) {
        var pl = x - f;
        var pd = g - y;
        var a = Math.atan(pd / pl);
        var angel = parseInt(a * 180 / Math.PI);
        //console.log(1);
        if(angel>30){
           var angels =390-angel;

        }else{
          if(angel<30){
              var angels =30-angel;
          }
        };
        
        $('#J_finger2').css({
          'transform': 'rotate(' + angels + 'deg)'
        });
      } else {
        if (x > f && y > g) {
          var pl = x - f;
          var pd = y - g;
          var a = Math.atan(pd / pl);
          var angel = parseInt(a * 180 / Math.PI);
          //console.log(2);
          var angels =angel + 30; 
          $('#J_finger2').css({
            'transform': 'rotate(' + angels + 'deg)'
          });
        } else {
          if (x < f && y > g) {
            var pl = f - x;
            var pd = y - g;
            var a = Math.atan(pd / pl);
            var angel = parseInt(a * 180 / Math.PI);
            //console.log(3);
            var angels = 180 - angel + 30;
            $('#J_finger2').css({
              'transform': 'rotate(' + angels + 'deg)'
            });
          } else {
            if (x < f && y < g) {
              var pl = f - x;
              var pd = g - y;
              var a = Math.atan(pd / pl);
              var angel = parseInt(a * 180 / Math.PI);
              //console.log(4);
               var angels = 180 + angel + 30;
              $('#J_finger2').css({
                'transform': 'rotate(' + angels + 'deg)'
              });
            }
          }
        }
      }
      //分
      var tm = angels % 6;
      var tms = parseInt(angels / 6);
      if (tms < 50) {
        $('#J_fen').html(10 + tms);
      } else {
        $('#J_fen').html(10 + tms-60);
      }
   
    },false);

//阻止页面滚动
$(document).on('touchmove',function(e) {
  e.preventDefault();
});

//弹窗
$('#J_confirm').on('tap',function() {
      var a;
      var shi=$('#J_shi').html();
      var fen=$('#J_fen').html();
       if(shi==answer_shi&fen==answer_fen){
      a=1
     }else{
      a=0
     };   
  if (a === 1) {
    $('#J_post i').html('<img src="http://oss.lifequests.com/web_resource/web_resource_img/icon_success.png" alt="">');
    $('#J_post span').html('游戏挑战成功');
    $('.fn-mask').removeClass('hide');
    $('#J_post').removeClass('hide');
    $('#J_back').addClass('hide');
    setTimeout(function() {
      postnum();
    },
    3000);
  } else {
    $('#J_post i').html('<img src="http://oss.lifequests.com/web_resource/web_resource_img/icon_fail.png" alt="">');
    $('#J_post span').html('游戏挑战失败');
    $('.fn-mask').removeClass('hide');
    $('#J_post').removeClass('hide');
    $('#J_post .next-too').removeClass('hide');
  };
});
$('#J_back').on('tap',function() {
  $('.fn-mask').addClass('hide');
  $('#J_post').addClass('hide');
});
$('.next-too').on('tap',function() {
  $('.fn-mask').addClass('hide');
  $('#J_post').addClass('hide');
  document.location.reload();
});

//发送数据函数
function postnum() {
  window.postMessage('1');
}
function postnums() {
  window.postMessage('back');
}

$('#return_back').on('tap',function(){
      postnums();
})

})




