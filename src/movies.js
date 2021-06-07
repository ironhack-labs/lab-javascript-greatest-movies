// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arr) {

  const allDirectors = arr.map(eachDirector => {
    return eachDirector.director
  })



  return allDirectors

}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {

  const filterMovies = arr.filter(eachMovie => {
    if (eachMovie.director == 'Steven Spielberg' && eachMovie.genre.includes('Drama') == true) {
      return true
    }
  })
  return filterMovies.length

}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr) {

  const scoreAverage = arr.reduce((acc, eachScore) => {
    return acc + eachScore.score
  }, 0)


  let result = scoreAverage / arr.length


  return Math.round(result * 100) / 100



}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr) {

  const filterMovies = arr.filter(eachMovie => {
    if (eachMovie.genre.includes('Drama') == true) {
      return true
    }


  })
  // return filterMovies

  return scoresAverage(filterMovies)


}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {


  const arrCopy = JSON.parse(JSON.stringify(arr))

  //_______________________________

  const result1 = arrCopy.sort(function (a, b) {

    if (a.year == b.year) {

      return a.title.localeCompare(b.title)

    }
    else {
      return (a.year - b.year)
    }


  })


  /*var keyA = new Date(a.year),
    keyB = new Date(b.year);
  // Compare the 2 dates
  if (keyA < keyB) return -1;
  if (keyA > keyB) return 1;
  return 0;
});

//return arrcopy2
arrcopy2.sort(function (a, b) {
  var keyA = new Date(a.title),
    keyB = new Date(b.title);
  // Compare the 2 dates
  if (keyA < keyB) return -1;
  if (keyA > keyB) return 1;
  return 0;
})
return arrcopy2*/

  return result1
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically() { }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() { }



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
