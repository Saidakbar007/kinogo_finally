/*const favMoviesList = JSON.parse(localStorage.getItem('favMovies'))

const favMoviesContainer = document.body.querySelector('.fav-movies-container')

favMoviesList.forEach((favMovie, index) => {

    const cardElementTemplate = `
    <div class="card" style="width: 20rem" data-card-id="${index}">
        <img
        src="${favMovie.Poster}"
        class="card-img-top"
        alt="${favMovie.Title} movie poster"
        />
        <div class="card-body">
            <h5 class="card-title">${favMovie.Title}</h5>
            <p class="card-text">${favMovie.Plot}</p>
            <div class="d-flex align-items-stretch">
                <a
                href="#"
                class="btn btn-primary d-flex align-items-center"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                >
                Подробнее
                </a>
                <a
                    href="#"
                    class="btn btn-danger remove-button"
                    >
                    Удалить из избранного ${index}
                </a>
            </div>
        </div>
    </div>`

    favMoviesContainer.insertAdjacentHTML('beforeend', cardElementTemplate)

    const removeFavMovieButton = favMoviesContainer.children[favMoviesContainer.children.length - 1].querySelector('.remove-button')

    removeFavMovieButton.addEventListener('click', () => {
        const movieIdToDelete = Number(removeFavMovieButton.parentElement.parentElement.parentElement.dataset.cardId)

        favMoviesList.splice(movieIdToDelete, 1)

        localStorage.setItem('favMovies', JSON.stringify(favMoviesList))
        
    })
    
});

// const main = document.querySelector('main')

// console.dir(main);
*/
// Функция для отображения избранных фильмов из localStorage
function displayFavoriteMovies() {
    const favMoviesList = JSON.parse(localStorage.getItem('favMovies')) || [];
    const favMoviesContainer = document.body.querySelector('.fav-movies-container');
    
    favMoviesContainer.innerHTML = ''; // Очистить предыдущие элементы

    favMoviesList.forEach((favMovie, index) => {
        const cardElementTemplate = `
            <div class="card" style="width: 20rem" data-card-id="${index}">
                <img
                    src="${favMovie.Poster}"
                    class="card-img-top"
                    alt="${favMovie.Title} movie poster"
                />
                <div class="card-body">
                    <h5 class="card-title">${favMovie.Title}</h5>
                    <p class="card-text">${favMovie.Plot}</p>
                    <div class="d-flex align-items-stretch">
                        <a
                            href="#"
                            class="btn btn-primary d-flex align-items-center"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                        >
                        Подробнее
                        </a>
                        <a
                            href="#"
                            class="btn btn-danger remove-button"
                        >
                            Удалить из избранного
                        </a>
                    </div>
                </div>
            </div>`;
        
        favMoviesContainer.insertAdjacentHTML('beforeend', cardElementTemplate);
        
        const removeFavMovieButton = favMoviesContainer.children[favMoviesContainer.children.length - 1].querySelector('.remove-button');
        
        // Обработчик события для удаления фильма из избранного
        removeFavMovieButton.addEventListener('click', () => {
            favMoviesList.splice(index, 1); // Удалить элемент из массива
            localStorage.setItem('favMovies', JSON.stringify(favMoviesList)); // Обновить localStorage
            displayFavoriteMovies(); // Перерисовать список
        });
    });
}

// Вызов функции отображения при загрузке страницы для отображения избранных фильмов
displayFavoriteMovies();