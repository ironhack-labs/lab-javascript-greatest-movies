// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let onlyDirectors = moviesArray.map(function(movie) {
        return movie.director;
    })
    return onlyDirectors;
  }

  // 4th test is coming up as green but not the 2nd and 3rd for some reason!

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let spielbergMovies = moviesArray.filter(function(movie) {
      if (movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')) {
        return true;
      } else {
        return false;
      }
    });
    return spielbergMovies.length;
}

    // 2nd & 7th tests coming up red

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    let allScores = moviesArray.reduce(function(acc, curr) {
        return acc + curr.score;
    }, 0);
    let avgScore = (allScores / moviesArray.length);
    if (moviesArray === []) {
        return 0;
    } else {
    return avgScore.toFixed(2);
    }
}

  // working in stackblitz but tests showing up red :(

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let dramaMovies = moviesArray.filter(function(movie) {
    if (movie.genre.includes('Drama')) {
      return true;
    } else {
      return false;
    }
  });
  let dramaScores = dramaMovies.reduce(function(acc, curr) {
    return acc + curr.score;
  }, 0);
  let avgDrama = dramaScores / moviesArray.length;
  return avgDrama.toFixed(2);
}

    // also working in stackblitz but tests still showing up red in jasmine :(

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let sortedArr = moviesArray.sort((a,b) => (a.year - b.year || a.title.localeCompare(b.title)));
  return sortedArr;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const alphaTitle = moviesArray.sort((a,b) => a.title.localeCompare(b.title));
  const topTwenty = alphaTitle.splice(0,20);
  const topTwentyTitles = topTwenty.map(function(movieObj) {
    return movieObj.title;
  });
  return topTwentyTitles;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
