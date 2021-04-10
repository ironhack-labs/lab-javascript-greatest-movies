// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(array){
    const allDirectors = array.map(function(element){
    return element['director']
   })
  return allDirectors
  }

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

let allDirectors =getAllDirectors(movies)
let allDirectorsFilter = allDirectors.filter(function(item,index){
  return allDirectors.indexOf(item) === index;
})

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(arraymovies){
    let stevenMovies = arraymovies
    .filter(function(movie){
     return movie.director === "Francis Ford Coppola"
     })
    .filter(function(movie){
     return movie.genre.includes("Drama")
     })
    .map(function(movie){
     return movie.title
 })
 return stevenMovies.length
 }
  


// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function rateAverage(arrayMovies){
    let ratesSum =arrayMovies
    .map(function(movie){
    return movie.rate
    })
    .reduce(function(sum,rate){
    return sum + rate
    },0)
    console.log(ratesSum)
    let rateAverage = ratesSum / arrayMovies.length
    let rateAverage1= rateAverage.toFixed(2)
    return rateAverage1
  }

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(arrayMovies){
  let dramaArray = arrayMovies
  .filter(function(movie){
   return movie.genre.includes('Drama')
  })
  const rateAverageDrama = rateAverage(dramaArray)
  const rateAverageTotal = rateAverage(movies)
  return rateAverageDrama 
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(arrayMovies){
  let orderByYear = movies.sort((a,b)=>{
  return b.year -a.year
  })
  let orderByYearReverse = orderByYear.reverse()
  return orderByYearReverse   
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(moviesArr){
  const titleArr = movies
  .map(function(movie){
   return movie.title
  })
  const titleOrder = titleArr.sort((a,b)=>{
  const title1 = a.toLowerCase();
  const title2 = b.toLowerCase();
  if (title1 < title2){
    return -1;
  }
  if (title1 > title2){
    return 1;
  }
  return 0;
  })
return titleOrder.slice(0,20)

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
