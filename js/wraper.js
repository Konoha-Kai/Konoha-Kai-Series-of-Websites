$(function() {
    // set carousel interval and pause on hover
    let carousel = $('.carousel');
    if(carousel.length) {
        carousel.carousel({
            interval: 5000,  // change interval to 5 seconds
            pause: 'hover'   // hover pauses the carousel
        });
    }
});