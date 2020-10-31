$(document).ready(function (){

 //   Home-intro Corusel
    if($("#home-intro").length){
        $('.slider .owl-carousel').owlCarousel({
            margin: 30,
            items: 1,
            dots: false,
            loop: true,
            nav: true,
            mouseDrag: false,
            autoplay:false,
            autoplayTimeout:5000,
            autoplayHoverPause:true,
            transitionStyle: "fade",
    })
    }
 $( ".slider .owl-carousel .owl-prev").html('<i class="fas fa-angle-left"></i>');
 $( ".slider .owl-carousel .owl-next").html('<i class="fas fa-angle-right"></i>');


 //  WowAnimation Plugin
 function wowAnimation() {
    var wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: false,
        live: true
    });
    wow.init();
 }
 $(window).on('load', function () {
  wowAnimation();
  });

 //   Home-services Corusel
  if($("#services").length){
    $('.services-corusel .owl-carousel').owlCarousel({
        margin: 30,
        items: 4,
        dots: true,
        loop: true,
        nav: false,
        mouseDrag: true,
        navSpeed: 1000,
        transitionStyle: "fade",
        responsive: {
                    0: {
                        items: 1
                    },
                    768: {
                        items: 2
                    },
                    992: {
                        items: 4
                    }
                }
 })
 }
 $( ".services-coruse .owl-carousel .owl-dots .owl-dot").html('<span></span>');

 //   Home-pecialist-doctors Corusel
 if($("#specialist-doctors").length){
  $('.specialist-corusel .owl-carousel').owlCarousel({
      items:  4,
      margin: 30,
      dots: false,
      loop: true,
      nav: false,
      mouseDrag: true,
      navSpeed: 1000,
      transitionStyle: "fade",
      responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        992: {
            items: 4
        }
    }
 })
 }
 // Counter Plugin
 if($("#counter").length){
    $(".timer").counterUp({
      delay: 10,
      time: 5000,
    })
  }

 //  Home-Testimonial Corusel
  if($("#testimonial").length){
    $('.testimonial-content .owl-carousel').owlCarousel({
        items: 1,
        margin: 30,
        dots: false,
        loop: true,
        nav: true,
        mouseDrag: true,
        autoplay:false,
        autoplayHoverPause:true,
        transitionStyle: "fade",
 })
 }
 $( ".testimonial-content .owl-carousel .owl-prev").html('<i class="fas fa-angle-left"></i>');
 $( ".testimonial-content .owl-carousel .owl-next").html('<i class="fas fa-angle-right"></i>');
})

// Home-Speciality
var tablinks = document.querySelectorAll("#speciality .nav-pills .nav-item .nav-link");
var tabContent = document.querySelectorAll("#speciality .tab-content");

for(let elem of tablinks){
    elem.addEventListener("click",function(e){
        e.preventDefault();
        
      document.querySelector("#speciality .nav-pills .nav-item .nav-link.active").classList.remove("active");
      document.querySelector(".tab-content.show").classList.remove("show");

      elem.classList.add("active");

      var count = elem.getAttribute("data-index");
      var panel = [...tabContent].filter(elem => elem.getAttribute("data-index") == count);

      panel[0].classList.add("show");
      panel[0].classList.remove("d-none");

    
    for(let item of tabContent){
      if(panel[0] !== item){
        item.classList.add("d-none");
      }
    }
      
    })
}



