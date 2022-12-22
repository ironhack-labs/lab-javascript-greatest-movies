// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

const getAllDirectors = (moviesArray) => {
  const allDirectors = moviesArray.map((element) => element.director);
  return allDirectors;
};

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
const howManyMovies = (moviesArray) => {
  if (!moviesArray.length) {
    return 0;
  }
  const steven = moviesArray.filter(
    (element) =>
      element.genre.includes("Drama") && element.director === "Steven Spielberg"
  );
  return steven.length;
};

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
const scoresAverage = (moviesArray) => {
  if (!moviesArray.length) {return 0}
  let moyenne0 = moviesArray.filter(e => e.score)
  let moyenne = moyenne0.reduce((accumulator, currentValue) => (accumulator + currentValue.score), 0) / moviesArray.length;
  let moyenne2 =moyenne.toFixed(2)
  //let moyenne2 = Math.round(moyenne*100)/100
  return Number(moyenne2)
}

// Iteration 4: Drama movies - Get the average of Drama Movies
const dramaMoviesScore = (moviesArray) => {
    let avg = moviesArray.filter(element => element.genre.includes('Drama'))
    return scoresAverage(avg)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

const orderByYear = (movies) => {
  const moviesCopy = movies.map(e => e)
  const ordered = moviesCopy.sort((a, b) => a.year - b.year)
  const orderedByName = ordered.sort((a, b) => {
    if(a.year === b.year && a.title < b.title){
      return -1
    } else if(a.year === b.year && a.title > b.title){
      return 1
    } else {
      return 0
    }
  })
  return orderedByName
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const moviesByYear = moviesArray.map(e => e)
  const moviesTitle = moviesByYear.map(e => e.title)
  const moviesTitleOrdered = moviesTitle.sort()
  let max20 = []
  if (moviesTitleOrdered.length > 19) {
  for (let i = 0; i<20; i++) {
    max20.push(moviesTitleOrdered[i])
  }
  return max20
} else {
  return moviesTitleOrdered
}
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  const newMovies = moviesArray.map(e => e)
  for (let i = 0; i<newMovies.length; i++) {
    newMovies[i].duration = newMovies[i].duration.replace('h', '')
    newMovies[i].duration = newMovies[i].duration.replace('min', '')
    newMovies[i].duration = newMovies[i].duration.replace(' ', '.')
    newMovies[i].duration = Number(newMovies[i].duration)
    let x = 0
    let y = 0
    let z = 0
    if (newMovies[i].duration >= 1) {
      x = Math.floor(newMovies[i].duration)*60
      y = Math.round((newMovies[i].duration - Math.floor(newMovies[i].duration))*100)
      z = x + y
      newMovies[i].duration = z
    } else {
      x = (newMovies[i].duration) * 100
      newMovies[i].duration = x
    }
  }
  return newMovies
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
