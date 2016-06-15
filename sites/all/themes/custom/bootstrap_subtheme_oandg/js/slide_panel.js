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
                
                jQuery("li.expanded.dropdown").mouseover(function(){
                    jQuery(this).css("background-color", "#E0D9B8" );
                   /* jQuery("#mason-nav-container").animate({left: '-=150'}, "slow");*/
                if (jQuery("#mason-nav-container.shrink")[0]){
                    // Do something if class exists
                } else {
                    jQuery("#mason-nav-container").removeClass("grow").addClass("shrink");
                }                   
                   
                });
             
                jQuery("li.expanded.dropdown").mouseleave(function() {
                       jQuery(this).css("background-color", "#7F1334" );
                      /* jQuery("#mason-nav-container").animate({left: '+=150'}, "slow");*/
                      jQuery("#mason-nav-container").removeClass("shrink").addClass("grow");
                /*if (jQuery("#mason-nav-container.shrink")[0]){
                    jQuery("#mason-nav-container").removeClass("shrink").addClass("grow");
                } else {
                    jQuery("#mason-nav-container").removeClass("grow");
                }  */                 
                                         
                      
                });               
              
            // end our js code
  }       
    };})(jQuery);
