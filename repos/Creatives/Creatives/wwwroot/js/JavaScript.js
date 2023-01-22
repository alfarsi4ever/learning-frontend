$(document).ready(function () {
    $("#btnSummer").click(function () {
        $(".blue-bg").addClass("summer");
        $(".blue-bg").removeClass("winter");
    });
    $("#btnWinter").click(function () {
        $(".blue-bg").addClass("winter");
        $(".blue-bg").removeClass("summer");
    });
    $("#btnDefault").click(function () {
        $(".blue-bg").removeClass("winter");
        $(".blue-bg").removeClass("summer");
    });

    $("#home").click(function () {

        $("html,body").animate({
            "scrollTop": "0"
        });
        $("header").removeclass("bg-header-linear");
    });

    $("#pages").click(function () {
        
        $('html,body').animate({
            "scrollTop": "879px"
        });
        $("header").addclass("bg-header-linear");
    });
    $("#ftr").click(function () {

        $('html,body').animate({
            "scrollTop": "1624px"
        });
    });

    $("#ext").click(function () {
        
        $('html,body').animate({
            "scrollTop": "2754px"
        });
    });

    $("#tut").click(function () {

        $('html,body').animate({
            "scrollTop": "3531px"
        });
    });

    $("#conct").click(function () {

        $('html,body').animate({
            "scrollTop": "5074x"
        });
    });
});
