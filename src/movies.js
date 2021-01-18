// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(arr){
    let allDirectors = arr.map(function(film){
      return film.director
    })
    return allDirectors
    }




// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr){
    let allFilmsOf = []
    if (arr.length === 0) {
        return 0
    }
    else {
        for(i=0; i<arr.length; i++){
           if(arr[i].director === "Steven Spielberg" && arr[i].genre.includes("Drama") === true){
             allFilmsOf.push(arr[i].title)
            }
        }
    }
    return allFilmsOf.length
  }


// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(arr){
    if (arr.length === 0) {
          return 0
      }
    
      let allRates = arr.map(function(film){
        if(film.rate === undefined) {
          return null
        }
        else {
          return film.rate
        }
        
      })
    
    let allRatesSum = allRates.reduce(function(acc, val){
      return acc + val
    })
  
    let average = allRatesSum / allRates.length
    return parseFloat(average.toFixed(2)) 
    
      return allRates
      }


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(arr){
    let allFilmsOf = [];
    if (arr.length === 0) {
            return 0
        }
    else {
      for(i=0; i<arr.length; i++) {
       if(arr[i].rate === undefined) {
         allFilmsOf.push(null)
         allFilmsOf.pop()
       }
        else if(arr[i].genre.includes("Drama") === true){
               allFilmsOf.push(arr[i].rate)
              }
        else if(arr[i].genre.includes("Drama") === false){
          allFilmsOf.push(null)
          allFilmsOf.pop()
        }
    }
    }  
    
      let allRatesSum = allFilmsOf.reduce(function(acc, val){
        return acc + val
      })
    
      let average = allRatesSum / allFilmsOf.length
     
      return parseFloat(average.toFixed(2)) 
        }

        
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies){
  const sorted = movies.slice().sort(function(a, b){
    if (a.year !== b.year) {
      return a.year - b.year;
    } else {
      return a.litle.localeCompare(b.title)
    }
  });
  return sorted
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
