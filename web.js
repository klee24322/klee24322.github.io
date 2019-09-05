$(window).on("load", function() {
    var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 500,
        speedAsDuration: true
    });
    document.getElementById("occupation").onclick = changeText;
    $('#occupation').hover(function() {
        $(this).css('cursor', 'pointer');
    });
    AOS.init();
    new TypeIt('#name', {
        strings: ['Hi, I\'m', 'Kenneth'],
        speed: 20,
        waitUntilVisible: true
    }).go();

});


window.onscroll = function() { myFunction() };

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}


function changeText() {
    if (document.getElementById("occupation").innerHTML == "Aspiring UX/UI Designer") {
        document.getElementById("occupation").innerHTML = "Student at San Jose State University"
    } else {
        document.getElementById("occupation").innerHTML = "Aspiring UX/UI Designer"

    }
}