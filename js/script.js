var time = $(".time");
var countdown = setInterval(() => {
    let sec = $(time[3]).text();
    let min = $(time[2]).text();
    let hour = $(time[1]).text();
    let day = $(time[0]).text();
    sec--;
    if (sec < 0) {
        sec = 59;
        min--;
        if (min < 0) {
            min = 59;
            hour--;
            if (hour < 0) {
                hour = 23;
                day--;
            }
        }
    }
    if (sec == 0 && min == 0 && hour == 0 && day == 0) {
        clearInterval(countdown);
    }
    $(time[3]).text(sec);
    $(time[2]).text(min);
    $(time[1]).text(hour);
    $(time[0]).text(day);
}, 1000);
$(document).ready(function () {
    $(".list-slider").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
    });
    $(".products").slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        dots: true,
        arrows: true,
    });
    $(".list-feedbacks").slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: false,
        arrows: true,
    });
    $(".heart").on("click", function () {
        if ($(this).hasClass("tym")) {
            $(this).removeClass("tym");
        } else {
            $(this).addClass("tym");
        }
    });
});
