// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const { filter } = require("./data")

// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {

  const getDirectors = movies.map(movies => {
    return movies.director
  })

  return getDirectors


} //if (eachGenre.genre.includes('Drama') && eachGenre.director.includes('Steven'))

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const filterStevenDrama = movies.filter(eachStevenDrama => {
    if (eachStevenDrama.genre.includes('Drama') && eachStevenDrama.director.includes('Steven')) {
      return true
    }


  }); return filterStevenDrama.length

  // const filteredSteven = getDirectors.filter(eachStevenMovie => {
  //   if (eachStevenMovie.toLowerCase().includes('Steven')) {
  //     return true
  //   } console.log(filteredSteven)
  // })
  // const getDirectors = movies.filter(movies => {
  //   if (movies.director.toLowerCase().includes('Steven')) {
  //     return true
  //   }

}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  const sumAvg = movies.reduce((acc, eachScore) => {
    return acc + eachScore.score
  }, 0)

  const result = sumAvg / movies.length
  return Math.round(result * 100) / 100
}



// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  const filterDrama = movies.filter(eachDrama => {
    if (eachDrama.genre.includes('Drama')) {
      return true
    }


  })
  const dramaAvg = filterDrama.reduce((acc, eachDramaScore) => {
    return acc + eachDramaScore.score
  }, 0)

  const dramaAvgbis = dramaAvg / filterDrama.length
  return Math.round(dramaAvgbis * 100) / 100









}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array) {

  const peopleCopy2 = JSON.parse(JSON.stringify(array))

  peopleCopy2.sort((a, b) => {
    return (a - b)
  })



  // ES IMPOSIBLE Y SOY IDIOTA PORQUE NO HE PASADO A LAS 6 POR EMPECINARME EN QUE SE PODÍA

  return peopleCopy2

  // items.sort((a, b) => a.localeCompare(b, 'en', { ignorePunctuation: true }))
  // { title: 'abc', year: 2002 },
  // { title: 'bac', year: 1982 },
  // { title: 'aab', year: 1982 }













  //numbers2.sort((a, b) => { return a - b })
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(array) {
  const firstTwenty = array.slice(0, 19)
  return firstTwenty
  const orderAlphaCopy = JSON.parse(JSON.stringify(firstTwenty))

  // orderAlphaCopy.sort(function (a, b) {
  //   var textA = a.title.toUpperCase();
  //   var textB = b.title.toUpperCase();
  //   return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
  // })

  // console.log()

  // orderAlphaCopy.sort((a, b) => {
  //   return a.tit.localeCompare(b.DepartmentName)
  // })


  // orderAlphaCopy.sort((a, b) => a.localeCompare(b))

  // peopleCopy2[1].year = 50
  // console.log('El original:', firstTwenty)
  // console.log('La copia:', peopleCopy2)



  // const twentyCopy = JSON.parse(JSON.stringify(firstTwenty))

  // console.log(twentyCopy)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(array) {

  const arrayCopy = JSON.parse(JSON.stringify(array))
  return arrayCopy

  // const durationArray = arrayCopy.map(duration => {
  //   console.log(durationArray.duration)
  // }







  // var hms = '02:04:33';   // your input string
  // var a = hms.split(':'); // split it at the colons

  // // Hours are worth 60 minutes.
  // var minutes = (+a[0]) * 60 + (+a[1]);

  // console.log(minutes);
}

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
