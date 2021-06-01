// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(array) {
  let newArray = array.map(function(person){
    return person.director;
  })
  return newArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(arrayMovies) {
  let spielbergArray = arrayMovies.filter(function(movie){
    return movie.director === 'Steven Spielberg' && movie.genre.includes('Drama');
  })
  let arrayTitle = spielbergArray.map((element) => {
    return element.title;
  })
  return arrayTitle.length;
}
// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(array) {
  const average = array.reduce(function(sum, movie){
    return sum + movie.score / array.length;
  },0)
  return Math.round(average*100)/100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesScore(array) {
  const dramaMovies = array.filter(function(movie){
    return movie.genre.includes('Drama');
  })
  const dramaMoviesScoreAv = scoresAverage(dramaMovies);
  return dramaMoviesScoreAv;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(array) {
  let orderedYears = array.sort(function(a, b){
    if(a.year !== b.year){
      return a.year - b.year;
    }else if(a.year === b.year){
      let alphabet = array.sort(function(a,b){
        a.title - b.title;  
      })
      return alphabet;
    }  
  })
  return orderedYears;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(array) {
  let firstTwenty = array.slice(0,20);
  let titles = firstTwenty.map(function(movie){
    return movie.title;
  })
  let orderedByTitle = titles.sort();
  return orderedByTitle;
  } 

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {                   /* não deu tempo */
  let hoursToMin = data.value.split (":")
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
