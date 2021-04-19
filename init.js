// Run when loading is complete
$(document).ready(function () {
    // Initialise the carousel
    $('.carousel').slick({
        autoplay: true,
        pauseOnHover: true,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    fade: true,
                    swipe: false
                }
            },
        ]
    });
    // Toggle answers - Get sibling of button and toggle it
    $('.open-answer').click(function() {
        $(this).siblings().toggle();
    })
    ;
});
