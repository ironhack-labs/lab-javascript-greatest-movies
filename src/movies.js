// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArr) {
  
  const allDirectorsArray = moviesArr.map(movie => movie.director)

  return allDirectorsArray
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies( moviesArr) {

  const stevenDramas = moviesArr.filter(movie => movie.genre.includes("Drama") && movie.director === "Steven Spielberg")

  return stevenDramas.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(moviesArr) {
  if (moviesArr.length === 0){return 0}
  
  const numberOfScores = moviesArr.map(movie => { if(!movie.score){return 0} return movie.score})

  const sumOfAllScores = numberOfScores.reduce((accumulator, score,) => accumulator += score)

  const avarage = sumOfAllScores / numberOfScores.length


  return ( Math.round(avarage * 100) / 100)


}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArr) {
  
  const allDramaMovies = moviesArr.filter(movie => movie.genre.includes("Drama"))

  if ( allDramaMovies.length === 0){ return 0 }

  const numberOfScores = allDramaMovies.map( movie =>  movie.score)

  const sumOfDramaScores =  numberOfScores.reduce((acco, score) => acco += score)

  const avarageDramaScores = sumOfDramaScores / numberOfScores.length
  
  return (Math.round (avarageDramaScores * 100) / 100)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArr) {
  let newArray = [...moviesArr]

  const compareStrings = (a, b) =>{
    if(a.localeCompare(b) === -1){return -1}
    else if(a.localeCompare(b) === 1){return 1} 
    else {return 0}

  }
   
  const sortedByYear = newArray.sort((a, b) => { if(a.year === b.year){return compareStrings(a.title, b.title)} return a.year-b.year  })


return sortedByYear

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArr) {
  let newArray2 = [...moviesArr]

  const compareStrings = (a, b) =>{
    if(a.localeCompare(b) === -1){return -1}
    else if(a.localeCompare(b) === 1){return 1} 
    else {return 0}
  }

  const movieTitles =  newArray2.map(movie => movie.title)

  const sortedTitles = movieTitles.sort((a,b) => compareStrings(a, b))

  const top20Titles = sortedTitles.slice(0,20)

  return top20Titles
}



// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArr) {
  let newArray3 = [...moviesArr]

  let newArray4 = [...newArray3]


  const moviesDurations = newArray3.map(movie => movie.duration.split("h"))

  const toMinutes = moviesDurations.map(
    duration =>
        {if (duration[1]) {
          return (parseInt(duration[0], 10) * 60) + parseInt(duration[1],10)
          }

        return parseInt(duration[0], 10) * 60})
  
  for(let i = 0; i < newArray4.length; i++){
    newArray4[i].duration = toMinutes[i]
  }
  return newArray4
  }



// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArr) {
 if(!moviesArr.length){ return null}


}



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
