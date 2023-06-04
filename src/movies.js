// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

// const getAllDirectors = moviesArray.map(movie => movie.director);

function getAllDirectors(moviesArray) {
  return moviesArray.map(movie => movie.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  let counter = 0;
  moviesArray.forEach(function(movie) {
    if (movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')) {
      counter++;
    };
  });
  return counter;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) return 0;

  let scores = moviesArray.map(function(movie) {
    if ('score' in movie && typeof(movie.score) === 'number') {
      return movie.score;
    } else {
      return 0;
    }
  });
  let sum = scores.reduce((accumulator, currentValue) => accumulator + currentValue);
  let average = sum / moviesArray.length;
  return parseFloat(average.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let dramas = moviesArray.filter(movie => movie.genre.includes('Drama'));
  return scoresAverage(dramas);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  return [...moviesArray].sort((a, b) => {
    if (a.year !== b.year) {
      return a.year - b.year;
    } else {
      return a.title - b.title;
    }
  });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  return moviesArray.map(movie => movie.title).sort().slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  return moviesArray.map(function(movie) {
    return movie = {
      title: movie.title,
      year: movie.year,
      director: movie.director,
      duration: Number(movie.duration[0]) * 60 + Number(movie.duration.slice(3, movie.duration.length - 3)),
      genre: movie.genre,
      score: movie.score
      }});
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (moviesArray.length === 0) return null;

  const scoresByYear = {};

  for (let i = 0; i < moviesArray.length; i++) {
    // const { year, score } = movie;
    const movie = moviesArray[i];
    const year = movie.year;
    const score = movie.score;

    if (scoresByYear.hasOwnProperty(year)) {
      scoresByYear[year].sum += score;
      scoresByYear[year].count++;
    } else {
      scoresByYear[year] = { sum: score, count: 1 };
    }
  }

  const averageScoresByYear = [];

  // const averageScoresByYear = Object.entries(scoresByYear).map(([year, { sum, count }]) => ({
  //   year: parseInt(year),
  //   averageScore: sum / count
  // }));
  for (const year in scoresByYear) {
    if (scoresByYear.hasOwnProperty(year)) {
      const sum = scoresByYear[year].sum;
      const count = scoresByYear[year].count;
      const averageScore = sum / count;
      averageScoresByYear.push({ year: parseInt(year), averageScore: averageScore });
    }
  }

  averageScoresByYear.sort((a, b) => {
    if (a.averageScore !== b.averageScore) {
      return b.averageScore - a.averageScore;
    } else {
      return a.year - b.year;    // older year first if the scores are tied
    }
  });

  const bestYear = averageScoresByYear[0].year;
  const bestScore = averageScoresByYear[0].averageScore;

  return `The best year was ${bestYear} with an average score of ${bestScore}`;
}
