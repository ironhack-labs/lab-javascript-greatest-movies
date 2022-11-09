// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map(movie => movie.director)
}

//Iteration 1.1: no duplicates. 
function getUniqueDirectors(moviesArray){
    const allDirectors = moviesArray.map(movie => movie.director)
    // when the filter arrived at the seconde occurence, the index of the 
    //duplicates won't be the same as the result of indexOf, so it will return false
    return allDirectors.filter((director, index)=> allDirectors.indexOf(director) !==index)
  }

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    return moviesArray.filter(
      movie => movie.director ==="Steven Spielberg" && movie.genre.includes("Drama")
    ).length
  }

// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(moviesArray) {
    if(moviesArray.length == 0) return 0
    return Math.round(
        moviesArray.filter(movie => movie.score)
        .reduce((cumul, movie) => cumul += +movie.score, 0)/moviesArray.length
        *100)/100
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let newArray = moviesArray.filter(movie => movie.genre.includes("Drama"))
  if(newArray.length ===0) return 0
  return scoresAverage(newArray) 
}

/* function dramaMoviesScore(moviesArray) {
  const dramaArray = moviesArray.filter(movie => movie.genre.includes("Drama"))
  if(dramaArray.length ===0) return 0
  return dramaArray.reduce((cumul, movie) => cumul += +movie.score, 0)/dramaArray.length
} */

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    // make a copy before sort()
    const workArray = [].concat(moviesArray)
    return workArray.sort(function(a,b){
      if( a.year != b.year) return a.year - b.year
      if(a.title < b.title) return -1
      if(a.title > b.title) return 1
      return 0
    } )
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    //make a copy before sort()
    const workArray = moviesArray.map(movie => movie.title)
    workArray.sort()
    if(workArray.length>20) return workArray.splice(0,20)
    return workArray
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

  function turnHoursToMinutes(moviesArray) {
    return moviesArray.map(function(movie){
        let hoursAndMinutes = 0
        let newMovie =  Object.assign({}, movie);
        if(!newMovie.duration.includes("h")) {
          hoursAndMinutes = newMovie.duration.match(/\d+/)[0]
          newMovie.duration = +hoursAndMinutes
        }else if(!newMovie.duration.includes("min")){
          hoursAndMinutes = newMovie.duration.match(/\d+/)[0]
          newMovie.duration = hoursAndMinutes[0]*60
        }else{
          hoursAndMinutes = newMovie.duration.split(" ").map(member => member.match(/\d+/)[0])
          newMovie.duration = hoursAndMinutes[0]*60 + +hoursAndMinutes[1]
        }
        return newMovie
      })
    }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
// because my solution put the arranged movies in a new object , so not array 
// methods are used in the process. I will try to find a way to use array
// methods too when I have the time
function bestYearAvg(moviesArray) {
  if(moviesArray.length ===0) return null
  const yearAverageObj = arrangeMoviesByYear(moviesArray)
  const bestYear = {year:0, score:0}
  for (key in yearAverageObj){
    let averageScore = scoresAverage(yearAverageObj[key])
    yearAverageObj[key] = averageScore
    if(averageScore == bestYear.score && parseInt +key < bestYear.year){
      bestYear.year = +key
      bestYear.score = averageScore
    }else if(averageScore > bestYear.score){
      bestYear.year = +key
      bestYear.score = averageScore}
  }
  return `The best year was ${bestYear.year} with an average score of ${bestYear.score}`
}

function arrangeMoviesByYear(moviesArray){
  const yearAverageObj = {}
  let year = 0
  for(i in moviesArray){
    year = moviesArray[i].year
    let yearlyMovieArray = []
    yearAverageObj[year] = yearlyMovieArray
    yearlyMovieArray.push(moviesArray[i])
  }
  return yearAverageObj
}


//testing object
const tMovies =[
  {title:"movie a", year:1990, score: 9},
  {title:"movie b", year:1990, score: 8},
  {title:"movie d", year:1991, score: 8},
  {title:"movie e", year:1991, score: 9},
]

console.log(bestYearAvg(tMovies))


