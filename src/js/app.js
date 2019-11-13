$(document).ready(function(){

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
});