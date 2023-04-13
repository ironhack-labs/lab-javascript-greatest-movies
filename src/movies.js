// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let directorsName = [];
    directorsName = moviesArray.map((element) => {
        return element.director;
    });
    return directorsName;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray){
    let dramaMoviesSpielberg = [];
    dramaMoviesSpielberg = moviesArray.filter(element => {
        if (element.director === 'Steven Spielberg' && element.genre.includes ('Drama')){
            return element;
        }

    });
    return dramaMoviesSpielberg.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) return 0;

    let totalValue = moviesArray.reduce((acc, films) => {
        if(films.score){
            return films.score + acc;
        } else {
            return acc; 
        } 
    },0)

    return Math.round((totalValue * 100) /moviesArray.length) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let scoresDramaArray = [];
    let avg = 0;
    let dramaCounter = 0;
  
    scoresDramaArray = moviesArray.filter((movie) => {
      return movie.genre.includes("Drama");
    });
  
    scoresDramaArray = scoresDramaArray.map((movie) => {
      return movie.score;
    });
  
    let total = scoresDramaArray.reduce((acc, film) => {
      return acc + film;
    }, 0);
  
    avg = total / scoresDramaArray.length;
  
    if (scoresDramaArray.length === 0) {
      return 0;
    } else {
      return avg;
    }
  }
  
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const newArray = moviesArray.slice();
    newArray.sort((a, b) => {
      if (a.year !== b.year) {
        return a.year - b.year;
      } else if (a.title < b.title) {
        return -1;
      } else if (a.title > b.title) {
        return 1;
      }
      return 0;
    });
    return newArray;
  }
  
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    // Create a new array to avoid mutating the original one
    const newArray = moviesArray.slice();
  
    // Sort the movies alphabetically by title
    newArray.sort((a, b) => {
      return a.title.localeCompare(b.title);
    });
  
    // Create a new array containing only the titles
    const titlesArray = newArray.map((movie) => {
      return movie.title;
    });
  
    // Return all items if there are fewer than 20
    if (titlesArray.length <= 20) {
      return titlesArray;
    }
    // Return the top 20 items if there are more than 20
    else {
      return titlesArray.slice(0, 20);
    }
  }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray){}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
