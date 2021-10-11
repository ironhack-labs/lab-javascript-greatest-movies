// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require("./data");

// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
    return movies.map(movie => movie.director)
  }

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  let numberOfMovies = movies.filter(function(movie, index){
    if (movie.director === 'Steven Spielberg' && movie.genre.includes("Drama")) {
      return movie;
    }
  })
  return numberOfMovies.length;
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (movies.length === 0) {
    return 0;
  }
  let numberSum = movies.reduce((acc,item)=>{
    if (!item.score){
      return acc += 0 
    }
    return acc += item.score
  },0)
  return Number((numberSum/movies.length).toFixed(2))
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  let dramaMovie = movies.filter(function(movie, index){
    return movie.genre.includes("Drama")
  });

  return scoresAverage(dramaMovie);
 }

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  function compare(a,b){
  if(a.year > b.year) return 1;
  if(a.year < b.year) return -1;
  if(a.year === b.year){
    if (a.title > b.title) return 1;
    if (a.title < b.title) return -1;
    if (a.title === b.title) return 0;
   return 0;
  }
}
return movies.map(item=>item).sort(compare)
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  function compare(a,b){
   if(a > b) return 1;
   if(a < b) return -1;
  return 0;
   };
   return movies.map(item=>item.title).sort(compare).slice(0,20);
  }


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies) {
  let convertHourstoMin = movies.map((movie) => {
    let hoursToMinutes = movie.duration === 0 ? 0 : Number(movie.duration.split('h')[0]);
    return hoursToMinutes * 60;
  });
  let convertMin = movies.map((movie) => {
    let calculMin =
      movie.duration === 0
        ? 0
        : Number(movie.duration.split('min')[0].split(' ')[1]);
    return calculMin;
  });
  let totalDuration = movies.map((movie, index) => {
    let newMovie = {};
    newMovie.title = movie.title;
    newMovie.year = movie.year;
    newMovie.director = movie.director;
    console.log('sacamos ', convertHourstoMin[index], convertMin[index]);
    newMovie.duration = convertHourstoMin[index] +
      (isNaN(convertMin[index]) ? 0 : convertMin[index]);
    newMovie.genre = movie.genre;
    newMovie.score = movie.score;
    return newMovie;
  });
return totalDuration;

}





  /*let totalDuration = movies.map((movie, index)=> {
    let newMovie = { } 
    newMovie.title = movie.title;
    newMovie.year = movie.year;
    newMovie.director = movie.director;
    newMovie.duration = convertHourstoMin[index]+convertMin[index] ;
    newMovie.genre = movie.genre;
    newMovie.score = movie.score;

    return newMovie;
  })

  return totalDuration;*/

    //newMovie.duration = convertHourstoMin[index] || convertMin[index] === "NaN" || 0 ? 0 : convertHourstoMin[index]+convertMin[index] ;


// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(lotsOfMovies) {
  if (!lotsOfMovies.length) return null;

  let masterObject = {};

  lotsOfMovies.forEach(eachMovie => {
    if (!masterObject[eachMovie.year]) {
      masterObject[eachMovie.year] = [eachMovie];
    } else {
      masterObject[eachMovie.year].push(eachMovie);
    }
  });

  let highest = 0;
  let theActualYear;
  for (let theYear in masterObject) {
    if (ratesAverage(masterObject[theYear]) > highest) {
      highest = ratesAverage(masterObject[theYear]);
      theActualYear = theYear;
    }
  }
  return `The best year was ${theActualYear} with an average rate of ${highest}`;
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
