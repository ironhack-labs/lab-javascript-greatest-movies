// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  let directorsArr = moviesArray.map((eachMovie) => {
    return eachMovie.director;
  });

  let filteredDirectorsArr = directorsArr.filter((eachDirector, index) => {

    if (directorsArr.indexOf(eachDirector) === index) {
      return true; 
    } else {
      return false; 
    }
  });

  return filteredDirectorsArr;
}

//console.log(getAllDirectors(movies));

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  let filteredMoviesArr = moviesArray.filter((eachMovie) => {

    if (eachMovie.director === "Steven Spielberg" && eachMovie.genre.includes("Drama")) {
      return true; 
    } else {
      return false; 
    }
  });

  return filteredMoviesArr.length;
}

//console.log(howManyMovies(movies));

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  let newScore = moviesArray.reduce((acc, eachMovie)=>{
    if(eachMovie.score === undefined || eachMovie.score === null){
      return acc;
    }else {
      return acc + eachMovie.score;
    }
    
  }, 0);

  let avgScore = newScore / moviesArray.length;
  return Math.round(avgScore * 100) / 100;
}

//console.log(scoresAverage(movies));

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

  let dramaArray = moviesArray.filter((eachMovie)=>{
    return eachMovie.genre.includes("Drama");
  });

  return scoresAverage(dramaArray);
}

//console.log(dramaMoviesScore(movies));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  return moviesArray.toSorted((movie1, movie2) => {
    if (movie1.year < movie2.year) {
      return -1;
    } else if (movie1.year > movie2.year) {
      return 1;
    } else {
      if (movie1.title < movie2.title) {
        return -1;
      } else if (movie1.title > movie2.title) {
        return 1;
      } else {
        return 0;
      }
    }
  });
}

//console.log(orderByYear(movies));
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  let titlesArray = moviesArray.map((eachMovie) => {
    return eachMovie.title;
  });
  let sortedTitlesArray = titlesArray.toSorted((movie1, movie2) => {
    if (movie1 < movie2) {
      return -1;
    } else if (movie1 > movie2) {
      return 1;
    }
  });
  return sortedTitlesArray.slice(0,20);
} 

console.log(orderAlphabetically(movies));

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
