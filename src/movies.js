// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
    const directors = movies.map(movie => movie.director);
    return directors;
  }
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
    const filteredMovies = movies.filter(movie => 
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    );
    return filteredMovies.length;
  }
// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
    if (movies.length === 0) {
      return 0;
    }
    const totalScore = movies.reduce((accumulator, movie) => {
      if (movie.score) {
        return accumulator + movie.score;
      } else {
        return accumulator;
      }
    }, 0);
    const averageScore = totalScore / movies.length;
    return parseFloat(averageScore.toFixed(2));
  }

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
    const dramaMovies = movies.filter(movie => movie.genre.includes("Drama"));
    const totalScore = dramaMovies.reduce((accumulator, movie) => {
      if (movie.score) {
        return accumulator + movie.score;
      } else {
        return accumulator;
      }
    }, 0);
    const averageScore = totalScore / dramaMovies.length;
    return parseFloat(averageScore.toFixed(2)) || 0;
  }

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
    const moviesCopy = [...movies]; // make a copy of the original array
    const sortedMovies = moviesCopy.sort((a, b) => {
      if (a.year === b.year) {
        return a.title.localeCompare(b.title); // sort by title if years are the same
      } else {
        return a.year - b.year; // sort by year
      }
    });
    return sortedMovies;
  }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
    const titles = movies.map(movie => movie.title).sort();
    return titles.slice(0, 20);
  }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
    return movies.map((movie) => {
      let duration = movie.duration;
      let minutes = 0;
      if (duration.indexOf("h") !== -1 && duration.indexOf("min") !== -1) {
        // Format is "Xh Ymin"
        let hours = parseInt(duration.slice(0, duration.indexOf("h")));
        minutes = parseInt(
          duration.slice(
            duration.indexOf(" ") + 1,
            duration.indexOf("min")
          )
        );
        minutes += hours * 60;
      } else if (duration.indexOf("h") !== -1) {
        // Format is "Xh"
        minutes = parseInt(duration.slice(0, duration.indexOf("h"))) * 60;
      } else {
        // Format is "Ymin"
        minutes = parseInt(duration.slice(0, duration.indexOf("min")));
      }
      return {
        ...movie,
        duration: minutes,
      };
    });
  }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(movies) {
    if (movies.length === 0) {
      return null;
    } else if (movies.length === 1) {
      return `The best year was ${movies[0].year} with an average score of ${movies[0].score}`;
    }
  
    const yearlyScores = {};
    movies.forEach(movie => {
      if (!yearlyScores[movie.year]) {
        yearlyScores[movie.year] = [movie.score];
      } else {
        yearlyScores[movie.year].push(movie.score);
      }
    });
  
    let bestYear = null;
    let bestScore = -Infinity;
  
    for (const year in yearlyScores) {
      const scores = yearlyScores[year];
      const sum = scores.reduce((acc, curr) => acc + curr, 0);
      const average = sum / scores.length;
      if (average > bestScore) {
        bestScore = average;
        bestYear = year;
      }
    }
  
    return `The best year was ${bestYear} with an average score of ${bestScore.toFixed(1)}`;
  }
  