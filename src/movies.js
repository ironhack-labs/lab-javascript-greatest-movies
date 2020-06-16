// Iteration 1: All directors? - Get the array of all directors.

  //ES5
function getAllDirectors(movies) {
    const directors = movies.map(function (movie) {return movie.director});
    return directors;
  }
  getAllDirectors (movies)

  //ES6
function getAllDirectors(movies) {
    const directors = movies.map(movie => movie.director);
    return directors;
  }
  
  getAllDirectors (movies)
  
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
    let movieSpielbergDrama = movies.filter(movie => movie.director === "Steven Spielberg" && movie.genre.includes ("Drama"));
    return movieSpielbergDrama.length;
}
howManyMovies(movies)
// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies) {
    if (movies.length > 0){
            let rates = movies.reduce ((ac, cu) => ac += cu.rate, 0) 
            let avgRates= rates/movies.length;
            return  +avgRates.toFixed(2);

        } return 0
    } 
    
ratesAverage(movies);
//8.31

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies){
    let dramaMovies = movies.filter (movie => movie.genre.includes ('Drama'));
    if (dramaMovies.length > 0) {
    let dramaRates = dramaMovies.reduce ((ac, cu) => ac += cu.rate, 0);
     let dramaRatesAvg=dramaRates/dramaMovies.length;
    return +dramaRatesAvg.toFixed(2);
    } return 0
}

dramaMoviesRate (movies)

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {
    let moviesOrdered = [...movies];
    moviesOrdered.sort((a, b) => {
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
    return moviesOrdered;
  }
  
  
  orderByYear(movies);

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies){
    
    let moviesOrderAlphabetically = movies.sort ((a, b) => {
        if (a.title > b.title) return 1;
        else return -1;
    })
    moviesOrderAlphabetically.splice(20)
    
    return moviesOrderAlphabetically.map(movie => movie.title)

    }
orderAlphabetically(movies)
    

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
