// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  return moviesArray.map((movie) => movie.director)
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  return moviesArray.filter(
    (movie) =>
      movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
  ).length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0
  }
  const total = moviesArray.reduce((acc, val) => {
    if (val.score) {
      return acc + val.score
    }
    return acc
  }, 0)
  return Math.round((total / moviesArray.length) * 100) / 100
  //Number((total / moviesArray.length).toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  return scoresAverage(moviesArray.filter((movie) => movie.genre.includes('Drama')));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const newArr = moviesArray.slice()
  const movieYear = newArr.sort(function(a, b) {
    if (a.year > b.year) {
      return 1;
    } else if (a.year < b.year) {
      return -1;
    } else if (a.year === b.year) {
      if (a.title > b.title) {
        return 1
      } else {
        return -1
      }
    }
  })
  return movieYear
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  return moviesArray.map(movie => movie.title).sort().slice(0, 20)
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  // const newArr = structuredClone(moviesArray)
  const newArr = moviesArray.slice()
   newArr.map(movie => {
     movie.duration = movie.duration.replace(/[^0-9]/g, '')
     let hour = Number(movie.duration[0] * 60)
     let min = Number(movie.duration[1])
     let other = Number(movie.duration[2])
     if (movie.duration.length === 1) {
       movie.duration = hour
     }
     else if (movie.duration.length === 2) {
       movie.duration = hour + min
     }
     else if (movie.duration.length === 3) {
       movie.duration = hour + min * 10 + other
     } else {
        movie.duration
     }
   })
   return newArr
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
// Solution 2
function turnHoursToMinutes(movies) {
  return movies.map((m) => {
    const copy = { ...m };
    let durationStr = m.duration.split(' ');
    let hours = 0;
    let minutes = 0;
    if (durationStr.length === 1) {
      if (durationStr[0].includes('h')) {
        hours = parseFloat(durationStr[0]);
      } else {
        minutes = parseFloat(durationStr[0]);
      }
    } else {
      hours = parseFloat(durationStr[0]);
      minutes = parseFloat(durationStr[1]);
    }
    const durationInMinutes = hours * 60 + minutes;
    copy.duration = durationInMinutes;
    return copy;
  });

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  //ca marche! mais je n'ai pas compris l'error de checker
  if (moviesArray.length === 0) {
    return null
  }
  const bestScore = moviesArray.sort(function(a, b) {
    if(a.score < b.score) {
      return 1
    }
    else {
      return -1
    }
  })
  const bestYear = bestScore[0].year
  const bestScoreAverage =  scoresAverage(moviesArray.filter((movie =>
    movie.year === bestYear
   )))
   return `The best year was ${bestYear} with an average score of ${bestScoreAverage}`
}


// BONUS Iteration: Best yearly rate average - Best yearly rate average
// Solution 2
function bestYearAvg(movies) {
  if (!movies.length) return null;
  const ratesPerYear = movies.reduce((acc, movie) => {
    if (movie.year in acc) {
      acc[movie.year].push({ score: movie.score });
    } else {
      acc[movie.year] = [{ score: movie.score }];
    }
    return acc;
  }, {}); 
  let bestYear = 0;
  let bestAvg = 0;

  for (const year in ratesPerYear) {
    const avg = scoresAverage(ratesPerYear[year]);
    if (avg > bestAvg) {
      bestYear = year;
      bestAvg = avg;
    }
  }
  return `The best year was ${bestYear} with an average score of ${bestAvg}`;
}
if (typeof module !== 'undefined') {
  module.exports = {
    howManyMovies,
    getAllDirectors,
    dramaMoviesScore,
    scoresAverage,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg
  };
}
