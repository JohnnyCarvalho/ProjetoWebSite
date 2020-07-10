$(document).ready(function(){

    /* 
    ESSE TRECHO DE CÓDIGO FAZ A ANIMAÇÃO NO BOTÃO DE MENU MOBILE ACONTECER
    QUANDO CLICA NOS 3 RISQUINHOS O MENU APARECEE QUANDO CLICA NO X O MENU DESAPARECE 
     */
    $('#nav-toogle').click(function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $('.header-collapse').toggleClass('active');
    });
    // CAROUSEL PRINCIPAL
    $('.owl-carousel').owlCarousel({
        items:1,
        lazyLoad:true,
        loop:true,
        margin:0,
        nav: true
    });
});