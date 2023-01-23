// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  let directorArray = moviesArray.map((element, index) => {
    return element.director;
  });
  return directorArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  //   moviesArray.forEach((element) => {
  let spielbergMovie = moviesArray.filter((element) => {
    if (element.director == "Steven Spielberg") {
      return true;
    } else {
      return false;
    }
  });

  let count = 0;

  spielbergMovie.forEach((element) => {
    if (element.genre.includes("Drama")) count++;
  });

  return count;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }

  let theArrayScores = moviesArray.reduce((acc, element) => {
    if (element.score !== undefined) {
      return acc + element.score;
    } else {
      return acc;
    }
  }, 0);

  return Math.round((theArrayScores / moviesArray.length) * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }

  let dramaMoviesArray = moviesArray.filter((element) => {
    if (element.genre.includes("Drama")) {
      return true;
    } else {
      return false;
    }
  });

  if (dramaMoviesArray.length === 0) {
    return 0;
  }

  let dramaMovieScoreSum = dramaMoviesArray.reduce((acc, element) => {
    if (element.score !== undefined) {
      return acc + element.score;
    } else {
      return acc;
    }
  }, 0);

  return Math.round((dramaMovieScoreSum / dramaMoviesArray.length) * 100) / 100;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let cloneArray = structuredClone(moviesArray);
    cloneArray.sort((element1, element2) => {
      if (element1.year < element2.year) {
        return -1;
      } else if (element1.year > element2.year) {
        return 1;
      }else if(element1.year === element2.year){
          if (element1.title > element2.title) {
              return 1; 
            } else if (element1.title < element2.title) {
              return -1;
            } else {
              return 0;
            }
      }
  
    });
  
    return cloneArray
  }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

let cloneOrder = structuredClone(moviesArray) 
let alphabeticOrder = cloneOrder.sort((element1, element2)=>{
    if (element1.title > element2.title) {
        return 1; 
      } else if (element1.title < element2.title) {
        return -1;
      } else {
        return 0;
      }

})

let only20 = alphabeticOrder.splice(0,20)
let onlyString = only20.map((element)=> { 
    return element.title.toString();
})
return onlyString
}
    
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
