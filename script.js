$(document).ready(function(){
    $('.single-item').slick({
        prevArrow: '<button type="button" class="single-prev"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="single-next"><i class="fas fa-chevron-right"></i></button>'
    });
    $(document).ready(function(){
        $('.popular-slider').slick({
            dots: false, 
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




    function createMovieCard(title, date, rating, imageUrl) {
       
        
        return movieCard;
    }

    async function fetchMovieData() {

        const url = 'https://imdb-top-100-movies.p.rapidapi.com/';
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '498848d343mshbf2e925946197edp10b2d3jsn6656c0f2f1d6',
                'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com'
            }
        };
        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const movieData = await response.json();
            console.log(movieData);
            movieData.forEach(element => {
                const movieContainer = document.getElementById('movie-container');
                const movieCard = document.createElement('div');
                movieCard.className = 'movie-card';
                
                const img = document.createElement('img');
                img.src = element.image;
                img.alt = 'Movie Poster';
                movieCard.appendChild(img);
                
                const movieInfo = document.createElement('div');
                movieInfo.className = 'movie-info';
                
                const movieTitle = document.createElement('div');
                movieTitle.className = 'movie-title';
                movieTitle.textContent = element.title;
                
                const movieDate = document.createElement('div');
                movieDate.className = 'movie-date';
                movieDate.textContent = element.year;
                
                const movieRating = document.createElement('div');
                movieRating.className = `movie-rating`;
                movieRating.textContent = element.rating;
                
                movieInfo.appendChild(movieTitle);
                movieInfo.appendChild(movieDate);
                movieInfo.appendChild(movieRating);
                movieCard.appendChild(movieInfo);
                
                movieContainer.appendChild(movieCard);
            });

        } catch (error) {
            console.error('There has been a problem with your fetch operation:', error);
        }
    }
    fetchMovieData();
});


