// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directorsArray = moviesArray.map((movie) => movie.director)
  return [...new Set(directorsArray)];
  }

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const filteredMoviesSpielbergDrama = moviesArray.filter(movie => movie.director==="Steven Spielberg" && movie.genre.includes("Drama") )
    return filteredMoviesSpielbergDrama.length;
  }

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
    if (movies.length === 0) {
      return 0;
    }
    const totalScores = movies.reduce((accumulator, movie) => {
      if (movie.score) {
        return accumulator + movie.score;
      } else {
        return accumulator;
      }
    }, 0);
    const averageScore = totalScores / movies.length;
    return Math.round(averageScore*100)/100;
  }

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const filteredArray = moviesArray.filter(movie => movie.genre.includes("Drama") )
    if (filteredArray.length === 0) {
        return 0;
      }
      const totalScores = filteredArray.reduce((accumulator, movie) => {
        if (movie.score) {
          return accumulator + movie.score;
        } else {
          return accumulator;
        }
      }, 0);
      const averageScore = totalScores / filteredArray.length;
      return Math.round(averageScore*100)/100;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const orderedArray= moviesArray.slice().sort((a,b)=> a.year-b.year || a.title.localeCompare(b.title))
    return orderedArray
  }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
    const titles = movies.map((movie) => movie.title)
    titles.sort((a, b) => a.localeCompare(b))
    const top20Titles = titles.slice(0, 20)
    return top20Titles
  }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    const newMoviesArray = movies.map((movie) => {
      const array = { ...movie }
      const convertTime = (duration) => {
        const minutes = duration.split(' ').reduce((accumulator, value) => {
      let number = parseInt(value)
      if (value.includes('h')) {number *= 60}
      else if (value.includes('min')) {number}
      return accumulator + number
    }, 0)
    return minutes
  }
      array.duration = convertTime(
        movie.duration
      );
      return array
    })
    return newMoviesArray
  }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if(moviesArray){return null}
}
