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
                jQuery(".first.expanded.dropdown").css("background-color", "#7F1334" );
                jQuery( ".subscribe").empty();
                
 
                 jQuery( "a:contains('Facebook')" ).addClass("facebook");
                 jQuery( ".facebook").empty();     

                 jQuery( "a:contains('Twitter')" ).addClass("twitter");
                 jQuery( ".twitter").empty();  
                
                jQuery( "span:contains('Gallery')" ).addClass("gallery");
                jQuery( "span:contains('Locations & Hours')" ).addClass("road");
                jQuery( "span:contains('Blog')" ).addClass("blog"); 
   
                
                jQuery( "span:contains('Blog')" ).addClass("blog");
                

                jQuery( "span:contains('blank')" ).addClass("blank");
                jQuery( "span.blank").empty();

                
                jQuery("#block-system-main-menu ul.menu.nav li.expanded.dropdown").mouseover(function(){
                    jQuery(this).css("background-color", "#E0D9B8" );
                   /* jQuery("#mason-nav-container").animate({left: '-=150'}, "slow");*/
                if (jQuery("#mason-nav-container.shrink")[0]){
                    // Do something if class exists
                } else {
                    jQuery("#mason-nav-container").removeClass("grow").addClass("shrink");
                }                                                          
                });            
                jQuery("#block-system-main-menu ul.menu.nav li.expanded.dropdown").mouseleave(function() {
                       jQuery(this).css("background-color", "#7F1334" );
                      /* jQuery("#mason-nav-container").animate({left: '+=150'}, "slow");*/
                      jQuery("#mason-nav-container").removeClass("shrink").addClass("grow");                                                            
                });                        
              
            // end our js code
  }       
    };})(jQuery);
