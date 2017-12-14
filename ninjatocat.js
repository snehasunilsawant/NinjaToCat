$(document).ready(function(){

  $('img').click(function(){
    var ninja_image=$(this).attr("src");
    var cat_image=$(this).attr("alt-src");
    $(this).attr("src",cat_image);
    $(this).attr("alt-src",ninja_image);
   });
});
