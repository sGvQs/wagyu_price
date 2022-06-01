$(function(){
  $('a[href="#"]').click(function() {
    // 出発地点の値を取得
    var href= $(this).attr("href");
    // 到着地点を取得
    // 移動先を数値で取得
    var target;
    if ( href === '#' || href === '' ) {
      target = $('html');
    } else {
      target = $(href);
    }
    // 到着地点を数値で取得
    var position = target.offset().top;
    // スムーススクロール
    $('body,html').animate({scrollTop:position}, 400, 'swing');
    return false;
     });
  });
