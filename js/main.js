
$(function(){
  $('#page-top').click(function(){
    //offset()はHTML要素の表示位置を座標
    // var position = $('html').offset().top;
    // console.log(position);//0
    $('body,html').animate({scrollTop:0}, 400, 'swing');
    return false;
     });
  });
