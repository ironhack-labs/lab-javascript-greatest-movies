// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arr) {
    const printDirectors = arr.map(function(movie){
     return movie.director
      })
    return printDirectors;  
  }
  
  getAllDirectors(movies);


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(arr){
    const stevenSpielberg = arr.filter(function(movie){
      return movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    })
    return stevenSpielberg.length;
  }
  
  howManyMovies(movies);

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(arr) {
    const averageTotal = arr.reduce(function(acc, currentValue) {
        return acc + currentValue.rate
  }, 0);
  return rawAverage = (averageTotal/movies.length).toFixed(2);
  }
  
    ratesAverage(movies);

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMovies(arr){
    const dramaList = arr.filter(function(movie){
      return movie.genre.includes("Drama")
    })
    return dramaList;
  }
  
  dramaMovies(movies);
  
  
  function dramaMoviesRate(dramaMovies){
    const dramaRates = dramaMovies.reduce(function(acc, current) {
      return acc + current.rate
    }, 0);
    return dramaRawAverage = (dramaRates/dramaMovies.length).toFixed(2);
  } ;
  
  dramaMoviesRate(movies);

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(arr){
    const yearOfFilms = arr.sort(function (a, b){
      return a.year - b.year;
    })
    return yearOfFilms;
  }
  
  orderByYear(movies);
  

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
    let orderMovies = movies.map(function(movie) {
      return movie.title;
    })
    orderMovies.sort(function(movieA, movieB) {
      return movieA.localeCompare(movieB)
    });

  }

orderAlphabetically (movies);

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
