// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  return moviesArray.map(prod => prod.director)
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  return moviesArray.filter(movie => movie.genre.includes("Drama") && movie.director.includes("Steven Spielberg")).length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (!moviesArray.length) return 0

  const average = ((moviesArray.filter((movie) => typeof movie.score === "number")).reduce((acumulador, valorAtual) => acumulador + valorAtual.score, 0)) / moviesArray.length

  return (Math.round(average*100))/100
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

  const dramaAverage = moviesArray.filter(drama => drama.genre.includes('Drama'))
  if(!dramaAverage.length) return 0

  const average = (dramaAverage.filter(number => typeof number.score === 'number')).reduce((acumulador, valorAtual) => acumulador + valorAtual.score,0) / dramaAverage.length
  return (Math.round(average*100))/100
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let orderedArr = [...moviesArray]
  orderedArr.sort((a, b) => {
    if (a.year > b.year) return 1
    if (a.year < b.year) return -1
    if (a.title > b.title) return 1
    else if (a.title < b.title) return -1
    else return 0
  }) 
    return orderedArr
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  return moviesArray.map(movie => movie.title).sort().slice(0, 20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {

  //Encontrei no google. Entendi apenas uma parte de como foi feito.

  return moviesArray.map(movie => {
      let [hours, minutes] = movie.duration.replace('min', '').split(' ');
      let durationInMinutes = (hours[0] * 60);
      if (minutes) durationInMinutes = (hours[0] * 60) + (+minutes);
      return {...movie, duration: durationInMinutes}
  });
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (moviesArray.length === 0) return null
}
