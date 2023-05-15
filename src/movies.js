// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  return allDiretors = moviesArray.map((element) => element.director)
  
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  if (moviesArray.length === 0) {
        return 0;
    }
    
    const stevenSpielbergMovies = moviesArray.filter(movie =>
      movie.director.includes('Steven Spielberg') && movie.genre.includes('Drama')
    );
  
  return stevenSpielbergMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if(moviesArray.length === 0) {
    return 0;
  }
  
  const scoresSum = moviesArray.reduce((sum, movie) => {
    if (movie.score !== undefined) {
      return sum + movie.score;
    }
    return sum;
  }, 0);

  const average = scoresSum / moviesArray.length;
  const roundedAverage = Number(average.toFixed(2));

  return roundedAverage;
  
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter(element => element.genre.includes('Drama'))
  if (dramaMovies.length === 0) {
    return 0;
  }

  const totalScore = dramaMovies.reduce((sum, movie) => {
    return sum + (movie.score || 0);
  }, 0);

  const averageScore = totalScore / dramaMovies.length;

  return parseFloat(averageScore.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const sortedMovies = [...moviesArray].sort((a, b) => {
    if (a.year !== b.year) {
      return a.year - b.year; // Sort by year in ascending order
    } else {
      return a.title.localeCompare(b.title); // Sort titles alphabetically
    }
  });

  return sortedMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const sortedTitles = moviesArray
    .map(movie => movie.title)
    .sort((a, b) => a.localeCompare(b));

  return sortedTitles.slice(0, 20);
 
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  const convertedMovies = moviesArray.map(movie => {
    const duration = movie.duration;
    let minutes = 0;

    
    const timeParts = duration.split(' ');
    for (let part of timeParts) {
      if (part.includes('h')) {
        minutes += parseInt(part) * 60;
      } else if (part.includes('min')) {
        minutes += parseInt(part);
      }
    }

    return { ...movie, duration: minutes };
  });

  return convertedMovies;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (moviesArray.length === 0) {
    return null;
  }

  let bestYear = null;
  let bestAvg = 0;

  moviesArray.forEach(movie => {
    const year = movie.year;
    const score = movie.score;
    const moviesInYear = moviesArray.filter(m => m.year === year);
    const avg = moviesInYear.reduce((sum, m) => sum + m.score, 0) / moviesInYear.length;

    if (avg > bestAvg || (avg === bestAvg && parseInt(year) < parseInt(bestYear))) {
      bestAvg = avg;
      bestYear = year;
    }
  });

  return `The best year was ${bestYear} with an average score of ${bestAvg}`;
}
