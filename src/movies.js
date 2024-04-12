// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directors = [];  
    moviesArray.forEach(movie => 
      directors.push(movie.director)); 
      return directors;  
    };
    


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
/*function howManyMovies(moviesArray) {
    let totalMovies = 0;
    moviesArray.forEach(movie => {
      
      if (movie.genre.includes('Drama') && movie.director.includes('Steven Spielberg')) {
        totalMovies++;
      }
    });
    return totalMovies;
  }*/
  function howManyMovies(moviesArray) {

    const filteredMovies = moviesArray.filter(movie => 
      movie.genre.includes('Drama') && movie.director === 'Steven Spielberg'
    );
    return filteredMovies.length;
  }
  
  
  
 
// Iteration 3: All scores average - Get the average of all scores with 2 decimals

/*function scoresAverage(moviesArray) {
    if(moviesArray.length === 0) return 0;
    let totalScore = 0;
    moviesArray.forEach(movie => totalScore += movie.score || 0);
  
    const average= totalScore / moviesArray.length;
    console.log(average.toFixed(2))
    return +average.toFixed(2)
  }
  
  
  scoresAverage(movies) 
  */
  function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) return 0;

    const totalScore = moviesArray.reduce((acc, movie) => acc + (movie.score || 0), 0);
  
    const average = totalScore / moviesArray.length;
    console.log(average.toFixed(2));
    return +average.toFixed(2);
}

scoresAverage(movies);


// Iteration 4: Drama movies - Get the average of Drama Movies
/*function dramaMoviesScore(moviesArray) {
  if (moviesArray.length === 0) return 0;
  
  let totalScore = 0;
  let totalDramaMovies = 0;

  moviesArray.forEach(movie => {
      if (movie.genre.includes("Drama")) {
          totalScore += movie.score || 0;
          totalDramaMovies++;
      }
  });

  if (totalDramaMovies === 0) return 0;

  const averageDrama = totalScore / totalDramaMovies;
  return parseFloat(averageDrama);
}*/
function dramaMoviesScore(moviesArray) {
  if (moviesArray.length === 0) return 0;
  
  let totalScore = 0;
  let totalDramaMovies = 0;

  moviesArray.forEach(movie => {
      if (movie.genre.includes("Drama")) {
          totalScore += movie.score || 0;
          totalDramaMovies++;
      }
  });

  if (totalDramaMovies === 0) return 0;

  const averageDramaScore = totalScore / totalDramaMovies;
  return parseFloat(averageDramaScore.toFixed(2)); // Return the average as a floating point number with 2 decimal places
}




// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  
  const newMovieArray = [...moviesArray];

  newMovieArray.sort((a, b) => {
      if (a.year === b.year) {
          return a.title.localeCompare(b.title);
      }
      return a.year - b.year;
  });

  return newMovieArray;
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const alphabeticalOrder = [...moviesArray]
  return alphabeticalOrder
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
