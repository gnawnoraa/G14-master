/*
Theme: Flatfy Theme
Author: Andrea Galanti
Bootstrap Version 
Build: 1.0
http://www.andreagalanti.it
*/

$(window).load(function() { 
	//Preloader 
	$('#status').delay(300).fadeOut(); 
	$('#preloader').delay(300).fadeOut('slow');
	$('body').delay(550).css({'overflow':'visible'});
})

$(document).ready(function() {
		//animated logo
		$(".navbar-brand").hover(function () {
			$(this).toggleClass("animated shake");
		});
		
		//animated scroll_arrow
		$(".img_scroll").hover(function () {
			$(this).toggleClass("animated infinite bounce");
		});
		
		//Wow Animation DISABLE FOR ANIMATION MOBILE/TABLET
		wow = new WOW(
		{
			mobile: false
		});
		wow.init();
		
		//MagnificPopup
		$('.image-link').magnificPopup({type:'image'});


		// OwlCarousel N1
		$("#owl-demo").owlCarousel({
            items:3,
            loop:true,
            margin:10,
            merge:true,

            nav:true,
            navText: [ "<i class='fa fa-chevron-left fa-4x'></i>", "<i class='fa fa-chevron-right fa-4x'></i>" ],
            autoplay:false,
            //autoplayTimeout:3000,
            autoplayHoverPause:false,

            responsiveClass: true,
            responsive:{
                0:  {items:1},  //  for mobile
                600:{items:2, mergeFit:true},  //  for tablet
                979:{items:3, mergeFit:true},  //  for desktopSmall
                1199:{items:3, mergeFit:true}  //  for desktop
            }
		});

		// OwlCarousel N2
		$("#owl-demo-1").owlCarousel({
            items:1,
            loop:true,
            margin:10,
            merge:false,

            autoplay:true,
            autoplayTimeout:5000,
            autoplayHoverPause:false,
		});

        // OwlCarousel N3
        $("#owl-demo-2").owlCarousel({
            items:3,
            loop:true,
            margin:10,
            merge:false,

            autoplay:true,
            autoplayTimeout:3000,
            autoplayHoverPause:false,

            responsiveClass: true,
            responsive:{
                0:  {items:1},  //  for mobile
                600:{items:2},  //  for tablet
                979:{items:3},  //  for desktopSmall
                1199:{items:3}  //  for desktop
            }
        });

		//SmothScroll
		$('a[href*=#]').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
			&& location.hostname == this.hostname) {
					var $target = $(this.hash);
					$target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
					if ($target.length) {
							var targetOffset = $target.offset().top;
							$('html,body').animate({scrollTop: targetOffset}, 600);
							return false;
					}
			}
		});

		// for demo purposes only
		[].slice.call( document.querySelectorAll( 'form button' ) ).forEach( function( bttn ) { 
			bttn.addEventListener( 'click', function( ev ) { ev.preventDefault(); } );
		} );

});

