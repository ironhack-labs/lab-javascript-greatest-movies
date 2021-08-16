// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arr) {

  const directorsOnly = arr.map(({ director }) => director)

  return directorsOnly;

}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {

  let movieCounter = 0;

  const moviesBySpielberg = arr.filter((movies) => movies.director === 'Steven Spielberg')
  const dramaMovies = moviesBySpielberg.filter((movies) => movies.genre.includes('Drama'))

  return dramaMovies.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(arr) {

  if (arr.length === 0) {

    return 0
  }

  const scoreArray = arr.map(({ score }) => score)

  const total = scoreArray.reduce((accumulator, current) => {

    return accumulator + current;
  }, 0)

  let average = total / scoreArray.length

  average = +average.toFixed(2)

  return average

}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr) {

  if (arr.length === 0) {

    return 0
  }

  const dramaMovies = arr.filter((movies) => movies.genre.includes('Drama'))
  const dramaAvg = scoresAverage(dramaMovies)
  return dramaAvg;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {

  let arrCopy = arr.slice(0)

  let sortedMovies = arrCopy.sort(function (a, b) {
    if (a.year === b.year) {

      return a.title > b.title ? 1 : -1
    } else {

      return a.year - b.year
    }

  })

  return sortedMovies
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {

  const titlesArr = arr.map(({ title }) => title)
  const orderedTitles = titlesArr.sort()

  let titles = []

  if (orderedTitles.length < 20) {

    titles = orderedTitles.slice(0)

  } else if (orderedTitles.length > 20) {

    titles = orderedTitles.slice(0, 20)

  }

  return titles;

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arr) {

  const newArr = arr.slice(0)

  const multiplyTime = newArr.map((item) => {


    item.duration = item.duration.split(/[^\d.-]/g)
    if (!item.duration[2]) {

      item.duration = +item.duration[0] * 60

    } else {

      item.duration = +item.duration[0] * 60 + +item.duration[2]
    }

    return { ...item, duration: item.duration }

  })

  return multiplyTime
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
