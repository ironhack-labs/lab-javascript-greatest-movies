// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {

    const DirectorsArray = moviesArray.map(function(movie){
    return movie.director
    })

    console.log(DirectorsArray)
    return DirectorsArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let num = 0;
  const arraySpielbergMovies = moviesArray.filter(function(movies){
  	if(movies.director === 'Steven Spielberg'){
     num += movies.genre.includes('Drama')
    console.log(num)
      }
  })
  return num
  }
// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    let average = 0;
  let scoreSum = 0;
  let filteredMovies = 0
  
  const scoreArray = moviesArray.filter(function(movies){
    if (movies.score === ''){
      movies.score = 0
    } else if(movies.score >= 8){
    	scoreSum += movies.score
      filteredMovies = moviesArray.length
      average = Math.round(scoreSum/filteredMovies * 100) / 100
      }
  })

  return average
}
  

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let scoreSum= 0
    let dramaAverage = 0;
    let filteredMovies = 0
    
       moviesArray.filter(function(movies){
        if(movies.genre.includes('Drama')){
            scoreSum += movies.score
            filteredMovies = moviesArray.length
            dramaAverage = Math.round(scoreSum/filteredMovies * 100) / 100
  
           }
          
      })
  
    return dramaAverage
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    // durch slice wird ein neues Array erstellt
    const sortedMovies = moviesArray.slice(0).sort(function(a,b){
      if(a.year === b.year){
        return a.title > b.title
      }
      return a.year - b.year
    })

    return sortedMovies
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    
    const movieTitles = moviesArray.map(function(movies){
      return movies.title
    })


    const sortedMoviesAlpha = movieTitles.sort(function(a,b){
        
        return a.title > b.title
    })


    return sortedMoviesAlpha.slice(0,20)


    
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
