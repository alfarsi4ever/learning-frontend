$(function () {

    var courses = ["ASPNET", "Front-End", "SQL", "C#"];
    var lst = "<ul class='list-group'>";
    for (var i = 0; i < courses.length; i++) {
        lst += "<li class='list-group-item mt-1'>" + courses[i] + "</li>"
    }
    lst += "</ul>";
    $("#output").html(lst);
}); // main jquery document load
//=========================================================================
var players = ["Ziyad", "Sultan", "Ahmed", "Basem", "Yasir"];
$("#btnprint").click(function () {
    var lst = "<select class='form-select mt-3' aria-label='Default select example'>";
    lst += "<option>-Select-</option>";
    for (var i = 0; i < players.length; i++) {
        lst += "<option> " + players[i] + "</option>";
    }
    lst += "</select>";
    console.log(lst);
    $("#output").append(lst);

});
loadJSON();
jsonBook();

async function loadJSON() {
    try {
        const response = await $.getJSON("data.json");
        var obj = response;

        var id = 0;
        var id_address = 0;

        // Create a new <p> element
        var p1 = document.createElement("p");
        // Create a new <p> element
        var p2 = document.createElement("p");
        // Create a new <p> element
        var p3 = document.createElement("p");

        // Set the text content of the <p> element
        p1.textContent = "obj[" + id + "].id :" + obj[id].id;
        p2.textContent = "obj[" + id + "].name :" + obj[id].name;
        p3.textContent = "obj[" + id + "].account.address[" + id_address + "].street: " + obj[id].account.address[id_address].street;

        // Append the <p> element to the <body>
        document.body.appendChild(p1);
        document.body.appendChild(p2);
        document.body.appendChild(p3);

    } catch (error) {
        console.log(error);
    }
}




//var obj = [{
//    id: 10,
//    name: "ahmad",
//    account: {
//        full: "ahmad khalid",
//        address: [{
//            street: "1"
//        },
//        {
//            street: "2"
//        }],
//        age: 22
//    }
//},

//{
//    id: 11,
//    name: "ahmad",
//    account: {
//        full: "zaqi omar",
//        address: [{
//            street: "3666"
//        },
//        {
//            street: "3688"
//        }],
//        age: 29
//    }
//}
//];
//var id = 0;
//var id_address = 0;
//console.log("obj[" + id + "].id :" + obj[id].id);
//console.log("obj[" + id + "].name :" + obj[id].name);

////console.log("obj[" + id + "].account.address.street: " + obj[id].account.address.street);


//console.log("obj[" + id + "].account.address[" + id_address + "].street: " + obj[id].account.address[id_address].street);



