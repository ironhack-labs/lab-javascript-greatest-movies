// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const arrayOfDirectors = movies.map(function(element){
    return element.director
  })
  return arrayOfDirectors
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
// OP: returns true if SS is the director of the movie (object)
function filterByDirector (object) {
  return object.director === "Steven Spielberg"
}

// op: true if drama is the genre of the movie (object)
function filterByGenre (object) {
  //op: iterate genre array
  for (element of object.genre) {
    if (element === "Drama") return true
  }
  return false
}

// it can also be done with the includes() method
// if (object.director === "Steven Spielberg" && object.genre.includes("Drama"))
// this way you don't need a loop

function howManyMovies(arr) {
  const numberOfDramas = arr.filter(filterByDirector).filter(filterByGenre)
  return numberOfDramas.length
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
// op: reducer function declaration
function sumAllScores (acc,object) {
  acc += object.score
  return acc
}

function scoresAverage(arr) {
  let copyOfArr = arr
  if (copyOfArr.length === 0) return 0
  else {
    for (element of copyOfArr) {
      if (typeof element.score !== "number") element.score = 0 
    }
    let avg = copyOfArr.reduce(sumAllScores,0) / copyOfArr.length
    return Math.round(avg * 100) / 100
  }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr) {
  let arrOfDramas = arr.filter(filterByGenre)
  return scoresAverage(arrOfDramas)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
  let copyOfArr = JSON.parse(JSON.stringify(arr));  //deep copy to create a new array
  return copyOfArr.sort((object1, object2) => object1.year - object2.year || object1.title.localeCompare(object2.title))
} 

//let testArray = [{ year: 1982 }]
console.log(orderByYear([
  { title: 'abc', year: 2002 },
  { title: 'bac', year: 1982 },
  { title: 'aab', year: 1982 }
]))
console.log(typeof orderByYear([
  { title: 'abc', year: 2002 },
  { title: 'bac', year: 1982 },
  { title: 'aab', year: 1982 }
]))

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr) {
  let newArray = JSON.parse(JSON.stringify(arr));
  let sortedArray = newArray.sort((object1, object2) => object1.title.localeCompare(object2.title)).map(element => element.title).slice(0, 20);
  return sortedArray
}


console.log(orderAlphabetically([
  { title: 'aab' },
  { title: 'aaa' },
  { title: 'abc' },
  { title: 'acb' },
  { title: 'abb' }
]))

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



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
