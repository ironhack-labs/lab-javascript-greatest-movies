// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
  let directors = [];
  moviesArray.forEach((movie) => {
    directors.push(movie.director)
  });
  return directors.filter(director => directors.lastIndexOf(director) === directors.indexOf(director));
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const spielbergDramas = moviesArray.filter(movie => movie.director === "Steven Spielberg" && movie.genre.includes("Drama"));
  return spielbergDramas.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  let sum = 0;
  if (moviesArray.length) {
    const scoresArray = moviesArray.map(movie => movie.score);
    scoresArray.forEach((score) => {
      if (score) {sum += score};
    });
    return Math.round((sum / scoresArray.length) * 100) / 100;
  } else {
    return sum;
  }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  dramaMovies = moviesArray.filter(movie => movie.genre.includes("Drama"));
  return scoresAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const newArray = moviesArray.slice()
  return newArray.sort((a, b) => {
    if (a.year === b.year) {
       return a.title.localeCompare(b.title)
    } else {
       return a.year - b.year
    }
  })
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const titles = moviesArray.map(movie => movie.title)
  return titles.sort().filter((title, index) => index < 20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  const arrayCopy = JSON.parse(JSON.stringify(moviesArray));;
  durationInMin = arrayCopy.map(movie => {
    const splitTime = movie.duration.split(" ")
    const firstNum = Number(splitTime[0].replace(/[^0-9]/g, ''))
    if (!movie.duration.includes("h")) {
      movie.duration = firstNum
    } else if (!movie.duration.includes("m")) {
      movie.duration = firstNum * 60
    } else {
      movie.duration = firstNum * 60 + Number(splitTime[1].replace(/[^0-9]/g, ''))
    }
    return movie
  })
  return durationInMin
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average

function bestYearAvg(moviesArray) {
  if (moviesArray.length > 1) {
    const sortedByYear = moviesArray.sort((a,b) => { return a.year - b.year})
    let minYear = sortedByYear[0].year;
    let maxYear = sortedByYear.at(-1).year;
    let years = []
    for (let i = minYear; i <= maxYear; i++) {years.push(i)};
    let objects = []

    years.forEach(year => {
      let ratings = moviesArray.filter(movie => movie.year === year).map(movie => movie.score)
      let object = {
        year: year,
        ratings: ratings.length ? Math.floor(ratings.reduce((acc, rating) => { return acc + rating }) / ratings.length *10) /10  : null
      }
      objects.push(object)
    })
    const result = objects.sort((a,b) => { return b.ratings - a.ratings })
    return `The best year was ${result[0].year} with an average score of ${result[0].ratings}`

  } else if (moviesArray.length === 1) {
    return `The best year was ${moviesArray[0].year} with an average score of ${moviesArray[0].score}`
  } else {
    return null
  }
}
