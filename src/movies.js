//const movies = require("./data");

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const arrayAllDirectors = moviesArray.map((movie) => {
    return movie.director;
  });
  return arrayAllDirectors;
}

//console.log(getAllDirectors(movies));

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  let sum = 0;
  const numberOfMovies = moviesArray.filter((movie) => {
    if (
      movie.director === "Steven Spielberg" &&
      movie.genre.includes("Drama")
    ) {
      sum += 1;
      return movie;
    }
  });
  return sum;
}

//console.log(howManyMovies(movies));

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }

  let average = moviesArray.reduce((accumulator, currentValue) => {
    if (currentValue.score) {
      return accumulator + currentValue.score;
    }
    return accumulator;
  }, 0);
  //console.log(average, moviesArray.length, Math.round((average/moviesArray.length) *100) / 100);

  return Math.round((average / moviesArray.length) * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  // for( i =0; i < moviesArray.length ; i++){
  // if (moviesArray.genre[i] !== 'Drama' ) {
  //     return 0;
  //   }
  // }

  let nombreDrama = 0;
  let averageDrama = moviesArray.reduce((accumulator, currentValue) => {
    if (currentValue.genre.includes("Drama")) {
      nombreDrama++;
      return accumulator + currentValue.score;
    } /*else {
      return 0;
    }*/
    //console.log(currentValue)
    return accumulator;
  }, 0);
  return Math.round((averageDrama / nombreDrama) * 100) / 100;
}

//console.log(dramaMoviesScore(movies))

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let newArray = moviesArray.map((moviesArray) => {
    return moviesArray;
  });


  newArray.sort((a, b) => a.year - b.year);
  //newArray.sort((a, b) => a.title.localeCompare(b.title));

  //     if (newArray.year - newArray.year === 0) {
  //       newArray.sort((a, b) => a.title.localeCompare(b.title));
  // }
  return newArray;
}
//console.log(orderByYear(movies));




// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  let newArray = moviesArray.map((moviesArray) => {
    return moviesArray.title;
  });

  newArray.sort((a, b) => a.localeCompare(b))
  let newArray20 = newArray.slice(0, 20);

  return newArray20;

}

console.log(orderAlphabetically(movies));


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
