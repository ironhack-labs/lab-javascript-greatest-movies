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
    title: 'Ah-ga-ssi',
    year: 2016,
    director: 'Chan-wook Park',
    duration: '2h 24min',
    genre: ['Crime', 'Drama', 'Mystery', 'Romance', 'Thriller'],
    score: 8.1
  },
  {
    title: 'Piscores of the Caribbean: The Curse of the Black Pearl',
    year: 2003,
    director: 'Gore Verbinski',
    duration: '2h 23min',
    genre: ['Action', 'Adventure', 'Fantasy'],
    score: 8
  },
  {
    title: 'PK',
    year: 2014,
    director: 'Rajkumar Hirani',
    duration: '2h 33min',
    genre: ['Comedy', 'Drama', 'Fantasy', 'Sci-Fi'],
    score: 8.2
  },
  {
    title: 'Dog Day Afternoon',
    year: 1975,
    director: 'Sidney Lumet',
    duration: '2h 5min',
    genre: ['Biography', 'Crime', 'Drama', 'Thriller'],
    score: 8
  },
  {
    title: 'Dead Poets Society',
    year: 1989,
    director: 'Peter Weir',
    duration: '2h 8min',
    genre: ['Comedy', 'Drama'],
    score: 8
  }
];


//const getAllDirect = movies.map(movie) => {

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

function getAllDirectors(moviesArray) {
  return moviesArray.map(movie => movie.director);
}

console.log('get All Directors', getAllDirectors(movies));

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  return moviesArray.filter(movie => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')).length; // the length tells us the amount of movies
}

console.log('how many movies',howManyMovies(movies));

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) return 0;  // Return 0 if no movies 
  const totalScore = moviesArray.reduce((acc, movie) => acc + movie.score, 0).toFixed(2);
  return (totalScore / moviesArray.length).toFixed(2) ;
}

console.log('Average Score',scoresAverage(movies));

// Iteration 4: Drama movies - Get the average score of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter(movie => movie.genre.includes('Drama'));
  return scoresAverage(dramaMovies)
}

console.log('drama movie scores',dramaMoviesScore(movies));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const organizedMovies = moviesArray.map(movie => movie).sort((a, b) => {
    return a.year - b.year
  })
  return organizedMovies
}

console.log('ordered by year',orderByYear(movies))

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const alphabetizedMovies = moviesArray.map(movie => {
    return movie.title
  }).sort((a, b) => a.localeCompare(b))
  return alphabetizedMovies.slice(0, 20)
}

console.log('ordered alphabetically',orderAlphabetically(movies))

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(moviesArray) {
  const find = moviesArray.map(movie => {
    let movieLength = movie.duration
    let movieLengthInMinutes = 0;
    if (movieLength.includes('h')) {
      const hourInMinutes = Math.ceil(movieLength.slice(0, 1)) * 60
      movieLengthInMinutes += hourInMinutes;
    }
    if (movieLength.includes('min')) {
      if (movieLength.length < 8) {
        const minutesInMinutes = Math.ceil(movieLength[3])
        movieLengthInMinutes += minutesInMinutes;
      }
      else {
        const otherMinutes = Math.ceil(movieLength.slice(3, 5))
        movieLengthInMinutes += otherMinutes;
      }
    }
    movie.duration = movieLengthInMinutes;
    return movie.duration;
  });
  return [...moviesArray];
}


// BONUS - Iteration 8: Best yearly score average - Best yearly score average
console.log('in minutes',turnHoursToMinutes(movies))

// we need to create a new (empty) array with all the years and all the average scores

function bestYearAvg(moviesArray) {
  let scoreInYears = {};
  let maxAvg = 0;
  let maxYear = "";
  moviesArray.forEach(movie => {
    const year = movie.year;
    if (!scoreInYears[year]) {
      scoreInYears[year] = { totalScore: 0, counter: 0 }
    }
    else (scoreInYears[year])
      scoreInYears[year].totalScore += movie.score;
      scoreInYears[year].counter++;
    })
    for (const year in scoreInYears) {
      let avg = (scoreInYears[year].totalScore / scoreInYears[year].counter)
      if (avg > maxAvg) {
        maxAvg = avg;
        maxYear = year;
      }
    }
    return `The best year was ${maxYear} with an average score of ${maxAvg}`;
  }

console.log(bestYearAvg(movies));
