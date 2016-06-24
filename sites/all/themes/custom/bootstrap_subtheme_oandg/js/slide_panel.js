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
                });
                

                jQuery(window).resize(function() {
                    if((window.fullScreen) || (window.innerWidth == screen.width && window.innerHeight == screen.height)) {
                        jQuery("html").css("overflow", "hidden");
                    } else {
                        jQuery("html").css("overflow", "auto");
                    }
                });
                
                jQuery(document).ready(function(){
                    jQuery(window).resize();
                    // trigger the function when the page loads
                    // if you have another $(document).ready(), simply add this line to it
                });            
               jQuery('.original').hover(function (){
                 jQuery('#mason-nav-container').removeClass("black").removeClass("darkerburgandy").toggleClass("original");
                });  
                jQuery('.black').hover(function (){
                    jQuery('#mason-nav-container').toggleClass("black");
                    jQuery('.views-field-field-media-thumbnail').toggleClass("original");                                     
                });             
              jQuery('.burgandy').hover(function (){
                 jQuery('#mason-nav-container').toggleClass("darkerburgandy");
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

            // end our js code
  }       
    };})(jQuery);
