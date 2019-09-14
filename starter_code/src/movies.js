/*eslint no-restricted-globals: 'off'*/

// Iteration 1: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(arr) {
  if (arr.length === 0) return 0
  const sumRates = arr.reduce((acc, m) => acc + Number(m.rate), 0)
  return Number((sumRates / arr.length).toFixed(2))
}
 

// Iteration 2: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(arr) {
  let moviesDrama = arr.filter(movie => movie["genre"].includes("Drama"))
  if (moviesDrama.length === 0) {
    return 0
  } else {
  return ratesAverage(moviesDrama)
  }
}


// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)

function orderByDuration(arr) {
  return arr.sort((a, b) => {
    if (a.duration === b.duration) {
      return a.title > b.title ? 1 : -1
    }
    return a.duration - b.duration
  })
}


// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

function howManyMovies(arr) {
  const stevenMovs = arr.filter(function(m) {
    return m.director === "Steven Spielberg"
    })
  const spielbergDr = stevenMovs.filter(function(m) {
    return m.genre.includes("Drama")
    })
  return spielbergDr.length
}


// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr) {
  const alMov = arr.sort((a, b) => a.title > b.title ? 1 : -1)
    .map(m => m.title).splice(0, 20)
  return alMov
}


// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
        ///CRH tiempo pasarlo a array, quitarle h y min con replace, según sea h o min, pasarlo a número, y multiplicarlo por 60 o no.

function minutesFromHString(hString) {
  const num = hString.replace(/h/, '')
  return Number(num) * 60
}

function minutesFromMinString(minString) {
  const num = minString.replace(/min/, '')
  return Number(num)
}

function minutesFromDurationString(duration) {
  const durationArr = duration.split(' ')
  if (durationArr.length === 2) {
    return minutesFromHString(durationArr[0])
      + minutesFromMinString(durationArr[1])
  }
  if (durationArr[0].includes('h')) {
    return minutesFromHString(durationArr[0])
  }
  return minutesFromMinString(durationArr[0])
}

function turnHoursToMinutes(mov){
  return mov.map(el => {
    let minutes = {}
    minutes.duration = minutesFromDurationString(el.duration)
    return minutes
  })
}


// BONUS Iteration: Best yearly rate average - Best yearly rate average

function bestYearAvg (arr) {
  if (arr.length === 0) return null
  if (arr.length === 1) return `The best year was ${arr[0].year} with an average rate of ${arr[0].rate}`
  let moviesYearAvg = []
  for (i = 0, l = arr.length; i < l; i++) {
    let moviesYear = arr.filter(movie => movie.year.includes(arr[i].year))
    moviesYearAvg.push([ratesAverage(moviesYear), arr[i].year])
  }
  moviesYearAvg.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] > b[1] ? 1 : -1
    }
    return b[0] - a[0]
  })
  return `The best year was ${moviesYearAvg[0][1]} with an average rate of ${moviesYearAvg[0][0]}`
}