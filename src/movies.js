// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directors = moviesArray.map(movie => movie.director);
  return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
      }
    
      const stevenSpielbergDramaMovies = moviesArray.filter((movie) => {
        return (
          movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
        );
      });
    
      return stevenSpielbergDramaMovies.length;
}



// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
      }
    
      const validMovies = moviesArray.filter((movie) => typeof movie.score === 'number');
      if (validMovies.length === 0) {
        return 0;
      }
    
      const totalScore = validMovies.reduce((sum, movie) => sum + movie.score, 0);
      const averageScore = totalScore / validMovies.length;
    
      return parseFloat(averageScore.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    if (moviesArray.length === 1) {
        // If there is only one movie in the array, return its score.
        return movies[0].score;
      }
    
      const dramaMovies = moviesArray.filter((movie) => movie.genre.includes('Drama'));
    
      if (dramaMovies.length === 0) {
        // If there are no drama movies in the array, return 0 as specified.
        return 0;
      }
    
      const totalScore = dramaMovies.reduce((sum, movie) => sum + movie.score, 0);
      const averageScore = totalScore / dramaMovies.length;
    
      return parseFloat(averageScore.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
     // Create a shallow copy of the original array to avoid mutation.
  const sortedMovies = [...moviesArray];

  // Sort the array by year in ascending order, and if years are the same, by title.
  sortedMovies.sort((a, b) => {
    if (a.year === b.year) {
      // If years are the same, compare by title.
      return a.title.localeCompare(b.title);
    } else {
      // Otherwise, compare by year.
      return a.year - b.year;
    }
  });

  return sortedMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
     // Create a shallow copy of the original array to avoid mutation.
  const sortedTitles = [...moviesArray]
  .map((movie) => movie.title) // Extract movie titles.
  .map((title) => title.toString()) // Ensure titles are strings.
  .sort((a, b) => a.localeCompare(b)); // Sort titles alphabetically.

// If there are more than 20 titles, return only the top 20.
if (sortedTitles.length > 20) {
  sortedTitles.length = 20;
}

return sortedTitles;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    const moviesWithMinutes = [...moviesArray];

    // Iterate over the movies and convert their durations to minutes.
    for (let i = 0; i < moviesWithMinutes.length; i++) {
      const movie = moviesWithMinutes[i];
      const durationParts = movie.duration.split(' ');
  
      let totalMinutes = 0;
  
      for (let part of durationParts) {
        if (part.includes('h')) {
          totalMinutes += parseInt(part) * 60;
        } else if (part.includes('min')) {
          totalMinutes += parseInt(part);
        }
      }
  
      // Update the duration in the movie object with the total minutes.
      moviesWithMinutes[i].duration = totalMinutes;
    }
  
    return moviesWithMinutes;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (moviesArray.length === 0) {
        return null;
      }
    
      // Create an object to store the average scores for each year.
      const averageScoresByYear = {};
    
      // Iterate through the movies and calculate the total score and count for each year.
      moviesArray.forEach((movie) => {
        const year = movie.year;
        const score = movie.score;
    
        if (averageScoresByYear[year]) {
          averageScoresByYear[year].totalScore += score;
          averageScoresByYear[year].count++;
        } else {
          averageScoresByYear[year] = {
            totalScore: score,
            count: 1,
          };
        }
      });
    
      let bestYear = null;
      let highestAverage = -Infinity;
    
      // Calculate the average scores for each year and find the year with the highest average.
      for (const year in averageScoresByYear) {
        const { totalScore, count } = averageScoresByYear[year];
        const average = totalScore / count;
    
        if (average > highestAverage || (average === highestAverage && year < bestYear)) {
          highestAverage = average;
          bestYear = year;
        }
      }
    
      return `The best year was ${parseInt(bestYear)} with an average score of ${highestAverage} `;
}
//The best year was <YEAR> with an average score of <RATE>

