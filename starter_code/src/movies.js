/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear (yearArray) {
    let arr = []

    arr.sort(function(a,b){
    if (a.year == b.year) {
        
        if (a > b) {
          return 1;
        } 
        else if (a < b) {
         return -1;
        }
        return 0;
    }
      return a.year-b.year;
    })
      return arr;
    }

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies (movies) {
    
    const SpielbergMovies = movies.filter(function(theMovies) {

        if (theMovies.director == "Steven Spielberg" && film.genre.includes("Drama")){
            return theMovies;
        }
    })

    return SpielbergMovies.length;
  
  }
  
// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

// Iteration 5: Drama movies - Get the average of Drama Movies

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
