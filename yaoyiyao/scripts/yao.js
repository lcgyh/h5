/*
* @Author: d
* @Date:   2017-02-14 10:13:47
* @Last Modified by:   d
* @Last Modified time: 2017-03-02 18:07:10
*/

'use strict';
$(function(){
if(window.DeviceMotionEvent) {
    var speed = 25;
    var x, y, z, lastX, lastY, lastZ;
    x = y = z = lastX = lastY = lastZ = 0;
    window.addEventListener('devicemotion', function(event){
        var acceleration = event.accelerationIncludingGravity;
        x = acceleration.x;
        y = acceleration.y;
        if(Math.abs(x-lastX) > speed || Math.abs(y-lastY) > speed) {
            $('.main').addClass('on');
            setTimeout(post,3000);
            speed=100000;
        }
        lastX = x;
        lastY = y;

    }, false);
}


function post(){
    $('.main').removeClass('on');
    $('#J_post').removeClass('hide');
    $('.fn-mask').removeClass('hide');
    var s=data.content.length;
    var indexes=Math.floor(Math.random()*s);
    $('#J_post p').html(data.content[indexes])
   
}

//阻止页面滚动
$(document).on('touchmove',function(e) {
  e.preventDefault();
});

//发送数据函数
function postnum() {
  window.postMessage('1');
}
function postnums() {
  window.postMessage('back');
}

$('#over_botton').on('tap',function(){
      postnum();
})

$('#return_back').on('tap',function(){
      postnums();
})



})