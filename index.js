/*const API_KEY = "7d3fc68d"

async function fetchData(title) {
    const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&t="${title}"`)
    const data = await response.json()
    return data
}

const searchInputElement = document.querySelector('#movie-search-input')
const searchButtonElement= document.querySelector('#movie-search-button')

const searchResultsContainer = document.querySelector('.search-results')

let movieTitleValue = ''
let addedMovie = null

searchButtonElement.addEventListener('click', async () => {
    movieTitleValue = searchInputElement.value
    const movie = await fetchData(movieTitleValue)
   
    if(addedMovie && addedMovie.Title.toLowerCase().includes(movieTitleValue.toLowerCase())) return
    
    const cardElementTemplate = `
    <div class="card" style="width: 20rem">
        <img
        src="${movie.Poster}"
        class="card-img-top"
        alt="${movie.Title} movie poster"
        />
        <div class="card-body">
            <h5 class="card-title">${movie.Title}</h5>
            <p class="card-text">${movie.Plot}</p>
            <div class="d-flex">
                <a
                href="#"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                >
                Подробнее
                </a>
                <a
                    href="#"
                    class="btn btn-primary"
                    id="add-fav-btn"
                    >
                    Добавить в избранное
                </a>
            </div>
        </div>
    </div>`

    searchResultsContainer.innerHTML = ''
    searchResultsContainer.insertAdjacentHTML('beforeend', cardElementTemplate)
    addedMovie = movie

    const addFavButton = document.getElementById('add-fav-btn')
    addFavButton.addEventListener('click', () => {

        if(localStorage.getItem('favMovies') === null) {
            const favMoviesList = []
            favMoviesList.push(movie)
            localStorage.setItem('favMovies', JSON.stringify(favMoviesList))
            return
        }

        const favMoviesList = JSON.parse(localStorage.getItem('favMovies'))
        favMoviesList.push(movie)
        localStorage.setItem('favMovies', JSON.stringify(favMoviesList))
    })
})*/
const API_KEY = "7d3fc68d";

async function fetchData(title) {
    const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&t="${title}"`);
    const data = await response.json();
    return data;
}

const searchInputElement = document.querySelector('#movie-search-input');
const searchButtonElement = document.querySelector('#movie-search-button');
const searchResultsContainer = document.querySelector('.search-results');

let movieTitleValue = '';
let addedMovie = null;

searchButtonElement.addEventListener('click', async () => {
    movieTitleValue = searchInputElement.value;
    const movie = await fetchData(movieTitleValue);
   
    if (addedMovie && addedMovie.Title.toLowerCase().includes(movieTitleValue.toLowerCase())) return;
    
    const cardElementTemplate = `
    <div class="card" style="width: 20rem">
        <img
            src="${movie.Poster}"
            class="card-img-top"
            alt="${movie.Title} movie poster"
        />
        <div class="card-body">
            <h5 class="card-title">${movie.Title}</h5>
            <p class="card-text">${movie.Plot}</p>
            <div class="d-flex">
                <a
                    href="#"
                    class="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                >
                Подробнее
                </a>
                <a
                    href="#"
                    class="btn btn-primary"
                    id="add-fav-btn"
                >
                Добавить в избранное
                </a>
            </div>
        </div>
    </div>`;

    searchResultsContainer.innerHTML = '';
    searchResultsContainer.insertAdjacentHTML('beforeend', cardElementTemplate);
    addedMovie = movie;

    const addFavButton = document.getElementById('add-fav-btn');
    addFavButton.addEventListener('click', () => {
        const favMoviesList = JSON.parse(localStorage.getItem('favMovies')) || [];
        favMoviesList.push(movie);
        localStorage.setItem('favMovies', JSON.stringify(favMoviesList));
        displayFavoriteMovies(); // Обновление избранного после добавления
    });
});