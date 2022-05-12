const movies = require('./data')

// The `movies` array from the file `src/data.js`.
//console.log('movies: ', movies);


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArr) {
  const directors=moviesArr.map(movie=>movie.director)
  return directors.filter((director,i)=>directors.indexOf(director)===i)
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArr) {
  return moviesArr.filter(movie=>movie.director==='Steven Spielberg' && movie.genre.includes('Drama')).length
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArr) {
  return moviesArr.length>0 ? parseFloat((moviesArr.reduce((accu,current)=> {
    const currentScore = typeof current.score === 'number' ? current.score : 0
    return accu+currentScore
  },0)/moviesArr.length).toFixed(2)) : 0
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArr) {
  return scoresAverage(moviesArr.filter(movie=>movie.genre.includes('Drama')))
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArr) {
  return moviesArr.length>0 ? moviesArr.sort((a,b)=> (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0)).sort((a,b)=>a.year-b.year) : []
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArr) {
  const temp = moviesArr.concat([])
  return temp.sort((a,b)=>(a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0)).map(m=>m.title).slice(0,20)
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArr) {
  return moviesArr.map(movie=>{
    const timeArr = movie.duration.match(/\d*/g).filter(x=>x.length>0)
    const hour = parseInt(timeArr[0])*60
    const minutes = timeArr[1] ? parseInt(timeArr[1]): 0 
    return {
      ...movie,
      duration: hour+minutes
    }
  })
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(movies) {
  if(movies.length===0){
    return null
  }
  const statObj = {}
  const winner = {}
  movies.forEach(movie=> {
    if(Object.keys(statObj).includes(String(movie.year))  ){
      statObj[movie.year].score+=movie.score
      statObj[movie.year].qty++
    }else{
      console.log(movie.year)
      statObj[movie.year]={
        score:0,
        qty:0
      }
      statObj[movie.year].score=movie.score
      statObj[movie.year].qty=1
    }
  })
  const topYear = Object.keys(statObj).sort((b,a)=> (statObj[a].score/statObj[a].qty)  - (statObj[b].score/statObj[b].qty) )[0]
  return `The best year was ${topYear} with an average score of ${statObj[topYear].score/statObj[topYear].qty}`
}

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
