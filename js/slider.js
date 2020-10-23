$(document).ready(function(){
    $('.slider').slick({
        adaptiveHeight: true,
        arrows: true,
        prevArrow: '.btn--left',
        nextArrow: '.btn--right',
        autoplay: true,
        autoplaySpeed: 5000,
        fade: true,
        lazyLoad: true
    });
  });