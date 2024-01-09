// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(moviesArray) {
  const arrayOfDirectors = moviesArray.map(function (elm) {
    return elm.director;
  });
  return arrayOfDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const arrayOfSpielbergMovies = moviesArray.filter(
    (drama) =>
      drama.director == "Steven Spielberg" && drama.genre.includes("Drama")
  );
  return arrayOfSpielbergMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length == 0) {
    return 0;
  }
  const score = moviesArray.reduce(function (acc, movie) {
    if (movie.score) {
      return acc + movie.score;
    } else {
      return acc;
    }
  }, 0);
  let avg = score / moviesArray.length;
  return Math.round(avg * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let dramaMovies = [];
  moviesArray.forEach(function (elm) {
    if (elm.genre.includes("Drama")) {
      dramaMovies.push(elm);
    }
  });
  return scoresAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const sortedMovies = [...moviesArray].sort((elm1, elm2) => {
    if (elm1.year === elm2.year) {
      return elm1.title.localeCompare(elm2.title);
    } else {
      return elm1.year - elm2.year;
    }
  });

  return sortedMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const sortedMovies = [...moviesArray].sort((elm1, elm2) => {
    return elm1.title.localeCompare(elm2.title);
  });

  const twenty = sortedMovies.slice(0, 20);
  const movieTitles = twenty.map((movie) => movie.title);

  return movieTitles;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  const movies = [...moviesArray].map((movie) => {
    return {
      title: movie.title,
      year: movie.year,
      director: movie.director,
      duration: convert(movie.duration),
      genre: movie.genre,
      score: movie.score,
    };
  });
  return movies;
}

function convert(duration) {
  let h = duration.indexOf("h");
  let min = duration.indexOf("min");
  let hours = duration.slice(0, h) * 60;
  let minutes = duration.slice(h + 2, min);
  let sum = hours + Number(minutes);
  return sum;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (moviesArray.length === 0) {
        return null;
    }
    

    let years = []
    moviesArray.map((movie) => {
        if (!years.includes(movie.year)) {
            years.push(movie.year)
        }   
    });

    let bestYear = 0
    let bestYearAvg = 0
    for (let i = 0; i<moviesArray.length; i++) {
        const moviesOfTheYear = moviesArray.filter((movie)=>  {
            return movie.year == years[i]
        })
        if (scoresAverage(moviesOfTheYear)>bestYearAvg) {
            bestYearAvg = scoresAverage(moviesOfTheYear)
            bestYear = years[i]
        }  else if (scoresAverage(moviesOfTheYear) == bestYearAvg) {
           if (years[i] < bestYear)
            bestYear = years[i]
        }
    }

    return `The best year was ${bestYear} with an average score of ${bestYearAvg}`
}
