/*
* @Author: d
* @Date:   2017-01-06 15:59:45
* @Last Modified by:   lichen
* @Last Modified time: 2017-03-07 10:34:42
*/

'use strict';
$(function() {
    var ose=[1,4,7,11,13]
  //倒计时
  var content = 44;
  var confirm = $('#J_confirm');
  var items = $('.con_box .item');
  var os = [];
 
  var minsu = document.getElementById('minsu');
  confirm.one('click',function() {
   
   
    var f = setInterval(contents, 1000);
  })

  function contents() {
    if (content >= 0) {
      minsu.innerHTML = content;
      if (content == 0) {
        addxs(arra);
        addxs(arrb);
        confirm.html('确定');
        tapnumber();

      } else {
        if (content % 2 == 0) {
          addx(arra);
          addxs(arrb);
        } else {
          addx(arrb);
          addxs(arra);
        }

      }
      if (content == 43) {
        $('#J_box div').eq(ose[0]).addClass('fs');
      }
      if (content == 33) {
        $('#J_box div').eq(ose[1]).addClass('fs');
      }
      if (content == 23) {
        $('#J_box div').eq(ose[2]).addClass('fs');
      }
      if (content == 13) {
        $('#J_box div').eq(ose[3]).addClass('fs');

      }
      if (content == 3) {
        $('#J_box div').eq(ose[4]).addClass('fs');
      }
    }
    content--;
  }

  //定义两个数组
  var arra = [];
  var arrb = []; 
  (function() {

    for (var i = 0; i < items.length; i++) {
      if (i < 4) {
        //第一行
        if (i % 2 !== 0) {
          arrb.push(items[i])
        } else {
          arra.push(items[i])
        }
      } else {
        if (i < 8) {
          //第二行
          if (i % 2 == 0) {
            arrb.push(items[i])
          } else {
            arra.push(items[i])
          }
        } else {
          if (i < 12) {
            //第三行
            if (i % 2 !== 0) {
              arrb.push(items[i])
            } else {
              arra.push(items[i])
            }
          } else {
            //第四行
            if (i % 2 == 0) {
              arrb.push(items[i])
            } else {
              arra.push(items[i])
            }
          }
        }
      }
    }
  })();

  //两个数组执行函数
  function addx(arr) {
    for (var j = 0; j < arr.length; j++) {
      arr[j].className = 'on'

    }
  }
  function addxs(arr) {
    for (var k = 0; k < arr.length; k++) {
      arr[k].className = 'item'

    }
  }

  //选择
  function tapnumber() {
    for (var i = 0; i < items.length; i++) {
      var number = 0;
      items[i].addEventListener('click',
      function() {
        var o = $(this);
        o.addClass('fs');
        var index = o.index();
        os.push(index);
        number = number + 1;
        if (number == 5) {
          confirms();
        }
        if (number > 5) {
          o.removeClass('fs');
        }
      },
      false)
    }
  }

  function confirms() {
    console.log(os);
    $('#J_confirm').on('tap',
    function() {
      if (os.sort().toString() == ose.sort().toString()) {
        $('#J_post i').html('<img src="http://oss.lifequests.com/web_resource/web_resource_img/icon_success.png" alt="">');
        $('#J_post span').html('游戏挑战成功');
        $('.fn-mask').removeClass('hide');
        $('#J_post').removeClass('hide');
        $('#J_back').addClass('hide')
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
    $('#J_back').on('tap',
    function() {
      $('.fn-mask').addClass('hide');
      $('#J_post').addClass('hide');
    });
    $('.next-too').on('tap',
    function() {
      $('.fn-mask').addClass('hide');
      $('#J_post').addClass('hide');
      location.reload()
    });

  }
  //发送数据函数
function postnum() {
  window.postMessage(1);
}


$('#return_back').on('click',function(){
    postnums();
})

$(document).on('touchmove',
function(e) {
  e.preventDefault();
});
function postnums() {
  window.postMessage('back');
}

})