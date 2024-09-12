// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const directors = moviesArray.map((movie) => movie.director);

  const filteredDirectors = directors.filter((director, i) => {
    return directors.indexOf(director) === i; 
  })
    return filteredDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const SpielbergDramas = moviesArray.filter((movie) => movie.genre.includes("Drama") && movie.director === "Steven Spielberg");
    return SpielbergDramas.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  const avgScores = moviesArray.reduce((acc, movie) => acc + (movie.score || 0), 0)
    return Math.round((avgScores / moviesArray.length) * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter((movie) => {
    if (movie.genre.includes("Drama")) {
      return movie;
    }
  });
  if (dramaMovies.length === 0) {
    return 0;
  }
  const avgDramas = dramaMovies.reduce((acc, movie) => acc + movie.score, 0);
  return Math.round((avgDramas / dramaMovies.length) * 100) / 100;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const sortedMoviesByYear = moviesArray.map((movie) => movie).sort((year1, year2) => {
    if (year1.year < year2.year) {
      return -1;
    } else if (year1.year > year2.year) {
      return 1;
    } else {
      if (year1.title > year2.title) {
        return 1;
      } else if (year1.title < year2.title) {
        return -1;
      }
    }
  });
  return sortedMoviesByYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const sortedMovies = moviesArray.map((movie) => movie.title).sort().splice(0, 20);
  return sortedMovies;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
   const HoursToMinutes = moviesArray.map((movie) => {
     if (movie.duration.includes("h") && movie.duration.includes("min")) {
       let newDurationArr = movie.duration.split(" ");
       let hours = parseInt(newDurationArr[0]);
       let minutes = parseInt(newDurationArr[1]);
       movie.duration = (hours * 60) + minutes;
       return movie;
     } else if (movie.duration.includes("h") && !movie.duration.includes("min")){
       movie.duration = parseInt(movie.duration) * 60;
       return movie;
     }
   })
  return HoursToMinutes;
}

console.log(turnHoursToMinutes(movies))

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
  function bestYearAvg(moviesArray) {
  if (moviesArray.length === 0) {
    return null;
    } 

  const sortedByScore = orderByYear(moviesArray).sort((scoreOne, scoreTwo) => {
    result =  scoreTwo.score - scoreOne.score;
    return result
  })
  return `The best year was ${sortedByScore[0].year} with an average score of ${sortedByScore[0].score}`
}


console.log(bestYearAvg(movies))

// ordenar por año
// por cada año sacar el avg
// compararlos
// dar el resultado