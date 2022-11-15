// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
  const allDirectors = moviesArray.map(function (movie) {
    return movie.director;
  });

  /*const filteredDirectors = allDirectors.filter(function(director){
    return allDirectors.indexOf(director) > 0 === false; --> why does this work?
  })*/

  return allDirectors; //return filteredDirectors (if you want the filtered version)
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(moviesArray) {
  const result = moviesArray.filter(function (movie) {
    return (
      movie.director === "Steven Spielberg" &&
      movie.genre.includes("Drama") === true
    );
  });

  return result.length;
} 


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  const moviesWithScores = moviesArray.filter(function (movie) {
    return movie.hasOwnProperty("score");
  });
  const allScores = moviesWithScores.map(function (movie) {
    return movie.score;
  });
  const scoresSum = allScores.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);

  if (!moviesArray.length) {
    return 0;
  } else {
    return Math.round((scoresSum / moviesArray.length) * 100) / 100;
  }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const allDramaMovies = moviesArray.filter(function (movie) {
    return movie.genre.includes("Drama");
  });

  const allDramaScores = allDramaMovies.map(function (movie) {
    return movie.score;
  });

  const dramaSum = allDramaScores.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);

  if (!allDramaMovies.length) {
    return 0;
  } else {
    return Math.round((dramaSum / allDramaScores.length) * 100) / 100;
  }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const newArray = moviesArray.map(function(movie){
    return movie;
  });
  
  return newArray.sort(function(a,b){
    return a.year - b.year;
  }); 
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  
  const newArray = moviesArray.filter(function(movie){
    return moviesArray.indexOf(movie) <= 19;
  })

  const arrayTitles = newArray.map(function(item){
    return item.title;
  })
  return arrayTitles.sort();
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
