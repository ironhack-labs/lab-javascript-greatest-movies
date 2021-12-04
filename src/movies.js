// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movieList) {
  const directors = movieList.map(movie => movie.director);
  const directorsUnique = [];
  directors.forEach(director => {
    if(!directorsUnique.includes(director)) {
      directorsUnique.push(director);
    }
  })
  return directorsUnique;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movieList) {
  const spielbergMovies = movieList.filter(movie => {
    return movie.director === 'Steven Spielberg' && movie.genre.includes('Drama');
  });
  return spielbergMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movieList) {
  if(movieList.length === 0) {
    return 0;
  }

  /* const moviesWithScore = movieList.filter(movie => {
    return 'score' in movie && typeof movie.score === 'number';
  });
  const scoreSum = moviesWithScore.reduce((acc, movie) => acc + movie.score, 0);
  const average = scoreSum / moviesWithScore.length; */

  const scoreSum = movieList.reduce((acc, movie) => {
    if('score' in movie && typeof movie.score === 'number') {
      return acc + movie.score;
    } else {
      return acc;
    }
  }, 0);
  const average = scoreSum / movieList.length;
  return Number(average.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movieList) {
  const dramaList = movieList.filter(movie => movie.genre.includes('Drama'));
  if(dramaList.length === 0) {
    return 0;
  }
  const scoreSum = dramaList.reduce((acc, movie) => acc + movie.score, 0);
  const average = scoreSum / dramaList.length;
  return Number(average.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movieList) {
  const sortedByYear = [...movieList].sort((a, b) => {
    if(a.year === b.year) {
      return a.title.localeCompare(b.title);
    } else {
      return a.year - b.year;
    };
  });
  return sortedByYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movieList) {
  const sortedTitles = movieList.map(movie => movie.title).sort((a, b) => a.localeCompare(b));
  return sortedTitles.slice(0,20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movieList) {
  const adjustedList = movieList.map(movie => {
    const timeArray = movie.duration.split(' ');
    const converted = timeArray.map(time => {
      return time.includes('h') ? parseInt(time)*60 : parseInt(time);
    });
    
    const totalMinutes = converted.reduce((a, b) => a + b)
    const adjustedMovie = {...movie, duration: totalMinutes};
    return adjustedMovie;
  });
  return adjustedList;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(movieList) {
  if (movieList.length === 0) {
    return null;
  }
  const yearlyAvg = {};
  movieList.forEach(movie => {
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
    bestYearAvg,
  };
}
