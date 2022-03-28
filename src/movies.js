



// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const directors = movies.map(eachMovie=>{
  return eachMovie.director
})
 return directors
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const spielbergMovies = movies.filter(eachMovie => {
    return eachMovie.director === 'Steven Spielberg' && eachMovie.genre.includes('Drama')
})

return spielbergMovies.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (movies.length === 0) {
    return 0
  }

  const scoresSum = movies.reduce((acc, eachMovie) => {
        return acc + (eachMovie.score || 0)
}, 0) 
  
  let average = (scoresSum/movies.length).toFixed(2) *1
  return average
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  const dramaMovies = movies.filter(eachMovie => {
    return eachMovie.genre.includes('Drama')
})

return scoresAverage (dramaMovies)

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const newMovies = JSON.parse(JSON.stringify(movies))

  newMovies.sort((a, b) => {
    if (a.year > b.year) {
      return 1;
    }
    else if (a.year < b.year) {
      return -1;
    }
    else if (a.year === b.year){
      if (a.title > b.title) {
        return 1;
      }
      else if (a.title < b.title) {
        return -1;
    }
    
 }})
 
 return newMovies

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  const newMovies2 = JSON.parse(JSON.stringify(movies))

  const justTitles = newMovies2.map(eachMovie => {
    return eachMovie.title
  })


  justTitles.sort((a, b) => {
    if (a.title > b.title) {
      return 1;
    }
    else if (a.title < b.title) {
      return -1;
    } else {
      return 0
    } 
  })
  
    let final20 = justTitles.slice(0, 20)
    return final20
         
  }
     


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  const newMovies3 = JSON.parse(JSON.stringify(movies))

  newMovies3.map((eachMovie)=>{
    let hours = eachMovie.duration.slice(0,1)*60
    let mins = eachMovie.duration.slice(3,-3)

  })

  return newMovies3

}



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
