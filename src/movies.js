const arr = [
  {
    title: 'Paths of Glory',
    year: 1957,
    director: 'Stanley Kubrick',
    duration: '1h 28min',
    genre: ['Drama', 'War'],
    score: 8.4
  },
  {
    title: 'Django Unchained',
    year: 2012,
    director: 'Quentin Tarantino',
    duration: '2h 45min',
    genre: ['Drama', 'Western'],
    score: 8.4
  },
  {
    title: 'Schindler"s List',
    year: 1993,
    director: 'Steven Spielberg',
    duration: '3h 15min',
    genre: ['Biography', 'Drama', 'History'],
    score: 8.9
  }
];

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const allDirectors = movies.map(eachDirector => {
    //console.log(eachDirector.director)
    return eachDirector.director
  })
  return allDirectors
}
console.log(getAllDirectors(arr))



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
  const stevenSpielberg = arr.filter(eachSteven => {
    const stevenS = eachSteven.director.includes('Steven Spielberg')
    const dramaMovie = eachSteven.genre.includes('Drama')
    console.log(stevenS)
    console.log(dramaMovie)
    if (stevenS && dramaMovie) {
      return true
    }
  })
  return stevenSpielberg.length
}
console.log(howManyMovies(arr))

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr) {
  if (!arr.length) {
    return 0
  }
  const scoreAverage = arr.reduce((acc, eachScore) => {
    if (eachScore.score) {
      return acc + eachScore.score
    } else {
      return acc
    }
  }, 0)
  return parseFloat((scoreAverage / arr.length).toFixed(2))
}
console.log(scoresAverage(arr))

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr) {
  const dramaMoScore = arr.filter(eachDrama => {
    return eachDrama.genre.includes('Drama')
  })
  if (!dramaMoScore.length) {
    return 0
  }
  console.log(dramaMoScore)
  const scoreAverage = dramaMoScore.reduce((acc, eachScore) => {
    console.log(eachScore.score)
    console.log(dramaMoScore)
    return acc + eachScore.score
  }, 0)
  console.log(scoreAverage)

  return parseFloat((scoreAverage / dramaMoScore.length).toFixed(2))
}
console.log(dramaMoviesScore(arr))

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
  const byYears = arr.sort((a, b) => {
    let yearsCompare = a.year - b.year
    if (yearsCompare === 0) {
      yearsCompare = a.title.localeCompare(b.title);
    }
    console.log(yearsCompare)

    return yearsCompare;
    //return a.year - b.year
  })
  console.log(byYears)
  const arrayNew = [...byYears]
  return arrayNew


}
console.log(orderByYear(arr))

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
  const byTitle = arr.map(eachtitle => eachtitle.title)
  console.log(byTitle)
  const sort = byTitle.sort()
  const num = 20
  const twentyItems = sort.slice(0, num)

  //console.log(byYears)
  return twentyItems
}
console.log(orderAlphabetically(arr))

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
