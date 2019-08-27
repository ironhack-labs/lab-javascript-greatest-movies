
/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 
function ratesAverage(movieArray) {
  return +(movieArray.reduce((ac, cu)=> ac + cu.rate, 0)/movieArray.length.toFixed(2));
}
// Iteration 2: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movieArray) {
  const dramaMovies = [...movieArray.filter(movie => movie.genre.includes('Drama'))];
  if (dramaMovies.length === 0) return 0;
  return +(dramaMovies.reduce((ac, cu) => ac + cu.rate, 0) / dramaMovies.length).toFixed(2);
}
// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
function  orderByDuration(movieArray) {
  //const byDuration = [...movieArray.filter(movie => movie.duration)];
  //if (byDuration.length===0) return 0;
  // return byDuration;
  return movieArray.sort((a, b) => {
    if (a.duration!== b.duration) {
      return a.duration - b.duration
    } 
  return a.title.localeCompare(b.title);
  })
}
// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
function howManyMovies(movieArray){
const SpielbergMovies =[...movieArray.filter(movie => movie.genre.includes('Drama') && movie.director ==='Steven Spielberg')];
return +SpielbergMovies.length;
}
// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movieArray){
  const sortedMovies = movieArray.sort((a, b) => {
    if (a.title.length!==b.title.length) return a.title-b.title;
    return a.title.localeCompare(b.title);
  });
  return sortedMovies.map(movieTitle => movieTitle.title).slice(0,20);
}
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function toMinutes(duration) {
  let hours = 0
  let min = 0
  let totalHours = 0
  let durationSplit = duration.split(" ")
  if (durationSplit.length >= 2) {
      hours = parseInt(durationSplit[0])
      min = parseInt(durationSplit[1])
      } else {
        if (durationSplit[0].indexOf("m") !== -1) {
            min = parseInt(durationSplit[0])
      } else if (durationSplit[0].indexOf("h") !== -1) {
          hours = parseInt(durationSplit[0]);
      }
  }
  totalHours = (hours * 60) + min
  return totalHours
}
function turnHoursToMinutes(movies) {
  let moviesInMinutes = movies.map(movie => {
    let newMovie = { ...movie }
    newMovie.duration = toMinutes(movie.duration)
    return newMovie
});
return moviesInMinutes
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average
function bestYearAvg (movieArray){
}