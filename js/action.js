$(document).ready(function(){
$('.slider').slider();
// $('.carousel.carousel-slider').carousel({full_width: true});
 $('.button-collapse').sideNav();
// $('.collapsible').collapsible();

});

// $('.sair').on('click', function (event) {

//     // prevenir comportamento normal do link
//     event.preventDefault();
//     $('.button-collapse').sideNav('hide');
//     // código a executar aqui
// });

$('.mobile').on('click', function (event) {

    // prevenir comportamento normal do link
    // event.preventDefault();
    // $('.button-collapse').sideNav('hide');
    // código a executar aqui
    if ($(window).innerWidth() <= 992){
     $(document).ready(function(){
            $('.button-collapse').sideNav('hide');
     });
      
   };
});




// $("a").click(function(evento){
//     if ($(window).innerWidth() <= 976){
//      $(document).ready(function(){
//          $('.button-collapse').sideNav({closeOnClick: true});
//      });
     
//    }else{
//     $(document).ready(function(){
//          $('.button-collapse').sideNav({closeOnClick: false});
//      });  
//    };
// });
