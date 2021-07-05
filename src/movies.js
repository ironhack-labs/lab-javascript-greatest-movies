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
]

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?


function getAllDirectors(arrayMovies) {
  return arrayMovies.map (movie => movie.director);
}



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arrayMovies) {
  return arrayMovies.filter(movie => movie.director === "Steven Spielberg" && movie.genre.includes("Drama")).length;
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arrayMovies) {
  if (arrayMovies.length === 0) {
    return 0
  }
  
  const totalScores = arrayMovies.reduce(function (acc, movie) {
    if (movie.score) {
    acc += movie.score;
    } 
    return acc;
  }, 0);
  const avg = totalScores / arrayMovies.length
  return Number(avg.toFixed(2))
}



// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arrayMovies) {
  if (arrayMovies.length === 0) {
    return 0
  }

  const dramaMovies = arrayMovies.filter(movie => movie.genre.includes("Drama"))

  return scoresAverage(dramaMovies)
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arrayMovies) {

  // copy
  const newArray = JSON.parse(JSON.stringify(arrayMovies));
  
  //sort 
  const sortedMovies = newArray.sort(function (a, b) {
    if(a.year === b.year) {
      if (a.title < b.title) return -1;
      if (a.title > b.title) return 1;
      if (a.title === b.title) return 0;
    }
    return a.year - b.year
  });
  
  return sortedMovies
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arrayMovies) {

  let newArray = JSON.parse(JSON.stringify(arrayMovies));

  let titleMovies = newArray.map(movie => movie.title)

  console.log("titleMovies", titleMovies)

  const sortedMovies = titleMovies.sort((a, b) => {
      if (a.toLowerCase() < b.toLowerCase()) return -1;
      if (a.toLowerCase() > b.toLowerCase()) return 1;
      if (a.toLowerCase() === b.toLowerCase()) return 0;
  });

  return twentyMovieps = sortedMovies.slice(0, 20)
}

// console.log(orderAlphabetically(movies))

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arrayMovies) {
  //create new array
  const newCopy = JSON.parse(JSON.stringify(arrayMovies));
  console.log(newCopy)

  // create "Xh Xmin" format in each string
  let durationArr = newCopy.map(movie => {
    movie.duration.split(" ");
  });

  // 
  console.log("split", durationArr);
  return newCopy
}

turnHoursToMinutes(movies)

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
