// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors (array) {

    const allDirectors = array.map(function(name){
        return name.director;
    });
    
        return allDirectors;
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies (array){
   
    const stevenDrama = array.filter(function(movie){
        
        if (movie.director === "Steven Spielberg" && movie.genre.includes("Drama")) {
       
          return movie;
        }
    });
        return stevenDrama.length;
  }

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage (array){

    if (array.length === 0) {
        return 0;
    }
    
    const totalRates = array.reduce(function(total, movie) {
     
        let rate = 0;
        if (movie.rate) {
            rate = movie.rate;
        }
        return total + rate;  
      
    }, 0) / array.length; //here we need another function that reduced the array length by those arrays that do not contain rate to prevent diluting out result. google count key value pairs
    
    return Math.round(totalRates * 100)/100; // still need to round
    
    } 

// Iteration 4: Drama movies - Get the average of Drama Movies //question: 

function filterArray (array) {
    
    const filtered = array.filter(function(movie) {
      
      return movie.genre.includes("Drama");
      
    });
    
    return filtered;
  }

function dramaMoviesRate(array) {

return ratesAverage(filterArray(array));
  
  }

ratesAverage (movies);

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear (array) {
  
  const sorted = array.slice().sort (function(a, b) {
    let sortYear = a.year - b.year;
    if (sortYear !== 0) {
    return sortYear;
  } else if (a.title < b.title) {
    return -1;
  }
  else if (a.title > b.title){
    return 1;
  }
  
  return 0;
  });
  
  return sorted;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(array) {

  const sorted = array.slice().sort (function(a, b){
    
    if (a.title < b.title) {
      return -1
    }
    if (a.title > b.title){
      return 1
    }
    
    return 0
  }).map(function (movie){
    
    return movie.title
    
  });
  
  return sorted.slice(0, 20);
  
}
orderAlphabetically (movies)

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

// Iteration 4: Drama movies - Get the average of Drama Movies

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
