// Iteration 1: All directors? - Get the array of all directors.
const getAllDirectors = (movies) => {
    const getAllDirectors = movies.map ((movie) => {return movie.director});
    return getAllDirectors;
}
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
const howManyMovies = (moviesDrama) => {
    const StevenSpielbergDramaMovies = moviesDrama.filter ((moviesDrama) => {
        return ( 
            moviesDrama.director === 'Steven Spielberg' &&
            moviesDrama.genre.includes('Drama')
            );  
        });
        return StevenSpielbergDramaMovies.length;
};

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
  let rAverage
  if (movies.length === 0) {
      return 0
  }
  const ratedArray = movies.filter(elm => elm.rate)
  const rateSum = ratedArray.reduce((acc, elm) => {
      const movieRate = + elm.rate
      return acc + movieRate
  }, 0)
  rAverage = rateSum / movies.length
  return + rAverage.toFixed(2)
};

// Iteration 4: Drama movies - Get the average of Drama Movies
const dramaMoviesRate = (movies) => {
    const dramaMovies = movies.filter((movie) => {
      if (movie.genre.includes('Drama')) {
        return true;
      } else {
        return false;
      }
    });
    return ratesAverage(dramaMovies);
  };
  

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
const orderByYear = (movies) => {
    const orderMovies = [...movies].sort((movieA, movieB) => {
      if (movieA.year === movieB.year) {
        return movieA.title.localeCompare(movieB.title);
      }
      return movieA.year - movieB.year;
    });
    return orderMovies;
  };
  

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

const orderAlphabetically = (movies) => {
    const _movies = [...movies];
    _movies.sort((movieA, movieB) => movieA.title.localeCompare(movieB.title));
    return _movies.map((movie) => movie.title).slice(0, 20);
  };

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
const calculateMinutes = (time) => {
    const intTime = parseInt(time);
    if (time.indexOf('h') != -1) {
      return intTime * 60;
    }
    return intTime;
  }
  const calculateTime = (time) => {
    const arrayTime = time.split(' ');
    return arrayTime.reduce((mins, time) => {
      return mins + calculateMinutes(time);
    }, 0);
  };
  const turnHoursToMinutes = (movies) => {
    const _movies = movies.map((movie) => {
      const copyMovie = { ...movie }; 
      copyMovie.duration = calculateTime(movie.duration);
    
      return copyMovie;
    });
    return _movies;
  };
  

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
