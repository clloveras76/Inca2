
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

/* Cargar Menu left  Productos*/


/* Cargar Menu left  Clientes*/

$(document).ready(function() {

    $("#MenuLeftContainerClientes").load('menu_left_clientes.html');


});

/* Cargar Menu left  Clientes*/







