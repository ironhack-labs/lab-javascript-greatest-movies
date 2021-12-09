// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

// function getAllDirectors(data) {
//   const directors = data.map((movie) => movie.director);
//   return directors;
// }

// BONUS
function getAllDirectors(data) {
  const directors = data.map((movie) => movie.director);
  let cleanDirectors = [];
  directors.forEach((director) => {
    if (!cleanDirectors[director]) {
      cleanDirectors.push(director);
    }
  });
  return cleanDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const filteredArray = movies.filter(
    (movie) =>
      movie.genre.includes('Drama') && movie.director === 'Steven Spielberg'
  );
  return filteredArray.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (movies.length === 0) {
    return 0;
  } else {
    const filteredMovies = movies.filter(
      (movie) => typeof movie.score == 'number'
    );
    const total = filteredMovies.reduce((acc, value) => {
      return acc + value.score;
    }, 0);
    const averageScore = total / movies.length;
    return Number(averageScore.toFixed(2));
  }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  if (movies.length === 0) {
    return 0;
  } else {
    const filteredMovies = movies.filter(
      (movie) => movie.genre == 'Drama' && typeof movie.score == 'number'
    );
    if (filteredMovies.length === 0) {
      return 0;
    } else {
      const total = filteredMovies.reduce((acc, value) => {
        return acc + value.score;
      }, 0);
      const averageScore = total / filteredMovies.length;
      return Number(averageScore.toFixed(2));
    }
  }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  if (movies.length == 1) {
    const singleMovieArray = movies.map((movie) => movie);
    return singleMovieArray;
  }
  const orderedMovies = movies.sort((a, b) => {
    if (a.year == b.year) {
      return a.title.localeCompare(b.title);
    } else {
      return a.year - b.year;
    }
  });
  const mappedMovies = orderedMovies.map((movie) => movie);
  return mappedMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  if (movies.length == 1) {
    const singleMovieArray = movies.map((movie) => movie.title);
    return singleMovieArray;
  }
  const mappedMovies = movies.map((movie) => movie.title);
  const orderedMovies = mappedMovies.sort((a, b) => {
    return a.localeCompare(b);
  });
  const splicedMovies = orderedMovies.splice(0, 20);
  return splicedMovies;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  let newArray = movies.map(a => {return {...a}})
  let result = [];
  newArray.forEach((movie) => {
    const hours = movie.duration.split('h')[0];
    if(movie.duration.charAt(3) === '') {
      const zeroMins = ' 0min'
      const newDuration = movie.duration.concat(zeroMins)
      movie.duration = newDuration
    }
    const mins = movie.duration.split(' ')[1].split('min')[0]; 
    const totalMinutes = Number(mins) + Number(hours * 60);
    movie.duration = totalMinutes;
    result.push(movie);
  });
  return result;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average. 

// Copied from Aljosja. 

// Notes:
// - created empty object
// - used the for... in to see if it the year that's being analysed in the loop is in the new object created
// - if it's already there, push the movie's score into that year using the object[index] way. 
// THEN, we loop through the completed new object (years and scores). Variable scores equals the value of object[index], so will result in an array of scores of that year that we're looping through.  
// We use reduce to then get that average.
// We re-assign each years value to be the average, so we now have the years and their average scores
// Object.entries of that object will give us an array of arrays, with this structure: [[1991, 8.0],[1992, 7.4]]
// then, simply sort the array by the score of the year, select the first in the array and return your findings.


function bestYearAvg(movies) {
  if (movies.length === 0) {
    return null;
  }
  const yearlyAvg = {};
  movies.forEach(movie => {
    if(movie.year in yearlyAvg) {
      yearlyAvg[movie.year].push(movie.score);
    } else {
      yearlyAvg[movie.year] = [movie.score];
    }
  });
  for (let year in yearlyAvg) {
    const scores = yearlyAvg[year];
    const average = scores.reduce((a, b) => a + b) / scores.length;
    yearlyAvg[year] = average;
  }
  const yearlyAvgArr = Object.entries(yearlyAvg);
  const sortedAvg = yearlyAvgArr.sort((a, b) => {
    return b[1] - a[1];
  })
  const bestYear = sortedAvg[0];
  const result = {
    year: bestYear[0],
    score: bestYear[1]
  };

  return `The best year was ${result.year} with an average score of ${result.score}`
}

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
