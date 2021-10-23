// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arr) {
  const Directors = arr.map(function (item) {
    return item.director
  })
  return Directors

}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
  const stevenDrama = arr.filter((movie) => {


    return movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')


  })
  //console.log(stevenDrama.length)
  return stevenDrama.length
}



// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr) {
  if (!arr.length) {
    return 0
  }
  const onlyScore = arr.map((scoreMovie) => {
    if (scoreMovie.score) {
      return scoreMovie.score
    } else {
      return 0
    }

  })
  const sumOfScores = onlyScore.reduce(function (acc, score) {
    return acc + score
  }, 0)
  return parseFloat((sumOfScores / onlyScore.length).toFixed(2))

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr) {
  if (!arr.length) {
    return 0
  }
  const allDramaMovies = arr.filter((draMovies) => {

    return draMovies.genre.includes('Drama')

  })
  const scoreDrama = allDramaMovies.map((scoDramaMovies) => {
    if (scoDramaMovies.score) {
      return scoDramaMovies.score
    } else {
      return 0
    }

  })
  const sumOfDraScores = scoreDrama.reduce(function (acc, score) {
    return acc + score
  }, 0)

  return parseFloat((sumOfDraScores / scoreDrama.length).toFixed(2))
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
  const sortMovies = [...arr];
  
  sortMovies.sort((a,b) => {
    const firstMovie = a.year;
    const secondMovie = b.year;

    if (firstMovie > secondMovie) {
      return 1;
    } else if (firstMovie < secondMovie) {
      return -1;
    } else if (
      a.title.toLowerCase() > b.title.toLowerCase()
    ) {
      return 1;
    } else {
      return -1;
    }
  });

  return sortMovies;
};
  // const yearsArr = arr.map((yearsOfMovies) => {
  //   console.log(yearsArr)
  //   return yearsOfMovies.year

  // })
  // const moviesOrder = yearsArr.sort((a, b) => {
  //   if (a) {
  //     return -1
  //   } else {
  //     return 1
  //   }

  // })


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = (array) => {
  const sortedMovies = [...array]
  sortedMovies.sort((first, second) => {
    return first.title.localeCompare(second.title);
  })
  const movieTitles = sortedMovies.map((movie) =>{
    return movie.title
  })
  console.log(sortedMovies)
  return movieTitles.slice(0, 20);
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() { }

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
