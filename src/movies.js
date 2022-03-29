// const movies = require("./data");
// The `movies` array from the file `src/data.js`.




/// # Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(arr) {

  let allDirectors = arr.map(eachMovie => {
    const directors = eachMovie.director
    return directors
  })


  // _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
  // How could you "clean" a bit this array and make it unified (without duplicates)?

  let cleanAllDirectors = allDirectors.filter((eachElement, index) => {
    return allDirectors.indexOf(eachElement) === index
  })

  return cleanAllDirectors

}
// console.log(getAllDirectors(movies))




/// # Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {

  let StevenAndDrama = arr.filter((eachMovies) => {
    return eachMovies.director === 'Steven Spielberg' && eachMovies.genre.includes('Drama')
  })

  return StevenAndDrama.length
}







/// # Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr) {

  if (arr.length === 0) {
    return 0
  } else {

    let avgScore = arr.reduce((acc, eachMovie) => {
      // let totalScore = eachMovie.score
      if (eachMovie.score === undefined) {
        complete = acc
      } else {
        complete = acc + eachMovie.score
      }
      return complete
    }, 0)

    return Number((avgScore / arr.length).toFixed(2))
  }
}







/// # Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr) {

  let dramaMovies = arr.filter(eachMovie => {
    return eachMovie.genre.includes("Drama")
  })

  if (dramaMovies.length === 0) {
    return 0
  }

  let avgScoreDramaMovies = dramaMovies.reduce((acc, eachDramaMovie) => {
    return acc + eachDramaMovie.score
  }, 0)

  return (avgScoreDramaMovies / dramaMovies.length).toFixed(2) * 1
}





/// # Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {

  let film = JSON.parse(JSON.stringify(arr))

  // Ordenadas por año
  film.sort((a, b) => {
    if (a.year > a.year) {
      return 1
    } else if (a.year < b.year) {
      return -1
    } else if (a.year === b.year) {
      if (a.title > b.title) {
        return 1
      } else {
        return -1
      }
    }
  })

  return film
}






/// # Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {

  let film = JSON.parse(JSON.stringify(arr))

  let alphabeticOrder = film.sort((a, b) => {

    if (a.title > b.title) {
      return 1
    } else {
      return -1
    }
  })

  let twentyFirst = alphabeticOrder.slice(0, 20)

  let justTitles = twentyFirst.map((eachTwenty) => {
    return eachTwenty.title
  })

  return justTitles
}






/// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arr) {

  let film = JSON.parse(JSON.stringify(arr))
  let FILMS = []

  let filmsInMins = film.forEach(eachFilm => {

    if (eachFilm.duration.includes('h')) {

      let dur = eachFilm.duration.split(" ")
      let hours = dur[0].substring(0, dur[0].length - 1)
      hoursToMins = Number(hours) * 60


      if (dur[1] !== undefined) {                          /// Si tiene HORAS y MINS

        let mins = Number(dur[1].substring(0, dur[1].length - 3))
        // console.log('Los mins son:', mins)
        let totalMins = hoursToMins + mins
        // console.log(eachFilm.title, totalMins)
        eachFilm.duration = totalMins

      } else {                                              /// Si SOLO tiene HORAS

        let totalMins = hoursToMins
        eachFilm.duration = totalMins
      }
    }

    FILMS.push(eachFilm)

  })

  return FILMS
}
// console.log(turnHoursToMinutes(movies))
// console.log(movies)








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
