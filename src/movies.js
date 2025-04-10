// Iteration 1: All directors? - Get the array of all directors.

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
  const directors = moviesArray
    .map((movie) => movie.director)
    .filter(
      (value, index, originalArray) => originalArray.indexOf(value) === index
    );
  return directors;
}

// function getAllDirectors(moviesArray) {
//     return [...new Set(moviesArray.map((movie) => movie.director))];
//   }

// -------------------------------------------------------------------------------------------------------

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  // Filter movies directed by Steven Spielberg and that belong to the Drama genre
  const dramaMoviesDirectedByStevenSpielberg = moviesArray.filter((movie) => {
    const isMovieDirectedByStevenSpielberg =
      movie.director === "Steven Spielberg";
    const isMovieADrama = movie.genre.includes("Drama"); // or use indexOf as you've done
    return isMovieDirectedByStevenSpielberg && isMovieADrama;
  });

  // Return the count of such movies
  return dramaMoviesDirectedByStevenSpielberg.length;
}

// ------------------------------------------------------------------------------------------------------

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (movies.length === 0) {
    return 0; // Return 0 if the array is empty
  }

  // Sum of scores using reduce, skipping movies without a score
  const sumOfScores = movies.reduce((accumulator, movie) => {
    return movie.score ? accumulator + movie.score : accumulator;
  }, 0);

  // Calculate the average
  const averageScore = sumOfScores / movies.length;

  // Round the average to two decimal places
  return Math.round(averageScore * 100) / 100;
}

// --------------------------------------------------------------------------------------------------------

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesScore(movies) {
  // Filter movies to get only those with the "Drama" genre
  const dramaMovies = movies.filter((movie) => movie.genre.includes("Drama"));

  // Calculate and return the average score for drama movies
  return scoresAverage(dramaMovies);
}

// -------------------------------------------------------------------------------------------------------

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(lotsOfMovies) {
    let newArray = [...lotsOfMovies];
    // spread operator is to make sure not to mutate the original array because .sort() does change/mutate the original array so always make sure you create a safe copy before sorting
    newArray.sort((a, b) => {
      if (a.year > b.year) {
        return 1;
      } else if (b.year > a.year) {
        return -1;
      } else {
        if (a.title > b.title) {
          return 1;
        } else if (b.title > a.title) {
          return -1;
        }
        return 0;
      }
    });
    return newArray;
  }

//   -------------------------------------------------------------------------------------------------------

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(lotsOfMovies) {
    return [...lotsOfMovies]
      .sort((a, b) => {
        if (a.title > b.title) {
          return 1;
        } else if (a.title < b.title) {
          return -1;
        } else {
          return 0;
        }
      })
      .map(eachMovie => eachMovie.title)
      .slice(0, 20);
  }

//   --------------------------------------------------------------------------------------------------------

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    return moviesArray.map((movie) => {
      // Create a copy of the movie object to avoid mutating the original
      const newMovie = { ...movie };
      
      // Split the duration string into parts
      let durationParts = movie.duration.split(' ');
  
      // Initialize total minutes
      let totalMinutes = 0;
  
      // Convert hours to minutes if present
      durationParts.forEach(part => {
        if (part.includes('h')) {
          totalMinutes += parseInt(part) * 60; // Convert hours to minutes
        }
        if (part.includes('min')) {
          totalMinutes += parseInt(part); // Add remaining minutes
        }
      });
  
      // Replace duration with total minutes
      newMovie.duration = totalMinutes;
  
      return newMovie;
    });
  }

//   ----------------------------------------------------------------------------------------------------------

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function ratesAverage(scores) {
    if (scores.length === 0) return 0;
    const sum = scores.reduce((acc, score) => acc + (score || 0), 0);
    return sum / scores.length;
  }
  
  function bestYearAvg(movies) {
    if (movies.length === 0) {
      return null;
    }
  
    const scoresByYear = {};
  
    movies.forEach(movie => {
      if (!scoresByYear[movie.year]) {
        scoresByYear[movie.year] = [];
      }
      if (typeof movie.score === 'number') {
        scoresByYear[movie.year].push(movie.score);
      }
    });
  
    let bestYear = null;
    let bestAverage = 0;
  
    for (const year in scoresByYear) {
      const averageScore = ratesAverage(scoresByYear[year]);
      if (averageScore > bestAverage || 
         (averageScore === bestAverage && (!bestYear || parseInt(year) < parseInt(bestYear)))) {
        bestAverage = averageScore;
        bestYear = year;
      }
    }
  
    return `The best year was ${bestYear} with an average score of ${bestAverage.toFixed(1)}`;
  }