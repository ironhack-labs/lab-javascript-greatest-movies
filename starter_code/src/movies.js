/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(moviesArray) {

    let newMoviesArray = [...moviesArray];

    newMoviesArray.sort((movie1, movie2) => {
        if (movie1.year > movie2.year) return 1;
        return -1;
    })

    return newMoviesArray;
};

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(moviesArray) {

    return moviesArray.filter(cFilm => cFilm.genre.includes('Drama') && cFilm.director.includes('Steven Spielberg')).length;
};

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(moviesArray) {

    let newMoviesArray = [...moviesArray];

    newMoviesArray = newMoviesArray.map((cFilm) => {
        return cFilm.title;
    }).sort().splice(0, 20);

    return newMoviesArray;
};

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(moviesArray) {

    if(moviesArray.length === 0) return 0;

    return parseFloat((moviesArray.reduce((ac, film) => {
        if(typeof(film.rate) != "number") film.rate = 0;
        return ac + film.rate;
    }, 0)/moviesArray.length).toFixed(2));
};

// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(moviesArray) {

    let newMoviesArray = moviesArray.filter(cFilm => {
        return cFilm.genre.includes('Drama');
    });

    if(newMoviesArray.length === 0) return 0;

    return parseFloat((newMoviesArray.reduce((ac, film) => {
        if(typeof(film.rate) != "number") film.rate = 0;
        return ac + film.rate;
    }, 0)/newMoviesArray.length).toFixed(2));

}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average