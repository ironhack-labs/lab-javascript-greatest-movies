// Iteration 1: All directors? - Get the array of all directors.
 function getAllDirectors(arr) {
  let mappedDirectors = arr.map(element => element.director)
  console.log(mappedDirectors)
  console.log( ) 
  
  return [...new Set(mappedDirectors)]
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {
  let numberOfMovies = movies.filter(
    movie => movie.director === "Steven Spielberg"
  ).filter(element => element.genre.includes("Drama"))
  return numberOfMovies.length
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function roundedResult(anyNumber) {
  return parseFloat(anyNumber.toFixed(2))
}
function ratesAverage(arr) {
  if(arr.length === 0){
    return 0
  }
  let rates = arr.map((element) => element.rate).filter((element) => {
    if(typeof element === 'number'){
      return element
    }
  }).reduce((acc, element) => {
    return acc + element
  }, 0)
  let result = rates / arr.length
  return roundedResult(result)
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(arr) {
  let drama = arr.filter(movie => movie.genre.includes("Drama")).reduce((acc, element, index, arr) => {
    return acc + element.rate / arr.length
  }, 0)
  return roundedResult(drama)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
  let result = arr.sort((a, b) => {
    return a.year > b.year ? 1 : -1;
  })
  return [...result]
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr){
  let arrSorted = arr.map(element => element.title).sort()
  let first20Titles = []
  if(arrSorted.length > 20){
    for (let i = 0; i < 20; i++){
      first20Titles.push(arrSorted[i])
    }
  }else{
    for(let i = 0; i < arrSorted.length; i++){
      first20Titles.push(arrSorted[i])
    }
  }
  return first20Titles
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arr) {
  return arr.map(element => {
    let time = element.duration.split(" ")
    let duration
    let hours = 0
    let minutes = 0
    time.forEach((x, i) => {
      if (x.includes("h")) {
        hours = +x.replace("h", "")
      }
      if (x.includes("m")) {
        minutes = +x.replace("min", "")
      }
      duration = hours * 60 + minutes
    })
    return ({
      ...element,
      duration
    })
  })
}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
function bestYearAvg(arr) {
  if (arr.length === 0) {
    return null
  }
  let years = []
  // push to years all the years of the movies  
  arr.forEach(function (x, i) { years.push(x.year) })
  // create a function that recives any year and returns the averge of the rate in this year 
  function stepByYear(year){
    let filtered = arr.filter((x, i) => {
      return x.year == year
    })
    // sum all the rates of the movies in this year
    let reduced = filtered.reduce((acc, x, i, arr) => {
      return acc += x.rate
    }, 0)
    // return the sum of rates / number of movies in this year. With 1 decimal
    return +(reduced / filtered.length).toFixed(1)
  }
  let bestYear = 0
  let bestYearAverage = 0
  years.forEach((x, i) => {
    
    if (stepByYear(x) > bestYearAverage) {
      bestYearAverage = stepByYear(x)
      bestYear = x
    }
    if(stepByYear(x) === bestYearAverage){
      if(x < bestYear){
        bestYear = x
      }
    }
  })
 
  return `The best year was ${bestYear} with an average rate of ${bestYearAverage}`
}