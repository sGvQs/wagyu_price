$(function(){
  $('a[href="#"]').click(function() {
    
    //Get the value of an attribute for the first element in the set of matched elements. return String
    let href = $(this).attr("href");
    
      $('body,html').animate({
        scrollTop: $(href == "#" || href == "" ? 'html' : href).offset().top
      }, 1000, 'swing');
      return false;
    });
  });
