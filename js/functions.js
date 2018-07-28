var goToSection = function(link) {
    var href = link.attr('href');

    $('html, body').animate({
        scrollTop: $(href).offset().top - 55
    }, 500);
}


// go to section on click navbar item
$(document).on('click', '.nav li', function (event) {
    event.preventDefault();
    var link = $(event.currentTarget).find('a');
    goToSection(link);
    $('#nav-check').prop('checked', false);
});


// go to specific section
$(document).on('click', 'section#services a', function (event) {
    event.preventDefault();
    var link = $(event.currentTarget);
    goToSection(link);
});


// go to top on click logo
$(".logo").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});


// open carousel in a modal on click an image
$(function() {
    $('.pop').on('click', function(event) {
        event.preventDefault();
        let $images = $(event.currentTarget).parents('.carousel-inner').find('img');
        $('.modal-content').find('img').each(function(index, img) {
            img.src = $images[index].src;
        });

        $('#imagemodal').modal('show');
    });
});


// handle key press
$(document).keydown(function(e) {
    if (e.keyCode === 37) {
       // Previous
       $(".carousel-control.left").click();
       return false;
    }
    if (e.keyCode === 39) {
       // Next
       $(".carousel-control.right").click();
       return false;
    }
});


// handle swipe on mobile screen
