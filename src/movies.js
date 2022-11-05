// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const allDirectors = moviesArray.map(movie => movie.director);       
      return allDirectors;
}



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    return moviesArray.filter((moviesSpielberg) =>
        moviesSpielberg.director === "Steven Spielberg" && moviesSpielberg.genre.includes('Drama')
          ).length;
    }

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    const sum = moviesArray.reduce((a, b) => {
        if (b.score !== '' && !b.score && b.score === false) {
          return a + b.score / moviesArray.length;
        }
      }, 0);
      return +sum.toFixed(2);
    }

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    return moviesArray.filter((dramaMovies) =>
        dramaMovies.genre.includes('Drama')
          ).length;
    }



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const newArr = [...moviesArray];
  return newArr.sort((a, b) => a.year - b.year);
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const movies = moviesArray.sort((x,y) => {
        if (x.title < y.title) {
            return -1;
        }  else return 0;
        
    });
    return movies.map(el => el.title).slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    const newArr = moviesArray.map((movie) => {
        return {
            title: movie.title,
            genre: movie.genre,
            duration: cancelIdleCallback(movie.duration)

        };
    });
    return (newArr);
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
