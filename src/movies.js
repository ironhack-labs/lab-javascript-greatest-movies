// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(movies){
    let directors = movies.map(function(element){
        return element.director
    });
    return directors;
}
    
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(array){
    let spielbergMovies = array.filter(function(object){
        return object.director === 'Steven Spielberg' && object.genre.includes('Drama')
    })
    return spielbergMovies.length
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies){
    if(movies.length === 0){
      return 0
    }
    let filteredMovies = movies.filter(function(movie){
      return movie.rate
    })
        
    let sum = filteredMovies.reduce(function(acc, movie){
        return acc + movie.rate
    }, 0)
   
    return Number((sum / movies.length).toFixed(2))
  }

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies){

    let dramaMovies = movies.filter(function(movie){
      return movie.genre.includes('Drama')
    })

    if(dramaMovies == 0){
        return 0
      }

    let dramaMoviesSum = dramaMovies.reduce(function(acc, movie){
      return acc + movie.rate

    } ,0)

  return Number((dramaMoviesSum / dramaMovies.length).toFixed(2))
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies){
    let moviesClone = JSON.parse(JSON.stringify(movies));  // deep clone
    
    let orderByYear = moviesClone.sort(function(movie1, movie2){
      
      if(movie1.year === movie2.year){
        
          // sorting same year movies alphabetically:
          if(movie1.title < movie2.title){
            return -1
          } else if(movie1.title > movie2.title){
            return 1
          } else {
            return 0
          }
        
      } else {
        
      return movie1.year - movie2.year
      }
      
    })
    return orderByYear
  }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies){
  
    let moviesClone = JSON.parse(JSON.stringify(movies));
    
    // sort movie titles alphabetically
    let orderMoviesAlpha = moviesClone.sort(function(movie1, movie2){
      if(movie1.title < movie2.title){
        return -1
      } else if(movie1.title > movie2.title){
        return 1
      } else {
        return 0
      }
    })
    
    let returnTitles = orderMoviesAlpha.map(function(movie){
      return movie.title
    })
    
    return returnTitles.slice(0, 20)
  
  }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
