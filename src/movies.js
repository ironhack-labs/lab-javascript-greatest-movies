// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
 
    const directorsArray = movies.map(movie => movie.director);
  
    const uniqueDirectorsSet = new Set(directorsArray);
  
    
    const uniqueDirectorsArray = Array.from(uniqueDirectorsSet);
    return uniqueDirectorsArray;
  }
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  
    const spielbergDramas = movies.filter(movie => 
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    );
  
    return spielbergDramas.length;
  }

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  
    if (movies.length === 0) {
      return 0;
    }
  
    const totalScore = movies.reduce((sum, movie) => sum + movie.score, 0);
    const averageScore = totalScore / movies.length;
  
    
    return parseFloat(averageScore.toFixed(2));
  }

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  
    const dramaMovies = movies.filter(movie => movie.genre.includes("Drama"));
  
    
    if (dramaMovies.length === 0) {
      return 0;
    }
  
    const totalDramaScore = dramaMovies.reduce((sum, movie) => sum + movie.score, 0);
  
    
    const averageDramaScore = totalDramaScore / dramaMovies.length;
    return parseFloat(averageDramaScore.toFixed(2));
  }

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  
    const moviesCopy = [...movies];
  
    moviesCopy.sort((a, b) => {
      if (a.year !== b.year) {
        return a.year - b.year; // 
      } else {
        return a.title.localeCompare(b.title); // 
      }
    });
  
    
    return moviesCopy;
  }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  
    const moviesCopy = [...movies];
  
   
    moviesCopy.sort((a, b) => a.title.localeCompare(b.title));
  
   
    const first20Titles = moviesCopy.slice(0, 20);
  
    
    return first20Titles.map(movie => movie.title);
  }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
