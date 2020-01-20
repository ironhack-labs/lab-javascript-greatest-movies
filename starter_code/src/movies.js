/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(moviesArr) {
let arr =[...moviesArr];

   arr.sort(function(a, b){
    if (a.year > b.year)   { 
    return 1;
    }
    else    return -1
   })

   return arr
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function  howManyMovies(moviesArr){
    let arr = [...moviesArr];
   
   return arr.filter((movie) => {
      if( movie.director === "Steven Spielberg" && movie.genre.includes("Drama") ){
          return true
      }
      else false
    }).length
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(moviesArr){
    let arrMovie= [...moviesArr];
    
    arrMovie.sort(function(a, b){
        if (a.title > b.title)   { 
        return 1;
        }
        else    return -1
       })
      
       arrMovie = arrMovie.splice(0,20).map(movie => movie.title)
    return arrMovie
    
}
// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(moviesArr){
    let arrMovie = [...moviesArr];
    if(movies.length === 0){
        return 0;
    }
    else {
      let rates =  movies.reduce((ac,cu) => {
        return ac += cu.rate;
      },0);
    
      return +(rates/movies.length).toFixed(2);
    }
}
// Iteration 5: Drama movies - Get the average of Drama Movies


// Iteration 6: Time Format - Turn duration of the movies from hours to minutes


// BONUS Iteration: Best yearly rate average - Best yearly rate average
