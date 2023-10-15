// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const newArrDirectors = moviesArray.map((movie) => {
        return movie.director
    });
    return newArrDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
   
        return moviesArray.filter((movie) => {
            return movie.director === "Steven Spielberg" && movie.genre.includes("Drama") 
        }).length

}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    const onlyMoviesWithScore = moviesArray.filter((movie) => {
        return typeof movie.score === 'number';
    });

    if (onlyMoviesWithScore.length === 0) {
        return 0;
    }

    const totalScore = onlyMoviesWithScore.reduce((acc, elem) => {
        acc += elem.score;

        return acc
    }, 0)
const averageScore = totalScore / moviesArray.length;
return parseFloat(averageScore.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter((movie) => {
        return movie.genre.includes('Drama');
      });
      
      const averageScoreForDramaMovies = scoresAverage(dramaMovies);
    
      return averageScoreForDramaMovies;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const moviesByYear = moviesArray.slice().sort((movie1, movie2) => {
      if (movie1.year !== movie2.year) {
        return movie1.year - movie2.year;
      }
      return movie1.title.localeCompare(movie2.title);
    });
    return moviesByYear;
  }
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const movieTitles = moviesArray.map(movie => movie.title)
      .filter(title => typeof title === 'string' && title.trim() !== '');
  
    const sortedMovieTitles = movieTitles.slice().sort((a, b) => a.localeCompare(b));
    
    if (sortedMovieTitles.length > 20) {
      return sortedMovieTitles.slice(0, 20);
    }
    
    return sortedMovieTitles;
  }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
