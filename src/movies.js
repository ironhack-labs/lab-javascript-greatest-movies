

// Iteration 1: All directors? - Get the array of all directors.

/* var getAllDirectors = movies.map(function(oneMovie){
    return oneMovie.director;
})
console.log(getAllDirectors) */

function getAllDirectors (array){
    var newArrayDirectors = array.map(function(oneMovie){
        return oneMovie.director;
    })
  return newArrayDirectors
}
    console.log(getAllDirectors)


// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

/* function removeDuplicates(director) {
    return arr.arrOfDirector((a, b) => array.indexOf(a === b)
  }; */

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?


function howManyMovies (array){
  var howManyMoviesDrama = array.filter(function(numMovies){
    return numMovies.director === "Steven Spielberg" && numMovies.genre.includes('Drama');
    })
    return howManyMoviesDrama.length
}

    /* var howManyMovies = movies.filter(function(numMovies){
        return numMovies.director === "Steven Spielberg" && numMovies.genre.includes('Drama');
        }).length
      console.log(howManyMovies)
 */

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage (array){
  var ratesAvg=(array.reduce(function(acc,curr){ 
    return (acc + curr.rate) 
},0))/ array.length; 
return Math.round(ratesAvg/array.length*100)/100)
}
/* let ratesAverage=(movies.reduce(function(acc,curr){ 
    return (acc + curr.rate ) 
},0))/ movies.length; 
console.log(Math.round(ratesAverage*100)/100) */

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate (array) {
  let dramaMovies = movies.filter(function(numMovies){
    return numMovies.genre.includes('Drama');
    return dramaMovies.length
})  
let dramaMoviesRate=(dramaMovies.reduce(function(acc,curr){ 
    return (acc + curr.rate ) 
},0))/movies.length; 
return (Math.round(dramaMoviesRate*100)/100)
}

/* 
let dramaMovies = movies.filter(function(numMovies){
    return numMovies.genre.includes('Drama');
    return dramaMovies.length
})
    console.log(dramaMovies.length)
  
let dramaMoviesRate=(dramaMovies.reduce(function(acc,curr){ 
    return (acc + curr.rate ) 
},0))/movies.length; 
console.log(Math.round(dramaMoviesRate*100)/100) */


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear (array){
  let newOrder = array.sort(function (a, b) {
    if (a.year < b.year) {
      return - 1;
    } else if (a.year > b.year) {
      return 1;
    } else {
      return 0;
    }
  });
  return newOrder
}
/* let orderByYear = movies.sort(function (a, b) {
    if (a.year < b.year) {
      return - 1;
    } else if (a.year > b.year) {
      return 1;
    } else {
      return 0;
    }
  });
  console.log(orderByYear); */

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically (array){
  let newOrderAlpha = array.sort(function(titre){
    return titre.title;
  )}
Return newOrderAlpha
}




 /* let orderAlphabetically = movies.sort(function(titre){
    return titre.title;
})
    console.log(orderAlphabetically)  */


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
