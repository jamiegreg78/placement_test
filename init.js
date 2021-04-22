// Run when loading is complete
$(document).ready(function () {
    /* Initialise the carousel with initial settings and breakpoint
       settings for responsive design
    */
    $('.carousel').slick({
        autoplay: true,
        pauseOnHover: true,
        mobileFirst: true,
        fade: true,
        slidesToShow: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    fade: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    fade: false,
                }
            }
        ]

    });
    // Toggle answers - Gets only sibling of button and toggles it
    $('.open-answer').click(function () {
        $(this).siblings().toggle();
    })
        ;

});
