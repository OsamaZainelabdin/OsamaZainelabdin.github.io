$(document).ready(() => {
    const $circles = $('#circles');
    let growthAmount;
    let interval;
    let radius;
    let numberCircles;
    let circleInterval;
    $('#btnStart').click(function (event) {              
        radius = $('#radius').val();
        numberCircles = parseInt($('#number-circles').val());
        growthAmount = parseInt($('#growth-amount').val());
        interval = parseInt($('#interval').val());
        for (let i = 0; i < numberCircles; i++) {
            let $circle = $('<div>', {
                'class': 'circle',
                'css': {
                    'width': radius,
                    'height': radius,
                    'background-color': getRandomRGBColor(),
                    'bottom': Math.floor(Math.random() * event.clientX),
                    'left': Math.floor(Math.random() * event.clientY),
                    'border-radius': '1000px',
                }
            });

            circleInterval = setInterval(growCircle, interval, $circle);
            $circle.click(function() {
                $(this).remove();
                clearInterval(circleInterval);
            });
            $circles.append($circle);
        }
    });

    function getRandomRGBColor() {
        let R = Math.floor(Math.random() * 255);
        let G = Math.floor(Math.random() * 255);
        let B = Math.floor(Math.random() * 255);
        return "rgba(" + R + "," + G + "," + B + ",1)";
    }

    function growCircle($circle) {
        let radius = parseInt($circle.css('width')) + growthAmount + 'px';
        $('.circle').css({
            'width': radius,
            'height': radius
        });
    }
});