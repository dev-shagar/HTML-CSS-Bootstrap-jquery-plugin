$(document).ready(function(){


    //STICKY MENU
    $(".js--service-section").waypoint(function(direction) {

        if ("direction == down"){
            $("nav").addClass("sticky");
        } else {
            $("nav").removeClass("sticky");
        }

    });



    //MIXITUP PORTFOLIO
    var mixer = mixitup('.container');
});

//HUMBERG MENU

function openNav() {
    document.getElementById("myNav").style.width="100%";
}
function closeNav() {
    document.getElementById("myNav").style.width="0%";
}