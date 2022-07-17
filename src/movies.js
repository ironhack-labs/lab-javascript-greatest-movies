// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(moviesArray) {
    let directors = moviesArray.map((movie) => {
        return movie.director;
    });
    return directors;
};

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

let directors = [];
getAllDirectors(movies).forEach((director) => {
    if (!directors.includes(director)){
        directors.push(director);
    }
});

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(moviesArray) {
    return moviesArray.filter((movies) => movies.director === "Steven Spielberg" && movies.genre.includes("Drama")).length;
};

// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(moviesArray) {
    let average = moviesArray.reduce((acc, movie) => {
      if (movie.score === "" || !movie.score) {
        acc += 0;
      } else {
        acc += movie.score / moviesArray.length;
      }
      return acc;
    }, 0);
    return parseFloat(average.toFixed(2));
};

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesScore(moviesArray){
    let movieCounter = moviesArray.filter((movie) => {
        return movie.genre.includes("Drama")
    })
    let dramaAvg = movieCounter.reduce((acc, dMovie) => {
        acc += dMovie.score / movieCounter.length;
        return acc;
      }, 0)
    return (Number(dramaAvg.toFixed(2)));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(moviesArray) {
    let sortedMovies = moviesArray.slice(0);
    sortedMovies.sort((movie1, movie2) => {
      if (movie1.year === movie2.year) {
        if (movie1.title < movie2.title) {
          return -1;
        } else if (movie1.title > movie2.title) {
          return 1;
        } else {
          return 0;
        }
      } else if (movie1.year < movie2.year) {
        return -1;
      } else {
        return 1;
      }
    });
    return sortedMovies;
};

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(moviesArray) {
    let alphabeticalMovies = moviesArray.slice(0);
    alphabeticalMovies.sort((movie1, movie2) => {
      if (movie1.title < movie2.title) {
        return -1;
      } else if (movie1.title > movie2.title) {
        return 1;
      } else {
        return 0;
      }
    });
    return alphabeticalMovies.map((movie) => movie.title).slice(0, 20);
};

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(moviesArray) {
    let modifiedMovies = [];
    modifiedMovies = moviesArray.map((movie) => {
        let newMovieObject = {};
        let time = movie.duration.split(" ");
        newMovieObject = { ...movie };
        if (time.length === 1 && movie.duration.includes('h')) {
            newMovieObject.duration = parseInt(time[0].split("h")) * 60;
        } else if (time.length === 1 && movie.duration.includes('min')) {
            newMovieObject.duration = parseInt(time[0].split("min"));
        } else {
            newMovieObject.duration = parseInt(time[0].split("h")) * 60 + parseInt(time[1].split("min"));
        }
        return newMovieObject;
    });
    return modifiedMovies;
};

// BONUS - Iteration 8: Best yearly score average - Best yearly score average

function bestYearAvg(moviesArray) {
    if (moviesArray.length === 0) return null;
    let bestYearAvg = { year: 0, avg: 0 };
    let yearsMap = [];
    moviesArray
      .map((movie) => movie.year)
      .forEach((year) => {
        if (!yearsMap.includes(year)) {
          yearsMap.push(year);
        }
      });
    yearsMap.forEach((year) => {
      let moviesOfYear = moviesArray.filter((movie) => {
        return movie.year === year;
      });
      let yearAvg = moviesOfYear.reduce((acc, movie) => {
        acc += movie.score / moviesOfYear.length;
        return acc;
      }, 0);
      if (yearAvg > bestYearAvg.avg) {
        bestYearAvg.avg = yearAvg;
        bestYearAvg.year = year;
      } else if (yearAvg === bestYearAvg.avg) {
        if (bestYearAvg.year > year) {
          bestYearAvg.year = year;
        }
      }
    });
    return `The best year was ${bestYearAvg.year} with an average score of ${bestYearAvg.avg}`;
};
