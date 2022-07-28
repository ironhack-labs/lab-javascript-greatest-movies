// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
const sumFunction = (acum, cur) => acum + cur
const mid = (sum, length) => {
  return Number((sum/length).toFixed(2))
}


const sorted = (property, anotheProperty=0) => {
  return function (a,b) {
    let result
    if (a[property] === b[property]) {
      result = (a[anotheProperty] < b[anotheProperty]) ? -1 : (a[anotheProperty] > b[anotheProperty]) ? 1 : 0 
      return result
    }
    result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0
    return result 
  }
}

const checkDuplicate = (array) => {
  return array.some(x => array.indexOf(x) !== array.lastIndexOf(x))
}


function getAllDirectors(moviesArray) {
  const allDirectors = moviesArray.map(movie => movie.director)
  return allDirectors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const filterMovies = moviesArray.filter(movie => movie.director == 'Steven Spielberg' && movie.genre.includes('Drama'))
  return filterMovies.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  let sum
  let result 
  let listScore

  if (moviesArray.length <= 0){
    return 0
  } else if (moviesArray.filter(movie => movie.score >= 8)){
    listScore = moviesArray.map(movie => movie.score)
    sum = listScore.reduce(sumFunction)
    result = mid(sum, listScore.length)
  }
  
  listScore = moviesArray.filter(movie => movie.score >= 0)
  allScore = listScore.map(movie => movie.score)
  sum = allScore.reduce(sumFunction)
  result = mid(sum, moviesArray.length)

  return result

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let sum
  let result 

  const listDramaScore = moviesArray.filter(movie => movie.genre == 'Drama')
  const scoreDrama = listDramaScore.map(movie => movie.score)

  if (listDramaScore.length === 0){
    return 0
  }

  sum = scoreDrama.reduce(sumFunction)
  result = mid(sum, scoreDrama.length)

  return result

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray){
  const listMovies = moviesArray.map(movie => movie)
  const filterYear = listMovies.sort(sorted("year", "title"))
  const listTitleAndYear = filterYear.map(movie => {
    return {
      title: movie.title,
      year: movie.year
    }
  })
  const arrayYear = checkDuplicate(listTitleAndYear.map(nameAndYear => nameAndYear.year))

  if (arrayYear){
    return listTitleAndYear
  }
  
  const yearList = listTitleAndYear.map(nameAndYear=> {return {year: nameAndYear.year}})
  
  return yearList
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const titles = moviesArray.map(movie => {return {title: movie.title}})
  const orderAlph = titles.sort(sorted("title"))

  const firstValues = orderAlph.slice(0, 20).map(value => value.title)

  return firstValues 

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  const hours = moviesArray.map(movie => {return {duration: movie.duration}})
  let minutes = []

  hours.forEach((element, index) => {
    let rep = element.duration.replace('h', '').replace('min', '')
    let hoursToMinutes = Number(rep[0])*60
    let newRep = eval(rep.replace(rep[0], hoursToMinutes).replace(" ", "+"))
    minutes.push({duration: newRep})
    
  })

  return minutes
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
