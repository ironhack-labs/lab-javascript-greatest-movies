// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arr) {
  let directorsNames = arr.map(function (element) {
    return element.director;
  });
  return directorsNames;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
  let stevenDramaMovies = arr
    .filter(function (element) {
      return (
        element.director === "Steven Spielberg" &&
        element.genre.includes("Drama")
      );
    })
    .map(function (element) {
      element.genre["Drama"];
    });

  return stevenDramaMovies.length;
};

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let scores = arr.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.score;
  },0);
  return Number((scores/arr.length).toFixed(2));
};

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr){
  let dramaMovies = arr.filter(function(element){
    return element.genre.includes('Drama')
});
let initialValue = 0;
let average = dramaMovies.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.score;
  }, initialValue);
return dramaMovies.length === 0 ? 0 : Number((average/dramaMovies.length).toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
  let list = arr.sort(function (a, b) {
    if(a.year < b.year){
        return -1;
    } else if ( a.year < b.year){
        return 1;
    } else {
        return 0;
    }
});

let orderedList = [];
orderedList = list.sort(function (a, b){
   if(a.year === b.year){
    return a.title.localeCompare(b.title);
   } 
})
return orderedList;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
  let list = [];
    list= arr.sort(function (a, b) {
        if(a.title < b.title){
            return -1;
        } else if (a.title > b.title){
            return 1;
        } else {
            return 0;
        }
        
    }).slice(0, 20);
    return list;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

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
    bestYearAvg
  };
}
