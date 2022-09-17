$(document).ready(function() {
   $( window ).resize(function() {
      $("#authentication #header").css("display", "none");
      $("#authentication #footer").css("display", "none");
      $("#password #header").css("display", "none");
      $("#password #footer").css("display", "none");
   });

   $("i.material-icons.zoom-in").click(function() {
      // $("div#product-modal").attr("aria-hidden", "false");
      $("div#product-modal").css({"display": "block"});
      $("#product-modal").modal("show");
      console.log("clicked");
   });
});
