/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
    let newArray =[...movies];
    return newArray.sort((movie1,movie2) => {
        if(movie1.year > movie2.year) {return 1}
    else {return -1}})
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(movies) {
    return movies.filter((movie) => movie.genre.includes(`Drama`) && movie.director === `Steven Spielberg`).length;
    }

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies){
    let titles = movies.map(movie => movie.title);
    return titles.sort().splice(0,20);
}
// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies) {
    if (movies.length === 0) {
        return 0;
    }
    let sum = movies.reduce((ac, movie) => {
        if (typeof(movie.rate) != "number") {
            movie.rate = 0
        } return movie.rate + ac
    }, 0)
      return parseFloat((sum/movies.length).toFixed(2));
}

// Iteration 5: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies){
    let titles = movies.filter((movie) => movie.genre.includes("Drama"));
    titles = titles.map(movie => movie.rate);
    return titles.reduce((ac, cu) => {
        return ac + cu
    });
    console.log(titles);
}
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
