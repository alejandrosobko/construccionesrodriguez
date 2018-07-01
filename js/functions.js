$(document).on('click', '.nav li', function (event) {
    event.preventDefault();

    var link = $(event.currentTarget).find('a');
    var href = link.attr('href');

    $('html, body').animate({
        scrollTop: $(href).offset().top - 55
    }, 500);

    $('#nav-check').prop('checked', false);
});

$(".logo").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});