/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(moviesArray) {

    let newMoviesArray = [...moviesArray];

    newMoviesArray.sort((movie1, movie2) => {
        if(movie1.year > movie2.year) return 1;
        return -1;
    })

    return newMoviesArray;
};

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(moviesArray) {

    return moviesArray.filter(cfilm => cfilm.genre.includes('Drama') && cfilm.director.includes('Steven Spielberg')).length;
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

// Iteration 5: Drama movies - Get the average of Drama Movies

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
