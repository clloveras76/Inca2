

/* Cargar Menu TOP*/

$(document).ready(function() {

    $("#MenuTopContainer").load('menu_top.html');


});

/* Cargar Menu TOP*/






/*

$(document).ready(function(){  
  
    $('#boton_cargar').click(function() {  
        $.ajax({  
            url: 'producto_1.html',  
            success: function(data) {  
                $('#div_dinamico').html(data);  
            }  
        });  
    });  
  
    $('#boton_cargar_anim').click(function() {  
        $.ajax({  
            url: 'contenido_anim.html',  
            success: function(data) {  
                $('#div_dinamico_anim').html(data);  
                $('#div_dinamico_anim div').slideDown(1000);  
            }  
        });  
    });  
  
});  

*/

/* Cargar Menu left  Productos*/

$(document).ready(function() {

    $("#MenuLeftContainer").load('menu_left_productos.html');


});

/* Cargar Menu left  Productos*/





/* Cargar Menu left  Servicios*/

$(document).ready(function() {

    $("#MenuLeftContainerSercicios").load('menu_left_servicios.html');


});

/* Cargar Menu left  Serivicios*/


/* Cargar Menu left  Clientes*/

$(document).ready(function() {

    $("#MenuLeftContainerClientes").load('menu_left_clientes.html');


});

/* Cargar Menu left  Clientes*/




/* Cargar Footer*/

$(document).ready(function() {

    $("#FooterContainer").load('main_footer.html');


});

/* Cargar Footer*/



	
/* Efecto transition Links*/

$(document).ready(function() {
 $(".BlockContainerFade").css("display", "none");
    $(".BlockContainerFade").fadeIn(800);
  
 $("a.transicion").click(function(event){
  event.preventDefault();
  linkLocation = this.href;
  $(".BlockContainerFade").fadeOut(11000, redirectPage);   });
   function redirectPage() {
  window.location = linkLocation;
 }   
});


$(document).ready(function() {
 $(".BlockContainerFade2").css("display", "none");
    $(".BlockContainerFade2").fadeIn(1200);
  
 $("a.transicion").click(function(event){
  event.preventDefault();
  linkLocation = this.href;
  $(".BlockContainerFade2").fadeOut(11000, redirectPage);   });
   function redirectPage() {
  window.location = linkLocation;
 }   
});

$(document).ready(function() {
 $(".BlockContainerFade3").css("display", "none");
    $(".BlockContainerFade3").fadeIn(1700);
  
 $("a.transicion").click(function(event){
  event.preventDefault();
  linkLocation = this.href;
  $(".BlockContainerFade3").fadeOut(11000, redirectPage);   });
   function redirectPage() {
  window.location = linkLocation;
 }   
});



/* Efecto transition Links*/


