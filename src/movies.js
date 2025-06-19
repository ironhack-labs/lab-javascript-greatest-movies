// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  return moviesArray.map(function (directors) {
    return directors.director;
  });
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  return moviesArray.filter(function (movie) {
    return (
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    );
  }).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) return 0;
  
    const total = moviesArray.reduce((sum, movie) => {
      if (typeof movie.score === "number") {
        return sum + movie.score;
      }
      return sum;
    }, 0);
  
    const avg = total / moviesArray.length;
  
    return parseFloat(avg.toFixed(2));
  }

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter(
    (movie) => movie.genre.includes("Drama") && typeof movie.score === "number"
  );

  if (dramaMovies.length === 0) return 0;

  const total = dramaMovies.reduce((sum, movie) => sum + movie.score, 0);

  return parseFloat((total / dramaMovies.length).toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const moviesCopy = moviesArray.slice();

    moviesCopy.sort((a, b) => {
        if (a.year !== b.year) {
            return a.year - b.year;
        } else {
            return a.title.localeCompare(b.title);
        }
    })
    return moviesCopy;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const moviesCopy = moviesArray.slice();

    moviesCopy.sort((a, b) => a.title.localeCompare(b.title));

    let titles = moviesCopy.map(movie => movie.title);

    return titles.slice(0, 20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    return moviesArray.map(movie => {
        let newMovie = { ...movie};

        let totalMinutes = 0;
        let duration = movie.duration;

        const hoursMatch = duration.match(/(\d+)h/);
        if (hoursMatch) {
            totalMinutes += parseInt(hoursMatch[1]) * 60;
        }

        let minutesMatch = duration.match(/(\d+)min/);
        if (minutesMatch) {
            totalMinutes += parseInt(minutesMatch[1]);
        }

        newMovie.duration = totalMinutes;

        return newMovie;
    });
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (moviesArray.length === 0) return null;

    let scoresByYear = {};

    moviesArray.forEach(movie => {
        if (!scoresByYear[movie.year]) {
            scoresByYear[movie.year] = [movie.score];
        } else {
            scoresByYear[movie.year].push(movie.score);
        }
    });

    let bestYear = null;
    let bestAverage = 0;

    for (let year in scoresByYear) {
        let scores = scoresByYear[year];
        let total = scores.reduce((sum, score) => sum + score, 0);
        let avg = total / scores.length;

        const numericYear = parseInt(year);


        if (avg > bestAverage || (avg === bestAverage && numericYear < bestYear)) {
            bestAverage = avg;
            bestYear = year;
          }
        }
    return `The best year was ${bestYear} with an average score of ${bestAverage.toFixed(1)}`;      
}
