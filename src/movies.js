// The `movies` array from the file `src/data.js`.
// console.log('movies: ', movies);


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arr) {
  
  const allDirectors = arr.map(elm => elm.director)
  
  return allDirectors

}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {

  const spielbergFilms = arr.filter(el=>
    el.director === "Steven Spielberg" )

  const FilmsDramaSpielberg = spielbergFilms.filter( elm =>{

      return elm.genre.includes('Drama')
    })

    return FilmsDramaSpielberg.length

}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr) {

  
  if(arr.length === 0){

    return 0

  }else{

    // const a = arr.map( el => el.score)
    // console.log('aaaaaaaa', a)
  
    const b = arr.reduce((acc,eachMovie) =>{

      if(!eachMovie.score){ // si no tiene score
        return acc + 0
      } else{

        return acc + eachMovie.score
        
      }
    },0)
  
    return Number((b/arr.length).toFixed(2))
  }

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr) {


  
  
  const getDramaMovies = arr.filter( elm => {
    
    if(elm.genre.includes('Drama')){
      return elm
    }
  })
  if(getDramaMovies.length === 0){

    return 0

  }else{
  
    const getArrayScore = getDramaMovies.map(elm=>elm.score)
  
    const getTotalScore = getArrayScore.reduce( (a,b) => a+b)
  
    return (getTotalScore/getDramaMovies.length).toFixed(2)*1
  }



}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear() {


  
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically() {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

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
