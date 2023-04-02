// // Iteration 1: All directors? - Get the array of all directors.
// // _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// // How could you "clean" a bit this array and make it unified (without duplicates)?
// function getAllDirectors(moviesArray) {
//     const directors = movies
//     .map((movie) => {
//       return movie.director;
//     })
//     .filter((value, index, originalArray) => {
//       return originalArray.indexOf(value) === index;
//     });
//   return directors;
// }


// // Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
// function howManyMovies(movies) {
//     const dramaMoviesDirectedByStevenSpielberg = movies.filter((movie) => {
//       // return movie.director === 'Steven Spielberg' && movie.genre.includes('Drama');
//       const isMovieDirectedByStevenSpielberg =
//         movie.director === 'Steven Spielberg';
//       // const isMovieDirectedADrama = movie.genre.includes('Drama');
//       const isMovieADrama = movie.genre.indexOf('Drama') >= 0;
//       // if (isMovieDirectedByStevenSpielberg && isMovieADrama) {
//       //   return true;
//       // } else {
//       //   return false;
//       // }
//       return isMovieDirectedByStevenSpielberg && isMovieADrama;
//     });
//     return dramaMoviesDirectedByStevenSpielberg.length;
//   }
  
//   const round = (value, digits) =>
//     Math.round(value * 10 ** digits) / 10 ** digits;

// // Iteration 3: All scores average - Get the average of all scores with 2 decimals
// function scoresAverage(movies) {
//     if (movies.length === 0) {
//       return 0;
//     }
//     const sumOfScores = movies.reduce((accumulator, movie) => {
//       if (movie.score) {
//         return accumulator + movie.score;
//       } else {
//         return accumulator;
//       }
//     }, 0);
//     const averageScore = sumOfScores / movies.length;
//     return round(averageScore, 2);
//   }

// // Iteration 4: Drama movies - Get the average of Drama Movies
function scoresAverage(movies) {
    if (movies.length === 0) {
      return 0;
    }
    const sumOfScores = movies.reduce((accumulator, movie) => {
      if (movie.score) {
        return accumulator + movie.score;
      } else {
        return accumulator;
      }
    }, 0);
    const averageScore = sumOfScores / movies.length;
    return round(averageScore, 2);
  }
//Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(moviesArray) {
   return moviesArray.sort((a , b) => a.year - b.year);
}
const sortedArray = orderByYear(movies)
console.log('sortedArray' , sortedArray)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(moviesTitel) {
  return moviesTitel.sort((a , b) => a.title - b.title);
}
const moviesTitel = orderAlphabetically(movies)
console.log('moviesTitel' , moviesTitel)

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function convertDurationToMinutes(duration) {
  const durationArray = duration.split(' ');
  const hours = parseInt(durationArray[0]);
  const minutes = parseInt(durationArray[1]);
  return hours * 60 + minutes;
}
function turnHoursToMinutes(movies) {
  return movies.map(movie => {
    const newMovie = { ...movie };
    newMovie.duration = convertDurationToMinutes(movie.duration);
    return newMovie;
  });
}
const updatedMovies = turnHoursToMinutes(movies);
console.log(updatedMovies);

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  const yearTotals = moviesArray.reduce((totals, movie) => {
    totals[movie.year] = totals[movie.year] || { totalScore: 0, count: 0 };
    totals[movie.year].totalScore += movie.score;
    totals[movie.year].count += 1;
    return totals;
  }, {});

  let bestYear = null;
  let bestAvg = 0;
  for (const year in yearTotals) {
    const avg = yearTotals[year].totalScore / yearTotals[year].count;
    if (avg > bestAvg) {
      bestYear = year;
      bestAvg = avg;
    }
  }
  return `The best year was ${bestYear} with an average score of ${bestAvg.toFixed(2)}`;
}
console.log(bestYearAvg(movies));
