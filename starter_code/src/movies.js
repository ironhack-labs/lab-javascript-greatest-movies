/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies) {
  let sum = movies.map(movie => movie.rate).reduce((ac, cu) => ac + cu, 0);
  let average = sum / movies.length;
  return +average.toFixed(2);
}

// Iteration 2: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {
    let dramaMovies = movies.filter(movie => movie.genre.includes("Drama"));
    if (dramaMovies == 0) { return 0 }
    return ratesAverage(dramaMovies);
}

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
function orderByDuration(movies) {
    let moviesDuration = (movies.filter(movie => movie.duration))
    let result = moviesDuration.sort((a, b) => {
            if (a.duration > b.duration) return -1;
            if (a.duration < b.duration) return 1;
        }).reverse()
    return result;
}

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
function howManyMovies(movies){
    let spielbergDramaMovies = movies.filter(movie => movie.genre.includes("Drama") &&
    movie.director === "Steven Spielberg");
    return spielbergDramaMovies.length;
    
}

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
    let allMoviesSorted = movies.map(movie => movie.title).sort((a, b) =>
        a.localeCompare(b, "es", { sensitivity: "base" })
        );
    console.log(allMoviesSorted)
    if (movies.length >= 20) {
        twentyMovies = allMoviesSorted.splice(0, 20);
        return twentyMovies;
    }
    return allMoviesSorted;
}


// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
