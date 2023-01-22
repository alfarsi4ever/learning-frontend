
$(document).ready(function () {

    $("#check").hover(function () {
        alert(((-1 / 50) * ($(window).scrollTop() - 200)));
    });

    $(window).scroll(function () {
        if ($(window).scrollTop() > "150") {
            $("#creative").animate({ "opacity": ((-1 / 250) * ($(window).scrollTop() -400)) },1);
        }
        
    })

    /*phone - img*/
    /*creative*/
    //feature
});