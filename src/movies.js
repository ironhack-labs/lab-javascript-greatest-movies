// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map((movie) => movie.director)
    }

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
// Assuming the movies array has objects with "title", "director", and "genre" properties
function howManyMovies(moviesArray){
      // Filter Spielberg movies
      const spielbergMovies = moviesArray.filter(movie => movie.director === 'Steven Spielberg');

      // Filter drama movies among Spielberg's
      const dramaSpielbergMovies = spielbergMovies.filter(movie => movie.genre.includes('Drama'));
  
      // Return the count
      return dramaSpielbergMovies.length;
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
        if (moviesArray.length === 0) return 0;
    
        // Filter out movies without a score and calculate the sum of scores
        const totalScore = moviesArray.reduce((sum, movie) => {
            return sum + (movie.score || 0);
        }, 0);
    
        // Calculate the average score
        const averageScore = totalScore / moviesArray.length;
    
        // Return the average score rounded to 2 decimal places
        return parseFloat(averageScore.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(movie => movie.genre.includes('Drama'));

  // Calculate the sum of scores
  const totalScore = dramaMovies.reduce((sum, movie) => {
    return sum + (movie.score || 0);
  }, 0);

  // Calculate the average score
  const averageScore = dramaMovies.length ? totalScore / dramaMovies.length : 0;

  return parseFloat (averageScore.toFixed(2));
  
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    return moviesArray.slice().sort((a, b) => {
        if (a.year === b.year) {
          return a.title.localeCompare(b.title); // If years are the same, sort by title
        }
        return a.year - b.year; // Sort by year
      });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    return moviesArray
    .slice() // Create a copy of the array to avoid mutating the original
    .sort((a, b) => a.title.localeCompare(b.title)) // Sort by title
    .slice(0, 20) // Get the first 20 movies
    .map(movie => movie.title); // Extract the titles
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {return moviesArray.map(movie => {
    let duration = movie.duration;
    let hours = 0;
    let minutes = 0;

    if (duration.includes('h')) {
      hours = parseInt(duration.split('h')[0]);
      duration = duration.split('h')[1];
    }
    if (duration.includes('min')) {
      minutes = parseInt(duration.split('min')[0]);
    }

    const totalMinutes = (hours * 60) + minutes;

    return {
      ...movie,
      duration: totalMinutes
    };
  });
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (moviesArray.length === 0) {
      return null; // Empty array case
  }

  if (moviesArray.length === 1) {
      return moviesArray[0].year; // Single-element array case
  }

  // Calculate the average year
  const totalYears = moviesArray.reduce((sum, movie) => sum + movie.year, 0);
  const averageYear = Math.round(totalYears / moviesArray.length);

  // Find the oldest year in case of a tie
  let oldestYear = moviesArray[0].year;
  for (const movie of moviesArray) {
      if (movie.year < oldestYear) {
          oldestYear = movie.year;
      }
  }

  return oldestYear;
}






