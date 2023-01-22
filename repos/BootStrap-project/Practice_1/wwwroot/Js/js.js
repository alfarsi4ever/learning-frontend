$(document).ready(function () {

    $("select").change(function () {
        
        
        if ($(this).val() == "1") {
            
            $(".main").addClass("light");
            $(".main").removeClass("dark");
        }

        else if ($(this).val() == "2") {

            $(".main").addClass("dark");
            $(".main").removeClass("light");
        }

    });

    //$("#btnDefault").change(function () {
    //    $(".main").removeClass("light");
    //    $(".main").removeClass("dark");
    //});
});
