// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const newArray = moviesArray.map((movie) => {
    return movie.director;
  });
  return newArray
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const moviesSteven = moviesArray.filter((movie) => {
return movie.director === "Steven Spielberg" && movie.genre.includes("Drama");
    })

    return moviesSteven.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if(moviesArray.length === 0) {
        return 0;
    }
   const moviesWithScore = moviesArray.filter((movie) => {
    return movie.score;
   }) 

   const allScores = moviesWithScore.map((movie) => {
    return movie.score;
  })

  const sumArr = allScores.reduce((acc, elem) => {
    return acc + elem;
  }, 0);

  const decimales = (sumArr / moviesArray.length).toFixed(2);

  return parseFloat(decimales);
  

  }

  

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  
  const moviesWithDrama = moviesArray.filter((movie) => {
    return movie.genre.includes("Drama");
   }) 

   if (moviesWithDrama.length === 0) {
    return 0;
   }

   const dramaScore = moviesWithDrama.map((movie) => {
    return movie.score;

   })

   const sumArr = dramaScore.reduce((acc, elem) => {
    return acc + elem;
  }, 0)
    const averageDrama = (sumArr / moviesWithDrama.length).toFixed(2);

  return parseFloat(averageDrama);

   
  
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const clonedMovies = [...moviesArray];
  clonedMovies.sort((movieA, movieB) => {
    if (movieA.year !== movieB.year) {
    return movieA.year - movieB.year;
    } else {
      return movieA.title.localeCompare(movieB.title);
    }
  });

  return clonedMovies;

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  return moviesArray
  .sort((m1, m2) => {
    return m1.title.localeCompare(m2.title);
  })
  .map((movie) => {
    return movie.title;
  })
  .slice(0, 20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}










