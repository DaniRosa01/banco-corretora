$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky"); 
        }else{
            $('.navbar').removeClass("sticky");  //quando mexe na barra de rolagem muda de cor
        }if(this .scrollY > 500){                // se estiver rolagem pra baixo
            $('.scroll-up-btn').addClass("show"); // ele funciona
        }else{
            $('.scroll-up-btn').removeClass("show");//se estiver pra cima ele desaparece
        }
    });
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});   //icone no html e animação no css
        });

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    $('.carousel').owlCarousel({              //ele faz o carousel funcionar
        margin:20,
        loop:true,
        autoplayTimeOut:2000,
        autoplayHoverPauser:true,
        responsive:{                  //faz o carousel não parar de girar
            0:{
                items:1,
                nav:false
            },
            600:{
                items:2,     
                nav:false
            },
            1000:{
                items:3,
                nav:false
            }
        }
    });
}); 