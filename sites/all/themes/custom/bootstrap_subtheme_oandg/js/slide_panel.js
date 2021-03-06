/**
 * Created by Michael on 5/6/15.
 */
(function ($) {

    Drupal.behaviors.bootstrap_subtheme_oandg = {

        attach: function (context, settings) {

                var doc = document.documentElement;
                doc.setAttribute('data-useragent', navigator.userAgent);

                jQuery( "div .gallery-thumbs").hide();

               if( jQuery(".field-name-field-media-flexslider").is(":visible") ) {
                // alert(jQuery('.field-name-field-media-flexslider').length);
                var grabit = jQuery(".field-name-field-media-flexslider").last("div[id^='colorbox-inline']").parent();
                //jQuery(grabit).css( "background-color", "red" );
              //  jQuery(grabit).children("img").css( "background-color", "blue" );
                jQuery(grabit).children("img").css( "display", "none" );                
               }

                jQuery( "<div class='ie-holder red'></div>" ).insertBefore( "#block-views-mason-home-page-icon-block");
                jQuery( "<div class='ie-holder green'></div>" ).insertBefore( "#block-search-form");
                jQuery( "<div class='ie-holder blue'></div>" ).insertBefore( "#block-system-main-menu");
                jQuery( "<div class='ie-holder yellow'></div>" ).insertBefore( "#block-menu-menu-bottom-menu");
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


                jQuery( "<div class='iconsmall products'></div>" ).insertBefore( "#block-system-main-menu li span:contains('PRODUCTS ')");
                jQuery( "<div class='iconsmall service'></div>" ).insertAfter( "#block-system-main-menu li span:contains('SERVICES ')");
                jQuery( "<div class='iconsmall events'></div>" ).insertAfter( "#block-system-main-menu li span:contains('EVENTS & CEU PROGRAMS ')");
                jQuery( "<div class='iconsmall mason-stores'></div>" ).insertAfter( "#block-system-main-menu li span:contains('MASON STORES & YARDS ')");
                jQuery( "<div class='iconsmall showrooms'></div>" ).insertAfter( "#block-system-main-menu li span:contains('SHOWROOMS ')");

                jQuery( "<div class='iconsmall promotions'></div>" ).insertAfter( "#block-system-main-menu li a:contains('Promotions')");
                jQuery( "<div class='iconsmall brochures'></div>" ).insertAfter( "#block-system-main-menu li a:contains('Brochures')");
                jQuery( "<div class='iconsmall magazine'></div>" ).insertAfter( "#block-system-main-menu li a:contains('STYLISH SPACES with MASONRY')");
                jQuery( "<div class='iconsmall contact'></div>" ).insertAfter( "#block-system-main-menu li a:contains('Contact Us')");

                jQuery("#block-system-main-menu ul.menu.nav li.expanded.dropdown").mouseover(function(){
                if (jQuery("#mason-nav-container.shrink")[0]){
                } else {
                    jQuery("#mason-nav-container").removeClass("grow").addClass("shrink");
                    jQuery(".ie-holder").removeClass("grow").addClass("shrink-sub");
                    jQuery('.ie-holder').show();
                }
                });
                jQuery("#block-system-main-menu ul.menu.nav li.expanded.dropdown").mouseleave(function() {
                      jQuery("#mason-nav-container").removeClass("shrink").addClass("grow");
                      jQuery('.ie-holder').hide();
                });
                jQuery("#block-system-main-menu .dropdown-menu.mason-dropdown a").click(function() {
                      //alert("hey");
                      jQuery("li.dropdown").addClass('active');
                      jQuery('.ie-holder').show();
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

                //jQuery('.col-sm-7').css('background-color', '#ADD8E6');
                 var safeobj = jQuery('.col-sm-7');
                 var safeobjk = safeobj.width();
                 var safeobjp = safeobj.offset();
                 var safewidth = Number(safeobj.width()) + Number(safeobjp.left);
                 var safeheight = Number(safeobj.height())  + Number(safeobjp.top);
                 //jQuery("#block-block-1").text("safewidth: " + safewidth + " safeheight:" + safeheight);
                 jQuery('.colorbox-inline.init-colorbox-inline-processed.cboxElement').addClass('callbacks');
                 jQuery("#cboxOverlay").css('z-index', '19');
                 jQuery(".callbacks").colorbox({
                 				//	onOpen:function(){ alert('onOpen: colorbox is about to open'); },
                 				//	onLoad:function(){ alert('onLoad: colorbox has started to load the targeted content'); },
                 				//	onComplete:function(){ alert('onComplete: colorbox has displayed the loaded content'); },
                 				//	onCleanup:function(){ alert('onCleanup: colorbox has begun the close process'); },
                 				//	onClosed:function(){ alert('onClosed: colorbox has completely closed'); }
                         // I removed the options that were set to the default.
                         // The top and left can be left out or set to a default,
                         // I used them as a test to see the difference when the event hook is used.
                 	});

                 jQuery('#cboxClose').mouseup( "click", function() {
                   jQuery('.product').removeClass('overlay-color');
                  });
                  jQuery('.cboxElement').mouseup(function(){
                    jQuery(this).closest('.product').addClass('overlay-color');
                     //  var p = jQuery(this).closest('.product');
                     //  var positionP = p.position();
                     //  var offsetP = p.offset();
                     });

                   // Use the "cbox_complete" event hook.
                   // It allows the colorbox div to be positioned after it opens,
                   // but before the content is loaded.
                   jQuery(document).bind('cbox_complete', function(){
                      // Grab the position of the button,
                      // colorbox can be positioned relative to it.
                     var pos = jQuery('.overlay-color').offset();
                     //var zeropos = jQuery('.col-sm-7').offset();
                     var pwidth = jQuery('.product').width();
                     var pwidth2 = Number(pwidth) + Number(pwidth);
                     var pheight = jQuery('.product').height();
                     var pheight2 = Number(pheight) + Number(pheight);
                     var widthtotal = Number(pos.left) + pwidth2;
                     var heighttotal = Number(pos.top) + pheight2;
                   //jQuery("#block-block-1").text("zeropos.top: " + zeropos.top + "zeropos.left: " + zeropos.left + "safewidth: " + safewidth + "widthtotal:" + widthtotal);
                     //console.log(pos);
                     if (widthtotal > safewidth){
                       //alert('yes');
                       pos.left = pos.left - pwidth;
                     } else {
                     };
                     // Set the position of the colorbox div
                     // You can add to or subtract from the pos values
                     // Example: top: (pos.top + 20) + "px"
                   jQuery("#block-block-1").text("safeobjk: " + safeobjk + "widthtotal: " + widthtotal + "safewidth: " + safewidth + "position left: " + pos.left + ", position top: " + pos.top);
                   jQuery.colorbox.resize({width: pwidth2 , height: pheight2});
                   jQuery("#colorbox").css({
                         position: "absolute",
                         top: pos.top + "px",
                         left: pos.left + "px"
                     }).show();
                    });
            // end our js code
  }
    };})(jQuery);
