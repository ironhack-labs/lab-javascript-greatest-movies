// The `movies` array from the file `src/data.js`.
// console.log('movies: ', movies);


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {

  const mappedArray = movies.map(movie => {
    return movie.director
  });
  const filteredArray = []
  mappedArray.forEach(director => {
    if (!filteredArray.includes(director)) {
      filteredArray.push(director)
    }
  })

  console.log(filteredArray)
  return filteredArray

}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {

  const dramaSteven = movies.filter(movie => movie.director === "Steven Spielberg" && movie.genre.includes("Drama"))
  return dramaSteven.length
}



// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  let averageRounded = 0
  if (movies.length != 0) {
    const sum = movies.reduce((acc, currentValue) => {

      if (currentValue.score) {
        return acc + currentValue.score
      }
      else {
        return acc
      }
    }, 0)

    let averageScore = sum / movies.length
    averageRounded = Math.round(averageScore * 1e2) / 1e2;
  }
  return averageRounded

  console.log(averageScore)
  // return averageScore
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {

  let dramaAverageRounded = 0

  const dramas = movies.filter(movie => movie.genre.includes("Drama"));
  if (dramas.length != 0) {
    const dramaScoreSum = dramas.reduce((acc, currentValue) => {
      return acc + currentValue.score;
    }, 0)

    let dramaAverage = dramaScoreSum / dramas.length
    dramaAverageRounded = Math.round(dramaAverage * 1e2) / 1e2;
  }
  return dramaAverageRounded

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  moviesSorted = JSON.parse(JSON.stringify(movies));
  moviesSorted.sort((a, b) => {
    if (a.year != b.year) {
      return a.year - b.year
    }
    else {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
    }

  })
  return moviesSorted
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  let moviesSorted = []
  moviesSorted = movies.map(movie => {

    return movie.title
  });
  moviesSorted.sort()

  return moviesSorted.slice(0, 20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  const mappedArray = movies.map(movie => {
    let strings = movie.duration.split(" ")
    let hours = 0
    let mins = 0
    if (strings.length >= 0) {
      for (let i = 0; i < strings.length; i++) {
        if (strings[i].includes("h")) {
          hours = strings[i]
          hours = hours.replace(/\D/g, '');
          hours = parseInt(hours)
        }
        else if (strings[i].includes("m")) {

          mins = strings[i]
          mins = mins.replace(/\D/g, '');
          mins = parseInt(mins)
        }

      }
    }

    let duracionNum = 0
    let duracion = movie.duration


    return {
      ...movie,
      duration: hours * 60 + mins
    }
  });

  return mappedArray
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average


function bestYearAvg(movies) {
  if (movies.length === 0) {
    return null
  }
  let yearsScore = {}
  let maxYear = 0
  let maxRate = 0

  movies.forEach(element => {

    let yearString = element.year
    if (yearsScore.hasOwnProperty(`${element.year}`)) {
      yearsScore[yearString] = yearsScore[yearString] + parseFloat(element.score)
    }
    else {
      yearsScore[yearString] = parseFloat(element.score)
    }
  });



  Object.keys(yearsScore).forEach(key => {

    let ocurrences = 0
    movies.forEach(movie => {
      if (movie.year == key) {
        ocurrences++
      }
    })
    yearsScore[key] = yearsScore[key] / ocurrences
  })


  let rates = Object.values(yearsScore)
  maxRate = Math.max(...rates)
  let yearsWithMaxRate = []
  Object.keys(yearsScore).forEach(key => {
    if (yearsScore[key] == maxRate) {
      yearsWithMaxRate.push(key)
    }
  })
  maxYear = Math.min.apply(Math, yearsWithMaxRate)

  finalString = `The best year was ${maxYear} with an average score of ${maxRate}`
  console.log(finalString)
  return finalString
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
