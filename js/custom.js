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
		$('header>.wrapper>nav>ul>li:nth-child(2)').click(function(){
			$('header>.wrapper>nav>ul>li>ul').slideToggle(200);
		});

// owl-carousel
    $('.owl-carousel').owlCarousel({
    loop:true,
    // margin:10,
    autoplay : 3000,
        mouseDrag: false
			});

// show_more and less buttons
    $('.show_more').click(function(){
			$('.show_more').hide(100);
			$('.show_less').fadeIn(300);
			$('.more').slideDown(300);
    });
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

 $("a.openPopup").click(function(){
	 $(".popUp").fadeIn();
 });
$(".popUp").click(function(e) {
    if($(e.target).closest(".window").length==0) $(".popUp").fadeOut();
});
$(".close").click(function(){
	$(".popUp").fadeOut();
});

});
