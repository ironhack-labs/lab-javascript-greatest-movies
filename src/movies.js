// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const directors = moviesArray.map((movie) => {
    return movie.director
  });
  // Bonus 1.1 no repeating directors
  const uniqueDirectors = directors.filter((director, index) => {
    return directors.indexOf(director) === index;
  })
  return uniqueDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const filteredMovies = moviesArray.filter((movie) => {
    return movie.genre.includes('Drama') && movie.director === 'Steven Spielberg';
  });
  return filteredMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  const sum = moviesArray.reduce((sum, movie) => {
    if (movie.score > 0) {
      return sum + movie.score;
    } else {
      return sum;
    }
  }, 0);
  if (moviesArray.length > 0) {
    const prom = sum / moviesArray.length;
    return Math.abs(prom.toFixed(2));
  } else {
    return 0;
  }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter((movie) => movie.genre.includes('Drama'))
  const sumDrama = dramaMovies.reduce((sum, movie) => {
    if (dramaMovies.length > 0) {
      return sum + movie.score;
    } else
      return sum;
  }, 0);
  if (dramaMovies.length > 0) {
    const prom = sumDrama / dramaMovies.length;
    return Math.abs(prom.toFixed(2));
  } else {
    return 0;
  }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const orderedArray = moviesArray.map((movie) => movie);
  orderedArray.sort((a, b) => {
    if (a.year === b.year) {
      if (a.title < b.title) {
        return -1;
      } else if (a.title > b.title) {
        return 1;
      } else {
        return 0;
      }
    } else {
      return a.year - b.year;
    }
  });
  return orderedArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const titles = moviesArray.map((movie) => movie.title);
  titles.sort();
  if (titles.length <= 20) {
    return titles;
  } else {
    titles.splice(20)
    return titles;
  }
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  const moviesArr = structuredClone(moviesArray);
  const movies = moviesArr.map((movie) => {
    let timeArr = movie.duration.split(' ');
    let timeMin;
    let hours = timeArr[0].replace('h','');
    let mins;
    if (timeArr.length === 2) {
      mins = timeArr[1].replace('min','');
      timeMin = Math.abs(hours) * 60 + Math.abs(mins);
    } else if (timeArr.length === 1) {
      timeMin = Math.abs(hours) * 60;
    } else {
      timeMin = 0;
    }
    movie.duration = timeMin;
    return movie;
  });
  return movies;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (moviesArray.length > 0) {
    const years = moviesArray.map((movie) => movie.year);
    const uniqueYears = years.filter((year, index) => {
      return years.indexOf(year) === index;
    });
    const moviesByYear = uniqueYears.map((year) => {
      return moviesArray.filter((movie) => movie.year === year);
    });
    const promScoreByYear = moviesByYear.map((movieGroup) => {
      const totalScoreByYear = movieGroup.reduce((sum, movie) => {
        return sum + movie.score
      },0);
      return totalScoreByYear / movieGroup.length;
    });
    const yearsProm = uniqueYears.map((year, index) => {
      return {year: year, prom: promScoreByYear[index]};
    });
    yearsProm.sort((a, b) => {
      if (a.prom === b.prom) {
        return a.year - b.year;
      } else {
        return b.prom - a.prom;
      }
    });
    return `The best year was ${yearsProm[0].year} with an average score of ${yearsProm[0].prom}`;
  } else {
    return null;
  }
}
