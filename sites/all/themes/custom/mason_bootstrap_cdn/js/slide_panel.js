/**
 * Created by Michael on 5/6/15.
 */
(function ($) {

    Drupal.behaviors.bootstrap_subtheme_oandg = {

        attach: function (context, settings) {

                jQuery(".form-type-bef-checkbox").addClass("col-md-4");
                jQuery( ".page-division.page-division-mason-division div.region" ).removeClass( "well" );
                jQuery(".dropdown-menu").addClass("mason-dropdown");
                jQuery(".block-title").addClass("mason-block-title");

             /* var vars = {};
                var newCount = 0;
                
                jQuery("li.expanded.dropdown").mouseover(function(){
                        jQuery(this).children("a.dropdown-toggle").click();
                        jQuery(".region-sidebar-first").addClass("open");
             
                }); */
                
              /*  jQuery("li.expanded.dropdown").mouseover(function(){
                        jQuery(this).children("a.dropdown-toggle").click();
                        
                        if (newCount == 0) {
                                jQuery(".region-sidebar-first").animate({left: '-=150'}, "slow");
                                newCount = 1;
                            } else { 
                            } 
             
                }); */
                
              /*  jQuery("li.expanded.dropdown").mouseenter(function(){                
                                jQuery(".region-sidebar-first").animate({left: '+=150'}, "slow");
                                newCount = 0;                
                });            
                
             /*   
                jQuery("li.expanded.dropdown").mouseenter(function() {
                        jQuery(this).off("mouseenter");
                                jQuery(".region-sidebar-first").animate({left: '-=150'}, "slow");
                });
                          
                jQuery("#mason-nav-container").mouseleave(function() {
                      jQuery(".region-sidebar-first").animate({left: '+=150'}, "slow");  
                        
                }); */
              
            // end our js code
  }       
    };})(jQuery);
