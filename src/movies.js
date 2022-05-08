// The `movies` array from the file `src/data.js`.

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {

  return movies.map((word) => {
    
    return word.director
  })
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {

  let numberMovies = 0;

  for (let movie of movies) {
    if (movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')){
        
      numberMovies += 1

    }
  }
  return numberMovies;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {

  let numberMovies = 0
  
  if (movies.length !== 0){

    for (let movie of movies) {
    
        numberMovies += movie.score
    }

     let total = (numberMovies / movies.length).toFixed(2)     
     let number = parseFloat(total)
     
     return number

  } else {

    return 0

  }
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {

  let numberMovies = 0
  let cont = 0
  
  for (let movie of movies){

    if (movie.genre.includes('Drama')){

      numberMovies += movie.score
      cont++
      
    }
  }

  if (cont === 0){

    return 0

  } else {

    let total = (numberMovies / cont).toFixed(2)     
    let number = parseFloat(total)
       
    return number
  }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {

  return movies.sort((yearOne, yearTwo) => {

    if (yearOne.year < yearTwo.year) {

      return -1
      
    } else if (yearOne.year > yearTwo.year){

      return 1

    } else {

      return 0

    }
  })
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {

  const getTitle = movies.map((word) => {
    
    return word.title
  })
  
  getTitle.sort()
  
  const getTitleResult = getTitle.slice(0, 20);
  
  return getTitleResult
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {

  const moviesHours = []

  for (movie of movies){
  
    movie.duration = parseInt(movie.duration.charAt(0))*60 + parseInt(movie.duration.substring(2, movie.duration.length - 3))
    moviesHours.push(movie)

  }

  return moviesHours

}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
