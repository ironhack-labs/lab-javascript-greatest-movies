
const movies = require('./data');

// The `movies` array from the file `src/data.js`.
// console.log('movies: ', movies);

// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(moviesArray) {
  const allDirectors = moviesArray.map(movie => movie.director);
  return allDirectors;
}
// (from review)
// function getAllDirectors(myMoviesArray){
//   return myMoviesArray.map(element => element.director);
// }



// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
// function getAllDirectors() {}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

const howManyMovies(myMoviesArray){
  const allSpielburgMovies = moviesArray.filter(movie => movie.director === "Steven Spielburg" && movie.genre.includes('Drama'));
  return allSpielburgMovies.length;
}
//  from review
//  const howManyMovies(myMoviesArray){
//    return myMoviesArray.filter(element => element.director === 'Steven Spielburg' && element.genre.incldues('Drama'))




// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(myMmoviesArray) {
  const averageScore = moviesArray.reduce(finalSum, eachMovie) => (finalSum + eachMovie) / moviesArray.length);
  const finalAverage = Number(averageScore.toFixed(2));
  console
  return finalAverage;
}

// from review
// function scoresAverage(myMoviesArray) {
// if(myMmoviesArray.length===0) return 0;
// return (myMoviesArray.reduce((accumulator, element)=> accumulator + element.score, 0) / myMoviesArray.length).toFixed(2)
// }
//console.log(scoresAverage)


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(myDramaMovies) {
  const myDramaMovies = myMoviesArray.filter(element => element.genre.includes('Drama'));
  return scoresAverage(myDramaMovies);

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(myMoviesArray) {
  const myNewMoviesArray = [...myMoviesArray];
  return myMoviesArray.sort((a, b)) => {
    if (a.year, b.year) {
      return 1;
    }
  }
  if (a.year < b.year) {
    return -1;
  }
  return 0; if (a.year === b.year) {
    if (a.title.localeCompare(b.title)) {
      return 1;

    }
    if (b.title.localeCompare(a.title)) {
      return 1;
    }
  }

})

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(myMmoviesArray) {
  const myTitlesArray = myMoviesArray.map(element => element.title);
  myTitlesArray.sort();
  if (myTitlesArray.lengh >= 20) {
    return myMmoviesArray.slice(0, 20);
  } else {
    return myTitlesArray;
  }
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
// function turnHoursToMinutes(myMoviesArray) {=
// return myMoviesArray.map(element =>{
//   let [hours, minutes] = element.duration.split('h')
//   console.log(hours,minutes);
//   hours = number(hours);
//   minutes = minutes.trim();
//   minutes = minutes.split('min')[0];
//   minutes = number(minutes)
//   const totalMinutes = hours * 60 + minutes;
//   return {
//     ...element,
//     duration
//   }
//   return element;
// })

// }

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
    turnHoursToMinutes,
    bestYearAvg,
  };
}
