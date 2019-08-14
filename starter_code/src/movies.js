/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 

function ratesAverage(movies) {
  let sum = 0;
  movies.forEach(function(movie) {
    return sum += movie.rate;
  });
  let average = sum / movies.length;
  return Number(parseFloat(average).toFixed(2));
}

// Iteration 2: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {
  let dramaMovies = movies.filter(function(movie) {
  return movie.genre.includes("Drama");
  });
  if (dramaMovies.length === 0) {
  return 0;
  }
  else {
    return ratesAverage(dramaMovies);
  }
}

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)

function orderByDuration (movies) {
  let duration = movies.sort(function(a, b){
  if (a.duration < b.duration) return -1;
  else if (a.duration > b.duration) return 1;
  else if (a.duration === b.duration) {
    if (a.title < b.title) return -1;
    else if (a.title > b.title) return 1;
    else if (a.title === b.title) return ;
    else return 0;
  }
})
  return duration;
}
// console.log(orderByDuration(movies));

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

function howManyMovies(movies){
  let dramaMovies = movies.filter(function(movie) {
    return movie.genre.includes("Drama");
    });
  let spielbergDramaMovies = dramaMovies.filter(function(movie) {
    return movie.director.includes("Steven Spielberg");
  });
    return spielbergDramaMovies.length;
  }

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
  const order = movies.sort(function(a,b){
    if(a.title > b.title){
      return 1
    }else{
      return -1
    }
  })
   const string =  order.map(stri => stri.title).slice(0, 20)
   return string
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies) {
  return movies.map(movie => {
    let duration = movie.duration;
    if (typeof duration === "string") {
      const timeVals = duration.match(/\d+|\D+|\d+|\D+/g);
      if (timeVals.length === 4)
        duration = timeVals[0] * 60 + Number(timeVals[2]);
      // hours + minutes
      else if (timeVals.includes("h")) duration = timeVals[0] * 60;
      // only hour(s)
      else duration = timeVals[0]; // only minutes
    }
    const movieCopy = Object.assign({}, movie);
    movieCopy.duration = Number(duration);
    return movieCopy;
  });
}

// BONUS Iteration: Best yearly rate average

// function bestYearAvg(movies) {
//   // use the method reduce for example. If exists as a key, I push into the array:
//   const moviesObject = movies.reduce ((acc, movie) => {
//     acc [movie.year].push(movie.rate)
//     return acc;
//   }
//   const newArr = [];
//   newArr.push(movie.rate);
//   acc [movie.rate] = newArr;
// }