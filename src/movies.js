// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?



function mapFunc (obj) {
  return obj.director
}

function getAllDirectors(arr) { // still have to remove duplicates somehow
  let newarr = arr.map(mapFunc)
  return newarr
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function filterCheck (obj) {
  if (obj.director == 'Steven Spielberg' && obj.genre.includes('Drama'))
    return obj
}

function howManyMovies (arr) {
  let newarr = arr.filter(filterCheck)
  return newarr.length
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function reduceRates (total, obj) {
  if(obj.rate === undefined|| obj.rate === "") {
    return total + 0
  }
  return total + obj.rate
}

function ratesAverage (arr) {
  let sum = arr.reduce(reduceRates, 0)
  if(sum == 0) {
    return 0
  }
  let avg = parseFloat((sum/arr.length).toFixed(2))
  return avg
}
// Iteration 4: Drama movies - Get the average of Drama Movies

function reduceDramas (total, obj) {
  if (obj.genre.includes('Drama')) {
    return total + obj.rate
  }
  return total + 0
}

function isDrama (obj) {
  if (obj.genre.includes('Drama')) {
    return obj
  }
}

function dramaMoviesRate(arr) {
  let newarr = arr.filter(isDrama)
  let sum = newarr.reduce(reduceDramas, 0)
  if (sum === 0) {return 0}
  let avg = parseFloat((sum/newarr.length).toFixed(2))
  return avg
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function compareYear (obj1, obj2) {
  if(obj1.year === obj2.year) {
    if (obj1.title < obj2.title) {
      return -1
    }
    else 
      return 1
  }
  return obj1.year - obj2.year
}

function orderByYear(arr) { 
  let newarr = arr.map(function (x) {return Object.assign(x)}) //this is a bit confusing still
  newarr.sort(compareYear)
  return newarr
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr) {
  let newarr = arr.map(function(obj) {
    return obj.title
  })
  newarr.sort() //by default it sorts the values as strings
  if (newarr.length > 20) {
    newarr = newarr.splice(0,20)
  }
  return newarr
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function stringToTime (str) { 
  let hrs = 0
  let mins = 0
  let factor = 10
  for (let i = 0; i < str.length; i++) {
    if(str[i+1] === 'h') {
      hrs = str[i]
    }
    else if (str.charCodeAt(i) < 65 && str[i] !== " ") {
      mins += str[i]*factor
      factor = 1
    }
  }
  mins += (hrs*60)
  return mins
}

function turnHoursToMinutes(arr) {
  let newarr = arr.map(function (x) {return {...x}})
  for (movie of newarr) {
    movie.duration = stringToTime(movie.duration)
  }
  return newarr
}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
function bestYearAvg(arr) {
  if(arr.length === 0) { return null }
  let year = ""
  let rate = 0

  return `The best year was ${year} with an average of ${rate}`
}