/* eslint no-restricted-globals: 'off' */


// Iteration 1: All rates average - Get the average of all rates with 2 decimals
const ratesAverage = movies => {
  total = movies.reduce((sum, movie) => sum += movie.rate, 0);
  return total / movies.length;
}

// Iteration 2: Drama movies - Get the average of Drama Movies
const dramaMoviesRate = movies => {
    let dramas = movies.filter(movie => movie.genre.includes('Drama'));
    return (dramas.length > 0) ? parseFloat(ratesAverage(dramas).toFixed(2)) : 0;
};

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
const orderByDuration = movies => {
  const sortedMoviesDuration = movies.sort((a, b) => {
    if(a.duration < b.duration) return -1;
    if(a.duration > b.duration) return 1;
    if(a.duration == b.duration) {
      if(a.title < b.title) return -1;
      return 1;
    }
  });
  return sortedMoviesDuration;
}

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
const howManyMovies = movies => {
  const spielbergMovies = movies.filter( movie => (movie.director.includes('Steven Spielberg')) && (movie.genre.includes('Drama')) );
  return (spielbergMovies.length > 0) ? spielbergMovies.length : 0;
};


// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = movies => {
  let moviesArr = [];
  const sortedMoviesAlphabetic = movies.sort((a, b) => {
    if(a.title < b.title) return -1;
    if(a.title > b.title) return 1;
    return 0;
  });
  sortedMoviesAlphabetic.forEach(movie => {
    moviesArr.push(movie.title);
  });
  return moviesArr.slice(0, 20);
};


// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
const turnHoursToMinutes = movies => {
  let arr = movies.map(movie => {
    // Convert duration string to number
    arrDuration = movie.duration.split('h');
    if (arrDuration.length < 2) arrDuration.unshift("0");
    hrs = arrDuration[0] * 60;
    min = parseInt(arrDuration[1].split('min')[0]);
    if(isNaN(min)) min = 0;
    let newDuration = hrs + min;

    return {
      title: movie.title,
      year: movie.year,
      director: movie.director,
      duration: newDuration,
      genre: movie.genre,
      rate: movie.rate
    }
  });

  return arr;
};


// BONUS Iteration: Best yearly rate average - Best yearly rate average
const bestYearAvg = movies => {
};
