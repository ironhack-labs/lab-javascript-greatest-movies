/* Notas rápidas

Function Expression - const welcomeMessage = function (message) {console.log(message)}



*/

const movies = require("../src/data")


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
/*
movies = [
  {
    title: 'B',
    year: 1,
    director: 'Francis Ford Coppola',
    duration: '2h 22min',
    genre: ['Crime', 'Drama'],
    score: 4,
    year: 1200
  },
  {
    title: 'A',
    year: 1,
    director: 'Francis Ford Coppola',
    duration: '2h 55min',
    genre: ['Crime'],
    score: 3,
    year: 230
  },{
    title: 'B',
    year: 1,
    director: 'Francis Ford Coppola',
    duration: '2h 22min',
    genre: ['Crime', 'Drama'],
    score: 2,
    year: 1200
  },
  {
    title: 'A',
    year: 1,
    director: 'Francis Ford Coppola',
    duration: '2h 55min',
    genre: ['Crime'],
    score: 5,
    year: 150
  }]

  */

function getAllDirectors(arrayOfMovies) {
  let arrayOfDirectors = arrayOfMovies.map(movie => movie.director)
  return arrayOfDirectors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arrayGiven) {

  let arraySpielberg = arrayGiven.filter(movie => movie.director === "Steven Spielberg")
  let arraySpielbergDramaMovies = []

  for (let i = 0; i < arraySpielberg.length; i++) {
    let arrayHasDramaGenre = arraySpielberg[i].genre.filter(genreOfMovie => genreOfMovie === "Drama")
    if (arrayHasDramaGenre.length > 0) {
      arraySpielbergDramaMovies.push(arraySpielberg[i])
    }
  }
  
  return arraySpielbergDramaMovies.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(givenArray) {

  let arrayOfScores = []

  for (let i = 0; i < givenArray.length;i++) {
    if (givenArray[i].score != undefined) {
      arrayOfScores.push(givenArray[i].score)
    }
  }

  if (arrayOfScores.length > 0) {
    return parseFloat((arrayOfScores.reduce((accumulator,currentValue) => accumulator + currentValue) / givenArray.length).toFixed(2))
  }
  
  return 0
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(givenArray) {

  let dramaMovies = []

  for (let i = 0; i < givenArray.length; i++) {
    let arrayHasDramaGenre = givenArray[i].genre.filter(genreOfMovie => genreOfMovie === "Drama")
    if (arrayHasDramaGenre.length > 0) {
      dramaMovies.push(givenArray[i])
    }
  }

  return scoresAverage(dramaMovies)

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arrayOfMoviesYear) {
  
  let newArray = Array.from(arrayOfMoviesYear)
  
  newArray.sort((previousItem, nextItem) => {
  
  if (previousItem.year === nextItem.year) {
    return previousItem.title.localeCompare(nextItem.title)
  }
  return  previousItem.year - nextItem.year}
  
  )

  return newArray
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(givenArrayWithoutOrder) {

  let newArray = Array.from(givenArrayWithoutOrder)
  
  newArray.sort((previousItem,nextItem) => previousItem.title.localeCompare(nextItem.title))
  
  if (newArray.length>20) {
    newArray.splice(20)
  }

  let arrayOfTitles = []
  for (let i = 0;i<newArray.length;i++){
    arrayOfTitles.push(newArray[i].title)
  }
  
  return arrayOfTitles
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(givenArrayHours) {

  let newArray = Array.from(givenArrayHours)

  for(let i = 0; i < newArray.length;i++) {
    if (newArray[i].duration.length > 2){
      let newTime = Array.from(newArray[i].duration.replace("h","").replace("min","").split(" "))
      newArray[i].duration = parseFloat(newTime[0])*60 + parseFloat(newTime[1])
    } else {
        let newTime = Array.from(newArray[i].duration.replace("h",""))
        newArray[i].duration = parseFloat(newTime[0])*60
    }
  }

  //console.log(typeof newArray[0].duration)
  //console.log(typeof newArray[1].duration)
  //console.log(newArray == givenArrayHours)
  return newArray

}

//console.log(turnHoursToMinutes([{duration:"0h 3min"},{duration:"2h"}]))
//console.log("oi".length)
//console.log("2h 3min".replace("h","").replace("min","").split(" "))

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(givenArrayYearAvg) {
  
  /* Proposta:
  1. Criar um array de anos
  2. Criar um array de score com filtro por ano
  3. Reduce (soma) dos scores no array por ano 
  4. Dividir pelo length do ano     
  */
  if (givenArrayYearAvg.length == 0) {
    return null
  } 

  let newArray = Array.from(givenArrayYearAvg)
  let arrayOfYears = []

  if (newArray.length == 1) {
    arrayOfYears.push(newArray[0].year)
  } else {
    for (let i = 1; i < newArray.length; i++) {
      if (newArray[i].year !== newArray[i-1].year){
        arrayOfYears.push(newArray[i].year)
      }
    }
  }

  let arrayOfAvgs = []

  for (let i = 0; i < arrayOfYears.length; i++) {
    let arrayOfMoviesPerYear = Array.from(newArray.filter(movie => movie.year == arrayOfYears[i]))
    let arrayOfScoresPerYear = []

    for (let k = 0; k < arrayOfMoviesPerYear.length; k++) {
      arrayOfScoresPerYear.push(arrayOfMoviesPerYear[k].score)
    }
    
    arrayOfAvgs.push(arrayOfScoresPerYear.reduce((accumulator,currentValue) => accumulator + currentValue)/arrayOfScoresPerYear.length)
  
  }

  let maxValue = arrayOfAvgs.reduce((accumulator,currentValue) => Math.max(accumulator,currentValue))
  let indexOfmaxValue = arrayOfAvgs.indexOf(maxValue)
  let yearOfBestScore = arrayOfYears[indexOfmaxValue]

  return `The best year was ${yearOfBestScore} with an average score of ${maxValue}`
}

//console.log(bestYearAvg([{ year: 2007, score: 8 }]))

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