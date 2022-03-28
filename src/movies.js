// The `movies` array from the file `src/data.js`.

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {

  const directors = movies.map(eachMovies => {

    const directorArray = eachMovies.director
    return directorArray
  })
  return directors

}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {

  const spielbergDramas = movies.filter(eachDrama => eachDrama.genre.includes('Drama') && eachDrama.director === 'Steven Spielberg')
  return spielbergDramas.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {

  if (movies.length === 0) {
    return 0
  } else {
    const scoresAvg = movies.reduce((acc, eachMovie) => {
      let total = acc + eachMovie.score
      if (eachMovie.score === undefined) {
        total = acc + 0
      }
      return total * 1
    }, 0)
    return (scoresAvg / movies.length).toFixed(2) * 1
  }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {

  let dramaMovies = movies.filter(eachMovie => eachMovie.genre.includes('Drama'))

  return scoresAverage(dramaMovies)
}





// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const moviesCopy = JSON.parse(JSON.stringify(movies))
  moviesCopy.sort((a, b) => {
    if (a.year > b.year) {
      return 1;
    }
    else if (a.year < b.year) {
      return -1;
    }
    else if (a.year === b.year) {
      if (a.title > b.title) {
        return 1;
      }
      else if (a.title < b.title) {
        return -1;
      }
    }
  })
  return moviesCopy
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {

  let moviesCopy = JSON.parse(JSON.stringify(movies))

  moviesCopy.sort((a, b) => {

    if (a.title > b.title) {
      return 1;
    }
    else if (a.title < b.title) {
      return -1;
    }
  })
  let movieTitles = moviesCopy.map(eachMovie => eachMovie.title)
  return movieTitles.splice(0, 20)

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {

  let duration = movies.map(eachMovies => {

    let newDurationFull = ""
    let newDurationMin = ""
    let newDurationHour = ""

    if (eachMovies.duration.length === 8) {

      newDurationFull = eachMovies.duration.replace('min', '')
      console.log(newDurationFull)
      newDurationFull2 = newDurationFull.replace(' ', '')
      console.log(newDurationFull2)
      newDurationFull3 = newDurationFull2.replace('h', '')

      newDurationFull3 = newDurationFull3 * 1
      console.log(typeof newDurationFull3)
      console.log(newDurationFull3)

      eachMovies.duration = newDurationFull3

      return eachMovies

    } else if (eachMovies.duration.length === 5) {
      newDurationMin = eachMovies.duration.replace('min', '')
      eachMovies.duration = newDurationMin * 1
      return eachMovies
    }
    else if (eachMovies.duration.length === 2) {
      newDurationHour = eachMovies.duration.replace('h', '')
      eachMovies.duration = newDurationHour * 1
      return eachMovies
    }

  })
  return duration
}


// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(movies) {


  if (movies.length === 0) {
    return null
  }
  else if (movies.length === 1) {
    return `The best year was ${movies[0].year} with an average score of ${movies[0].score
      }`
  }
  else {

  }
}
const moviess = [
  {
    title: 'The Shawshank Redemption',
    year: 1994,
    director: 'Frank Darabont',
    duration: '2h 22min',
    genre: ['Crime', 'Drama'],
    score: 9.3
  },
  {
    title: 'The Godfather',
    year: 1972,
    director: 'Francis Ford Coppola',
    duration: '2h 55min',
    genre: ['Crime', 'Drama'],
    score: 9.2
  },
  {
    title: 'The Godfather: Part II',
    year: 1974,
    director: 'Francis Ford Coppola',
    duration: '3h 22min',
    genre: ['Crime', 'Drama'],
    score: 9
  }]
console.log(bestYearAvg(moviess))

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
