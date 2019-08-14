/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 
function ratesAverage(movies) {
  const reduced = movies.reduce((acc, movie) => {
    return acc += movie.rate;
  }, 0);
    var sumRates = reduced / movies.length;
    return Number(sumRates.toFixed(2)); // parceFloat()
}

// function ratesAverage(movies) {
//   const reduced = movies.reduce((acc, movie) => {
//    acc += movie.rate;
//    return acc;
//   }, 0) / movies.length;
//    return Number(sumRates.toFixed(2)); // parceFloat()
// }
 
// Iteration 2: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {
  const dramas = movies.filter(movie => movie.genre.includes("Drama"));
  if(dramas.length == 0) {
    return 0;
  }
  return ratesAverage(dramas);
}

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
function orderByDuration(movies) {
  return movies.sort((a,b) => {
    if(a.duration > b.duration) {
      return 1;
    }
    if(a.duration < b.duration) {
      return -1;
    }
    if(a.title > b.title) {
      return 1;
    }
    if(a.title < b.title) {
      return -1;
    }
    return 0;
  });
}

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
function howManyMovies(movies) {
  if(movies.length === 0){
    return 0;
  }

  const spielbergMovies = movies.filter((movie) => {
    return movie.director === "Steven Spielberg" && movie.genre.includes("Drama");
  });
  return spielbergMovies.length;
}

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  const movieTitle = movies.map(movie => movie.title);

  const orderedArr = movieTitle.sort((a,b) => {
    if(a > b) {
      return 1;
    }
    if(a < b) {
      return -1;
    }
    return 0;
  });
  if(movies.length >= 20) {
    return orderedArr.slice(0, 20);
  }
  return orderedArr;

}



// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// function turnHoursToMinutes(movies) {
//   console.log(movies);
//   const movieMinutes = movies.map((movie) => {
//     const copyMovie = Object.assign({}, movie)
//     if(movie.duration.length > 0) {
//       let hours = movie.duration.split('h');
//       let mins = Number(hours[0]) * 60;
//       mins += Number(hours[1].split('min')[0]);
//       copyMovie.duration = mins;
//       console.log(copyMovie);
//       return copyMovie;
//     }
//     else if (movie.duration.length === 5){ // {duration: '54min'}
//       let minOnly = movie.duration.split('min');
//       minOnly += Number(movie.duration[0]);
//       console.log(minOnly);
//       return minOnly;
//     }
//   });

//   return movieMinutes;
// }


function turnHoursToMinutes(movies) {
  console.log(movies);
  const movieMinutes = movies.map((movie) => {
    const copyMovie = Object.assign({}, movie)
    if(movie.duration.length > 0) {
      let hours = movie.duration.split('h');
      let mins = Number(hours[0]) * 60;
      mins += Number(hours[1].split('min')[0]);
      copyMovie.duration = mins;
      console.log(copyMovie);
      return copyMovie;
    }
    else if (movie.duration.length === 5){ // {duration: '54min'}
      let minOnly = movie.duration.split('min');
      minOnly += Number(movie.duration[0]);
      console.log(minOnly);
      return minOnly;
    }
  });

  return movieMinutes;
}



// BONUS Iteration: Best yearly rate average - Best yearly rate average





