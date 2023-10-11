// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map(function (movie) {
        return movie.director
    })
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    return moviesArray.filter((movie) => {
        return movie.genre.includes("Drama") && movie.director === "Steven Spielberg"
    }).length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0
    } 
    const filteredMovies = moviesArray.filter(movie => movie.score)
    const totalScores = filteredMovies.map(movie => movie.score)
    const totalSum = totalScores.reduce((acc, score) => {
          return acc + score;
    }, 0)
    return Number((totalSum / moviesArray.length).toFixed(2))
}



// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) { 
    
    const dramaMovies = moviesArray.filter(movie => movie.genre.includes("Drama"))
    
    if (dramaMovies.length === 0){
        return 0
    }

    const dramaScores = dramaMovies.map ((movie) => movie.score)
    const dramaSum = dramaScores.reduce (((acc, score) => acc + score), 0)

    return Number((dramaSum / dramaMovies.length).toFixed(2))
} 

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const moviesArrCopy = moviesArray.map(movie => ({ ...movie }));
    moviesArrCopy.sort((movie1, movie2) => {
        if (movie1.year === movie2.year) {
            return movie1.title.localeCompare(movie2.title);
          } 
            return movie1.year - movie2.year
    })
    return moviesArrCopy
  }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) { 
    const namesOnly = moviesArray.map(movie => movie.title);
    const namesSorted = namesOnly.sort() 
    return namesSorted.slice(0,20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray){
    const moviesArrCopy = moviesArray.map  ((movie) => {
      const duration = movie.duration.split("h ")
      const hours = parseInt(duration[0])
      const minutes = parseInt(duration[1].split("min")[0])
      return {...movie, duration: hours*60 + minutes}
    })
    return moviesArrCopy
  }
  

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { 
if (moviesArray.length === 0){
    return null
}


}
