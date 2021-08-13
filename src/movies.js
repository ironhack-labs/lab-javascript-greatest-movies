// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const allDirectors = movies.map(function (movie) {
  return movie.director
})
  let cleanedDirectors = [];
  for (let i = 0; i < allDirectors.length; i++){
    if (!cleanedDirectors.includes(allDirectors[i])) { 
      cleanedDirectors.push(allDirectors[i])
    }
  }
  return cleanedDirectors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const stevenMovies = movies.filter(function (movie) {
    if (movie.director === 'Steven Spielberg') {
      if (movie.genre.includes('Drama')){
        return true
       } 
      } 
    })
  return stevenMovies.length
  }

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (movies.length === 0) {
    return 0;
  } else {
    movies.map(function (movie) {
      if (!movie.score) {
        return movie.score = 0
      }
    })
  const sumOfScores = movies.reduce(function (sum, movie) {
    return sum + movie.score
  }, 0)
  const avg = parseFloat((sumOfScores / movies.length).toFixed(2))
  return avg
  }
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  const dramaMovies = movies.filter(function(movie) {
    if (movie.genre.includes('Drama')){
        return true
      } else {
        return false
      }
  })
  return scoresAverage(dramaMovies)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const moviesCopy = JSON.parse(JSON.stringify(movies));
  moviesCopy.sort(function (a, b) {
      return a.year - b.year
  });
  moviesCopy.sort(function (a, b) {
    if (a.year === b.yaer) {
      return a.title - b.title
    }
  }); 
  return moviesCopy
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  const moviesCopy = JSON.parse(JSON.stringify(movies));
  const allTitles = moviesCopy.map(function (movie) {
  return movie.title
})
  allTitles.sort()
  const top20Movies = [];
  if (allTitles.length < 20) {
    for (let i = 0; i < allTitles.length; i++) {
      top20Movies.push(allTitles[i])    
    }
  } else {
    for (let i = 0; i < 20; i++) {
      top20Movies.push(allTitles[i])    
    }
  }
  return top20Movies
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  const moviesCopy = JSON.parse(JSON.stringify(movies));
  moviesCopy.map(function (movie) {
    if (movie.duration.includes('min')) {
      const hour = Number(movie.duration.split(" ")[0].split("h")[0]);
      const min = Number(movie.duration.split(" ")[1].split("min")[0]);
      const newDuration = hour*60 + min
      return  movie.duration = newDuration
        } else{
    const hour = Number(movie.duration.split(" ")[0].split("h")[0]);
    const newDuration = hour*60
    return  movie.duration = newDuration
                 }
  })
  return moviesCopy
}


// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(movies) {
  const moviesCopy = JSON.parse(JSON.stringify(movies));
  if (movies.length === 0) {
    return null
  } else {
          const allYears = moviesCopy.map(function (movie) {
          return movie.year
    })

        let uniqueYears = [];
        allYears.forEach((year) => {
        if (!uniqueYears.includes(year)) {
            uniqueYears.push(year);
        }
    });
    
    const sameYearsMovies = [];
    for (let i =0; i < uniqueYears.length; i++) {
      const moviesInSameYear = moviesCopy.filter(function (movie){
        if (uniqueYears[i] === movie.year){
          return true 
        }
      })
      sameYearsMovies.push(moviesInSameYear)
    }    
    
    let yearAndAvg = [];
     for (let i = 0; i < sameYearsMovies.length; i++){
    sameYearsMovies[i].map(function (movie) {
      if (!movie.score) {
        return movie.score = 0
      }
    })
    const sumOfScores = sameYearsMovies[i].reduce(function (sum, movie) {
    return Math.round((sum + movie.score) * 100) /100
  }, 0)
  const avg = parseFloat((sumOfScores / sameYearsMovies[i].length).toFixed(2))
 
       yearAndAvg.push({year: sameYearsMovies[i][0].year},{avg:avg})
    }
     console.log(yearAndAvg)
    console.log('here')
    

    return "The best year was <YEAR> with an average score of <RATE>"
  }
}


bestYearAvg(movies)



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
