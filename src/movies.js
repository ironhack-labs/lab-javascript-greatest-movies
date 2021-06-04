// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const { findIndex } = require("./data");
const movies = require("./data");

// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  let mappedDirectors = movies.map((singleMovie) => {
    return singleMovie.director
  })
  return mappedDirectors
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  let spielbergDramas = movies.filter((movie) => {
    return movie.director == 'Steven Spielberg' && movie.genre.includes('Drama')
   })
   return spielbergDramas.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (!movies.length) {return 0};
  let scoresSum = movies.reduce( (sum, movie) => {
    if (movie.score) {
      return sum + movie.score
    } else {
      return sum }
  }, 0)
  let average= scoresSum/movies.length
  return JSON.parse(average.toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  let dramaMovies = movies.filter((movie) => movie.genre.includes('Drama'))
  return scoresAverage(dramaMovies)}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
    //clone this mutha
    const clonedArray = JSON.parse(JSON.stringify(movies));

    clonedArray.sort((a,b) => {
      if (a.year < b.year) {
        return -1 
      } else if (a.year > b.year) {
        return 1
      } else {
        if (a.title < b.title) {
          return -1
        } else if (a.title > b.title) {
          return +1
        } else {
          return 0
        }
        }
      }
    );
    return clonedArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  const clonedArray = JSON.parse(JSON.stringify(movies));
  clonedArray.sort( (a,b) => {
    if (a.title < b.title) {
      return -1
    } else if (a.title > b.title) {
      return +1 } else {
      return 0
    }
  }
  )
  const skinnyArray = clonedArray.map((movie) => {
    return movie.title})
    return skinnyArray.slice(0,20)
  }


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  const clonedArray = JSON.parse(JSON.stringify(movies));

clonedArray.forEach((movie) => {
  let hours = 0, mins = 0; 
  if (movie.duration.includes('min')) {
    mins = parseInt(movie.duration.slice(-5,-3)) 
  } if (movie.duration.includes('h')) {
    hours = parseInt(movie.duration.charAt(0)) * 60 
  }
  movie.duration = hours + mins 
}
)
return clonedArray;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(movies) {
  
  if (!movies.length) {return null};

  const clonedArray = JSON.parse(JSON.stringify(movies));
   
  let yearList = []  
  
  clonedArray.forEach((movie) => {
    if (!yearList.includes(movie.year)) {
        yearList.push(movie.year)
        }
  })
  
  let fullList = []
  fullList = yearList.map((year, index, array) => {
    return { 'year' : year, 'avg' : 0 }
  })
  
  fullList.forEach((elem, index, array) => {
    elem.avg = scoresAverage(clonedArray.filter((movie, ind) =>{
     return movie.year === elem.year}))
  })
  
  fullList.sort((a,b) => {
    if (a.avg > b.avg) { 
      return -1
    } else if (a.avg < b.avg) {
      return +1
    } else if (a.avg === b.avg) 
    {  if (a.year < b.year) {
       return -1
    }  else  if (a.year > b.year) {
         return +1
       } else {
         return 0
       }
    }
   })
  return `The best year was ${fullList[0].year} with an average score of ${fullList[0].avg}`

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
