// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(someMovies) {
    let mappedDirectors = someMovies.map((movie) => movie.director);
    return mappedDirectors;
  }
  
  getAllDirectors(movies);

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(someMovies) {
    const spielbergMovies = someMovies.filter((movie) => movie.director === 'Steven Spielberg');
    const spielbergDramas = spielbergMovies.filter((movie) => movie.genre.includes('Drama'));
    return spielbergDramas.length;
  }
  
  howManyMovies(movies);

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(someMovies) {
    const movieReviews = someMovies.reduce((runningValue, newValue) =>  {
    return runningValue + (newValue.rate || 0);
    }, 0);
    const reviewAvg = (movieReviews / someMovies.length).toFixed(2);
    return Number(reviewAvg) || 0;
  }
  
  ratesAverage(movies);

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(someMovies) {
    const dramaGenre = someMovies.filter(movie => movie.genre == 'Drama');
    const dramaReview = dramaGenre.reduce((currentRate, newRate) => {
    return currentRate + (newRate.rate || 0);
    }, 0);
    let dramaRateAvg = (dramaReview / dramaGenre.length).toFixed(2);
    return Number(dramaRateAvg) || 0;
  }
  
  dramaMoviesRate(movies);

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(arrayOfMovies) {
    const moviesCopy = arrayOfMovies.slice();
    moviesCopy.sort((a, b) => {
      if (a.year === b.year) {
        return a.title.localeCompare(b.title);
      }
      return a.year - b.year;
    });
    return moviesCopy;
  }
  orderByYear(movies);

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arrayOfMovies) {
  const movieTitle = arrayOfMovies.map(movie => movie.title);
  movieTitle.sort((a, b) => a.localeCompare(b));
  return movieTitle.slice(0, 20);
}

orderAlphabetically(movies);

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies) {
  const moviesCopy = movies.map((elem) => ({...elem}));
  const moviesChages = moviesCopy.map(movie => {
    movie.duration = changeHoursToMinutes(movie.duration);
    return moviesChanges;
  })
}

function changeHoursToMinutes(movie) {
  const splitDuration = movie.duration.split('h');
  let hours = 0, 
      minutes = 0;
  if (splitDuration.length === 2) {
    hours = splitDuration[0] * 60;
    minutes = parseInt(splitDuration[1]) || 0;
  } else if (splitDuration[0].includes('min')) {
    minutes = parseInt(splitDuration[0]);
  } else {
    hours = parseInt(movie.duration) * 60;
  }
  return hours + minutes;
}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
