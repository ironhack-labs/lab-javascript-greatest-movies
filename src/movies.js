// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
  const allDirectorsArr = moviesArray.map((eachSingleMovie) => {
    return eachSingleMovie.director;
  });
  return allDirectorsArr;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const spielDrama = moviesArray.filter(function(moviesArray) {
    return moviesArray.genre.includes("Drama") && moviesArray.director === "Steven Spielberg";
  })

    return spielDrama.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

  if (moviesArray.length === 0) {
  
    return 0;
  
  } else {

    let total = moviesArray.reduce((acc, movie) => {
      
      if(movie.score) {

        return acc + movie.score;
      
      } else {
        
        return acc;
      
      }
    }, 0);

    // you can use Number(), parseInt() or simply plus +

    return Number((total / moviesArray.length).toFixed(2));
  }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  if (!moviesArray.length) {
    return 0;
  }else{
    let dramaMovAvg = moviesArray.filter((movie)=> //movie is a placeholder, stands for the element to filter in the given array.
      movie.genre.includes("Drama")
    );
    return scoresAverage(dramaMovAvg);//here we use the previous function, in this case we pass it only the drama movies scores.
  }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const moviesArrCopy = moviesArray.map((movie) => {
    return movie
  });

  moviesArrCopy.sort(function (a, b) {
    if (a.year > b.year) {
      
      return a.year - b.year;
    
    } else if (a.year < b.year) {
    
      return a.year - b.year;

    } else if (a.title === b.title) { // If both movies have the same year, order them by title
      return a.title - b.title;
    }
  });
  return moviesArrCopy;
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArr) {

  const orderedMovies = moviesArr
    
    .map((movie) => {
      return movie.title;
    })

    .sort((a, b) => {
      return a.title.localeCompare(b.title)
    })
    
    .slice(0, 20);
  
  
    return orderedMovies;
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