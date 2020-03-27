/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
  const newArr = [...arr].sort((a, b) => {
    if (a.year == b.year) return a.title.localeCompare(b.title)
    return a.year - b.year
  })
  return newArr
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(arr) {
  count = 0
  if (arr.length == 0) return 0
  const newArr = arr.filter(x => x.director === 'Steven Spielberg' && x.genre.includes('Drama'))
  newArr.forEach(ele => (count += 1))

  return count
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
  const newArr = [...arr].map(x => x.title).sort((a, b) => a.localeCompare(b))
  return newArr.slice(0, 20)
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals
const ratesAverage = arr => {
  if (!arr.length) return 0
  const newArr = [...arr].map(x => x.rate)
  const newArrFiltered = newArr.filter(y => !(y === undefined))
  const suma = newArrFiltered.reduce((acc, val) => acc + val, 0)
  const promedio = suma / newArr.length
  return Math.round(promedio * 100) / 100
}

// Iteration 5: Drama movies - Get the average of Drama Movies

const dramaMoviesRate = arr => {
  const newArr = arr.filter(val => val.genre.includes('Drama'))
  const media = newArr.reduce((acc, val) => acc + val.rate, 0)
  const Drama = newArr.length
  if (Drama === 0) {
    return 0
  }
  return Math.round((media / Drama) * 100) / 100
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

const hours2Min = hourStr => {
  if (hourStr.length === 2) return Number(hourStr[0]) * 60
  else if (hourStr.length === 5 || hourStr.length === 4) return Number(hourStr.replace('min', ''))
  else {
    let hourArr = hourStr
      .replace('h', '')
      .replace('min', '')
      .split(' ')
    return Number(hourArr[0]) * 60 + Number(hourArr[1])
  }
}

const turnHoursToMinutes = arr => {
  const newArr = JSON.parse(JSON.stringify(arr))
  newArr.map(x => (x.duration = hours2Min(x.duration)))
  return newArr
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average
