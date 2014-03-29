jQuery(document).ready(function($) {
   'use strict';
   
    //dinamyc main menu
   	if( $('body').hasClass('page-template-templateshome-page-php') ){
		$('#section_menu').children().each(function(i, e){
			var firstLi = '#' + $('.navbar').next().attr("id");
			$('.home .menu-item-home a').removeClass('external').attr( "href", firstLi );
			
			if($('#main-menu div ul li').is($(e).insertAfter('#main-menu ul li:eq(0)'))){
				$(e).insertAfter('#main-menu ul:eq(0)');
			}
			
			$('#section_menu').css('display','none');
			$('#section_menu').remove();
			
		});
	}else{
		$('#section_menu ').children().remove();
		$('#section_menu').remove();
	}
	
	//add bootstrap class to widgets
	$(".comment-edit-link").addClass("pull-right");
	$(".comment-edit-link").prepend('<i class="fa fa-pencil"></i>');
	$(".comment-reply-link").addClass("pull-right");
	$(".comment-reply-link").prepend('<i class="fa fa-repeat"></i>');
	$("#wp-calendar").addClass("table");
	$(".widget_archive select").addClass("form-control");
	$(".wp-caption").addClass("img-responsive");
	$(".wp-caption-text").addClass("panel");
	$('#top-nav .menu-item-has-children').addClass('dropdown');
	$('#top-nav .menu-item-has-children > a').removeClass('external').addClass('dropdown-toggle').attr('data-toggle', 'dropdown');
	$('#top-nav .menu-item-has-children > a').append('<b class="caret"></b>');
	$('#top-nav .menu-item-has-children ul').addClass('dropdown-menu');
	$('.form-submit').wrap('<div class="col-sm-12"></div>');
	$('#commentform input[type="submit"]').addClass('btn-border');
	$('.widget ul').addClass('list-unstyled');
	$('.footer-inner ul').addClass('list-unstyled');
	$('#footer .col-sm-2:nth-child(5n+1)').removeClass('col-sm-2').addClass('col-sm-3 text-center');
	$('#footer .col-sm-2:nth-child(5n+2)').removeClass('col-sm-2').addClass('col-sm-3');
   
   
   	//Superslides
   	jQuery('#slides').superslides({
		animation: 'fade', // Choose between slide or fade
		play: 9000
   	});
  
    // tooltips
            jQuery('[data-toggle~="tooltip"]').tooltip({
                container: 'body'
            });


    
    // Blog carousel   
      var owl = $("#owl-demo");

                owl.owlCarousel({

                    itemsCustom: [
                        [0, 2],
                        [450, 1],
                        [600, 2],
                        [700, 2],
                        [1000, 2],
                        [1200, 3],
                        [1400, 4],
                        [1600, 5]
                    ],
                    navigation: false,
                    pagination: false

                });

     

        // Onepage Nav adjust speed 
     jQuery('#top-nav').onePageNav({
         scrollSpeed: 1200,
         currentClass: 'active',
         changeHash: true,
         filter: ':not(.external)'
         });

});


jQuery(window).load(function() {


                var $container = jQuery('#container');
                // init
                $container.isotope({
                    resizable: false,
                    itemSelector: '.project-item',
                    layoutMode: 'fitRows'
                });
				
				var $container_blog = jQuery('#blog-isotope');
				
				$container_blog.isotope({
                    itemSelector: '.col-sm-6',
                });

 
         

                jQuery('#options a').click(function() {
                    var selector = jQuery(this).attr('data-filter');
                    $container.isotope({
                        filter: selector
                    });

                    jQuery(this).parent().parent().find('.selected').removeClass('selected');
                    jQuery(this).addClass('selected');
                    return false;
                });

            });




