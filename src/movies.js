// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(movies) {
    return movies.map(movie => movie.director);
  }
  
  // Bonus - Iteration 1.1: Clean the array of directors
  function getUniqueDirectors(movies) {
    const allDirectors = getAllDirectors(movies);
    const uniqueDirectors = [...new Set(allDirectors)];
    return uniqueDirectors;
  }
  


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {

    return movies.filter(movie =>
      movie.director === "Steven Spielberg" &&
      movie.genre.includes("Drama")
    );
  }

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
        if (movies.length === 0) {
          return 0; 
        }
      
        const totalScores = movies.reduce((total, movie) => total + movie.score, 0);
        const averageScore = totalScores / movies.length;
      
        return parseFloat(averageScore.toFixed(2));
      }
      


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
        const dramaMovies = movies.filter(movie => movie.genre.includes("Drama"));
      
        if (dramaMovies.length === 0) {
          return 0; // Handle the case of no drama movies
        }
      
        const totalScores = dramaMovies.reduce((total, movie) => total + movie.score, 0);
        const averageScore = totalScores / dramaMovies.length;
      
        return parseFloat(averageScore.toFixed(2));
      }
      

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
        const sortedMovies = [...movies]; // Make a shallow copy of the array to avoid modifying the original
      
        sortedMovies.sort((a, b) => {
          if (a.year === b.year) {
            return a.title.localeCompare(b.title); // Sort alphabetically by title if the years are the same
          }
          return a.year - b.year; // Sort by release year
        });
      
        return sortedMovies;
      }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
