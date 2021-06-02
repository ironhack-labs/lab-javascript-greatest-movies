// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
    const directors = movies.map((movie) => movie.director)
    return directors
  }

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(countmovies){
      const count = countmovies.filter ((movie) => {
      return movie.director === 'Steven Spielberg' && movie.genre.includes ('Drama')
     })
     return count.length
  }

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(parametro) {
  const totalGeral = parametro.reduce ((acc, valoratual) => acc + valoratual.rate, 0)
  if (totalGeral){
      let media= totalGeral/parametro.length
      return parseFloat(media.toFixed(2))
  } else{return 0}
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(array){
  const drama = array.filter(movie => {
      return movie["genre"].includes("Drama")
  });
  const total = drama.reduce((acc,element)=>acc+element.rate,0);
  if (total!=0) {
      let media = total/drama.length
      return parseFloat(media.toFixed(2))
  } else {
      return 0 
  }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(data) {
  return data
    .map(function (movie) {
      return movie;
    })
    .sort(function (a, b) {
      if (a.year === b.year) {
        return a.title.localeCompare(b.title);
      }
      return a.year - b.year;
    });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(data) {
  return data
    .map(function (list) {
      return list.title;
    })
    .sort(function (a, b) {
      return a.localeCompare(b);
    })
    .splice(0, 20);
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