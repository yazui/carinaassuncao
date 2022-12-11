//scrollto
var scrollTo = function(identifier, speed) {
    $('html, body').animate({
        scrollTop: $(identifier).offset().top
    }, speed || 800);
}


$(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 0) {
        $('.menu').fadeOut(200);
    } else {
        $('.menu').fadeIn(200);
    }
});

function section1(){ scrollTo("#section1"); }
function section2(){ scrollTo("#section2"); }
function section3(){ scrollTo("#section3"); }
function section4(){ scrollTo("#section4"); }