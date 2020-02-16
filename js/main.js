$('.mob_menu_button').on('click', function () {
    $('.mob_menu').toggleClass('open_menu')
});


$('.list-item a').on('click', function () {
    $('.mob_menu').removeClass('open_menu')
});

$('.mob_menu_button').on('click', function () {
    $('.line1, #mob_menu_button').toggleClass('clck')
});


$('.mob_menu_button').on('click', function () {
    $('.line3').toggleClass('clck')
});

$('.list-item a').on('click', function () {
    $('.line1, #mob_menu_button, .line3').removeClass('clck')
});