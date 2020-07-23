
$(document).ready(function(){
		$('.slider').slick({
		easing:'cubic-bezier(0.55, 0.085, 0.68, 0.53)',
		pauseOnFocus: false,
		pauseOnHover: false,
		draggable: false,
		swipe: false,
	});

});


$(document).ready(function(){

	$('.works__slider').slick({
		infinite:true,
		speed:400,
		slidesToShow:1,
		centerMode: true,
		variableWidth:true,
		autoplay:true,
		autoplaySpeed:1000,
		draggable: false,
		swipe: false,
		easing:'ease',
	});
});

$(function(){

  $.display_text = function(id_h,id_text){

	$(id_h).click(function(){
			$(id_text).slideToggle(700, function(){
				if ($(this).is(':hidden')) {
					$(id_h).removeClass('information__acordeon-more_open');
				} else {
					
					$(id_h).addClass('information__acordeon-more_open');
				}							
			});
			return false;
		});
  };

  $.display_text("#acordeon_h1","#acordeon_text1");
  $.display_text("#acordeon_h2","#acordeon_text2");
  $.display_text("#acordeon_h3","#acordeon_text3");

});
