
<!-- --------------------/ Search -->
$(document).ready(function(){
$("i.fa-search").click(function(){
$(".search-hide").slideToggle("fast");
});
});

<!-- --------------------/ Numbers Animation -->
jQuery(document).ready(function($) {
$('.counter').counterUp({
	delay: 10,
	time: 1000
});
});

<!-- --------------------/ Brands -->
$('.owl-carousel').owlCarousel({
loop:true,
margin:10,
autoplay:true,
responsiveClass:true,	
responsive:{
	0:{
		items:2,
		nav:true
	},
	600:{
		items:3,
		nav:true
	},
	1000:{
		items:4,
		nav:true,
		loop:true
	}}
})

<!-- --------------------/ Filter Portfolio -->
$(function () {
		var filterList = {
			init: function () {
				// MixItUp plugin
				// http://mixitup.io
				$('#portfoliolist').mixitup({
					targetSelector: '.portfolio',
					filterSelector: '.filter',
					effects: ['fade'],
					easing: 'snap',
					// call the hover effect
					onMixEnd: filterList.hoverEffect()
				});				
			},
			hoverEffect: function () {
				// Simple parallax effect
				$('#portfoliolist .portfolio').hover(
					function () {
						$(this).find('.label').stop().animate({bottom: 0}, 200, 'easeOutQuad');
						$(this).find('img').stop().animate({top: -0}, 500, 'easeOutQuad');				
					},
					function () {
						$(this).find('.label').stop().animate({bottom: -40}, 200, 'easeInQuad');
						$(this).find('img').stop().animate({top: 0}, 300, 'easeOutQuad');								
					}		
				);}
		};
		// Run the show!
		filterList.init();		
	});	
	