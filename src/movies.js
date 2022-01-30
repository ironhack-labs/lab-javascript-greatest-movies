


// Iteration 1: All directors? - Get the array of all directors.

const movies = require("./data")

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
function getAllDirectors(movies) {

  const directors = movies.map(function (film) {
    return film.director
  })
  return directors
}


// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllTheDirectors(movies) {

  //   const allDirectors = movies.filter(function(elem) {
  //   return [...set(allDirectors)]
  /*   return elem.indexOf(elem) === index;
 })
 return allDirectors*/
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const steveScore = movies.filter(function (movie) {

    return movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
  })
  return steveScore.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (movies.length == 0) {
    return 0
  }
  else {
    const allScores = movies.reduce((total, { score }) => total + score, 0) / movies.length
    return +(allScores.toFixed(2))
  }
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesScore(movies) {
  if (movies.length == 0) {
    return 0
  }
 else {
  const dramaMovies= movies.filter(function (movie) {
    return movie.score ==  movie.genre.includes('Drama')
  }, {})
  const allScores = dramaMovies.reduce((total, { score }) => total + score, 0) / dramaMovies.length
    return +(allScores.toFixed(2))
 }
  }


//   else{
//   //if (movies.score.includes("Drama")) {
//   const filmDrama = Object.genre(movies).reduce((p, c) => {
//     if (movies[c]) p[c].includes("Drama")
//     return p
//   }, {})
//   }
//   const scoresAverageDrama = filmDrama.reduce((total, { score }) => total + score, 0) / filmDrama.length
//   return scoresAverageDrama
// }
  //   const allScores = movies.reduce((total, { score }) => total + score, 0) / movies.length
  //   return +(allScores.toFixed(2))
  // }


//  { 
//   if (movies.genre.inludes("Drama"))
//   {}
//   else {
//   const newArray = movies.filter(movies,movies.genre.includes('Drama'))
//     return movies.score
//   }
// //   const allScores = movies.reduce(function (total, value) {
// //     if (movies.genre.includes('Drama')) {
// //     return total + value
// //       } 
// //     else {
// //       continue
// //     } 
// //   }, 0)
// //   return total / allScores.length
//  }  
  


/*
let avrg = 0;

const isDrama = movies.reduce(function (film){
if(film.genre.includes ("Drama") {
return film.score }

return isDrama { */



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  //  const ordered = movies.map(film){
  //  const film = JSON.parse(JSON.stringify({movies}))
const onlyYears = movies.reduce(function (film) {
  return film.sort((a, b) => 
  (b.year - a.year), {})
})
return onlyYears
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  const ordered = movies.map(film)
  movies.sort((a, b) => {
    return a.year - b.year;
  })

  orderAlphabetically.forEach(element => {
    console.log(`${element.titel}`)
  })
}
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  return
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() { }



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
