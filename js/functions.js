var goToSection = function(link) {
    var href = link.attr('href');

    $('html, body').animate({
        scrollTop: $(href).offset().top - 55
    }, 500);
}

$(document).on('click', '.nav li', function (event) {
    event.preventDefault();
    var link = $(event.currentTarget).find('a');
    goToSection(link);
    $('#nav-check').prop('checked', false);
});

$(document).on('click', 'section#services a', function (event) {
    event.preventDefault();
    var link = $(event.currentTarget);
    goToSection(link);
});

$(".logo").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});