// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const directors = moviesArray.map((movie) => {
    return movie.director;
  });

  //Has Bonus

  return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const spielbergDramas = moviesArray.filter((movie) => {
    return (
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    );
  });

  return spielbergDramas.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  let avrgScore = moviesArray.reduce((avrg, movie) => {
    if (typeof movie.score === "number") {
      return avrg + movie.score / moviesArray.length;
    } else {
      return avrg;
    }
  }, 0);

  avrgScore = Math.round(avrgScore * 100) / 100;

  return avrgScore;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let counter = 0;

  let totalScore = moviesArray.reduce((acc, movie) => {
    if (typeof movie.score === "number" && movie.genre.includes("Drama")) {
      counter++;
      return acc + movie.score;
    } else {
      return acc;
    }
  }, 0);

  if (counter === 0) {
    return 0;
  } else {
    const avrgScore = Math.round((totalScore / counter) * 100) / 100;

    return avrgScore;
  }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const orderedArr = [...moviesArray];
  orderedArr.sort((movieA, movieB) => {
    if (movieB.year > movieA.year) {
      return -1;
    } else if (movieB.year < movieA.year) {
      return 1;
    }

    if (movieA.title > movieB.title) {
      return 1;
    } else {
      return -1;
    }
  });
  return orderedArr;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

    const ordered = [...moviesArray].sort((movieA, movieB) => {  
        if (movieA.title > movieB.title) {
          return 1;
        } else {
          return -1;
        }
    })

    const filtered = ordered.filter((movie, i) => i < 20);
    
    const final = filtered.map((movie) => {
        return movie.title;
    })

    return final;

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  const copy = [...moviesArray];
  const newArr = copy.map((movie) => {
    const newMovie = Object.assign({}, movie);
    let duration = newMovie.duration;
    let min = 0;

    duration = duration.replace("h", "");
    duration = duration.replace("min", "");

    durationArr = duration.split(` `);

    if (typeof durationArr[0] !== "undefined") {
      min += parseInt(durationArr[0]) * 60;
    } else {
      min += 0;
    }

    if (typeof durationArr[1] !== "undefined") {
      min += parseInt(durationArr[1]);
    } else {
      min += 0;
    }

    newMovie.duration = min;

    return newMovie;
  });

  return newArr;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (moviesArray.length === 0) {
      return null;
    }
  
    let bestYear;
    let yearTotal = 0;
    let yearAvrg = 0;
  
    let counter = 0;
    let bestAvrg = 0;
    const copyArr = [...moviesArray];
  
    copyArr.sort((movieA, movieB) => {
      if (movieB.year > movieA.year) {
        return 1;
      } else if (movieB.year < movieA.year) {
        return -1;
      }
    });
  
    let currentYear = copyArr[0].year;
  
    copyArr.forEach((movie, index) => {
      if (movie.year === currentYear) {
        counter++;
        yearTotal += movie.score;
      } else if (movie.year !== currentYear) {
        yearAvrg = yearTotal / counter;
        console.log(`In ${currentYear} the average score was ${yearAvrg}`);
  
        if (yearAvrg >= bestAvrg) {
          bestAvrg = yearAvrg;
          bestYear = currentYear;
        }
  
        currentYear = movie.year;
        yearTotal = movie.score;
        counter = 1;
      }
  
      if (index === moviesArray.length - 1) {
        yearAvrg = yearTotal / counter;
  
        if (yearAvrg >= bestAvrg) {
          bestAvrg = yearAvrg;
          bestYear = currentYear;
        }
      }
    });
  
    return `The best year was ${bestYear} with an average score of ${bestAvrg}`;
  }
