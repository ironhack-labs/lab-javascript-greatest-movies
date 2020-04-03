/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(films) {
    // crear una copia
    let orderMovies = Array.from(films);

    let order = (film1, film2) =>
        film1.year === film2.year ?
        film1.title.toUpperCase() > film2.title.toUpperCase() ? 1 : film1.title.toUpperCase() < film2.title.toUpperCase() ? -1 : 0 :
        film1.year - film2.year;

    return orderMovies.sort(order);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(films) {

    return films.filter(film => film.director === "Steven Spielberg"  && filmGenre(film, 'Drama')).length;

}

function filmGenre(movie, genreToFilter) {
    
    return movie.genre.filter(filmGenre => filmGenre === genreToFilter).length > 0;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

// Iteration 5: Drama movies - Get the average of Drama Movies

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average