$(document).ready(function(){
    // Initialize the single-item slider with unique arrow classes
    $('.single-item').slick({
        prevArrow: '<button type="button" class="single-prev"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="single-next"><i class="fas fa-chevron-right"></i></button>'
    });

    $(document).ready(function(){
        $('.popular-slider').slick({
            dots: false, // Disable dots
            infinite: false,
            speed: 300,
            slidesToShow: 8,
            slidesToScroll: 4,
            prevArrow: '<button type="button" class="popular-prev"><i class="fas fa-chevron-left"></i></button>',
            nextArrow: '<button type="button" class="popular-next"><i class="fas fa-chevron-right"></i></button>',
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    });
    
});


