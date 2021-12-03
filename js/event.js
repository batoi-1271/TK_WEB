$(window).scroll(function () {
    let oTop = $('.grids-2').offset().top - window.innerHeight;
    if ($(window).scrollTop() > oTop) {
        $('.header').addClass('sticky');
    } else {
        $('.header').removeClass('sticky');
    }
})



let nCount = selector => {
    $(selector).each(function () {
        $(this).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: "swing",

            step: function (value) {
                $(this).text(Math.ceil(value))
            }
        })
    })
}

let position = 0;
$(window).scroll(function () {
    let oTop = $('.numbers').offset().top - window.innerHeight
    if(position == 0 && $(window).scrollTop() >= oTop) {
        position++;
        nCount(".rect > h1");
    }
})