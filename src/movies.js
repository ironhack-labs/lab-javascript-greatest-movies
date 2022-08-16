// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directors = moviesArray.map((movie) => {
        return movie.director
    })
    return directors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
const howManyMovies = (moviesArray) => {
    let spielbergList = moviesArray.filter(movie => movie.genre.includes('Drama') && movie.director === 'Steven Spielberg')
        return spielbergList.length
    
};


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    const totalScores = (movies) => {
        if(!movies.score) {
            return 0;
        }
        return movies.score;
    };
    let Avg = moviesArray.reduce((acc, el) => 
      {
        acc += totalScores(el) / moviesArray.length; 
        return acc;
    }, 0);

    return Number(Avg.toFixed(2));
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter((movie) => movie.genre.includes('Drama'))
    const sumDrama = dramaMovies.reduce((sum, movie) => {
      if (dramaMovies.length > 0) {
        return sum + movie.score;
      } else
        return sum;
    }, 0);
    if (dramaMovies.length > 0) {
      const prom = sumDrama / dramaMovies.length;
      return Math.abs(prom.toFixed(2));
    } else {
      return 0;
    }
  }

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const orderedArray = moviesArray.map((movie) => movie);
    orderedArray.sort((a, b) => {
      if (a.year === b.year) {
        if (a.title < b.title) {
          return -1;
        } else if (a.title > b.title) {
          return 1;
        } else {
          return 0;
        }
      } else {
        return a.year - b.year;
      }
    });
    return orderedArray;
  }
  

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(abc) {
    const titles = moviesArray.map((movie) => movie.title);
    titles.sort();
    if (titles.length <= 20) {
      return titles;
    } else {
      titles.splice(20)
      return titles;
    }
  }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
