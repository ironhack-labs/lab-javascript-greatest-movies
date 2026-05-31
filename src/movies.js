

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?


function getAllDirectors(moviesArray) {
    const array = moviesArray.map((element) => {
        return element.director;
    })
    return array;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let numberOfMovies = 0;
    moviesArray.filter((element) => {
        if(element.director == "Steven Spielberg") {
            element.genre.forEach((element2) => {
                if(element2 == "Drama") {
                    numberOfMovies++;
                }
            });
        }
    })
    return numberOfMovies;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (!moviesArray.length) return 0;

  const total = moviesArray.reduce((sum, movie) => sum + (movie.score || 0), 0);

  return Number((total / moviesArray.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(movie =>
    movie.genre.includes("Drama")
  );

  return scoresAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const newArray = [...moviesArray];

  return newArray.sort((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    }
    return a.year - b.year;
  });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const titles = moviesArray.map(movie => movie.title);

  titles.sort((a, b) => a.localeCompare(b));

  return titles.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function convertDuration(duration) {
  let minutes = 0;

  if (duration.includes("h")) {
    minutes += parseInt(duration) * 60;
  }

  if (duration.includes("min")) {
    const min = duration.match(/\d+min/);
    if (min) minutes += parseInt(min[0]);
  }

  return minutes;
}


function turnHoursToMinutes(moviesArray) {
  return moviesArray.map(movie => {
    return {
      ...movie,
      duration: convertDuration(movie.duration)
    };
  });
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (moviesArray.length === 0) return null;

  const yearScores = {};

  moviesArray.forEach(movie => {
    if (!yearScores[movie.year]) {
      yearScores[movie.year] = [];
    }
    yearScores[movie.year].push(movie.score);
  });

  let bestYear = null;
  let bestAvg = 0;

  for (let year in yearScores) {
    const avg =
      yearScores[year].reduce((sum, score) => sum + score, 0) /
      yearScores[year].length;

    if (avg > bestAvg || (avg === bestAvg && year < bestYear)) {
      bestAvg = avg;
      bestYear = year;
    }
  }

  return `The best year was ${bestYear} with an average score of ${bestAvg}`;
}
