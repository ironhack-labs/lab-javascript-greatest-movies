const moviesArray = [
  {
    title: 'The Shawshank Redemption',
    year: 1994,
    director: 'Frank Darabont',
    duration: '2h 22min',
    genre: ['Crime', 'Drama'],
    score: 9.3
  },
  {
    title: 'The Godfather',
    year: 1972,
    director: 'Francis Ford Coppola',
    duration: '2h 55min',
    genre: ['Crime', 'Drama'],
    score: 9.2
  }
];



// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {

  let directorsOnly = moviesArray.map(movies => movies.director);

  return directorsOnly;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {

  let dramaSpielbergOnly = moviesArray.filter(movies => movies.director === "Steven Spielberg" && movies.genre.includes('Drama'));

  return dramaSpielbergOnly.length;

}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

  if (moviesArray.length === 0) return 0;

  let avgScore = moviesArray.reduce((sum, movie) => {
    if (!movie.score) {
      movie.score = 0
    }

    return sum + movie.score
  }, 0);

  return Number((avgScore / moviesArray.length).toFixed(2));

}

//console.log(scoresAverage(moviesArray));

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

  let moviesDrama = moviesArray.filter(movies => movies.genre.includes('Drama'));

  return scoresAverage(moviesDrama);

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

  let newMoviesArray = [...moviesArray];

  newMoviesArray.sort((a, b) => {
    if (a.year > b.year) {
      return 1;
    } else if (b.year > a.year) {
      return -1;
    } else {
      if (a.title > b.title) {
        return 1;
      } else if (b.title > a.title) {
        return -1;
      }
      return 0
    }
  });
  return newMoviesArray;
}


//console.log(orderByYear(moviesArray));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) { 
  const titlesArray = moviesArray.map(movie => movie.title)
  titlesArray.sort();
  return titlesArray.slice(0, 20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }
