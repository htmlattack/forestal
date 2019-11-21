$(document).ready(function(){

    // Main video
    var main_video = $('.main__video');

    if(main_video.length) {
        $(window).on('load', function(){
            main_video.find('video')[0].play();
        });
    }

    var start_products = $('.start-products-slider');

    if(start_products.length) {
        start_products.flickity({
            autoPlay: 5000,
            wrapAround: true,
            pageDots: false,
            prevNextButtons: false,
        });
    }

    var start_news = $('.start-news__list');

    if(start_news.length) {
        start_news.flickity({
            groupCells: 3,
            autoPlay: 5000,
            cellAlign: 'left',
            pageDots: false,
            prevNextButtons: false,
        });
    }

    var inpdecorate = $('.inp-decorate');

    if(inpdecorate.length) {
        inpdecorate.styler({
            
        });
    }


    // Cart
    $('.js-cart-more-toggle').on('click', function(e){
        $this = $(this);

        e.preventDefault();

        $this.closest('.cart-item').find('.cart-item__more').slideToggle(250);
        $this.text($this.text() == 'Show details' ? 'Hide details' : 'Show details');
    });

    $('.qty__minus').on('click', function(e) {
        e.preventDefault();

        var $input = $(this).closest('.qty').find('.qty__value');
        var value = parseInt($input.val());
     
        if (value > 1) {
            value = value - 1;
        } else {
            value = 0;
        }
     
        $input.val(value);
    });
     
    $('.qty__plus').on('click', function(e) {
        e.preventDefault();

        var $input = $(this).closest('.qty').find('.qty__value');
        var value = parseInt($input.val());
     
        if (value < 100) {
            value = value + 1;
        } else {
            value =100;
        }

        $input.val(value);
    });

    // If safari add class
    if (navigator.userAgent.indexOf('Safari') != -1 &&
        navigator.userAgent.indexOf('Chrome') == -1) {
        document.body.className += "safari";
    }
});