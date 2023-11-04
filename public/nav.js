let navButtons = $(".nav");
let selected = "home";
let mouseOnNav = false;

$("#navbar").mouseover(function () {
    $("#navbar").removeClass("navbar-hidden");
    $("#drop-down").css("opacity", "0");
    mouseOnNav = true;
    lastScrollY = $(window).scrollTop();
});

$("#navbar").mouseleave(function () {
    if (lastScrollY > 25) $("#navbar").addClass("navbar-hidden");
    $("#drop-down").css("opacity", "1");
    mouseOnNav = false;
});

$(navButtons).click(function () {
    if (selected === $(this).attr("id")) return;
    $("#" + selected).removeClass("active");
    selected = $(this).attr("id");
    $(this).addClass("active");
});

let lastScrollY = $(window).scrollTop();

$(window).scroll(function () {
    if (mouseOnNav) return;
    if (lastScrollY < $(window).scrollTop()) {
        $("#navbar").addClass("navbar-hidden");
        $("#drop-down").css("opacity", "1");
    } else {
        $("#navbar").removeClass("navbar-hidden");
        $("#drop-down").css("opacity", "0");
    }
    lastScrollY = $(window).scrollTop();
});
