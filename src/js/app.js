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
        if ($(window).width() < 1024) {
            start_products.flickity({
                autoPlay: 5000,
                wrapAround: true,
                pageDots: false,
                prevNextButtons: false,
                pageDots: true
            });
        } else {
            start_products.flickity({
                autoPlay: 5000,
                wrapAround: true,
                pageDots: false,
                prevNextButtons: false,
            });
        }
    }

    var imgHeight = $('.start-products-slider__image').height();
    
    $('.flickity-page-dots').css('top', imgHeight);

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

    var url = document.location.toString();

    if (url.match('#')) {
        $('.account__nav a[href="#' + url.split('#')[1] + '"]').tab('show');
    } 

    // Change hash for page-reload
    $('.account__nav a').on('shown.bs.tab', function (e) {
        window.location.hash = e.target.hash;
    });

    $('.header__burger').on('click', function(){
        $(this).toggleClass('is-animated');
        $('body').toggleClass('menu--opened');
    });

    $('.cookie .btn').on('click', function(){
        $(this).closest('.cookie').hide();
    });

    $('.cookie').hide();

    // Datepicker
    if($('.inp-datepicker').length) {
        $('.inp-datepicker').datepicker({
            showOtherMonths: true,
            selectOtherMonths: true,
        });
    }

    var contacts_map = $('.contacts__map');

    if(contacts_map.length) {
        var mainPosition = {
            lat: 40.789624,
            lng: -73.959894
        };

        var iconMain = {
            url: 'assets/images/marker.svg',
            scaledSize: new google.maps.Size(10, 14),
        };

        var mapOptions = {
            center: mainPosition,
            zoom: 13,
            mapTypeControl: false,
            styles: [
                {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#e9e9e9"
                        },
                        {
                            "lightness": 17
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#f5f5f5"
                        },
                        {
                            "lightness": 20
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        },
                        {
                            "lightness": 17
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        },
                        {
                            "lightness": 29
                        },
                        {
                            "weight": 0.2
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        },
                        {
                            "lightness": 18
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        },
                        {
                            "lightness": 16
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#f5f5f5"
                        },
                        {
                            "lightness": 21
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#dedede"
                        },
                        {
                            "lightness": 21
                        }
                    ]
                },
                {
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "color": "#ffffff"
                        },
                        {
                            "lightness": 16
                        }
                    ]
                },
                {
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "saturation": 36
                        },
                        {
                            "color": "#333333"
                        },
                        {
                            "lightness": 40
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
                    "featureType": "transit",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#f2f2f2"
                        },
                        {
                            "lightness": 19
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#fefefe"
                        },
                        {
                            "lightness": 20
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#fefefe"
                        },
                        {
                            "lightness": 17
                        },
                        {
                            "weight": 1.2
                        }
                    ]
                }
            ]
        };

        map = new google.maps.Map(document.getElementById('contacts-map'), mapOptions);

        var marker = new google.maps.Marker({
			position: mainPosition,
			map: map,
            icon: iconMain,
		});
    }


    // Footer select lang
    $('body').on('click', function(){
        $('.footer-lang__select').slideUp(250);
    });

    $('.footer-lang__current').on('click', function(){
        $(this).parent().find('.footer-lang__select').slideDown(250);

        return false;
    });

    $('.footer-lang__select').on('click', function(e){
        e.stopPropagation();
    });



    // Add to bag button
    $('.js-addtobag').on('click', function(){
        $(this).html('<span class="ico-added">Added</span>');
    });


    // Navbox scrollTo
    $('.navbox a').on('click', function(e){
        e.preventDefault();

	    var target = this.hash;
        var $target = $(target);
        var offset = $('.header .wrapper').height();

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top - offset
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });

    });
});