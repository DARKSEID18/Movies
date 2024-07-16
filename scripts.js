const API = "http://www.omdbapi.com/?apikey=7f6ee34&";
const container = document.querySelector(".card-container");

const movie = async (API) => {
    try {
        let res = await fetch(API);
        let data = await res.json();
        const movies = data.Search;
        
        if (!movies) {
            container.innerHTML = '<p>No movies found.</p>';
            return;
        }
// Movies Cards
        let moviesCards = "";

        movies.forEach((movie) => {
            moviesCards += `
                <div class="card" style="width: 18rem;">
                    <img src="${movie.Poster}" class="card-img-top" alt="${movie.Title} Poster">
                    <div class="card-body">
                        <h5 class="card-title">${movie.Title}</h5>
                        <a href="movies.html?imdbID=${movie.imdbID}" class="btn btn-primary" target="_blank">Watch now</a>
                    </div>
                </div>
            `;
        });

        container.innerHTML = moviesCards;
    } catch (error) {
        console.error('Try Again', error);
    }
}
// search code 
const searchButton = document.getElementById('searchsubmit');
const searchInput = document.getElementById('search');

searchButton.addEventListener('click', function() {
    const searchTerm = searchInput.value.trim();
    if (searchTerm !== '') {
        const Base = `http://www.omdbapi.com/?s=${searchTerm}&apikey=7f6ee34&`;
        movie(Base);
    }
});

searchInput.addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
        searchButton.click();
    }
});