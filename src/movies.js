// The `movies` array from the file `src/data.js`.
//console.log('movies: ', movies);

const movies = require("./data")


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

/*function getAllDirectors(movies) {
const arrayDirectors=[];
  for(let i = 0; i<movies.length; i++ ){
   arrayDirectors.push(movies[i].director);
  }
  return arrayDirectors;
}*/

function getAllDirectors(movies) {
  return movies.map((movie)=> movie.director)
}
// Me pide un número!//
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies){
  const dramaSpielberg = movies.filter((movie) => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama'))
  return dramaSpielberg.length
}

/* En una sola línea:
return dramaSpielberg = movies.filter((movie) => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')).length;
*/
  
// Iteration 3: All scores average - Get the average of all scores with 2 decimals


function scoresAverage(movies) {
  const average = movies.reduce((avg, movie) => {
    if (typeof movie.score !==  "number"){
      return avg
    }else{
      return avg + movie.score /movies.length
    }
  }, 0)
  return parseFloat(average.toFixed(2))
}



// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesScore(movies) {
  const filmsDrama = movies.filter(movie => movie.genre.includes('Drama'))
  const totalScores=filmsDrama.reduce((sum,movie) =>{
    return sum + movie.score / filmsDrama.length
  },0)
  return parseFloat(totalScores.toFixed(2));
}



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(years) {
  return years.slice(0).sort((a, b) => {
    if (a.year > b.year) {
      return 1;
    } else if (a.year < b.year) {
      return -1;
    } else if (a.year === b.year) {
      if (a.title > b.title) {
        return 1;
      } else return -1;
    }
  });
}
orderByYear(movies);

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  const orderMovies = movies.map((movie) => movie.title);
  orderMovies.sort();
  const namesMovies = orderMovies.slice(0, 20);
  return namesMovies;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  movies = JSON.parse(JSON.stringify(movies));
  return movies.map (movie => {
    const duration = movie.duration.split('')
    .reduce((duration,time) => {
      if(time.includes('min')){
        duration += parseInt (time.replaceAll('min',''))
      }else{
        duration += parteInt (time.replaceAll('h','')) * 60
      }
      return duration;
    },0)
    movie.duration = duration;
    return movie;
  })
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}


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
