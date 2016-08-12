<?php

/**
 * @file
 * template.php
 */

function bootstrap_subtheme_oandg_preprocess_page(&$variables) {

    $url =  "//{$_SERVER['HTTP_HOST']}{$_SERVER['REQUEST_URI']}";
    $escaped_url = htmlspecialchars( $url, ENT_QUOTES, 'UTF-8' );
       if (strpos($url,'mason-products') or strpos($url,'sds') or strpos($url,'brochures-and-promotions')!== false) {
             $col = ' class="col-sm-7"';
        } else {
            $col = ' class="col-sm-3"';
    };

 // Add information about the number of sidebars.
  if (!empty($variables['page']['sidebar_first']) && !empty($variables['page']['sidebar_second'])) {
    $variables['content_column_class'] = ' class="col-sm-3"';
  }
  elseif (!empty($variables['page']['sidebar_first']) || !empty($variables['page']['sidebar_second'])) {
    $variables['content_column_class'] = ' class="col-sm-8"';
  }
  else {
    $variables['content_column_class'] = ' class="col-sm-12"';
  }
  if (!empty($variables['page']['sidebar_first']) && !empty($variables['page']['sidebar_second'])) {
    $variables['content_column_class'] = $col;
  }

}

/**
 * Implements template_preprocess_html().
 *
 */
function bootstrap_subtheme_oandg_preprocess_html(&$variables) {
    $viewport = array(
   '#tag' => 'meta',
   '#attributes' => array(
     'name' => 'viewport',
     'content' => 'width=device-width, initial-scale=1, maximum-scale=1',
   ),
  );
  $element = array(
      '#tag' => 'meta',
      '#attributes' => array(
        'http-equiv' => 'X-UA-Compatible',
        'content' => 'IE=edge,chrome=1'
      ),
    );
    drupal_add_html_head($element, 'http_equiv');
  drupal_add_html_head($viewport, 'viewport');
  drupal_add_js(drupal_get_path('theme', 'bootstrap_subtheme_oandg') . '/js/slide_panel.js', array(
  ));
}

/**
 * Implements theme_menu_link().
 *
 * Theme the cart menu link.
 */
//function bootstrap_subtheme_oandg_menu_tree__menu_mason_division_menu($variables) {
  //$output = '<button type="button" class="" data-toggle="offcanvas" data-recalc="false" data-target=".navmenu" data-canvas=".canvas">Button</button><ul><div class="sub navmenu navmenu-default navmenu-left">' . $variables['tree'] . '</div></ul>';
  //return $output;
//}

//drupal_add_js('https://somedomain.com/external-file.js', array('type' => 'external', 'scope' => 'header', 'weight' => 10));
