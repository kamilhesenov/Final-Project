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
        dots: true,
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
  
 // Home-Brand Corusel 
 if($("#brand").length){
  $('.brand-section .owl-carousel').owlCarousel({
      items: 5,
      margin: 30,
      dots: false,
      loop: true,
      nav: true,
      mouseDrag: true,
      autoplay:false,
      autoplayHoverPause:true,
      transitionStyle: "fade",
      responsive: {
        0: {
            items: 2
        },
        768: {
            items: 3
        },
        992: {
            items: 5
        }
    }
 })
}
 $( ".brand-section .owl-carousel .owl-prev").html('<i class="fas fa-angle-left"></i>');
 $( ".brand-section .owl-carousel .owl-next").html('<i class="fas fa-angle-right"></i>');
 
//  Header Scroll start 
 if($("#navbar").length){
  $(window).scroll(function (e) { 
    e.preventDefault();
    let scroll = $(window).scrollTop();
    if(scroll > 100){
      $("#navbar").addClass("show");
    }
    else{
      $("#navbar").removeClass("show");
    }
  });
 }

 // Back-to-top start
 if($(".back-to-top").length){
  $(window).scroll(function (e) { 
    e.preventDefault();
    let scroll = $(window).scrollTop();
    if(scroll > 100){
      $(".back-to-top").addClass("show");
    }
    else{
      $(".back-to-top").removeClass("show");
    }
  });
 }

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

// About-Choose-us
var title = document.querySelectorAll(".choose-acordin .choose-acordin-item");

for(let item of title){
  item.addEventListener("click",function(e){
    e.preventDefault();
    
    var body = document.querySelectorAll(".choose-acordin .choose-acordin-item .tab-content");
    
    let array = $(this).siblings();
   
    for(let arrayitem of array){
      if(!arrayitem.lastElementChild.classList.contains("show")){
        arrayitem.firstElementChild.style.backgroundColor = "#f1f7fa";
        arrayitem.firstElementChild.lastElementChild.style.color = "#111111";
        arrayitem.firstElementChild.firstElementChild.firstElementChild.style.display = "block";
        arrayitem.firstElementChild.firstElementChild.lastElementChild.style.display = "none";
      }
    }
    
    for(let classValue of item.lastElementChild.classList){
      if(classValue !== "show"){
        item.lastElementChild.classList.toggle("show");
      }
  }
   for(let cardCollaps of body){
    if(cardCollaps !== item.lastElementChild){
      cardCollaps.classList.add("show");
    }
  }

  

  if(item.lastElementChild.classList.contains("show")){
    item.firstElementChild.style.backgroundColor = "#f1f7fa";
    item.firstElementChild.lastElementChild.style.color = "#111111";
    item.firstElementChild.firstElementChild.firstElementChild.style.display = "block";
    item.firstElementChild.firstElementChild.lastElementChild.style.display = "none";
}
else{
    item.firstElementChild.style.backgroundColor = "#396CF0";
    item.firstElementChild.lastElementChild.style.color = "#fff";
    item.firstElementChild.firstElementChild.firstElementChild.style.display = "none";
    item.firstElementChild.firstElementChild.lastElementChild.style.display = "block";

}
  
  

  })
}



