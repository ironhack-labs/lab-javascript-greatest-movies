// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(moviesX){
    moviesX = moviesX.map((ele) => ele.director)
    return moviesX
 }
 console.log(getAllDirectors(movies));



// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?


function howManyMovies(moviesX){
    let spielberg = moviesX.filter((ele) => 
    ele.director == 'Steven Spielberg' && ele.genre.includes('Drama'))
    
    return spielberg.length
 }
 console.log(getAllDirectors(movies));

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(moviesX){
    if (!moviesX.length){
            return 0
     }
    let ratesAvg = moviesX.reduce((accumulator, currentValue) => {
        if (currentValue.rate){
            return accumulator + currentValue.rate;
        } else {
            return accumulator
        }
    }, 0)
      return Number((ratesAvg / moviesX.length).toFixed(2))
      }
      console.log(ratesAverage(movies));

// Iteration 4: Drama movies - Get the average of Drama Movies

 function dramaMoviesRate(moviesX){

    let dramaMovies = moviesX.filter((ele) => ele.genre.includes('Drama'))

    if (!dramaMovies.length){
            return 0
     }
    let ratesAvg = dramaMovies.reduce((accumulator, currentValue) => {
        if (currentValue.rate && currentValue.genre.includes('Drama')){
            return accumulator + currentValue.rate;
        } else {
            return accumulator
        }
    }, 0)
      return Number((ratesAvg / dramaMovies.length).toFixed(2))
      }
      console.log(dramaMoviesRate(movies));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)


function orderByYear(movieYears){

    movieYears = movieYears.map((element) => element.year)
    return movieYears
  
  }
  
  orderByYear(movies).sort(function (a, b){
  
    if (a < b){
      return -1;
    }
    else if (a > b){
      return 1;
    }
    else {
      return 0;
    }
  });



// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(orderMovies){

    orderMovies = orderMovies.map((element) => element.title)
    return orderMovies.slice(0, 20).sort()
    
    }
    
    orderAlphabetically(movies);

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average