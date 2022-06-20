// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require("./data");

// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  return moviesArray.map(movie => movie.director);
}

const allDirectors = getAllDirectors(movies);

function getUniqueElements(arr) {
  return arr.filter((movie, index) => arr.indexOf(movie) === index);
}

const uniqueDirectors = getUniqueElements(allDirectors);


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  return moviesArray.filter( (movie) => {
    return movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
  }).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

  if (moviesArray.length === 0) {
    return 0;
  }

  const scoreAvg = moviesArray.reduce((acc, cur) => acc + (cur.score ? cur.score : 0), 0) / moviesArray.length;

  return parseFloat(scoreAvg.toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter(movie => movie.genre.includes("Drama"));

  return scoresAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  
  return [...moviesArray].sort((a, b) => {
    
    if (a.year !== b.year) {
      return a.year - b.year;
    }

    return a.title.toLowerCase().localeCompare(b.title.toLowerCase());
  });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  
  const sortedMovies = [...moviesArray].sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()));

 return sortedMovies.map(movie => movie.title).slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  return moviesArray.map(movie => {
      const time = movie.duration.split(" ");
      const curMovie = {...movie}
      
      curMovie.duration = parseInt(time[0]) * 60;
      if (time[1]) {
        curMovie.duration += parseInt(time[1]);
      }

      return curMovie;
  });
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  
  if (moviesArray.length === 0) {
    return null;
  }

  let movieYears = {};

  moviesArray.forEach(movie => {

    if (!(movie.year in movieYears)) {
      movieYears[movie.year] = [];
    } 
    
    movieYears[movie.year].push(movie);
  });


  let avgs = [];
  Object.keys(movieYears).forEach(year => {
    avgs.push({year: year, scoreAvg: scoresAverage(movieYears[year])});
  })

avgs.sort((a, b) => {
  if(b.scoreAvg !== a.scoreAvg) {
    return b.scoreAvg - a.scoreAvg;
  }

  return a.year - b.year;
});

   return `The best year was ${avgs[0].year} with an average score of ${avgs[0].scoreAvg}`
}



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
