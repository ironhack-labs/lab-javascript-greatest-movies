// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  let allDirectors = moviesArray.map((movie) => {
    return movie.director;
  });
  return allDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  return moviesArray.filter((movie) => {
    return (
      movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
    );
  }).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length > 0) {
    let totalScore = moviesArray.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.score;
    }, 0);
    let averageScore = (totalScore / moviesArray.length).toFixed(2);
    averageScore = Number.parseFloat(averageScore);
    return averageScore;
  } else {
    return 0;
  }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let dramaMoviesArray = moviesArray.filter((movie) => {
    return movie.genre.includes('Drama');
  });
  if (dramaMoviesArray.length > 0) {
    let total = dramaMoviesArray.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.score;
    }, 0);
    let averageDramaScore = (total / dramaMoviesArray.length).toFixed(2);
    averageDramaScore = Number.parseFloat(averageDramaScore);
    return averageDramaScore;
  } else {
    return 0;
  }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const moviesCopy = [...moviesArray];
  let sorted = moviesCopy.sort((a, b) => {
    let result = a.year - b.year;
    if (result !== 0) {
      return result;
    }
    if (a.title < b.title) {
      return -1;
    } else if (a.title > b.title) {
      return 1;
    } else {
      return 0;
    }
  });
  return sorted;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  let titles = moviesArray.map((movie) => movie.title).sort();
  let resultTitles = titles.slice(0, 20);
  return resultTitles;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// Nic: I did not finish this one, but I did manage to turn hours into minutes, 
// but it ended up manipulating the original array.. :)  
function turnHoursToMinutes(moviesArray) {
    let resultArray = [];
  moviesArray.forEach((movie) => {
    let minutes = 0;
    let movieLength = movie.duration;
    movieLength = movieLength.split(" ");

    movieLength.forEach((number) => {
      if (number.slice(number.length - 1) === "h") {
        let addHours = number.substring(0, number.length - 1);
        addHours = Number.parseFloat(addHours);
        addHours = addHours * 60;
        minutes += addHours;
      } else if (number.slice(number.length - 3) === "min") {
        let addMins = number.substring(0, number.length - 3);
        addMins = Number.parseFloat(addMins);
        minutes += addMins;
      }
    });
    movie.duration = minutes;
    resultArray.push(movie);
  });
  return resultArray;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}

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
