// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  let moviesDirector = moviesArray.map(function (element) {
    return element.director;
  });
  return moviesDirector;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  if (!moviesArray.length) return 0;
  let director1 = moviesArray.filter(function (name) {
    return (
      name.director.includes("Steven Spielberg") && name.genre.includes("Drama")
    );
  });
  return director1.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (!moviesArray.length) return 0;
  let Avg =
    moviesArray.reduce((a, b) => {
      if (!b.score) return a;
      return a + b.score;
    }, 0) / moviesArray.length;

  let overAllAvg = Avg.toFixed(2);
  return Number(overAllAvg);
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let Drama1 = moviesArray.filter(function (name) {
    return name.genre.includes("Drama");
  });
  if (!Drama1.length) return 0;
  let avg =
    Drama1.reduce((a, b) => {
      if (!b.score) return a;
      return a + b.score;
    }, 0) / Drama1.length;

  let overAllAvg = avg.toFixed(2);
  return Number(overAllAvg);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

let newArr = [...moviesArray]
   return newArr.sort((a, b) => {
     let check = a.year - b.year;
     if(check === 0) {
       check = a.title.localeCompare(b.title);
     }
     return check
   })
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let order = moviesArray.map(function(element) {
        return element.title
      });
      arr = order.sort((a, b) => a.localeCompare(b));
    return arr.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
