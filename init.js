// Run when loading is complete
$(document).ready(function () {
    // Initialise the carousel
    $('.carousel').slick({
        autoplay: true,
        pauseOnHover: true,
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]

    });
    // Toggle answers - Get sibling of button and toggle it
    $('.open-answer').click(function () {
        $(this).siblings().toggle();
    })
        ;
});
