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

		$('header>.wrapper>nav>ul>li:nth-child(2)').click(function(){
			$('header>.wrapper>nav>ul>li>ul').slideToggle(200);
		});

    $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay: 2000,
        mouseDrag: false
			});

    $('.show_more').click(function(){
       $('.show_more').fadeOut();
        $('.more').slideDown(300);
    });

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

});
