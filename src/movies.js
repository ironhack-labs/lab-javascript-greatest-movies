// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(someArr) {
  const mappedArr = someArr.map((eachMovie) => {
    return eachMovie.director
  })

  const cleanArr = []

  mappedArr.forEach((eachDirector) => {
    if (cleanArr.indexOf(eachDirector) === -1) {
      cleanArr.push(eachDirector)
    }
  })

  console.log(cleanArr)
  return cleanArr
}



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(someArr) {
  const filteredArr = someArr.filter((eachMovie) => {
    return (eachMovie.director === 'Steven Spielberg') && (eachMovie.genre.includes('Drama'))
  })
  return filteredArr.length
}





// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(someArr) {
  if (someArr.length === 0) {
    return 0
  } else {
    const scoreSum = someArr.reduce((acc, eachMovie) => {
      return acc + (eachMovie.score || 0)     // utilizamos || 0 para darle un valor por defecto, en caso de que su score sea undefined
    }, 0)

    const average = Number((scoreSum / someArr.length).toFixed(2))    // .toFixed() nos devuelve una string, por lo que utilizamos Number() para convertirlo en número

    return average
  }
}



// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(someArr) {
  const dramaArr = someArr.filter((eachMovie) => {
    return eachMovie.genre.includes('Drama')
  })

  return scoresAverage(dramaArr)
}



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(someArr) {
  const newArr = [...someArr]

  newArr.sort(function (a, b) {               // pasamos una compare function
    if (a.year !== b.year) {
      return a.year - b.year                  // para ordenar números en orden ascendente
    } else {
      const aTitle = a.title.toUpperCase()    // convertimos en upperCase
      const bTitle = b.title.toUpperCase()
      if (aTitle < bTitle) {                  // si el valor de retorno es <0, a se coloca antes de b
        return -1
      } else if (aTitle > bTitle) {           // si el valor de retorno es >0, b se coloca antes que a
        return 1
      } else {                                // si el valor de retorno es 0, se colocan en su orden natural
        return 0
      }
    }
  })
  return newArr
}



// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(someArr) {

  const newArr = someArr.map((eachMovie) => {
    return eachMovie.title
  })

  newArr.sort(function (a, b) {
    const aTitle = a.toUpperCase()
    const bTitle = b.toUpperCase()

    if (aTitle < bTitle) {
      return -1
    } else if (aTitle > bTitle) {
      return 1
    } else {
      return 0
    }
  })

  if (newArr.length < 20) {
    return newArr
  } else {
    const shortArr = newArr.splice(0, 20)
    return shortArr
  }
}



// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(someArr) {
  const newArr = JSON.parse(JSON.stringify(someArr))

  newArr.map((eachMovie) => {
    let hours = parseInt(eachMovie.duration.slice(0, 1) * 60)
    let mins = parseInt(eachMovie.duration.slice(3, -3))


    if (typeof eachMovie.duration.slice(4, 5) === 'string') {
      mins = parseInt(eachMovie.duration.slice(3, 4))
    } else {
      mins = parseInt(eachMovie.duration.slice(3, 5))
    }
    console.log(hours + mins)
    return (hours + mins)
  })
  return newArr
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
