// Iteration 1: All directors? - Get the array of all directors.
 function getAllDirectors(arr) {
    const allDirectors = arr.map(function(e) {
        return e.director
    })
    return allDirectors
 }

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
  let onlyDrama = arr.filter(function(e) {
      return e.genre.includes("Drama") && e.director == "Steven Spielberg"
  });
   return onlyDrama.length
}
// Iteration 3: All rates average - Get the average of all rates with 2 decimals
  function ratesAverage(arr) {
      
      const sum = arr.reduce(function(acc, val) {
          if(val.rate == 0 || val.rate == undefined) {
              val.rate = 0
          }
          return (acc+val.rate)
      },0)
      if(!sum) {return 0}
      return +(sum/arr.length).toFixed(2)
  }
// Iteration 4: Drama movies - Get the average of Drama Movies
    function dramaMoviesRate(arr) {
        let dramas = arr.filter(function(f) {
            return f.genre.includes("Drama")
        })
        let sum = dramas.reduce(function(acc, val) {
             return (acc+val.rate)   
        },0)
        if(!sum) {return 0}
        return +(sum/dramas.length).toFixed(2)
    }

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
 function orderByYear(arr) {

    function compare( a, b ) {
        if ( a.title < b.title ){
          return -1;
        }
        if ( a.title > b.title ){
          return 1;
        }
        return 0;
      }

    const sortByYear = arr.sort( function(a, b) {
        if(a.year != b.year) {
           return a.year - b.year 
        }
        else {
              if ( a.title < b.title ){
                return -1;
              }
              if ( a.title > b.title ){
                return 1;
              }
        }
    })
    return sortByYear.slice()
 }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

  function orderAlphabetically(arr) {
   
    function compare( a, b ) {
        if ( a.title < b.title ){
          return -1;
        }
        if ( a.title > b.title ){
          return 1;
        }
        return 0;
      }
       
      
  
     return arr.slice().sort(compare).slice(0,20).map(function(e) { return e.title})
  }

  

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
