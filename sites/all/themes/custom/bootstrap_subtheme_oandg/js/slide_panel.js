/**
 * Created by Michael on 5/6/15.
 */
(function ($) {

    Drupal.behaviors.bootstrap_subtheme_oandg = {

        attach: function (context, settings) {

                jQuery(".form-type-bef-checkbox").addClass("col-md-4");
                jQuery(".dropdown-menu").addClass("mason-dropdown");
                jQuery(".block-title").addClass("mason-block-title");
                jQuery(".container").addClass("fluid-container");
                jQuery(".main-container.container").removeClass().addClass("fluid-container");
                jQuery(".container").removeClass().addClass("fluid-container");
                jQuery(".row").removeClass().addClass("row-fluid");

                jQuery( "span:contains('Subscribe ')" ).addClass("subscribe");

                jQuery( ".subscribe").empty();

                  jQuery( "a:contains('Houzz')" ).addClass("houzz");
                 jQuery( ".houzz").empty();

                 jQuery( "a:contains('Facebook')" ).addClass("facebook");
                 jQuery( ".facebook").empty();

                 jQuery( "a:contains('Twitter')" ).addClass("twitter");
                 jQuery( ".twitter").empty();

                 jQuery( "a:contains('Youtube')" ).addClass("youtube");
                 jQuery( ".youtube").empty();

                 jQuery( "a:contains('Pintrest')" ).addClass("pintrest");
                 jQuery( ".pintrest").empty();

                 jQuery( "a:contains('Blogspot')" ).addClass("blogspot");
                 jQuery( ".blogspot").empty();

                 jQuery( "a:contains('Linkedin')" ).addClass("linkedin");
                 jQuery( ".linkedin").empty();

                jQuery( "span:contains('Gallery')" ).addClass("gallery");
                jQuery( "span:contains('Locations & Hours')" ).addClass("road");
                jQuery( "span:contains('Blog')" ).addClass("blog");

                jQuery( "span:contains('Blog')" ).addClass("blog");

                jQuery( "span:contains('blank')" ).addClass("blank");
                jQuery( "span.blank").empty();

                jQuery("#block-system-main-menu ul.menu.nav li.expanded.dropdown").mouseover(function(){
                if (jQuery("#mason-nav-container.shrink")[0]){
                } else {
                    jQuery("#mason-nav-container").removeClass("grow").addClass("shrink");
                }
                });
                jQuery("#block-system-main-menu ul.menu.nav li.expanded.dropdown").mouseleave(function() {
                      jQuery("#mason-nav-container").removeClass("shrink").addClass("grow");
                });

                jQuery(document).ready(function(){
                  jQuery('a[href^="http"]').attr('target','_blank');
                  jQuery(window).resize();
                });

                jQuery(window).resize(function() {
                    if((window.fullScreen) || (window.innerWidth == screen.width && window.innerHeight == screen.height)) {
                        jQuery("html").css("overflow", "hidden");
                    } else {
                        jQuery("html").css("overflow", "auto");
                    }
                });

                /*
               jQuery('.original').hover(function (){
                 jQuery('#mason-nav-container').removeClass("black").removeClass("darkerburgandy").toggleClass("original");
                });
                jQuery('.gray').hover(function (){
                    jQuery('#mason-nav-container').toggleClass("gray");
                });
                jQuery('.grad').hover(function (){
                    jQuery('#mason-nav-container').toggleClass("grad");
                });
                jQuery('.black').hover(function (){
                   jQuery('#mason-nav-container').toggleClass("darkerburgandy");
                  });
              jQuery('.black').hover(function (){
                 jQuery('#mason-nav-container').toggleClass("black");
                });
                jQuery('.blackburgandy').hover(function (){
                    jQuery('#mason-nav-container').toggleClass("black");
                    jQuery('.views-field-field-media-thumbnail').toggleClass("darkerburgandy");
                });
              jQuery('.justblack').hover(function (){
                    jQuery('#mason-nav-container').toggleClass("black");
                    jQuery('.views-field-field-media-thumbnail').toggleClass("black");
                });
              jQuery('.colormargin').click(function (){
                    jQuery('#mason-nav-container').toggleClass("colormargin");

                });
              jQuery('.colormarginleft').click(function (){
                    jQuery('#mason-nav-container').toggleClass("colormarginleft");
                });
              jQuery('.showfooter').click(function (){
                    jQuery('.footer').toggleClass("showfooter");
                });
*/
                var p = jQuery( "#colorbox" );
                var position = p.position();
                //jQuery( "#colorbox" ).text( "left: " + position.left + ", top: " + position.top );
                jQuery("#colorbox").css('display', 'inline-block').css('top', '0px').css('left', '240px').css('position', 'absolute').css('z-index', '99');

            //    jQuery("#cboxOverlay").css('display', 'inline-block').css('top', '687px').css('left', '561px').css('width', '550px').css('height', '550px').css('position', 'relative').css('z-index', '29');
            jQuery("#cboxOverlay").css('z-index', '19');
            // end our js code
  }
    };})(jQuery);
