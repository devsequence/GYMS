AOS.init({
    // disable: 'mobile',
});
$('input[type="tel"]').inputmask("+7 (999) 999-99-99");

$(window).on('scroll', function() {
    var $this = $(this);
    if ($this.scrollTop() > 1) {
        $('.header').addClass('header-scroll');
    }else {
        $('.header').removeClass('header-scroll');
    }
});
$('.counter-block__numb').each(function () {
    var $this = $(this);
        $this.prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });

});


$(".header-nav__list a[href^='#']").on('click', function (e){
    e.preventDefault();
    var $this = $(this);
    $('html, body').animate({
        scrollTop: $($this.attr("href")).offset().top - 100
    }, 1200);
    $('.header-nav, .header-btn').removeClass('is-open');
});

var windowWidth = $(window).width();
if (windowWidth < 768) {
    // mobileScrollAnimate();
    $('.service-item').on('click', function (e) {
        e.preventDefault();
        var $this = $(this);
        var $thisList = $this.find('.service-item__list');
        if($this.hasClass('is-open')){
            $('.service-item').removeClass('is-open');
            $this.removeClass('is-open');
        }else{
            $('.service-item').removeClass('is-open');
            $this.addClass('is-open');
        }
    });
}

else {
    $('.service-item').on('click', function (e) {
        e.preventDefault();
        var $this = $(this);
        var $thisTitle = $this.find('.service-item__title');
        var $thisList = $this.find('.service-item__list');
        var $thisImage = $this.find('.service-item__media');
        $('.service-info__title').html($thisTitle.html());
        // $('.service-media img').attr('src');
        $('.service-info__list').html($thisList.html());
    });

    $('.main-wrapper').on('mousemove',function(e){
        var paralax = $('.parallax img');
        var $pageY = 50+e.pageY/20;
        var $pageX = 50+e.pageX/20;
        var $elementStyleParalax = 'matrix(1, 0, 0, 1, -'+ $pageX +', -'+ $pageY +' )';
        paralax.css({
            transform : $elementStyleParalax,
        });
    });
}
//
// $('.dropdown-title').on('click', function (e) {
//     var $this = $(this);
//     $this.next().toggleClass('open');
// });
//
// $(document).mouseup(function (e){
//     var div = $('.dropdown');
//     if (!div.is(e.target)
//         && div.has(e.target).length === 0) {
//         div.find('.dropdown-list').removeClass('open');
//     }
// });
// $('.dropdown-title').each(function () {
//     var text = $('.dropdown-list li:first').text();
//     $(this).html(text);
//     $('.dropdown-list li').on('click', function (e) {
//         e.preventDefault();
//         var $this = $(this);
//         var $list = $this.html();
//         var $thisID = $this.data('price');
//         // var $currItem = $('.plan-item__current [data-price=' + $thisID + ']');
//         // var $currItemPlan = $('.plan-item__sale-pers [data-price=' + $thisID + ']');
//         $this.parents().find('.dropdown-title').html($list);
//         $('.dropdown-list').removeClass('open');
//         $('.plan-item__current, .plan-item__sale-pers, .plan-item__sale s').addClass('hidden');
//         $('.plan-item__current[data-price = '+$thisID+']').removeClass('hidden');
//         $('.plan-item__sale-pers[data-price = '+$thisID+']').removeClass('hidden');
//         $('.plan-item__sale-mons[data-price = '+$thisID+']').removeClass('hidden');
//         console.log($thisID);
//
//     });
// });

$('.header-btn').on('click', function (e) {
    e.preventDefault();
    var $this = $(this);
    $this.toggleClass('is-open');
    $('.header-nav').toggleClass('is-open');
});
$('.sidebar-slider').slick({
    prevArrow:"<button type='button' class='slick-prev pull-left'><svg class=\"icon\"><use xlink:href=\"#arrow\"></use></svg></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><svg class=\"icon\"><use xlink:href=\"#arrow\"></use></svg></button>",
});
$('.main-slider').slick({
    prevArrow:"<button type='button' class='slick-prev pull-left'><svg class=\"icon\"><use xlink:href=\"#arrow\"></use></svg></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><svg class=\"icon\"><use xlink:href=\"#arrow\"></use></svg></button>",
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                arrows: false,
                dots: true,
                autoplay: true,
                autoplaySpeed: 2000,
            }
        },
        {
            breakpoint: 768,
            settings: {
                speed: 500,
                fade: true,
                cssEase: 'linear',
                arrows: false,
                dots: true,
                autoplay: true,
                autoplaySpeed: 2000,
            }
        }
    ]
});
$('.news-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow:"<button type='button' class='slick-prev pull-left'><svg class=\"icon\"><use xlink:href=\"#arrow\"></use></svg></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><svg class=\"icon\"><use xlink:href=\"#arrow\"></use></svg></button>",
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

function popupOpen() {
    const $popupButton = $('.popup-btn');
    $popupButton.on('click', function (e) {
        const $this = $(this);
        const popupButtonData = $this.data('popup');
        $('.popup').removeClass('active');
        $('body').addClass('hide-scroll');
        $('div[data-popup = '+popupButtonData+']').addClass('active');
    });
}
popupOpen();

$('.popup-close').on('click', function (e) {
    var $this = $(this);
    $this.parent().parent().removeClass('active');
    $('.popup-overlay').removeClass('active');
    $('body').removeClass('hide-scroll');
});
$('.popup-overlay').on('click', function (e) {
    var $this = $(this);
    $this.removeClass('active');
    $('.popup').removeClass('active');
    $('body').removeClass('hide-scroll');
});





