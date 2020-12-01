AOS.init();
var windowWidth = $(window).width();
if (windowWidth < 992) {
    // mobileScrollAnimate();

}

else {
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
$('.dropdown-title').on('click', function (e) {
    var $this = $(this);
    $this.next().toggleClass('open');
});
$(document).mouseup(function (e){
    var div = $('.dropdown');
    if (!div.is(e.target)
        && div.has(e.target).length === 0) {
        div.find('.dropdown-list').removeClass('open');
    }
});
$('.dropdown-title').each(function () {
    var text = $('.dropdown-list li:first').text();
    $(this).html(text);
    $('.dropdown-list li').on('click', function (e) {
        e.preventDefault();
        var $this = $(this);
        var $list = $this.html();
        var $thisID = $this.data('price');
        // var $currItem = $('.plan-item__current [data-price=' + $thisID + ']');
        // var $currItemPlan = $('.plan-item__sale-pers [data-price=' + $thisID + ']');
        $this.parents().find('.dropdown-title').html($list);
        $('.dropdown-list').removeClass('open');
        $('.plan-item__current, .plan-item__sale-pers, .plan-item__sale s').addClass('hidden');
        $('.plan-item__current[data-price = '+$thisID+']').removeClass('hidden');
        $('.plan-item__sale-pers[data-price = '+$thisID+']').removeClass('hidden');
        $('.plan-item__sale-mons[data-price = '+$thisID+']').removeClass('hidden');
        console.log($thisID);

    });
});


$('.sidebar-slider').slick({
    prevArrow:"<button type='button' class='slick-prev pull-left'><svg class=\"icon\"><use xlink:href=\"#arrow\"></use></svg></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><svg class=\"icon\"><use xlink:href=\"#arrow\"></use></svg></button>",
});
$('.main-slider').slick({
    prevArrow:"<button type='button' class='slick-prev pull-left'><svg class=\"icon\"><use xlink:href=\"#arrow\"></use></svg></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><svg class=\"icon\"><use xlink:href=\"#arrow\"></use></svg></button>",
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
            breakpoint: 992,
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





