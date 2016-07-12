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
                //jQuery("#colorbox").removeAttr("style");
            //  jQuery("#colorbox").mousedown(function (){
              //var p = jQuery(this);
            //  var positionP = p.offset();
            //  jQuery("#block-block-1").text( "left: " + positionP.left + ", top: " + positionP.top);
            //  jQuery("#colorbox").css('display', 'inline-block').css('top', positionP.top).css('left', positionP.left).css('position', 'absolute').css('z-index', '99');
            //  });

          //  jQuery('#colorbox').appendTo('this.cboxElement');

          jQuery('.gray').hover(function (){
              jQuery('#mason-nav-container').toggleClass("gray");
          });

            window.globalVar = "This is global!";
            //jQuery('#colorbox').css( "background-color", "blue" );
            //jQuery('#colorbox:visible').css('height', '0px', 'important' );
          //  jQuery('#colorbox:visible').css('top', globalVar.top, 'important').css('left', globalVar.left, 'important');
            //  jQuery('#colorbox:visible').css('top', '300px', 'important').css('left', '300px', 'important');
          //  jQuery("top[value='4px']")
          //  jQuery("left[value='601px']")
              //jQuery('#colorbox').css('display', 'block').css('visibility', 'visible').css('top', '').css('left', '').css('width', '').css('height', '').css('position', 'absolute').css('z-index', '99');
          //  jQuery('#colorbox').css('top', '').css('left', '').css('width', '').css('height', '').css('position', '').css('z-index', '');
            jQuery('#cboxClose').mouseup( "click", function() {
              jQuery('.product').removeClass('overlay-color');
            //  jQuery('#colorbox').css('position', 'absolute').css('top', '0').css('left', '0').css('display', 'none').css('visibility', 'hidden');
              //jQuery('#colorbox').css('display', 'none').css('visibility', 'hidden').css('top', '').css('left', '').css('width', '').css('height', '').css('position', '').css('z-index', '');
             });
             jQuery('.cboxElement').mouseup(function(){
               jQuery(this).closest('.product').addClass('overlay-color');
                  var p = jQuery(this).closest('.product');
                  var positionP = p.position();
                  var globalVar = p.offset();
                  var test = globalVar.top;
                  jQuery('#colorbox:visible').css('top', globalVar.top + 'px', 'important').css('left', globalVar.left + 'px', 'important');
                  //  jQuery('#colorbox:visible').css('top', '300px', 'important').css('left', '300px', 'important');
                //  jQuery('#colorbox').colorbox({position:absolute, top:0, left:0});
              //jQuery('#colorbox').css("display", 'block !important').css('visibility', 'visible !important').css('top', '300px !important').css('left', '200px !important').css('z-index', '999 !important');
                  //jQuery("#block-block-1").text( "left: " + globalVar.left + ", top: " + globalVar.top);
                //  jQuery('#colorbox').attr("style",newValue) to set it to something else
              //    jQuery('#colorbox').css('display', 'inline-block').css('top', offsetP.top).css('left', offsetP.left);
                  //jQuery('#cboxOverlay').css('display', 'inline-block').css('top', offsetP.top).css('left', offsetP.left);
                  //jQuery('#cboxWrapper').css('display', 'inline-block').css('top', offsetP.top).css('left', offsetP.left) ;
                if (jQuery('#colorbox:visible')) {
                  //  jQuery('a#colorbox').colorbox({top:globalVar.top, left:globalVar.left});

                //    jQuery('#colorbox').style.setProperty( 'top', '300px', 'important' );
                //    jQuery( '#colorbox' ).each(function () {
              //      this.style.setProperty( 'top', '300px', 'important' );
                //    });
              //      jQuery('.colorbox')[0].style.setProperty( 'height', '0px', 'important' );

                  //    jQuery('#colorbox:visible').css('height', '0px', 'important' );
                  //jQuery('colorbox[top]' = '500');
                //  jQuery('colorbox[left]' = '500');
                  //jQuery('colorbox[top]').next().text( "Hot Fuzz" );
                //  jQuery('colorbox[left]').next().text( "Hot Fuzz" );
                  //var offset = jQuery(this).offset();
                //  var o = offset.top-200;
                  //if(o<100){o=100;}
                //  jQuery(this).colorbox({top:o});
                //  alert("offset left: " + jQuery('a.colorbox').colorbox.top + ", offset top: " + jQuery('a.colorbox').colorbox.left);
                //jQuery('.colorbox').css( "background-color", "yellow" );
              //  jQuery("#block-block-1").text( "offset left: " + globalVar.left + ", offset top: " + globalVar.top);
              //  jQuery("a").colorbox({ top: 100, left: "50%" });
                //jQuery("#block-block-1").text( "position left: " + positionP.left + ", position top: " + positionP.top);
                jQuery('a#colorbox').css('top', globalVar.top ).css('left', globalVar.left );
                //jQuery('a.cboxElement').colorbox({top:0, left:0});
                //jQuery(this).addClass('colorbox-mod');
              //  jQuery('a.colorbox').colorbox({top: '', left:'', width:'', height:''});
            //  jQuery('a#colorbox').colorbox({position:absolute, top:0, left:0});
            //  jQuery('a#colorbox').colorbox({position:absolute, top:globalVar.top, left:globalVar.left});
              //jQuery(this).colorbox({position:absolute, top:globalVar.top, left:globalVar.left});


              //    jQuery.colorbox.settings.left=globalVar.left;
              //  jQuery.colorbox.settings.top=globalVar.top);
              //  jQuery.colorbox.position();


              //jQuery('#colorbox').css('top', '').css('left', '').css('width', '').css('height', '').css('position', 'absolute').css('z-index', '99');
              //jQuery('#colorbox').css("style", '');
              //jQuery('#colorbox').css("display", 'block !important').css('visibility', 'visible !important').css('top', '300px !important').css('left', '200px !important').css('z-index', '999 !important');
              }
                });
                jQuery("#cboxOverlay").css('z-index', '19');
            // end our js code
  }
    };})(jQuery);
