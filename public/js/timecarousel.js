// couldn't get it to work with the carousel it wants this code with the jquery script otherwise won't run I left in handlebars.

$(document).ready(function() {
   $('.item').each(function() {
       if (!$(this).hasClass("active")) {
               $(this).addClass("active");
       } else {
           $(this).removeClass("active");
       }
    });
});