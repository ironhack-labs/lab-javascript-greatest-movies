// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(arr) {
  return arr.map((movie) => movie.director)
} 

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
  let stevenFilms
  stevenFilms = arr.filter((movie) => {return movie.director === 'Steven Spielberg'})
  let stevenDramas
  stevenDramas = stevenFilms.filter((movie) => {return movie.genre.includes('Drama')})
  return stevenDramas.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr) {
  if (arr.length === 0){return 0}
  
  let scoreList
  scoreList = arr.map((movie) => {if(!movie.score){return 0} else {return movie.score}})
  
  let sumScore
  sumScore = scoreList.reduce((a,b) => a + b)
  
  let scoreAverage 
  scoreAverage = sumScore/(scoreList.length)
  
  return Math.round(scoreAverage*100)/100
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr) {
  let dramaFilms
  dramaFilms = arr.filter((movie) => movie.genre.includes('Drama'))

  return scoresAverage(dramaFilms)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(arr) {
  
  
  function compString(a,b){
    if (a.localeCompare(b) < 0){return -1} else {return 1}
  }

  
  let arrOrder = arr.sort(function (a,b) {
    if (a.year === b.year) {return (compString(a.title,b.title))}
            return a.year - b.year;})

  let newArrOrder2 = [...arrOrder]
  
  return newArrOrder2


}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
  let cloneArr = [...arr]

  function compString(a,b){
    if (a.localeCompare(b) < 0){return -1} else {return 1}
  }
  
  let titleList = cloneArr.map((movie) => movie.title)
  
  let alphOrderArr = titleList.sort((a,b) => compString(a,b))

  let finalAlphOrderArr = alphOrderArr.slice(0,20)

  return finalAlphOrderArr

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arr) {
  let cloneArr = JSON.parse(JSON.stringify(arr))


  function toHourToMin(duration){
    let time = duration.split('h')
    let hour = parseInt(time[0])*60 
    
    function calculMinut(time) { 
    let ifMinutes = time[1].split('min')
    if (time[1]){return parseInt(ifMinutes[0])} else {return 0}
    }

    let minute = calculMinut(time)
    
    let totalMinutes = hour+minute
    
    return totalMinutes
  }

  for (let i = 0; i < cloneArr.length; i++){
    cloneArr[i].duration = toHourToMin(cloneArr[i].duration)
  }



  return cloneArr

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
