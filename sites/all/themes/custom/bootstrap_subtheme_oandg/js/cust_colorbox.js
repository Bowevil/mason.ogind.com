<script>
$(document).ready(function(){

// I removed the options that were set to the default.
// The top and left can be left out or set to a default,
// I used them as a test to see the difference when the event hook is used.
  $("#colorbox").colorbox({
    iframe:true,
    innerWidth:660,
    innerHeight:720,
    opacity: 0.6,
    top: 0,
    left: 0
  });

// Use the "cbox_complete" event hook.
// It allows the colorbox div to be positioned after it opens,
// but before the content is loaded.
 $(document).bind('cbox_complete', function(){

// Grab the position of the button,
// colorbox can be positioned relative to it.
  var pos = $(colorbox).position();
  //console.log(pos);

  // Set the position of the colorbox div
  // You can add to or subtract from the pos values
  // Example: top: (pos.top + 20) + "px"
  $("#colorbox").css({
      position: "absolute",
      top: pos.top + "px",
      left: pos.left + "px"
  }).show();
 });

});
</script>
