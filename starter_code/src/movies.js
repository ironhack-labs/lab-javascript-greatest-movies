/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {
    let mvYear;
    mvYear = [...movies].sort((a, b) => {
        if (a.year === b.year) {
            return a.title.localeCompare(b.title)
        } return a.year - b.year;
    });
    return mvYear;
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(moviesArr) {
    let mvSpielberg = moviesArr.filter((movie) => {
      if(movie.director === "Steven Spielberg" && movie.genre.includes("Drama")) return true
    })
    return mvSpielberg.length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies){
    let mvAlpha 
    mvAlpha = [...movies].sort((a, b) => {
        return a.title.localeCompare(b.title)
    });   
   let list = mvAlpha.map(firstMovie => firstMovie = firstMovie.title)
   let shortList = list.splice(0,20);
   return shortList;
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movie){
    let average = movie.reduce((ac, cu) => (ac + cu.rate), 0);
    if (average > 0){
    let finalAverage = average/movie.length
    return +finalAverage.toFixed(2)
    } return 0;
}

// Iteration 5: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {
    let dramaMovies = [...movies].filter(movie => movie.genre.indexOf(`Drama`) !== -1)
    if (dramaMovies.length > 0){
    let average = dramaMovies.reduce((ac,cu) => ac += cu.rate, 0)
    let finalAverage = average / dramaMovies.length
    return +finalAverage.toFixed(2)
    } return 0;
}


// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

//Imposible, hoy no es mi dia :(

// BONUS Iteration: Best yearly rate average - Best yearly rate average
