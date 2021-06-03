// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?


function getAllDirectors(arr){

  return arr.map ( function (value) {

    return value.director;

  })
}




// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
 
  const spielbergDramas = arr.filter(spielbergFilms).filter(dramaFilms);

  function spielbergFilms(value1) {
    return value1.director === "Steven Spielberg";
  }

  function dramaFilms(value2) {
    return value2.genre.includes("Drama");
  }

  return spielbergDramas.length;
  
}




// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr) {
  if (arr.length === 0){
    return 0;
  }
  else {
    const avgScore = (arr.filter(onlyWithValues).reduce(sum, 0)) / arr.length;

    function onlyWithValues(movie){
      return movie.score !== "";
    }

    function sum(count, value) {
      return (count += value.score);
      }

    const roundNum = function (num, numPlaces) {
      const multiplyByTen = Math.pow(10, numPlaces)
      const afterRound = Math.round(num * multiplyByTen)
      return afterRound / multiplyByTen
    };

    return roundNum(avgScore, 2);
  }
}




// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr) {
 
  const dramaMovies = arr.filter(filterFunction);

  function filterFunction(item){
    return item.genre.includes("Drama");
  }

  if (dramaMovies.length === 0){
    return 0;
  }
  else {
    const avgScore = (dramaMovies.filter(onlyWithValues).reduce(sum, 0)) / dramaMovies.length;

    function onlyWithValues(movie){
      return movie.score !== "";
    }

    function sum(count, value) {
      return (count += value.score);
      }

    const roundNum = function (num, numPlaces) {
      const multiplyByTen = Math.pow(10, numPlaces)
      const afterRound = Math.round(num * multiplyByTen)
      return afterRound / multiplyByTen
    };

    return roundNum(avgScore, 2);
  }
  
}





// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {

  const sortedByTitle = arr.sort(function (a, b) {
    return a.title - b.title;
  });
  
  const finalSortedArray = sortedByTitle.sort(function (a, b) {
    return a.year - b.year;
  });
  
  return finalSortedArray;
}





// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {

  const orderedArr = arr.sort(function (a, b) {
    return a.title - b.title;
  });

  const newArr = [];

  for (let i = 0; i < 20; i++){
    newArr.push(orderedArr[i].title);
  }

  return newArr;
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
    bestYearAvg,
  };
}
