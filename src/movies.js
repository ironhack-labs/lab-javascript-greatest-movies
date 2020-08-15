// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(movies){
    const mappedArr = movies.map(function(movie){
      return movie.director
    })
    return mappedArr
}


// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies){
    const findDirDram = movies.filter(function(movie){
      if(movie.director === "Steven Spielberg" && movie.genre.includes("Drama")){
        return movie
      } 
      
    }) 
      return findDirDram.length
  }

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies){
    const sumOfrates = movies.reduce(function(total, val){
      if(val.rate === ''|| val.rate === undefined){
        val.rate = 0;
      }
      return total + val.rate / movies.length
    },0);
  return Number(sumOfrates.toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies){
    const dramaMovies = movies.filter(function(movie){
      if(movie.genre.includes("Drama")){
        return movie
      }
    })
    return ratesAverage(dramaMovies)
  }

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

  
function orderByYear(array) {
    const sortedYear = [...array].sort(function(a, b) {
        if(a.year === b.year){
           return  a.title.localeCompare(b.title)
        }
            return a.year - b.year;
        });
        return sortedYear;
      }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles


function orderAlphabetically(movies){                    
    const mappedArr = movies.map(function(movie){
    return {
        title: movie.title
    }  
 })
 const sortedtitle = mappedArr.sort(function(a,b){
   return a.title.localeCompare(b.title);
 })
 return sortedtitle.slice(0,20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
