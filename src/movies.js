// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {

  const newMovies = movies.map((eachMovie) => {
    return eachMovie.director;
  })
  return newMovies;
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {

  const dramaSpielbergmovies = movies.filter((eachDramaSpielberg) => {
    return eachDramaSpielberg.director === 'Steven Spielberg' && eachDramaSpielberg.genre.includes('Drama')
  })

  return dramaSpielbergmovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {

  if (movies.length !== 0) {
    const moviesSum = movies.reduce((acc, eachMovieScore) => {
      if(eachMovieScore.score && typeof eachMovieScore.score === 'number'){
        return acc + eachMovieScore.score;
      }
      return acc;     
    }, 0)

    return avgMovie = Number((moviesSum / movies.length).toFixed(2));

  } else {
    return 0;
  }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {

  const onlyDramaMovies = movies.filter((dramaMovies) => {
    return dramaMovies.genre.includes('Drama');
  })

  if (onlyDramaMovies.length > 0) {
    const scoreDrama = onlyDramaMovies.reduce((acc, eachDramaScore) => {
      return acc + eachDramaScore.score;
    }, 0)

    return Number((scoreDrama / onlyDramaMovies.length).toFixed(2));
  } else {
    return 0;
  }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {

  const moviesCopy = [...movies];

  moviesCopy.sort((movieA, movieB) => {
    
    let order = 0;

    if (movieA.year < movieB.year) {
      order = -1;
    } else if (movieA.year > movieB.year) {
      order = 1;
    } else {
      if (movieA.title < movieB.title) {
        order = -1;
      } else if (movieA.title > movieB.title) {
        order = 1;
      } 
    }
    return order;
  })

  return moviesCopy;

}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {

  const moviesCopy = [...movies];

  moviesCopy.sort((movieA, movieB)=>{
    let order=0;
    if(movieA.title<movieB.title){
      order=-1;
    } else if (movieA.title > movieB.title){
      order=1;
    } 
    return order;
  })

  let firstTwentyMovies = [];

  if (moviesCopy.length<=20){
    firstTwentyMovies = moviesCopy;
  } else {
    firstTwentyMovies = moviesCopy.slice(0,20);
  }

  const finalResultMovie = firstTwentyMovies.map((finalMovie)=>{
        return finalMovie.title;
  })

  return finalResultMovie;

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() { }

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
