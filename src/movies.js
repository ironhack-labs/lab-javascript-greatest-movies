// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArr) {
    const directors = moviesArr.map((eachMovies) => eachMovies.director);
    const uniqueDirectors = directors.filter((director, i, arr) => arr.indexOf(director) === i)
    return directors;
  }
  // Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
  
  function howManyMovies(moviesArr) { 
    const filteredArr = moviesArr.filter(movie =>movie.director === 
      'Steven Spielberg' && movie.genre.includes('Drama'))
    return filteredArr.length
  }
  
  // Iteration 3: All rates average - Get the average of all rates with 2 decimals
  function scoresAverage(moviesArr){
    if (!moviesArr.length) return 0;
    const sumScores = moviesArr.reduce((acc, movie) => {
      if (typeof movie.score === 'number') return acc + movie.score;
      return acc;
    }, 0);
    return Math.round((sumScores / moviesArr.length) * 100) / 100;
    }
  
  // Iteration 4: Drama movies - Get the average of Drama Movies
  
  
  
  // Iteration 5: Ordering by year - Order by year, ascending (in growing order)
  
  // Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
  
  // BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
  
  // BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
  