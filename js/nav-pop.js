//This page is for the pop-up menu
$(".menuBtn1").hover(
function () {
    // deciding the screen width
    if ($(window).width() > 1000) {
    $(".pop-learn").stop().fadeIn(300);
    }
},
function () {
    console.log(222);

    $(".pop-learn").stop().fadeOut();
}
);
$(".menuBtn2").hover(
function () {
    //if screen is larger than 768px
    if ($(window).width() > 1000) {
    $(".pop-eqpt").stop().fadeIn();
    }
},
function () {
    $(".pop-eqpt").stop().fadeOut();
}
);
$(".menuBtn3").hover(
function () {
    if ($(window).width() > 1000) {
        $(".pop-about").stop().fadeIn();
    }
},
function () {
    $(".pop-about").stop().fadeOut();
}
);

$(".fm1").on("click", function () {
console.log(123);
console.log($(".mode1").css("transform"));

if ($(".mode1").css("transform") == "matrix(0, 0, 0, 0, 0, 0)") {
    $(".mode1").animate({
    width: 1000,
    });
    $(".mode1").css({
    visibility: "visible",
    animation: "big 0.5s forwards",
    });

    $(".mark").css({ zIndex: "999" });
}
});

$(".mode1").on("click", function () {
$(".mark").css({ zIndex: "-1" });

$(".mode1").css({
    visibility: "hidden",
});
$(".mode1").css({
    animation: "",
});
});

$(".fm2").on("click", function () {
if ($(".mode2").css("transform") == "matrix(0, 0, 0, 0, 0, 0)") {
    $(".mode2").animate({
    width: 1000,
    });
    $(".mode2").css({
    visibility: "visible",
    animation: "big 0.5s forwards",
    });

    $(".mark").css({ zIndex: "999" });
}
});

$(".mode2").on("click", function () {
$(".mark").css({ zIndex: "-1" });

$(".mode2").css({
    visibility: "hidden",
});
$(".mode2").css({
    animation: "",
});
});

$(".fm3").on("click", function () {
if ($(".mode3").css("transform") == "matrix(0, 0, 0, 0, 0, 0)") {
    $(".mode3").animate({
    width: 1000,
    });
    $(".mode3").css({
    visibility: "visible",
    animation: "big 0.5s forwards",
    });

    $(".mark").css({ zIndex: "999" });
}
});

$(".mode3").on("click", function () {
$(".mark").css({ zIndex: "-1" });

$(".mode3").css({
    visibility: "hidden",
});
$(".mode3").css({
    animation: "",
});
});

$(".fm4").on("click", function () {
if ($(".mode4").css("transform") == "matrix(0, 0, 0, 0, 0, 0)") {
    $(".mode4").animate({
    width: 1000,
    });
    $(".mode4").css({
    visibility: "visible",
    animation: "big 0.5s forwards",
    });

    $(".mark").css({ zIndex: "999" });
}
});

$(".mode4").on("click", function () {
$(".mark").css({ zIndex: "-1" });

$(".mode4").css({
    visibility: "hidden",
});
$(".mode4").css({
    animation: "",
});
});
