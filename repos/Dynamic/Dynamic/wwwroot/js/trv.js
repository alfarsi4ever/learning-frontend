$(function () {

    $("ul").next().css("border", "3px solid orange");
    $("ul").nextAll().css("border", "3px solid blue");
    $("ul").nextUntil("p").css("border", "3px solid yellow");


    $("li").parents().css("border", "3px solid red");
    $("li").parentsUntil("div").css("border", "3px solid black");

    $("p").prev().css("border", "3px dashed lightblue");
    $("p").prevAll().css("border", "3px dashed purple");

    $("p").prevUntil("ul").css("border", "3px dashed brown");

    $("li").children().css("border", "3px solid brown");
    $("section").find("h2").css("border", "3px dashed #9999ff");

    $("div").filter(".alert-success").remove();
    $("div").filter(".alert-success").empty();
    $("div").not(".alert-success").empty();
});//main