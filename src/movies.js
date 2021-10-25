// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

const movies = require('./data.js');


function getAllDirectors(someArray) {
  let directorsArray = someArray.map((eachMovie) => {
    return eachMovie.director;
  })
  //console.log(directorsArray)
}


getAllDirectors(movies);






// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?



/*function howManyMovies(someArray) {
  let stevenMovies = 0;
  
  let stevenArray = someArray.filter(eachMovie => {
    if (eachMovie.director === "Steven Spielberg") {
      return true;
    }
  })

  let dramaGenre = stevenArray.filter(eachKey => {
      if (eachKey.genre === Array) {
        return true; 
      }
    })

  dramaGenre.forEach(eachGenre => {
    if (eachGenre === "drama") {
      stevenMovies++
    }
  });
  
  
  return stevenMovies;

  };*/
    




function howManyMovies(someArray) {
  let stevenMovies = 0;
  
    someArray.forEach(eachMovie => {
      if (eachMovie.director === "Steven Spielberg") {
        stevenMovies ++
      }
    });
    
    return stevenMovies;  
}

howManyMovies(movies);





// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(someArray) {
  
  if (someArray.length === 0) {
    return 0;
  }
  
  
  const sumScores = someArray.reduce((acc, eachScore) => {
    return acc + eachScore.score;
  },0)
  
  let avgScore = sumScores / someArray.length;
  
  let roundedScore = Math.round((avgScore + Number.EPSILON) * 100) / 100;

  

  console.log(roundedScore);
  return roundedScore;

}





// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore() {}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear() {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically() {}

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
