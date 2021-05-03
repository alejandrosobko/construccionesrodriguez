 var goToSection = function(link) {
    var href = link.attr('href');

    $('html, body').animate({
        scrollTop: $(href).offset().top - 40
    }, 800);
}


// go to section by clicking a navbar item
$(document).on('click', '.nav li', function (event) {
    event.preventDefault();
    var link = $(event.currentTarget).find('a');
    goToSection(link);
    $('#nav-check').prop('checked', false);
});


// go to top by clicking logo
$(".logo").click(function() { $("html, body").animate({ scrollTop: 0 }, "slow");});
$("#goToTop").click(function() { $("html, body").animate({ scrollTop: 0 }, "slow");});

// open carousel in a modal by clicking an image
$(function() {
    $('.pop').on('click', function(event) {
        event.preventDefault();
        let $images = $(event.currentTarget).parents('.carousel-inner').find('img');
        let $carouselItem = '<div class="item"> \
                                 <img class="carousel-img center-block" src="" alt="imagen"> \
                                 <div class="carousel-caption"></div> \
                             </div> ';

        let $carousel = $('.modal-content .carousel-inner');
        $carousel.html(''); // clear previous images
        $images.each(function(_index, img) {
            $carousel.append($carouselItem);
            $carousel.find('img:last').attr('src', img.src);
        });

        $carousel.find('.item')[0].className = 'item active';
        if (event.currentTarget.classList.contains('vertical-img')) {
            $('#imagemodal').addClass('vertical-mode')
        } else {
            $('#imagemodal').removeClass('vertical-mode')
        }
        $('#imagemodal').modal('show');
    });
});


// handle key press
$(document).keydown(function(e) {
    if (e.keyCode === 37) {
       $(e.target).find(".carousel-control.left").click();
       return false;
    }
    if (e.keyCode === 39) {
       $(e.target).find(".carousel-control.right").click();
       return false;
    }
});

var msgShown = false;
$(document).bind("mouseleave", function(e) {
    if (e.pageY - $(window).scrollTop() <= 1 && !msgShown) {
        $('#wa-widget-send-button').click();
        msgShown = true;
    }
});

window.sr = ScrollReveal({ reset: true });
const revealOptions = { reset: false, duration: 500, delay: 0, easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)'};
sr.reveal('#services .box', revealOptions);
sr.reveal('#contact article', revealOptions);
