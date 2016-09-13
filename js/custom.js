$(window).load(function(){
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	};
	$('body').removeClass('loaded');
});

function viewport(){
	var e = window,
		a = 'inner';
	if ( !( 'innerWidth' in window ) )
	{
		a = 'client';
		e = document.documentElement || document.body;
	}
	return { width : e[ a+'Width' ] , height : e[ a+'Height' ] }
};

$(function(){

	$('.button-nav').click(function(){
		$(this).toggleClass('active'),
		$('.main-nav-list').slideToggle();
		return false;
	});


});

var handler = function(){

	var height_footer = $('footer').height();
	var height_header = $('header').height();
	$('.content').css({'padding-bottom':height_footer+40, 'padding-top':height_header+40});


	var viewport_wid = viewport().width;

	if (viewport_wid <= 991) {

	}

}
$(window).bind('load', handler);
$(window).bind('resize', handler);


$(document).ready(function(){

// slidedown menu


// owl-carousel
    $('.owl-carousel').owlCarousel({
    loop:true,
    // margin:10,
    autoplay : 1000,
        mouseDrag: true
			});

// show_more and less buttons
    $('.show_more').click(function(){
			$('.show_more').hide(100);
			$('.show_less').fadeIn(300);
			$('.more').slideDown(300);
    });

// 		$('.show_more').click(function(e){
// 		e.preventDefault();
// 		var curBlock = $(this).siblings('.more');
// 		$('.more').not(curBlock).hide();
// 		curBlock.slideToggle();
// });
		$('.show_less').click(function(){
			$('.show_less').hide();
			$('.show_more').fadeIn(300);
			$('.more').slideUp(300);
		});

// show news, stati
		$('.show_news').click(function(){
			$('section.box-right .news').fadeIn(300);
			$('section.box-right .stati').fadeOut(300);
		});
		$('.show_stati').click(function(){
			$('section.box-right .stati').fadeIn(300);
			$('section.box-right .news').fadeOut(300);
		});
// certificates in assortiment
		$('.left-side>.buts a').click(function(){
				$('.certificates').show(300);
		});
		$('.certificates i').click(function(){
				$('.certificates').hide(300);
		});

// fancybox
		$(".fancybox").fancybox({
				prevEffect	: 'none',
				nextEffect	: 'none',
				helpers	: {
						title	: {
								type: 'outside'
						},
						thumbs	: {
								width	: 50,
								height	: 50
						}
				}
		});

// PopUp
//

 $(".openPopup").click(function(){
	 $(".popUp").fadeIn();
 });
$(".popUp").click(function(e) {
    if($(e.target).closest(".window").length==0) $(".popUp").fadeOut();
});
$(".close").click(function(){
	$(".popUp").fadeOut();
});

// some shit
	$(".element").click(function(){
		$(".element").removeClass("active");
		$(this).addClass("active");
		$(".center-side>.grey_bg").fadeOut();
		$(".center-side>.grey_bg").fadeIn(300);
	});

	//Scroll by link on page
			$('a[href^="#"]').on('click',function (e) {
					e.preventDefault();

			var target = this.hash;
			var $target = $(target);

			$('html, body').stop().animate({
					'scrollTop': $target.offset().top
			}, 500, 'swing', function () {
					window.location.hash = target;
			});
			});

});
