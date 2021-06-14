$(document).ready(function() {
    $('#overview-button').on('click', function() {
        $('html, body').animate({
            scrollTop: $('#overview').offset().top
        }, 500);
    });

    $('#my-work-button').on('click', function() {
        $('html, body').animate({
            scrollTop: $('#my-work').offset().top
        }, 500);
    });

    $('#skills-button').on('click', function() {
        $('html, body').animate({
            scrollTop: $('#skills').offset().top
        }, 500);
    });

    $('#contact-button').on('click', function() {
        $('html, body').animate({
            scrollTop: $('#contact').offset().top
        }, 500);
    });

    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");

    });
});
ScrollReveal({ reset: true });

ScrollReveal().reveal('.hero')
ScrollReveal().reveal('.notification')
ScrollReveal().reveal('.box')

window.fcWidget.init({
    token: "537c5813-4e94-4954-9ae1-36455eff13cc",
    host: "https://wchat.freshchat.com"
});