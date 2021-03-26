import { movies } from './testData.js'

function getAllDirectors(movies) {
  return movies.map((movie) => movie.director)
}

// console.log(getAllDirectors(movies))

function howManyMovies(movies) {
  return movies.filter(
    (movie) =>
      movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
  ).length
}

// console.log(howManyMovies(movies))

function ratesAverage(movies) {
  let filteredMovies = movies.filter((movie) => {
    return typeof movie.rate === 'number' ? true : false
  })

  let sumRates = filteredMovies.reduce((acc, movie) => {
    return acc + movie.rate
  }, 0)
  return Math.round((sumRates / movies.length) * 100) / 100
}

let testMovies = [{ rate: 6 }, { rate: '' }, {}]

// console.log(ratesAverage(testMovies))

function dramaMoviesRate(movies) {
  let dramaMovies = movies.filter((movie) => {
    return movie.genre.includes('Drama') ? true : false
  })
  let sumDramaMovieRates = dramaMovies.reduce((acc, movie) => {
    return acc + movie.rate
  }, 0)
  return Math.round((sumDramaMovieRates / dramaMovies.length) * 100) / 100
}

// console.log(dramaMoviesRate(movies))

function orderByYear(movies) {
  return movies
    .sort((a, b) => {
      let titleA = a.title.toUpperCase()
      let titleB = b.title.toUpperCase()
      if (titleA < titleB) {
        return -1
      }
      if (titleA > titleB) {
        return 1
      }
      return 0
    })
    .slice()
    .sort((a, b) => {
      return a.year - b.year
    })
}

let testArr = []
// console.log(
//   orderByYear([
//     { title: 'abc', year: 2002 },
//     { title: 'bac', year: 1982 },
//     { title: 'aab', year: 1982 },
//   ])
// )
// console.log(orderByYear(movies))

function orderAlphabetically(movies) {
  return movies
    .sort((a, b) => {
      let titleA = a.title
      let titleB = b.title
      if (titleA < titleB) {
        return -1
      }
      if (titleA > titleB) {
        return 1
      }
      return 0
    })
    .filter((movie, idx) => {
      return idx < 20
    })
    .map((movie) => {
      return movie.title
    })
}

// console.log(orderAlphabetically(movies))

function turnHoursToMinutes(movies) {
  return movies.slice().map((movie) => {
    let normalizedDuration = null
    if (movie.duration.includes('h') && movie.duration.includes('min')) {
      normalizedDuration =
        movie.duration.split(' ')[0].slice(0, -1) * 60 +
        movie.duration.split(' ')[1].slice(0, -3) * 1
    } else if (!movie.duration.includes('min')) {
      normalizedDuration = movie.duration.slice(0, -1) * 60
    } else {
      normalizedDuration = movie.duration.slice(0, -3) * 1
    }

    return {
      title: movie.title,
      year: movie.year,
      director: movie.director,
      duration: normalizedDuration,
      genre: movie.genre,
      rate: movie.rate,
    }
  })
}

// console.log(turnHoursToMinutes(movies))

// console.log(turnHoursToMinutes([{ duration: '54min' }]))

function bestYearAvg(movies) {
  // Calculate the sums and group data (while tracking count)
  const reduced = movies.reduce(function (acc, curr) {
    if (!acc[curr.year]) {
      acc[curr.year] = { ...curr, count: 1 }
      return acc
    }
    acc[curr.year].rate += curr.rate
    acc[curr.year].count += 1
    return acc
  }, {})

  // Create new array from grouped data and compute the average
  const result = Object.keys(reduced).map(function (k) {
    const item = reduced[k]
    return {
      year: item.year,
      avgRate: item.rate / item.count,
    }
  })
  //  get the year with the highest average
  const highestAvg = result.sort((a, b) => {
    return b.avgRate - a.avgRate
  })[0]
  return `The best year was ${highestAvg.year} with an average rate of ${highestAvg.avgRate}`
}

console.log(bestYearAvg(movies))

// console.log(JSON.stringify(result, null, 4))
