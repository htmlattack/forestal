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

    if ($(window).width() < 1024) {
        start_news.flickity('destroy');
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


    // Account sidebar
    var account_nav = $('.account__nav');
    var hash = document.location.hash;

    function accountNavActive() {
        var active = account_nav.find('.active');
        var activePos = active.position().top;
        var activeHeight = active.height();

        $('.account__nav-line').css({
            top: activePos,
            height: activeHeight
        });
    }

    if(account_nav.length) {
        account_nav.append('<div class="account__nav-line"></div>');

        if(hash) {
            account_nav.find('a[href="'+hash+'"]').tab('show');
        } 

        accountNavActive();

        account_nav.find('a').on('shown.bs.tab', function(e) {
            accountNavActive();
        });
    }


    // Tabs
    var tabs = $('.tabs');

    function tabsNavActive(item) {
        var active = item.find('.active');
        var activePos = active.position().left;
        var activeWidth = active.width();

        item.find('.tabs__nav-line').css({
            left: activePos,
            width: activeWidth
        });
    }

    if(tabs.length) {
        tabs.each(function(){
            var tab = $(this).find('.tabs__nav');

            tab.append('<div class="tabs__nav-line"></div>');

            tabsNavActive(tab);

            tab.find('a').on('shown.bs.tab', function(e) {
                tabsNavActive(tab);
            });
        });
    }
});