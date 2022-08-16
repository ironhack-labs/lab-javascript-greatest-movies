// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {


let directorsArray = moviesArray.map(movie => movie.director)

return directorsArray

}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {

    let pelisSpielberg = moviesArray.filter(movie => movie.director ==='Steven Spielberg')
    let spielbergDrama = pelisSpielberg.filter(movie => movie.genre.includes('Drama'))
    return spielbergDrama.length
}
 
// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    if (moviesArray.length === 0) {
      return 0
    }
  
    let moviesArrayWS = moviesArray.filter(el => typeof el.score === 'number')
  
    let scoreArray = moviesArrayWS.map(movie => movie.score)
  
  
    let avg = scoreArray.reduce((accumulator, currentValue) => {
      return accumulator + currentValue
    }, 0)
    return +(avg / scoreArray.length).toFixed(2)
  }

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    let dramaMovies = moviesArray.filter(movie => movie.genre.includes('Drama'))
    return scoresAverage(dramaMovies)

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let moviesCopy = [...moviesArray]
  let moviesYear =  moviesCopy.sort((a, b) => {
      if (a.year > b.year){
          return 1
      }
      if (a.year < b.year){
          return -1
      }
      if (a.year === b.year){
              if (a.title > b.title) {
                  return 1
              }
              if (a.title < b.title){
                  return -1
              }
      }
  })
  return moviesYear
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles


function orderAlphabetically(moviesArray) {
    let copy = [...moviesArray]
    let stringTitle = copy.map(movie => movie.title)
    let ordered = stringTitle.sort()
  
  
    return ordered.slice(0, 20)
  
  
  }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
