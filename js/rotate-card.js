
(function() {
    var rotate, timeline;

    rotate = function() {
        return $('.card:first-child').fadeOut(600, 'swing', function() {
            return $('.card:first-child').appendTo('.containers').hide();
        }).fadeIn(600, 'swing');
    };

    $('.next').click(function() {
        return rotate();
    });
}).call(this);
