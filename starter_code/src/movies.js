/* eslint no-restricted-globals: 'off' */

// Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arr) {
  const newArr = arr.map((e) => {
    let minutes = 0
    let obj = Object.assign({}, e)
    let aux = obj.duration.split(' ')
    if(aux.length === 1) {
      if(aux[0].includes('h')) {
        minutes = parseInt(aux[0])*60} else {
      minutes = parseInt(obj.duration)
      }
    } else {minutes = (parseInt(aux[0])*60) + parseInt(aux[1])}
    obj.duration = minutes
    return obj
  })
  return newArr
}


// Get the average of all rates with 2 decimals
ratesAverage = (arr) => {
  let rates = arr.map( e => {
    return parseFloat(e.rate)
  })
  return rates.reduce((accumulator, currentValue) => accumulator + currentValue)/arr.length
}

// Get the average of Drama Movies
function dramaMoviesRate (arr) {
  let dramaMoviesArr = arr.filter(e => e.genre.includes('Drama'))
  let dramaRates = dramaMoviesArr.map(e => {
    return parseFloat(e.rate)
  })
  const averageRate = (dramaRates.reduce((accum, current) => accum + current)/dramaMoviesArr.length).toFixed(2)
  console.log(averageRate)
}

dramaMoviesRate(movies)

// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
