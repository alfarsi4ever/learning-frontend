

$(function () {
    $.getJSON("books.json", function (mybook) {
        var lst = "<table class='table table-bordered'>\
<th>id</th>\
<th>title</th>\
<th>desc</th>\
<th>price</th>\
<th>image</th>";
        $.each(mybook, function (i, value) {

//            lst += "<div class='col-md-6'>\
//<div class='row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative'>\
//<div class='col p-4 d-flex flex-column position-static'>\
//<strong class='d-inline-block mb-2 text-primary'>"+ value.id + "</strong>\
//<h3 class='mb-0'>"+ value.title + "</h3>\
//<div class='mb-1 text-muted'>Nov 12</div>\
//<p class='card-text mb-auto'>"+ value.desc + "</p>\
//<a href='#' class='stretched-link'>"+ value.price + "</a>\
//</div>\
//<div class='col-auto d-none d-lg-block'>\
//<img class='bd-placeholder-img' width='200' height='250' src="+ value.pic +"  ></img>\
//</div>\
//</div>\
//</div>\
//"

            lst += "\
                <tr>\
                    <td>"+ value.id + "</td>\
                    <td>"+ value.title + "</td>\
                    <td>"+ value.desc + "</td>\
                    <td>"+ value.price + "</td>\
                    <td> <img class='bd-placeholder-img' width='200' height='250' src="+ value.pic +"  ></img></td>\
                </tr>";


            
        });//endEach
        lst += "</table>";
        $("#mv").html(lst);
    });
});
