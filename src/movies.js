// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directors = moviesArray.map(movie => movie.director);
    return directors;
}
const directors = getAllDirectors(moviesArray);
console.log(directors);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    }

    const dramaMovies = moviesArray.filter(movie => movie.genre.includes('Drama'));
    const spielbergDramaMovies = dramaMovies.filter(movie => movie.director === 'Steven Spielberg');

    return spielbergDramaMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    }

    const totalScore = moviesArray.reduce((accumulator, movie) => {
        if (movie.score) {
            return accumulator + movie.score
        } else {
            return accumulator;
        }
    }, 0);

    const averageScore = totalScore / moviesArray.length;

    return Math.round(averageScore * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    const dramaMovies = moviesArray.filter(movie => movie.genre.includes('Drama'));
    if (dramaMovies.length === 0) {
        return 0;
    }
    const totalScore = dramaMovies.reduce((accumulator, movie) => {
        if (movie.score) {
            return accumulator + movie.score;
        } else {
            return accumulator;
        }
    }, 0);
    const averageScore = totalScore / dramaMovies.length;
    return Math.round(averageScore * 100) / 100;


}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const sortedMovies = moviesArray.slice();

    sortedMovies.sort(function (a, b) {
        if (a.year === b.year) {

            return a.title.localeCompare(b.title);
        }
        return a.year - b.year;
    });    
 
    return sortedMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const titles = moviesArray.map(movie => movie.title);
    const sortedTitles = titles.sort((a, b) => a.localeCompare(b));
    const top20Titles = sortedTitles.slice(0, 20);
    return top20Titles;
 }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) { 
    const newMovies = moviesArray.map(movie => {
        const newMovie = Object.assign({}, movie);
    
        const duration = newMovie.duration;
        const hourIndex = duration.indexOf('h');
        const minIndex = duration.indexOf('min');
    
        if (hourIndex > -1) {
          const hours = parseInt(duration.slice(0, hourIndex));
          newMovie.duration = hours * 60;
        }
    
        if (minIndex > -1) {
          const minutes = parseInt(duration.slice(hourIndex + 2, minIndex));
          newMovie.duration += minutes;
        }
    
        return newMovie;
      });
    
      return newMovies;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { 
    if (moviesArray.length === 0) {
        return null;
      }
      const years = moviesArray.map(function(movie) {
        return movie.year;
      }).filter(function(year, index, array) {
        return array.indexOf(year) === index;
      });
    
      let bestYear = 0;
      let bestRate = 0;
      years.forEach(function(year) {
        const yearMovies = moviesArray.filter(function(movie) {
          return movie.year === year;
        });
        const totalScore = yearMovies.reduce(function(accumulator, movie) {
          return accumulator + movie.score;
        }, 0);
        const averageScore = totalScore / yearMovies.length;
    
        if (averageScore > bestRate || (averageScore === bestRate && year < bestYear)) {
          bestYear = year;
          bestRate = averageScore;
        }
      });
    
      return 'The best year was ' + bestYear + ' with an average score of ' + bestRate.toFixed(2);
}
