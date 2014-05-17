//Global variable to restart animation

var restart = function() {
    $(this).find('li:last').after($(this).find('li:first'));
    $(this).css({marginLeft:0});
};


//When document loads this will execute
$(document).ready(function() {

  function mottsDefault(){
    $('.second').mouseenter(function(){
      $('.frame-1').fadeOut(800);
      $('.action').fadeIn(1000, 'linear');
      $('.banner').fadeIn(1000);
    });

 }

mottsDefault();

// //this is where the magic happens - carousel motion
function carouselSpin(){
  setInterval(function(){
      $('.fancy').$(this).find('li:last').after($(this).find('li:first')).css({marginLeft:0});
}, 4000);

}

carouselSpin();
restart();


//This is to make arrows work - need to work on right arrow
$(document).on('click', '.left-arrow', function(){
  $('.fancy').fadeToggle(900, 'linear').stop(true, false).animate({marginLeft: '-186px'}, 900, restart).fadeIn(900).stop(true, true).fadeToggle(900, 'linear').stop(true, false).animate({marginLeft: '-186px'}, 900, restart).fadeIn(900).stop(true, true);
    });
});

$(document).on('click', '.right-arrow', function(){
  $('.fancy').fadeToggle(900, 'linear').stop(true, false).animate({marginLeft: '-186px'}, 900, restart).fadeIn(900).stop(true, true).fadeToggle(900, 'linear').stop(true, false).animate({marginLeft: '-186px'}, 900, restart).fadeIn(900).stop(true, true);
    });





















