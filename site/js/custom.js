// When DOM is fully loaded
jQuery(document).ready(function ($) {

	/* vintageJS (https://github.com/rendro/vintageJS/)
	--------------------------------------------------*/
	
	(function () {
	
	    $('img.vintage').load(function () {
	        $(this).vintage({
	            vignette: {
	                black: 0.6,
	                white: 0.1
	            },
	            noise: 4,
	            screen: {
	                red: 10,
	                green: 35,
	                blue: 35,
	                strength: 0.6
	            },
	            desaturate: 0.01
	        });
	
	    });
	
	})();	
	
	/* Quote/Testimonials Rotator
	--------------------------------------------------*/
	
	(function () {
	    
	    $('ul#quotes').quote_rotator();
	
	})();
	
	/* FlexSlider
	--------------------------------------------------*/
	
	(function () {
	
	    $('.flexslider').flexslider({
	        animation: "slide",
	        easing: "swing",
	        slideshow: true
	    });
	
	})();

	/* Image Hover Overlay
	--------------------------------------------------*/
	
	(function () {
	    
	    // Opacity of button set to 0%
	    $(".roll").css("opacity", "0");
	
	    // On Mouse Over
	    $(".roll").hover(function () {
	
	        // Set opacity to 90%
	        $(this).stop().animate({
	            opacity: .9
	        }, "medium");
	    },
	
	    // On Mouse Out
	    function () {
	
	        // Set opacity back to 0%
	        $(this).stop().animate({
	            opacity: 0
	        }, "medium");
	    });
	
	})();
	
	/* Twitter Feed
	--------------------------------------------------*/
	
	(function () {
	
	    if ($('body.recent-news').length) {
	
	        $(".tweet").tweet({
	            join_text: "auto",
	            username: "guuthemes",
	            avatar_size: 48,
	            count: 3,
	            loading_text: "loading tweets, hold on..."
	        });
	    }
	
	})();
	
	/* Smooth Page Scroll
	--------------------------------------------------*/
	
	(function () {
	
	    $('a[href^="#"]').bind('click.smoothscroll', function (e) {
	        e.preventDefault();
	        var target = this.hash,
	            $target = $(target);
	        $('html, body').stop().animate({
	            'scrollTop': $target.offset().top
	        }, 600, 'swing', function () {
	            window.location.hash = target;
	        });
	    });
	
	})();
	
	/* Sticky Footer
	--------------------------------------------------*/
	
	(function () {

	    function setMinHeight() {

	        $('#main').css('min-height',
	        $(window).outerHeight(true) - ($('body').outerHeight(true) - $('body').height()) - $('#header-global').outerHeight(true) - ($('#main').outerHeight(true) - $('#main').height()) - $('#footer-global').outerHeight(true));

	    }

	    // Init
	    setMinHeight();

	    // Window resize
	    $(window).on('resize', function () {

	        var timer = window.setTimeout(function () {
	            window.clearTimeout(timer);
	            setMinHeight();
	        }, 30);

	    });

	})();
	

	/* Isotope (http://isotope.metafizzy.co)
	--------------------------------------------------*/
	
	(function () {
	
	    var $container = $('#portfolio-items');
	    var $filter = $('#filter');
	
	    // Initialize isotope 
	    $container.isotope({
	        filter: '*',
	        layoutMode: 'fitRows',
	        animationOptions: {
	            duration: 750,
	            easing: 'linear'
	        }
	    });
	
	    // Filter items when filter link is clicked
	    $filter.find('a').click(function () {
	        var selector = $(this).attr('data-filter');
	        $filter.find('a').removeClass('current');
	        $(this).addClass('current');
	        $container.isotope({
	            filter: selector,
	            animationOptions: {
	                animationDuration: 750,
	                easing: 'linear',
	                queue: false,
	            }
	        });
	        return false;
	    });
	
	})();
	
	/* End all Custom Functions */
		
});