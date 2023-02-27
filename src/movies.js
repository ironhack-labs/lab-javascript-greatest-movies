// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
    return movies.map(movie => movie.director);
  }
  // bonus 
  function getAllDirectors(movies) {
    const allDirectors = movies.map(movie => movie.director);
    const oneTime = [...(allDirectors)];
    return oneTime;
  }


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
    const stevenDramas = movies.filter(movie => movie.director === "Steven Spielberg" && movie.genre.includes("Drama"));
    return stevenDramas.length;
  }
  

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
    if (movies.length === 0) {
      return 0;
    }
    const scores = movies.reduce((total, movie) => {
      if (movie.score) {
        return total + movie.score;
      } else {
        return total;
      }
    }, 0);
    const averageScore = scores / movies.length;
    return Number(averageScore.toFixed(2));
  }
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
    const dramaMovies = movies.filter(movie => movie.genre.includes("Drama"));
    return scoresAverage(dramaMovies);
  }


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
    const sortedMovies = movies.slice().sort((movie1, movie2) => {
      if (movie1.year !== movie2.year) {
        return movie1.year - movie2.year;
      } else {
        return movie1.title.localeCompare(movie2.title);
      }
    });
    return sortedMovies;
  }


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
    const sorted = movies.slice()
      .sort((movie1, movie2) => movie1.title.localeCompare(movie2.title))
      .map(movie => movie.title)
      .slice(0, 20);
    return sorted;
  }

/* BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
    const newMovies = movies.map(funcion (movie) {
        const duration = movie.duration;
        let minutes = 0;
        if (duration.includes("h")) {
          const hours = Number(duration.split("h")[0]);
         return  minutes += hours * 60;
    }
      });
    }


// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}*/
