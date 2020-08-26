import 'loading-attribute-polyfill';
import $ from 'jquery';
import 'slick-carousel';

$(function(){
    $('.banner-slider__container').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000
    });
});