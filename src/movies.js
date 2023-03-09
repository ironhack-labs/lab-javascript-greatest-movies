// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
    const directors = movies.map(movie => movie.director);
    return directors;
  }
  
  // Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
  function howManyMovies(movies) {
    if (movies.length === 0) {
      return 0;
    }
  
    const spielbergDramas = movies.filter(movie => {
      return movie.director === 'Steven Spielberg' && movie.genre.includes('Drama');
    });
  
    return spielbergDramas.length;
  }

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr) {
    if (arr.length === 0) {
      return 0;
    }
  
    const scores = arr.map(movie => movie.score || 0);
    const sum = scores.reduce((acc, val) => acc + val, 0);
    const avg = sum / arr.length;
  
    return parseFloat(avg.toFixed(2));
  }
  
  
  // Iteration 4: Drama movies - Get the average of Drama Movies
  function dramaMoviesScore(movies) {
    let dramaMovies = movies.filter(movie => movie.genre.includes('Drama'));
    let totalScore = dramaMovies.reduce((acc, movie) => acc + movie.score, 0);
    let averageScore = totalScore / dramaMovies.length || 0;
    return parseFloat(averageScore.toFixed(2));
  }
  
  
  // Iteration 5: Ordering by year - Order by year, ascending (in growing order)
  function orderByYear(movies) {
    const sortedMovies = movies.slice().sort((a, b) => {
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
    const titles = movies.map(movie => movie.title); // extract titles
    const sortedTitles = titles.sort(); // sort titles alphabetically
    const top20Titles = sortedTitles.slice(0, 20); // select top 20 titles
    return [...top20Titles]; // return new array of top 20 titles
  }
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
    return movies.map((movie) => {
      const duration = movie.duration;
      const hours = parseInt(duration.slice(0, duration.indexOf('h')));
      const minutes = parseInt(duration.slice(duration.indexOf(' ') + 1, duration.indexOf('min')));
  
      const totalMinutes = hours * 60 + minutes;
  
      return {
        ...movie,
        duration: totalMinutes
      };
    });
  }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
