// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
const movies = [
  {
    title: 'The Shawshank Redemption',
    year: 1994,
    director: 'Frank Darabont',
    duration: '2h 22min',
    genre: ['Crime', 'Drama'],
    score: 9.3
  },
  {
    title: 'The Godfather',
    year: 1972,
    director: 'Francis Ford Coppola',
    duration: '2h 55min',
    genre: ['Crime', 'Drama'],
    score: 9.2
  },
  {
    title: 'The Godfather: Part II',
    year: 1974,
    director: 'Francis Ford Coppola',
    duration: '3h 22min',
    genre: ['Crime', 'Drama'],
    score: 9
  },
  {
    title: 'The Dark Knight',
    year: 2008,
    director: 'Christopher Nolan',
    duration: '2h 32min',
    genre: ['Action', 'Crime', 'Drama', 'Thriller'],
    score: 9
  },
  {
    title: '12 Angry Men',
    year: 1957,
    director: 'Sidney Lumet',
    duration: '1h 36min',
    genre: ['Crime', 'Drama'],
    score: 8.9
  },
  {
    title: 'Schindler"s List',
    year: 1993,
    director: 'Steven Spielberg',
    duration: '3h 15min',
    genre: ['Biography', 'Drama', 'History'],
    score: 8.9
  },
  {
    title: 'Pulp Fiction',
    year: 1994,
    director: 'Quentin Tarantino',
    duration: '2h 34min',
    genre: ['Crime', 'Drama'],
    score: 8.9
  }]


function getAllDirectors(arr) {
  let newArr = []
  const getDirectors = arr.map(eachMovie => eachMovie.director)
  getDirectors.forEach(eachDirector => {
    if (newArr.indexOf(eachDirector)) newArr.push(eachDirector)
  }
  )
  return newArr
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
  const spielbergMovies = arr.filter(eachMovie => eachMovie.director === 'Steven Spielberg' && eachMovie.genre.indexOf("Drama") != -1)
  return spielbergMovies.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr) {
  if (!arr.length) return 0
  const filteredArray = arr.filter(eachMovie => eachMovie.score)

  const averageRating = (previousRating, currentRating) => ({ score: previousRating.score + currentRating.score })


  return parseFloat(((filteredArray.reduce(averageRating).score) / arr.length).toFixed(2))
}
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr) {

  const dramaMovies = arr.filter(eachMovie => eachMovie.genre.indexOf("Drama") != -1)
  const result = scoresAverage(dramaMovies)
  return result
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
  const newArr = [...arr]



  arrByTitle = newArr.sort().reverse();
  const newestArr = arrByTitle.sort(function (a, b) {
    return a.year - b.year
  })


  return newestArr
}




// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
  const clonedArr = [...arr]
  const onlyTitlesArr = clonedArr.map(eachMovie => {
    return eachMovie.title
  })
  const orderedArray = onlyTitlesArr.sort();


  const finalArray = []

  orderedArray.forEach(function (item, index) {
    if (index < 20) {
      finalArray.push(item);
    }
  }
  )
  return finalArray



}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arr) {
  let clonedArr = JSON.parse(JSON.stringify(arr));

  function hoursToMin(str) {
    const newArr = str.split(" ")
    const hoursInMin = parseInt(newArr[0]) * 60
    if (newArr[1]) {
      const min = parseInt(newArr[1])
      return hoursInMin + min
    }
    return hoursInMin
  }

  clonedArr.forEach(eachMovie => {
    if (eachMovie.duration) {
      return eachMovie.duration = hoursToMin(eachMovie.duration)
    }
  })
  console.log(clonedArr)
  return clonedArr


}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(arr) {
  if (!arr.length) return null
  let yearArr = []
  for (let i = 1800; i < 2100; i++) {
    yearArr.push(i)
  }
  const arrOfArrs = []
  yearArr = yearArr.forEach(eachYear => {
    const createArr = arr.filter(eachMovie => eachMovie.year === eachYear)
    if (createArr.length) {
      arrOfArrs.push(createArr)
    }
  }

  )
  let yearAndAvgScore = []
  arrOfArrs.forEach(eachYearOfMovies => {
    yearAndAvgScore.push({ avgScore: scoresAverage(eachYearOfMovies), year: eachYearOfMovies[0].year })


  })
  yearAndAvgScore.sort((a, b) => b.year - a.year)
  yearAndAvgScore.sort((a, b) => a.avgScore - b.avgScore)



  return `The best year was ${yearAndAvgScore[yearAndAvgScore.length - 1].year} with an average score of ${yearAndAvgScore[yearAndAvgScore.length - 1].avgScore}`





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
