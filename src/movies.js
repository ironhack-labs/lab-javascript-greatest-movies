// The `movies` array from the file `src/data.js`.
// console.log('movies: ', movies);

const movies = require("./data");


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  return movies.map(movie => movie.director)
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  return movies.filter(movie => movie.director == 'Steven Spielberg' && movie.genre.includes('Drama')).length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (movies.length === 0){
    return 0
  }
  const totalScore = movies.reduce((bucket, nextVal) =>{
    nextVal.score? nextVal.score : nextVal.score = 0;
    return bucket + nextVal.score;
    }, 0) ;
    let averagScore = totalScore / movies.length;
    console.log({totalScore},{averagScore});
  return +averagScore.toFixed(2)
}
// console.log(scoresAverage(movies));  

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  const onlyDrama = movies.filter(movie=>movie.genre.includes('Drama'))
  return scoresAverage(onlyDrama)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const sortedMovies = movies.slice();
  return sortedMovies.sort((a, b) => a.year - b.year || a.title.localeCompare(b.title))
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  const sortedMovies = movies.slice();
  return sortedMovies.sort((a, b) => a.title.localeCompare(b.title)).slice(0,20).map(movie => movie.title)


}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies) {
  const moviesCopy = JSON.parse(JSON.stringify(movies));
  
  let newDuration = moviesCopy.map(function (movie) {
    if(typeof movie.duration === "number") {return movie}

    if (movie.duration.includes('h') && movie.duration.includes('min')){
      const durationSplit = movie.duration.split(' ');
      const hours = +durationSplit[0].slice(0,-1);
      const mins = +durationSplit[1].slice(0,-3);
      movie.duration = hours * 60 + mins;
    return movie
    } else if (movie.duration.includes('h') && !movie.duration.includes('min')) {
      const durationSplit = movie.duration.split(' ');
      const hours = +durationSplit[0].slice(0,-1);
      movie.duration = hours * 60 ; 
    } else {
      
    }
    return movie
  });
  return newDuration
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(movies) {
  // if yaer is similar calculate avrage rating and stor it in annav
  // filter similar years in array
  // reduce to get avvv
  // map add new prop
  // sort by avr
  // string template
  if (movies.length === 0){return null}
  const moviesCopy = JSON.parse(JSON.stringify(movies));
  const moviesAvrYear = moviesCopy.map( movie => {
    let x = movie.year;
    let yearOfMovie = moviesCopy.filter (ymovie => ymovie.year === x);
    movie.yearAvr = scoresAverage(yearOfMovie);
    return movie
  })
  const sortedMovies = moviesAvrYear.sort( (a, b)=> b.yearAvr - a.yearAvr || a.year - b.year)

  return `The best year was ${sortedMovies[0].year} with an average score of ${sortedMovies[0].yearAvr}`
  
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
