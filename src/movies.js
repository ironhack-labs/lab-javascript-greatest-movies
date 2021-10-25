const movies = require('./data.js')


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  let directorsArray = movies.map(movie => {
    return movie.director
  })
  //console.log(directorsArray)
  return directorsArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  let spielbergDramaMovies = movies.filter(function (movie) {
    return movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
  });
  return spielbergDramaMovies.length;

}



// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  let scores = movies.map(movie => {
    return movie.score
  })


  let totalScore = scores.reduce((sum, score) => {
    return sum + score;
  }, 0);

  let averageRate = totalScore / scores.length;
  let averageRateParse = parseFloat(averageRate.toFixed(2));

  //console.log(averageRateParse);
  return averageRateParse;

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  //tengo que sacar todas las pelis de genre = Drama y despues hacer la media

  let dramaMovies = movies.filter(function (movie) {
    return movie.genre.includes('Drama')
  });

  //console.log(dramaMovies);
  let dramaMoviesAverage = dramaMovies.map(movie => {
    return movie.score
  });

  let totalDramaScore = dramaMoviesAverage.reduce((sum, score) => {
    return sum + score;
  }, 0);

  let DramaAverage = totalDramaScore / dramaMovies.length;
  let averageRateParse = parseFloat(DramaAverage.toFixed(2));
  //console.log(averageRateParse);
  return averageRateParse;

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  //crear un nuevo array donde meta TODAS las películas ordenadas por .year de menor a mayor

  // let yearsArray = movies.map(movie => {
  //   return movie.year
  // })
  // console.log(yearsArray);
  let yearsArray = movies.sort(function (movie1, movie2) {
    return movie1.year - movie2.year;
  });
  //console.log(yearsArray);

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {

  let titleArray = movies.map(movie => {
    return movie.title
  });

  console.log(titleArray)

  // let alphaArray = movies.sort(function (movie1, movie2) {
  //   return movie1.title - movie2.title;
  // });
  // console.log(alphaArray)
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
