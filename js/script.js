$(document).ready(function() {
    $('#icon').on('click', function() {
      $('nav ul').toggleClass('showing')
    })
  })
  
  $(window).on("scroll", function() {
    if($(window).scrollTop()>475) {
    $('#icon').addClass('white');  
    $('nav').addClass('white');
    $('#logo').addClass('black');
    $('nav ul li a').addClass('white');  
    $('#icon').addClass('white');
    $('nav ul li i').addClass('black');
    }
    
    else {
        $('nav').removeClass('white');
        $('#logo').removeClass('black');
        $('nav ul li a').removeClass('white'); 
        $('nav ul li i').removeClass('black');
        $('#icon').removeClass('white');  
      }}
  )
  
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 1500, function(){
          window.location.hash = hash;})
      }}
);