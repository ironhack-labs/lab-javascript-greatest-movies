// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(array){

    const directorsArray = array.map(function(movies) { 
      return movies.director
   });
     return directorsArray
   }

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(array){
  
    const stevenDrama = array.filter(function(movie){
      return movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
   
    })
    return stevenDrama.length
  }
  

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(array){
    if (array.length > 0 ){
        const avgRates = array.reduce(function (acc,val){
       if (!val.rate){
         return acc
       }
        return acc + val.rate
     
        },0)
        
       let average = (avgRates/array.length)
       return Number(average.toFixed(2))
     }
        return 0
    }

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(array)
{
      const stevenDrama = array.filter(function(movie){
      return movie.genre.includes("Drama")
   
    })
    const totalRates =  stevenDrama.reduce(function (acc,val){
       if (!val.rate){
         return acc
       }
        return acc + val.rate
     
        },0)  
  
    let average = (totalRates/array.length)
       return Number(average.toFixed(2))
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(array){
  
    array.sort(function(a, b) {
      // Sort by year
      var dCount = a.year - b.year;
      if(dCount) return dCount;
  
      // If there is a tie, sort by title
      var dYear = ('' + a.title).localeCompare(b.title);
      return dYear;
  });
    let newArr = [...array]
    return newArr
  }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

  

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
