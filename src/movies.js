const movies = require("./data.js");

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  
  const director = movies.map (elm => elm.director)
  return director;

}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const manymovies = movies.filter (elm => elm.genre.includes("Drama") && elm.director === "Steven Spielberg")
  return manymovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (!movies.length){
    return 0
  }
  
  const sumTotalRates = movies.filter(elm => elm['score'] !== undefined).reduce((acc, elm) => acc + elm['score'], 0)
  const average = parseFloat((sumTotalRates / movies.length).toFixed(2))
  return average
}
  

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  const dramaMovies = movies.filter(elm => elm.genre.includes('Drama'))

  if (!dramaMovies.length) {
    return 0
  }

  let scoreSum = dramaMovies.reduce((acc, elm) => acc + elm['score'], 0);
  return parseFloat((scoreSum / dramaMovies.length).toFixed(2))
}



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {

    const copyOfMovies = [...movies]

    const sortMoviesByYearAndName = copyOfMovies.sort((a, b) => {

        let order = a['year'] - b['year']

        if (!order) {

            order = a['title'].localeCompare(b['title'])

        }

        return order

    })

    return sortMoviesByYearAndName
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  // let first = movies.slice(0, 20);
  // let titles = first.map(movie => {
  //   return movie.title;
  // })
  // let order = titles.sort();
  // return order;

  return movies.slice(0, 20).map(movie =>  movie.title).sort();
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
