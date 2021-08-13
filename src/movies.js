// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const directorsArr = movies.map(function (eachMovie) {
    return eachMovie.director
  })
  return directorsArr
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const spielbergMovies = movies.filter(e => {
    return e.director === "Steven Spielberg"
  }).filter(e => {
    return e.genre.includes("Drama")
  })
  return spielbergMovies.length
}
howManyMovies(movies)
// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (movies.length > 0) {
    const sumOfScore = movies.reduce(
      function (acc, movie) {
        if (movie.score) {
          return acc += movie.score
        } else {
          return acc += 0
        }
      },
      0
    )
    const averageScore = sumOfScore / movies.length
    return parseFloat(averageScore.toFixed(2))
  } else {
    return 0
  }
}
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  let dramaScore = movies.filter(e => {
    return e.genre.includes("Drama")
  })
  return scoresAverage(dramaScore)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  let newMoviesArrayByYear = [...movies].sort((a, b) => a.year - b.year || a.title.localeCompare(b.title))
  return newMoviesArrayByYear
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  let sortByTitle = [...movies].sort((a, b) => a.title.localeCompare(b.title))

  let arrayOfTitlesOfMovies = []
  sortByTitle.forEach(element => arrayOfTitlesOfMovies.push(element.title));
  if (arrayOfTitlesOfMovies.length > 20) {
    return arrayOfTitlesOfMovies.slice(0, 20)
  } else {
    return arrayOfTitlesOfMovies
  }
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  const allMovies = movies.map(a => ({
    ...a
  }))
  for (i = 0; i < allMovies.length; i++) {
    let newMovie = movies[i]
    let movieDuration = newMovie.duration.split(" ")
    let noH = (parseInt(movieDuration[0].replace("h", ""))) * 60
    let noMin = 0
    if (movieDuration[1]) {
      noMin = parseInt(movieDuration[1].replace("min", ""))
    }
    let sumOfMinutes = noH + noMin
    allMovies[i].duration = sumOfMinutes

  }

  return allMovies
}



// BONUS - Iteration 8: Best yearly score average - Best yearly score average
// function bestYearAvg(movies) {
//   let moviesPerYear = {}
//   for (let i = 0; i < movies.length; i++) {
//     let years = movies[i].year
//     if (!moviesPerYear[years]) {
//       moviesPerYear[years] = [movies[i].score];
//     } else {
//       moviesPerYear[years].push(movies[i].score)
//     }
//   }
//   console.log(moviesPerYear)
//   let averagePerYear = {}
//   for (year in moviesPerYear) {
//     averagePerYear[year] = moviesPerYear[year].reduce(
//       function (acc, e) {
//         return acc += e
//       }, 0) / moviesPerYear[year].length
//   }

//   let highest = Object.keys(averagePerYear).sort(function (a, b) {
//     return averagePerYear[a] - averagePerYear[b]
//   })


//   console.log(highest)
//   console.log(averagePerYear[highest[0]])
//   // let biggestValue = Object.keys(averagePerYear).reduce((a, b) => averagePerYear[a] > averagePerYear[b] ? a : b);
//   // console.log(biggestValue)
//   return `The best year was ${highest[0]} with an average score of ${averagePerYear[highest[0]]}`
// }

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