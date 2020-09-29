// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(){
    const directorsArr = movies.map(value =>{
     return value.director
    })   
    return directorsArr
  }

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?


function howManyMovies(){
    const moviesStevenArr = movies.filter(
      value => {
        if (value.director=="Steven Spielberg" && value.genre.includes("Drama")==true){
        return value.title}
        else {
        }
      })
      return moviesStevenArr.length
    }
  

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(){
    const ratetotal = movies.reduce((ratetotalsofar, currentrate) => {
     return ratetotalsofar + currentrate.rate
    },0)   
    return parseFloat(ratetotal/movies.length).toFixed(2);
  }

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(){
    const dramaArr = movies.filter(
      value => {
        if (value.genre.includes("Drama")==true){
        return value.title}
        else {
        }
      })
      return dramaArr
    }
  
    darmaArr2 = dramaMoviesRate(movies)
  
  function ratesAverageDrama(){
    const ratetotal = darmaArr2.reduce((ratetotalsofar, currentrate) => {
     return ratetotalsofar + currentrate.rate
    },0)   
    return parseFloat(ratetotal/movies.length).toFixed(2);
  }

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {
    let orderYear = movies.map (function (movie){
      return (`Title:${movie.title},${movie.year}`);}
      )
      orderYear.sort (function (a, b){
        return a - b
      });
      return orderYear
    }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
    let orderMovies = movies.map(function(movie) {
      return movie.title;
    })
    orderMovies.sort(function(movieA, movieB) {
      return movieA.localeCompare(movieB)
    });
  
    if (movies.length < 20) {
      return orderMovies
    }
    else {
      return orderMovies.slice(0, 20)
    }
  }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
