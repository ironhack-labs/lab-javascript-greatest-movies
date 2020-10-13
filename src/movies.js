// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

function noDuplicates(word){
  let newArrayWithoutDuplicates=[];
  word.forEach((currentValue,i)=>{
    if(newArrayWithoutDuplicates.indexOf(currentValue) === -1){
    newArrayWithoutDuplicates.push(currentValue)}
})
return newArrayWithoutDuplicates
}

function getAllDirectors(arr){
  const moviesDirectors = arr.map(function(moviesDirector){
  return moviesDirector.director
  }) 
  return noDuplicates(moviesDirectors)
    }
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(arr){
if(arr.length == 0){
    return 0
}
const spielbergMovies = arr.filter( movie => movie.director == "Steven Spielberg" &&
movie.genre.includes("Drama"));
return spielbergMovies.length

   }

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(arr){
  if(arr.length == 0){
    return 0
  }
  const average = arr.reduce((acc,next) => {
  if(next.rate == undefined){
    next.rate = 0
  }
  return acc + next.rate
  },0)/arr.length
  return Math.round(average * 100)/100
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(arr){
    const dramaMovies = arr.filter(movie => movie.genre.includes("Drama"))
   const averageDramaMovies = ratesAverage(dramaMovies)
  return averageDramaMovies
  }

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr){
    const moviesByYear = arr.sort((a,b) => {
      if(a.year<b.year){
        return -1
      }
      if(a.year>b.year){
        return 1
      }
      else(a.year==b.year)
  
      if(a.title < b.title){
        return -1
      }
      if(a.title > b.title){
        return 1
      }
      return 0
    })
  
  return moviesByYear
  }
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function printTitle(arr){
  const moviesTitles = arr.map(function(moviesTitles){
    return moviesTitles.title
  })
  return moviesTitles
  } 
  
  function orderAlphabetically(arr){
  
    const moviesByTitle = arr.sort((a,b) => {
  
      if(a.title < b.title){
        return -1
      }
      if(a.title > b.title){
        return 1
      }
      return 0
    }
    )
    const first20Titles = printTitle(moviesByTitle.slice(0,20))
    return  first20Titles
  }
  
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arr){
  const duration = arr.map(function(moviesDuration){
  return moviesDuration.duration
})
  const hours = duration.map(function(time){
   const currentNumberStr = time.charAt(time.indexOf("h")-1)
   return Number(currentNumberStr)*60
  })
  const min = duration.map(function(time){
   const currentNumberStr = time.charAt(time.indexOf("min")-1)+time.charAt(time.indexOf("min")-2)
   return Number(currentNumberStr)
  })
  for (let i = 0; i < arr.length; i++) {
    const hoursToMinutes = hours[i]+min[i]
    arr[i].duration = hoursToMinutes
   }
  return arr
}
// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
