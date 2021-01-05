import 'loading-attribute-polyfill';
import $ from 'jquery';
import 'slick-carousel';
import {createFocusTrap} from 'focus-trap';

$(function(){
    $('.banner-slider__container').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000
    });
    const modalTrap = createFocusTrap('.modal', {
        initialFocus: '.modal-content'
    });
    $('.main-call__btn').on('click', function(e){
        e.preventDefault();
        $('.modal').addClass('active');
        $('.modal-content').addClass('active').attr('tabindex', 0);
        modalTrap.activate();
        document.body.classList.add('ov-h');
    });
    $('.action-close').on('click', function(e){
        e.preventDefault();
        $('.modal.active, .modal-content.active').removeClass('active');
        $('.modal-content').removeAttr('tabindex');
        modalTrap.deactivate();
        document.body.classList.remove('ov-h');
    });
    $('.action-nav').on('click', function(e){
        e.preventDefault();
        $('.main-nav').addClass('active').attr('tabindex', 0);
        document.querySelector('.main-nav').focus();
    });
    $('.main-nav').on('click', function(){
        $('.main-nav').removeClass('active').removeAttr('tabindex');
    });
    const infoTrap = createFocusTrap('.main-info', {
        initialFocus: '.main-info'
    });
    $('.action-info').on('click', function(e){
        e.preventDefault();
        $('.main-info').addClass('active').attr('tabindex', 0);
        infoTrap.activate();
    });
    $('.main-nav__close, .main-info__close').on('click', function(e){
        e.preventDefault();
        $('.main-info, .main-nav').removeClass('active').removeAttr('tabindex');
        infoTrap.deactivate();
    });
    window.addEventListener('keydown', e => {
        if( e.key === 'Escape' ){
            $('.modal.active, .modal-content.active').removeClass('active');
            $('.modal-content').removeAttr('tabindex');
            modalTrap.deactivate();
            document.body.classList.remove('ov-h');
            $('.main-info, .main-nav').removeClass('active').removeAttr('tabindex');
            infoTrap.deactivate();
        }
    });
});