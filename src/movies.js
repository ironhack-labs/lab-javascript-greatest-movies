// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
  return moviesArray.map(function (element) {
    return element.director;
  });
}

const directors = getAllDirectors(movies);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  let stephenMovies = moviesArray.filter(function (movie) {
    return movie.director === "Steven Spielberg" && movie.genre === "Drama";
  });

  if (moviesArray.length === 0) {
    return 0;
  } else if (stephenMovies.length === 0) {
    return 0;
  } else {
    return stephenMovies.length;
  }
}

const dramaMovies = howManyMovies(movies);

// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(moviesArray) {}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {}






// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let newMoviesArray= [...moviesArray]

    newMoviesArray.sort((a,b)=> {
        return a.title.localeCompare(b.title)
    })

    newMoviesArray.filter(movie => movie.year === newMoviesArray.year)

    return newMoviesArray
}



// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

    const orderedMovies = moviesArray.sort((a, b) => {
      return a.title.localeCompare(b.title);
    });
  
    const portionTitles = moviesArray.slice(0, 20)
  
    return portionTitles.map((movie) => {
      return movie.title;
  })
  }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
