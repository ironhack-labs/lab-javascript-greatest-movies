// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directors = [];
    for (const movie of moviesArray) {
      directors.push(movie.director);
    }
    return [...new Set(directors)];
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  // Initialize a count variable to 0
  let count = 0;

  // Iterate through the moviesArray
  for (let i = 0; i < moviesArray.length; i++) {
    // Get the current movie
    const movie = moviesArray[i];

    // Check if the movie was directed by Steven Spielberg and is a drama
    if (movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')) {
      // If so, increment the count
      count++;
    }
  }

  // Return the count
  return count;
}


// Iteration 3: 
function scoresAverage(moviesArray) {
  // If the length of the array is 0, return 0 as the average score of an empty array is 0
  if (moviesArray.length === 0) {
    return 0;
  }

  // Initialize the total score to 0
  let totalScore = 0;

  // Iterate through the movies array and add the score of each movie with a score property to the total score
  for (let i = 0; i < moviesArray.length; i++) {
    if (moviesArray[i].hasOwnProperty('score')) {
      totalScore += moviesArray[i].score;
    }
  }

  // Calculate the average score by dividing the total score by the number of movies
  const averageScore = totalScore / moviesArray.length;

  // Round the average score to 2 decimal places
  const roundedAverageScore = Math.round(averageScore * 100) / 100;

  // Return the rounded average score
  return roundedAverageScore;
}





// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  // Initialize a sum variable to 0
  let sum = 0;

  // Initialize a count variable to 0
  let count = 0;

  // Iterate through the moviesArray
  function dramaMoviesScore(moviesArray) {
    // Initialize a sum variable to 0
    let sum = 0;
  
    // Initialize a count variable to 0
    let count = 0;
  
    // Iterate through the moviesArray
    for (let i = 0; i < moviesArray.length; i++) {
      // Get the current movie
      const movie = moviesArray[i];
  
      // Check if the movie is a drama
      if (movie.genre.includes('Drama')) {
        // If so, add the rating of the movie to the sum
        sum += movie.rating;
  
        // Increment the count
        count++;
      }
    }
  
    // If there are no drama movies, return 0
    if (count === 0) {
      return 0;
    }
  
    // If there is only one drama movie, return its rating
    if (count === 1) {
      return moviesArray[0].rating;
    }
  
    // Calculate the average rating of the drama movies
    const average = sum / count;
  
    // Return the average
    return average;
  }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const sortedMovies = moviesArray.sort((a, b) => {
        if (a.year < b.year) return -1;
        if (a.year > b.year) return 1;
        return 0;
      });
      return sortedMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const sortedMovies = moviesArray.sort((a, b) => {
        if (a.title < b.title) return -1;
        if (a.title > b.title) return 1;
        return 0;
      });
      return sortedMovies;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    for (const movie of moviesArray) {
        movie.durationInMinutes = Math.round(movie.duration / 60);
      }
      return moviesArray;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    const yearlyScores = {};
    for (const movie of moviesArray) {
      if (!yearlyScores[movie.year]) {
        yearlyScores[movie.year] = movie.score;
      } else {
        yearlyScores[movie.year] += movie.score;
      }
    }
    let bestYear;
    let bestScore = 0;
    for (const year in yearlyScores) {
      const averageScore = yearlyScores[year] / moviesArray.length;
      if (averageScore > bestScore) {
        bestYear = year;
        bestScore = averageScore;
      }
    }
    return bestYear;
}
