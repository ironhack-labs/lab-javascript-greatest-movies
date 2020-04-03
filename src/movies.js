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

    return films.filter(film => film.director === "Steven Spielberg" && filmGenre(film, 'Drama')).length;

}

function filmGenre(movie, genreToFilter) {

    return movie.genre.filter(filmGenre => filmGenre === genreToFilter).length > 0;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(films) {

    return films.map(film => film.title).sort().filter((film, first) => first < 20);
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals;

function ratesAverage(films) {
    
    if (films.length === 0) return 0;
    
    return parseFloat((films.filter(film => "rate" in film).reduce((sum, film) => sum + film.rate, 0) / films.length).toFixed(2));
}

/*function ratesAverage(films){
    if (films.length===0) return 0;

    let rateAvg = films.filter(film=> 'rate' in film).reduce((sum,film) => sum + film.rate, 0);

    return parseFloat((rateAvg/films.length).toFixed(2));
}*/


// Iteration 5: Drama movies - Get the average of Drama Movies

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average