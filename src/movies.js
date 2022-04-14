//const movies = require("./data");

// The `movies` array from the file `src/data.js`.
console.log('movies: ', movies);


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesParam) {
  let directors = moviesParam.map((eachElemment)=>{
    return eachElemment.director
  })
  return directors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesParam) {
  return moviesParam.filter((eachElem)=>{
    return eachElem.director==='Steven Spielberg' && eachElem.genre.includes("Drama")
  }).length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesParam) {
  //let counter=0;
  let scores = moviesParam.reduce((acc, elem)=>{
    return acc+elem.score;
  },0)
  return parseFloat((scores/moviesParam.length).toFixed(2))
}
//console.log(scoresAverage(movies))

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesParam) {
  let counter=0;
  let scores = moviesParam.reduce((acc, elem)=>{
    if(elem.genre.includes("Drama") && typeof(elem.score === "number")) {
      //console.log(counter, acc)
      counter++
      //console.log(elem)
      return acc+elem.score;
    } else return acc
  },0)
  return parseFloat((scores/counter).toFixed(2))
}
console.log(dramaMoviesScore(movies))

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesParam) {
  moviesParam.sort((movie1, movie2)=>{
    return movie1.year-movie2.year
  })
  //return moviesParam
}
//console.log(orderByYear(movies))
//console.log(movies)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesParam) {
  moviesParam.sort((movie1, movie2)=>{
    return movie1.title.localeCompare(movie2.title)
  })
  return moviesParam(0, 20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesParam) {
  let moviesArr=moviesParam.map((movie)=>{

    let hours=0;
    let minutes=0;
    let separator=0;
    for(let i=0, separator=0; i<movie.duration.length; i++){
      character=movie.duration.charAt(i)
      if(character==='h'){
        hours=movie.duration.slice(0, i)
      }
      if(character===' ') separator=i;
      if(character==='m'){
        minutes=movie.duration.slice(separator,i)
        minutes=parseInt(minutes)
      }

    }

    //console.log("hours:"+hours+"minutes:"+minutes)
    //console.log(typeof(minutes))
    movie.duration = (hours*60+minutes)+"min"
    console.log(movie.duration)
    return movie
  })
  return moviesArr
}
turnHoursToMinutes(movies)
//console.log(turnHoursToMinutes(movies))

function turnHoursToMinutes2(moviesParam) {
  moviesParam.forEach(movie=>{

    let hours=0;
    let minutes=0;
    let separator=0;
    for(let i=0, separator=0; i<movie.duration.length; i++){
      character=movie.duration.charAt(i)
      if(character==='h'){
        hours=movie.duration.slice(0, i)
      }
      if(character===' ') separator=i;
      if(character==='m'){
        minutes=movie.duration.slice(separator,i)
        minutes=parseInt(minutes)
      }

    }

    //console.log("hours:"+hours+"minutes:"+minutes)
    //console.log(typeof(minutes))
    movie.duration = (hours*60+minutes)+"min"  })
  
}
console.log(turnHoursToMinutes2(movies))
console.log(movies)
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
