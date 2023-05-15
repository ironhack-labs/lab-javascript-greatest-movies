// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(movies) {
    return movies.map(movie => movie.director);
  }
  
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

    function getAllDirectors(movies) {
    const directors = movies.map(movie => movie.director);
    return directors.filter((director, index) => directors.indexOf(director) === index);
  }
  
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {
    return movies.filter(movie => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')).length;
  }
  
// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
    if (movies.length === 0) {
      return 0;
    }
  
    const sumOfScores = movies.reduce((total, movie) => {
      return total + (movie.score || 0);
    }, 0);
  
    const averageScore = sumOfScores / movies.length;
    return Math.round(averageScore * 100) / 100;
  }
  
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
    const dramaMovies = movies.filter(movie => movie.genre.includes('Drama'));
    return scoresAverage(dramaMovies);
  }
  
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
    const sortedMovies = [...movies].sort((a, b) => {
      if (a.year !== b.year) {
        return a.year - b.year;
      } else {
        return a.title.localeCompare(b.title);
      }
    });
  
    return sortedMovies;
  }
  

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
    const sortedMovies = [...movies].sort((a, b) => a.title.localeCompare(b.title));
    const first20Movies = sortedMovies.slice(0, 20);
    return first20Movies.map(movie => movie.title);
  }
  
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
    return movies.map(movie => {
      const durationParts = movie.duration.split(' ');
      let totalMinutes = 0;
  
      for (const part of durationParts) {
        if (part.includes('h')) {
          const hours = parseInt(part, 10);
          totalMinutes += hours * 60;
        } else if (part.includes('min')) {
          const minutes = parseInt(part, 10);
          totalMinutes += minutes;
        }
      }
  
      return {
        ...movie,
        duration: totalMinutes
      };
    });
  }
  

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
