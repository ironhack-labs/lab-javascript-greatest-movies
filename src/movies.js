

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arrMovies) {
  return arrMovies.map (eachMovie => eachMovie.director)
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arrMovies) {
  let howManyMovies = arrMovies.filter (eachMovie => {
    return eachMovie.director === 'Steven Spielberg' && eachMovie.genre.includes('Drama')
  })
  return howManyMovies.length
  

}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arrMovies) {
  let sum = 0;
  let arrScores = arrMovies.map (eachMovie => eachMovie.score)
  if (arrMovies.length === 0) {
    return 0
  } else {
  arrScores.reduce ((acc,eachScore) => {
    if (!eachScore) {
      sum = sum + 0      
    } else {
    sum = acc + eachScore
    return acc + eachScore
    }
  }, 0)
  return Math.round((sum/arrMovies.length) * 100) / 100
  }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arrMovies) {
  let sumDramaScores = 0;
  let counter = 0;
  arrMovies.forEach (eachMovie => {
    if (eachMovie.genre.includes('Drama')) {
      sumDramaScores += eachMovie.score;
      counter++;
    }
  })
  if (counter === 0) {
    return 0;
  } else {
    return Math.round((sumDramaScores/counter) * 100) / 100
  }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arrMovies) {
  let copy = [...arrMovies];
  // let arrYears = copy.map (eachMovie => eachMovie.year)
  // let arrTitles = copy.map (eachMovie => eachMovie.title)
  copy.sort((a, b) => {
    if (a.year - b.year !== 0) {
      return a.year - b.year
    } else {
      // return a.title - b.title
      return a.title.localeCompare(b.title);
  }})
  return copy;

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arrMovies) {
  let copy = [...arrMovies];
  let copyTitles = copy.map (eachMovie => eachMovie.title)
  copyTitles.sort((a, b) => {
    return a.localeCompare(b);
  })

  if (copy.length <=20) {
    return copyTitles
  } else {
    return copyTitles.slice (0,20)
  }
 
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arrMovies) {
  let copy = [...arrMovies]
  let copyDurations = copy.map (eachMovie => eachMovie.duration)

  if (copyDurations.length === 0) {
    return 0;
  } else {
  copyDurations.forEach (elem => {
    let hoursArray = []
    let hours = elem.split('h')
    hoursArray.push(hours)
    let minutes
  })
  }
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
