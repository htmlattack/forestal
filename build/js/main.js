// Footer mobile
if($(window).width() <= 767) {

  $('.footer__links-headline').on('click', function(){
    $(this).parent().siblings().find('.footer__links-headline').removeClass('active');
    $(this).parent().siblings().find('ul').slideUp(250);

    $(this).toggleClass('active');
    $(this).parent().find('ul').slideToggle(250);
  });

  $('.menu__accordeon-headline').on('click', function(){
    var item = $(this);

    $('.menu__accordeon-headline').not(item).removeClass('active');
    $('.menu__accordeon-content').not(item.find('.menu__accordeon-content')).slideUp(250);

    item.toggleClass('active');
    item.find('.menu__accordeon-content').slideToggle(250);
  });
}

$('.cookie__close').on('click', function(){
  $(this).parent().addClass('close');
})

$('.devices__items-in').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
  // variableWidth: true,
  loop: false,
  prevArrow: '.devices__items-arrow.prev',
  nextArrow: '.devices__items-arrow.next',
  fade: true,
});

$('.app__slider-img_slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
  // variableWidth: true,
  loop: false,
  prevArrow: '.app__slider-arrow.prev',
  nextArrow: '.app__slider-arrow.next',
  fade: true,
});

$('.comparison__items').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  dots: false,
  loop: false,
  infinite: false,
  prevArrow: '.comparison__arrow.prev',
  nextArrow: '.comparison__arrow.next',
  autoplay: false,
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: false,
        autoplaySpeed: 30000,
        draggable: true,
      }
    },
  ]
});

$('.news__single-items').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: '.news__single-items_wrapper .product__slider-arrow.prev',
  nextArrow: '.news__single-items_wrapper .product__slider-arrow.next',
  // variableWidth: true,
  // loop: true,
  // infinite: true,
});

$('.app__slider-content').slick({
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  // prevArrow: '.app__slider-arrow.prev',
  // nextArrow: '.app__slider-arrow.next',
  // variableWidth: true,
  // loop: true,
  // infinite: true,
});

// $('.circle-plus').on('click', function(){
//   $(this).toggleClass('opened');
// })

$('select').styler();

// counter
var $gallery_2 = $('.clients__items');
var slideCount_2 = null; 

$( document ).ready(function() {
    $gallery_2.slick({
      autoplay: false,
      autoplaySpeed: 5000,
      slidesToShow: 2,
      slidesToScroll: 1,
      infinite: true,
      dots: false,
      arrows: true,
      speed: 350,
      pauseOnHover: false,
      useTransform: true,
      prevArrow: '.clients__items .product__slider-arrow.prev',
      nextArrow: '.clients__items .product__slider-arrow.next',
      responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },

      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
    });
});

$(".js-modal-btn").modalVideo();
$(".js-modal-btn_2").modalVideo();

$gallery_2.on('init', function(event, slick){
  slideCount_2 = slick.slideCount;
  setSlideCount2();
  setCurrentSlideNumber2(slick.currentSlide);
});

$gallery_2.on('beforeChange', function(event, slick, currentSlide, nextSlide){
  setCurrentSlideNumber2(nextSlide);
});

function setSlideCount2() {
  var $el_2 = $('.clients__items .slide-count-wrap').find('.total');
  $el_2.text(slideCount_2);
}

function setCurrentSlideNumber2(currentSlide) {
  var $el_2 = $('.clients__items .slide-count-wrap').find('.current');
  $el_2.text(currentSlide + 1);
}

// counter
var $gallery_3 = $('.news__page-in');
var slideCount_3 = null;

$( document ).ready(function() {
    $gallery_3.slick({
      autoplay: false,
      autoplaySpeed: 5000,
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      dots: false,
      arrows: true,
      speed: 250,
      pauseOnHover: false,
      useTransform: true,
      prevArrow: '.news__page .product__slider-arrow.prev',
      nextArrow: '.news__page .product__slider-arrow.next',
      fade: true,
    });
});

$(".js-modal-btn").modalVideo();

$gallery_3.on('init', function(event, slick){
  slideCount_3 = slick.slideCount;
  setSlideCount3();
  setCurrentSlideNumber3(slick.currentSlide);
});

$gallery_3.on('beforeChange', function(event, slick, currentSlide, nextSlide){
  setCurrentSlideNumber3(nextSlide);
});

function setSlideCount3() {
  var $el_3 = $('.news__page .slide-count-wrap').find('.total');
  $el_3.text(slideCount_3);
}

