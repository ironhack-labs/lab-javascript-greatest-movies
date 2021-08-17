// Iteration 1: All directors? - Get the array of all directors.
const movies = require("./data")
// movies.map((item) => {
//   if (item.director === "Sidney Lumet") {
//     console.log(item)
//   }
// })
// console.log(movies)
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
const testArr = [
  {
    title: 'Django Unchained',
    year: 2010,
    director: 'Quentin Tarantino',
    duration: '2h 45min',
    genre: ['Drama', 'Western'],
    score: 9.4
  },
  {
    title: 'Jurasic Park',
    year: 2012,
    director: 'Steven Spielberg',
    duration: '2h 45min',
    genre: ['ficcion'],
    score: 8.4
  },
  {
    title: 'Forest Gump',
    year: 2011,
    director: 'Steven Spielberg',
    duration: '2h 45min',
    genre: ['Drama'],
    // score: 8.4
  },
  {
    title: 'Pull Fiction',
    year: 2012,
    director: 'Steven Spielberg',
    duration: '2h 45min',
    genre: ['Drama'],
    score: 8.4
  }
];

function getAllDirectors(moviesCurrent) {
  // console.log(moviesCurrent)
  let allDirectors = []

  moviesCurrent.map((movie) => {
    allDirectors.push(movie.director)
  })

  // console.log(allDirectors)

  const allDirectorsNoRepeat = allDirectors.filter((item, index) => {
    return allDirectors.indexOf(item) === index
  })

  // return ((allDirectors.filter((item, index) => {
  //   return allDirectors.indexOf(item) === index

  // })))
  return allDirectorsNoRepeat
}
getAllDirectors(testArr)

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(testArr) {

  // let numberMovies = testArr.filter(item => item.director === "Steven Spilberg").length
  // let finalCounter = numberMovies.filter(item => item.genr.includes("Drama"))

  // console.log(numberMovies)


  // let fulllist = testArr.filter(element => element.genr.some(  ))
  // console.log(numberMovies2)
  // let contador = 0
  // let numberMovies2 = testArr.map((item) => {
  //   if (item.director === "Steven Spielberg") {
  //     return contador++
  //   }
  // })

  // console.log(testArr.genr.map((element) => element === "Drama"))

  let autorMovies = testArr.filter((movie) => {
    return movie.director === "Steven Spielberg"
  })
  let inDrama = autorMovies.filter((item) => {
    return item.genre.includes("Drama")
  })

  if (autorMovies.length === 0) {
    return 0
  }
  // console.log(autorMovies)
  // console.log(inDrama)
  // console.log(autorMovies)
  return inDrama.length
  // return 1
  // return finalCounter
}

howManyMovies(testArr)

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesScore) {

  let total

  let movies = moviesScore.map((item) => {
    if (item.score != undefined) {
      return item.score
    }
  })
  let realMovies = movies.filter(el => el != null)


  // console.log(realMovies.length)
  // console.log(movies.length)

  // console.log(realMovies)

  let average = realMovies.reduce((acc, curr) => {

    // console.log(curr.score)
    return acc + curr

    // let average = acc.score + curr.score
    // return parseFloat(average)
    // console.log(acc.score)
    // console.log(curr.score)
    // if (curr.score) {
    // return acc.score + curr.score
    // } else {
    // return 0
    // }
  }, 0)
  if (average === 0) {
    return 0
  }
  // console.log(typeof parseFloat(average) / parseFloat(movies.length))
  // console.log(typeof (parseFloat(average / movies.length).toFixed(2)))

  total = (average / movies.length).toFixed(2)
  return parseFloat(total)
}

scoresAverage(testArr)

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {

  // get element drama

  let dramaMovies = movies.map((movies) => {
    if (movies.genre.includes("Drama")) {
      return movies
    } else {
      return 0
    }
  })
  // let dramaMovies = movies.filter(movie => movie.genre.includes("Drama"))

  console.log(dramaMovies);
  let averageDramaMovies = dramaMovies.map(drama => {
    if (drama.score != undefined) {
      return drama.score
    }
  })

  // let cleanScoreMovies = dramaMovies.filter(el => el != null)
  let cleanScoreMovies = averageDramaMovies.filter(el => el != null)

  console.log(averageDramaMovies)
  console.log(cleanScoreMovies)

  let total = cleanScoreMovies.reduce((acc, curr) => {
    return acc + curr
  }, 0)
  console.log(movies.length)
  total = ((total / movies.length).toFixed(2))
  console.log(parseFloat(total))
  return parseFloat(total)
}
dramaMoviesScore(testArr)

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {

  if (movies === undefined) {
    return arr = []
  }

  let allYears = movies.map((item) => {
    return item.year
  })

  // let moviesOrder = movies.sort((a, b) => {
  //   if (a.year === b.year) {
  //     return a.title - b.title
  //   }
  //   return a - b
  // })
  // console.log(typeof moviesOrder)

  const year = [...movies];
  year.sort(function (a, b) {
    return (b.year - a.year)
  })
  // year.reverse()
  // console.log(year)
  return year.reverse()

  // let orderYears = allYears.sort((a, b) => {
  //   if (a.year === b.year) {
  //     return a.year - b.year
  //   } else {
  //     return b.year - a.year
  //   }
  // })
  // console.log(orderYears)
}

orderByYear(testArr)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {

  let twentyFirts = movies.map(item => item.title).reduce((contador, element, index) => {
    if (index < 20) {
      console.log(index)

      return element
    }
  })

  console.log(twentyFirts)
  let orderMovies = [...movies]

  let contador = 0
  orderMovies.sort(function (a, b) {
    // console.log(orderMovies.length)

    while (contador < 20) {
      contador++
      // console.log(orderMovies.length)
      // console.log(contador)
      return b.title - a.title
    }

  })

  const moviesAlfa = orderMovies.map(item => item.score).reduce((counter, elemen) => counter + elemen, 0)
  // if (orderMovies.length < 20) {
  //   orderMovies.reverse()
  // }

  // console.log(moviesAlfa / orderMovies.length)
  return orderMovies
}

orderAlphabetically(movies)

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinautorMoviesutes() { }

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
    bestYearAvg,
  };
}
