$(document).ready(function (){
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
})