function setCurrentSlideNumber3(currentSlide) {
  var $el_3 = $('.news__page .slide-count-wrap').find('.current');
  $el_3.text(currentSlide + 1);
}

// counter
var $gallery = $('.top__slider-items');
var slideCount = null;

$( document ).ready(function() {
    $gallery.slick({
      speed: 250,
      fade: true,
      cssEase: 'linear',
      swipe: true,
      swipeToSlide: true,
      touchThreshold: 10,
      prevArrow: '.top__slider .product__slider-arrow.prev',
      nextArrow: '.top__slider .product__slider-arrow.next',
    });
});

$gallery.on('init', function(event, slick){
  slideCount = slick.slideCount;
  setSlideCount();
  setCurrentSlideNumber(slick.currentSlide);
});

$gallery.on('beforeChange', function(event, slick, currentSlide, nextSlide){
  setCurrentSlideNumber(nextSlide);
});

function setSlideCount() {
  var $el = $('.top__slider .slide-count-wrap').find('.total');
  $el.text(slideCount);
}

function setCurrentSlideNumber(currentSlide) {
  var $el = $('.top__slider .slide-count-wrap').find('.current');
  $el.text(currentSlide + 1);
}

$('input, textarea').focus(function(){
  $(this).parents('.inp-group_focus').addClass('focused');
});

$('input, textarea').blur(function(){
  var inputValue = $(this).val();
  if ( inputValue == "" ) {
    $(this).removeClass('filled');
    $(this).parents('.inp-group_focus').removeClass('focused');  
  } else {
    $(this).addClass('filled');
  }
})  

// Burger menu
$('.top__burger').on('click', function(){
    $('.header__menu-burger').toggleClass('open').promise().done(function(){
        $('.menu').fadeToggle(300, function(){
            $('body, html').toggleClass('menu--open');

            // $('body').on('scroll touchmove mousewheel', function(e){
            //   // e.preventDefault();
            //   // e.stopPropagation();
            //   return false;
            // }); 
        });
    });    
});


// $('.menu').on('click', function(){
//     $('.header__menu-burger').removeClass('open');

//     $('.menu').fadeOut(300);

//     $('body, html').removeClass('menu--open');
// });


$('.career__item-headline').on('click', function(){
  $(this).parent().toggleClass('career__item--open');
  $(this).parent().find('.career__item-in').slideToggle(250);
});

$('.faq__item-headline').on('click', function(){
  $(this).parent().toggleClass('faq__item--open');
  $(this).parent().find('.faq__item-in').slideToggle(250);
});


if ($(".map").length){ 
  // map
  function initMap() {
    var latlng = new google.maps.LatLng(40.674, -73.945);
    var map = new google.maps.Map(document.getElementById('map'), {
      center: latlng,
      zoom: 12,
      disableDefaultUI: true,
      styles: [
          {
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#f5f5f5"
          }
        ]
      },
      {
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#f5f5f5"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#bdbdbd"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#eeeeee"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e5e5e5"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#ffffff"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#dadada"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      },
      {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e5e5e5"
          }
        ]
      },
      {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#eeeeee"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#c9c9c9"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      }
      ]
    });
  }
}

$(".range-slider--single").ionRangeSlider({
    min: 1,
    max: 999,
    from: 250,
    type: "single",
    decorate_both: true
});

$(".range-slider--single_2").ionRangeSlider({
    min: 1,
    max: 100,
    from: 40,
    type: "single",
    decorate_both: true
});

$(".range-slider--single_3").ionRangeSlider({
    min: 1,
    max: 100,
    from: 20,
    type: "single",
    decorate_both: true
});

$('.calculator__btn-in').on('click', function(){
    $('.calculator__opened').toggleClass('calculator__opened--active'); 
    $('.circle-plus').toggleClass('opened');
});

// $('.switch__wrapper-solutions').on('click', function(){
//     $(this).parent().parent().toggleClass('active');
//     $('.solutions__info-in').toggleClass('active');
// });

$('.switch__wrapper-solutions').on('click', function(){
    $('.switch__wrapper').toggleClass('active');
    $('.solutions__wrapper').toggleClass('active');
    $('.switch input').toggleClass('active');
});

$('.switch__wrapper-homepage').on('click', function(){
    $('.switch__wrapper').toggleClass('active');
    $('.solutions__wrapper').toggleClass('active');
    $('.switch input').toggleClass('active');
});

var wow = new WOW(
  {
    mobile: true,
  }
);
wow.init();

$('.cookie__content-close').on('click', function(){
  $(this).parent().parent().parent().addClass('hide');
});



