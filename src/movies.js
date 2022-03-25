// The `movies` array from the file `src/data.js`.

const movies = require("./data");



// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(movies) {

 return  movies.map(function(movie){
      return movie.director 
  })
   
  }
  
  




// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {

  const stev = movies.filter(function(director){
    return director.director == "Steven Spielberg" 
  })

  const stevDrama = stev.filter(function(drama){
    return drama.genre.includes("Drama")
  })



  return stevDrama.length

}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {

  if(movies.length == 0){
    return 0
  }

  const sum = movies.reduce(function(acc, val){

     if(val.score === undefined || val.score == '') {
       val.score = 0; 
     }

  return acc + val.score
   
  },0)


  return Math.round((sum /movies.length)* 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {

  const dramaMovies = movies.filter(function(drama){
    return drama.genre.includes("Drama")
  })

  if(dramaMovies.length == 0){
    return 0
  }

  const sumDrama = dramaMovies.reduce(function(accD, val){
    return accD + val.score
  },0)


 
  return Math.round((sumDrama /dramaMovies.length)* 100) / 100;

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {

  const moviesCopy = [...movies];
  

 const moviesByYear = moviesCopy.sort(function(a,b){
   
     return a.year - b.year || a.title.localeCompare(b.title)

 })
 
  return moviesByYear

}

orderByYear(movies)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {

  const moviesCopyAlph = [...movies];
  

 const moviesByTitle = moviesCopyAlph.sort(function(a,b){
   
     return a.title.localeCompare(b.title)

 })

 const onlyTitle = moviesByTitle.map(function (tit) {
	return tit.title
})

if(onlyTitle.length >= 20){
 return onlyTitle.slice(0,20)
}

  return  onlyTitle

}

orderAlphabetically(movies)

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {

  const durationMinutes = [...movies];
  
  
  
  const minutesArr = durationMinutes.map(function (time) {
   let reppo1 = time.duration
  let reppo =  reppo1.replace(" ",".")
   let reppo2 = reppo.replace("h","")
   let reppo3 = reppo2.replace("min","")
   
   let final = Math.round((parseFloat(reppo3)*60)) 
  
   const objectArr = [{
		 title: time.title,
    year: time.year,
    director: time.director,
    duration: time.duration = final,
    genre: time.genre,
    score: time.score
	}]

    
    return   objectArr
  })

return  minutesArr
}
turnHoursToMinutes(movies)

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
