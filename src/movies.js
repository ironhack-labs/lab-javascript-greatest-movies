// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors (movies) {
  const directors = movies.map(function(movie) {
      return movie.director
  
           });

         return directors 
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies (array) {
    const quantity = array.filter (function (movie) {
        if (movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')) {
            return movie
        }
    });
    
    return quantity.length 

}


// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage (movies) {
    if (movies.length < 1 ) {
        return 0 
    }
    let accumulateRate = 0
    let movieswithRates = 0
    movies.forEach(movie => {
        if (movie.rate) {
            accumulateRate += movie.rate 
           // movieswithRates ++
        }
       
    });
    let ratesavg = accumulateRate / movies.length
    let roundedratesavg = Math.round(ratesavg * 100 ) / 100
    console.log (roundedratesavg)
      return roundedratesavg
     }
   
     
// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {

    const dramaFilter = movies.filter(function (movie) {
      return movie.genre.includes('Drama')   
    });
    
    if (dramaFilter.length === 0) {
      return 0;
    }
  
    const sum = dramaFilter.reduce(function (acc, val) {
        return acc + val.rate;  
    }, 0);  
    
    
    return Math.round((sum / dramaFilter.length) * 100) / 100;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear (movies) {
    let moviesClone= [...movies]
    const sorted = moviesClone.sort(function (a, b) {
        
        if (a.year === b.year){
            return a.title.localeCompare(b.title);
        }
        return a.year - b.year
        
    });
    return sorted 
}
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
        const newArr = movies.slice();
        
        const sorted = newArr.sort( function (a, b) {
          if (a.title > b.title) {
            return 1; 
          }
          else if (a.title < b.title) {
            return -1; 
          }
          else {
            return 0;
          }
        }) 
        
        const titleArr = sorted.map(function (item) {
          return item.title
        })
        
        return titleArr.slice(0, 20)
      };

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

