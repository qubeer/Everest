

$(document).ready(function(){
	
	
	<!-- --------------------/ Search -->
	$("i.fa-search").click(function(){
	$(".search-hide").slideToggle("fast");
	});
	
	<!-- --------------------/ Numbers Animation -->
	$('.counter').counterUp({
	delay: 10,
	time: 1000
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
	easing: 'snap'
	// call the hover effect
	//onMixEnd: filterList.hoverEffect()
	});				
	},
	};
	// Run the show!
	filterList.init();		
	});	
	<!-- --------------------/ ViewPort Checker -->
	$(document).ready(function(){
		$('.skillbar').viewportChecker({
			callbackFunction: progress			
		});
		<!-- --------------------/ Bar Animation -->	
		function progress(){ 
			jQuery('.skillbar').each(function(){
			jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
			},5000);
			});
		}
		
	});	

	

});




	



