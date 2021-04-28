// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(moviesArr) {
    let directors = moviesArr.map(function (movie) {
      return movie.director;
    });
    return directors;
  }

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {
  let spielbergDrama =  movies.filter((movie) => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama'));                        
  return spielbergDrama.length;  
  } 

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
  if (movies.length === 0) {
    return 0
  }
  let rateSum = movies.reduce((sum, movie) => sum + movie.rate, 0);
  console.log(rateSum);
  let roundedRate = (rateSum / movies.length).toFixed(2);
  return Number(roundedRate);
}

// Iteration 4: Drama movies - Get the average of Drama Movies



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {
  let newMoviesArr = [...movies]
  newMoviesArr.sort((v1,v2) => {
  if (v1.year < v2.year) {
      return -1;
  } else if (v1.year > v2.year) {
      return 1;
  } else {
      return v1.title.localeCompare(v2.title);}
  });
  return newMoviesArr;
  }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles



// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
