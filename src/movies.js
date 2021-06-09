/////5/////
const movies = [
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
  },
  {
    title: 'The Godfather: Part II',
    year: 1974,
    director: 'Francis Ford Coppola',
    duration: '3h 22min',
    genre: ['Crime', 'Drama'],
    score: 9
  },
  {
    title: 'The Dark Knight',
    year: 2008,
    director: 'Christopher Nolan',
    duration: '2h 32min',
    genre: ['Action', 'Crime', 'Drama', 'Thriller'],
    score: 9
  },
  {
    title: '12 Angry Men',
    year: 1957,
    director: 'Sidney Lumet',
    duration: '1h 36min',
    genre: ['Crime', 'Drama'],
    score: 8.9
  },
  {
    title: 'Schindler"s List',
    year: 1993,
    director: 'Steven Spielberg',
    duration: '3h 15min',
    genre: ['Biography', 'Drama', 'History'],
    score: 8.9
  },
  {
    title: 'Pulp Fiction',
    year: 1994,
    director: 'Quentin Tarantino',
    duration: '2h 34min',
    genre: ['Crime', 'Drama'],
    score: 8.9
  }
]

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors (movies) { 
  return movies.map(function(movie) {
    return movie.director
  } 
  
  
  )}
 
console.log(getAllDirectors(movies));

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {

  const filtered = movies.filter(function (film) {

    if (film.director === 'Steven Spielberg' & film.genre.includes ('Drama')) {
      return true
    }
  })

  return filtered.length
}

console.log(howManyMovies(movies));


// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(movies) {

  if (movies.length === 0) return 0; 

  const summe = movies.reduce(function (sum, movie) {

    if (movie.score === '' || movie.score === undefined) {
      movie.score = 0
    }
    
    return sum + movie.score;
  }, 0);
  
  const average = (summe / movies.length).toFixed(2);
  const result = parseFloat(average);
  
  return result;
}

// scoresAverage([{ score: 6 }, { score: '' }, {}])


// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesScore(movies) {

  const filterDramaMovies = movies.filter(function(movie) {
    return movie.genre.includes('Drama');
  }); 

    return scoresAverage(filterDramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

  function orderByYear(movies) {

    const sorted = movies.slice().sort(function(a,b) {
  
      if (a.year < b.year) return -1;
      if (a.year > b.year) return 1; 
      if (a.year === b.year) return a.title.localeCompare(b.title);
  
    })
  
    return sorted;
  }
  
  console.log(orderByYear(movies));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

  function orderAlphabetically (movies) {

    const ordered = movies.map(function(movie) {
    
    return movie.title;
    
    }).sort(function (a,b) {
    
    return a.localeCompare(b);
    
    }).slice(0,20);
    
    return ordered;
    }
    
    console.log(orderAlphabetically(movies));

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
