
/* /START */
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
	
	
	<!-- --------------------/ Filter Portfolio -->		
	var selectedClass = "";
	$("#filters li span").click(function(){
		
		$('#filters li span').removeClass('active');
		$(this).addClass('active');
		
		//$('#filters li span').addClass('active');
		
	selectedClass = $(this).attr("data-rel");
	$("#portfoliolist").fadeTo(100, 0.1);
	$("#portfoliolist div.tile").not("."+selectedClass).fadeOut();
	setTimeout(function() {
	$("."+selectedClass).fadeIn();
	$("#portfoliolist").fadeTo(500, 1);
	}, 500);
	
	});    
	

});
/* /END */



	<!-- Sticky Menu -->
	// Create a clone of the menu, right next to original.
	$('.navbar').addClass('original').clone().insertAfter('nav').addClass('cloned').css('position','fixed').css('top','0').css('margin-top','0').css('z-index','500').removeClass('original').hide();
	
	scrollIntervalID = setInterval(stickIt, 10);
	function stickIt() {
	
	var orgElementPos = $('.original').offset();
	orgElementTop = orgElementPos.top;               
	
	if ($(window).scrollTop() >= (orgElementTop)) {
	// scrolled past the original position; now only show the cloned, sticky element.
	
	// Cloned element should always have same left position and width as original element.     
	orgElement = $('.original');
	coordsOrgElement = orgElement.offset();
	leftOrgElement = coordsOrgElement.left;  
	widthOrgElement = orgElement.css('width');
	
	$('.cloned').css('left',leftOrgElement+'px').css('top',0).css('width',widthOrgElement+'px').show();
	$('.original').css('visibility','hidden');
	} else {
	// not scrolled past the menu; only show the original menu.
	$('.cloned').hide();
	$('.original').css('visibility','visible');
	}
	}








	



