// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors (movies) {
    const newArray = movies.map (function (movies) {
      return movies.director;
      });
    return newArray 
  };
  

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies (movies){
    const spielbergMovies = movies.filter(function (movie) {
      if (movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')) {
        return true;
      } else {
        return false;
      }
      });
      return spielbergMovies.length;
    }

// Iteration 3: All rates average - Get the average of all rates with 2 decimals


function ratesAverage(movies){
  
    if (movies.length === 0) {return 0}
     
   const ratesArray = movies.map (function (movies) {
     return movies.rate;
     });

   const totalRate = ratesArray.reduce(function (acc, value) {
    if (typeof(value) !== 'number') { return acc} else
     {return acc + value / (ratesArray.length)};
     }, 0);
     return Math.round(totalRate*10**2)/10**2;
      }

 
// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies){
  
    if (movies.length === 0) {return 0}
   
    const dramaMovies = movies.filter(function (movie) {
    
        if (movie.genre.includes('Drama')) {
        return true;
    } else {
        return false;
    }
    })
     
   const ratesDrama = dramaMovies.map (function (dramaMovies) {
     return dramaMovies.rate;
     });

   const totalRate = ratesDrama.reduce(function (acc, value) {
    if (typeof(value) !== 'number') { return acc} else
     {return acc + value / (ratesDrama.length)};
     }, 0);
     return Math.round(totalRate*10**2)/10**2;
      }

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {
    const cloneMovies = [... movies]; 
     const orderdedMovies = cloneMovies.sort(function (a, b) {
       if (a.year > b.year) return 1 
       else if (a.year < b.year) return -1
       else if (a.year === b.year && a.title > b.title)
       return 1
       else return -1});
      return orderdedMovies
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles


function orderAlphabetically(movies) {
    const cloneMovies = [... movies]; 
    const moviesTitle = movies.map((movies) => {return movies.title;});
    const orderdedMovies = moviesTitle.sort(function (a, b) {
       if (a > b) return 1 
       else if (a < b) return -1
       else return 0});
      return orderdedMovies.splice(0,20);
  }
  
  
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
