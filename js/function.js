$(document).ready(function(){   
    
//// CAMINO 1
//    
//    //Ocultar todos los tabs
//    $('.tab-content article').hide();
//    //Mostrar el contenido del primer tab
//    $('.tab-content article:first-child').show();
//    
//    $('#tabs nav ul li').on('click', function(e){
//        e.preventDefault();
//        
//        //Remover la clase active de todos los ancor
//        $(this).siblings().removeClass('active');
//        //Agregar la clase active al ancor que le hacemos click
//        $(this).addClass('active');
//        
//        
//        //Obtener posicion e indicarle que empiece en 1
//        var a = $(this).index()+1;
//        //Ocutlar todos los tab
//        $('.tab-content article').hide();
//        //Mostrar el tab 
//        var b = $('#' + 'tab-' + a).fadeIn();
//        console.log(b);
//    });
    
    
//CAMINO 2  
    
    //Mostrar el contenido del primer tab
    $('.tab-content article:first-child').show();
    
    $('#tabs nav ul li a').on('click', function(e){
        e.preventDefault();
        //Remover la clase active de todos los ancor
        $(this).parent().siblings().removeClass('navtab__item--active');
        //Agregar la clase active al ancor que le hacemos click
        $(this).parent().addClass('navtab__item--active');
                
        //Obtener el tab a mostrar
        var tabShow = $(this).attr('href');
        //Ocutlar todos los tab
        $('.tab-content article').hide();
        //Mostrar el tab 
        $(tabShow).fadeIn();
    });
    

    
});
     