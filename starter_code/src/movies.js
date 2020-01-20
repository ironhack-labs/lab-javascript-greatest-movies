/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {
  return [...movies].sort(function(movie1, movie2) {
    if (movie1.year === movie2.year) {
      if (movie1.title.localeCompare(movie2.title)) {
        return -1;
      } else {
        return 1;
      }
    } else if (movie1.year < movie2.year) {
      return -1;
    } else if (movie2.year > movie2.year) {
      return 1;
    }
  });
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(movies) {
  let howMany = movies.filter(
    movie =>
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
  );
  return howMany.length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
  let titles = movies.map(movie => movie.title);
  titles.sort();
  titles.splice(20);
  return titles;
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

// function ratesAverage(movies){
//     if (movies.length === 0) {return 0}
//     let rates = movies.map(movie => movie.rate)
//     let sum = rates.reduce((a, b)=> a+b, 0)
//     let average = parseFloat((sum/movies.length).toFixed(2))
//     return average
// }

function ratesAverage(movies) {
  if (movies.length === 0) {
    return 0;
  }
  let ratedMovies = movies.filter(function(movie) {
    if (movie.rate) {
      return true;
    } else {
      return false;
    }
  });
  let rates = ratedMovies.map(movie => movie.rate);
  rates.reduce((a, b) => a + b, 0);
  let sum = rates.reduce((a, b) => a + b, 0);
  let average = parseFloat((sum / movies.length).toFixed(2));
  return average;
}

// Iteration 5: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {
  let dramaMovies = movies.filter(function(movie) {
    if (movie.genre.includes("Drama")) {
      return true;
    } else {
      return false;
    }
  });
  return ratesAverage(dramaMovies);
  //   if (dramaMovies.length === 0) {return 0}
  //   let ratedMovies = dramaMovies.filter(function(movie) {
  //     if (movie.rate) {return true} else {return false}
  //   })
  //   let rates = ratedMovies.map(movie => movie.rate)
  //   rates.reduce((a, b)=> a+b, 0)
  //   let sum = rates.reduce((a,b) => a+b, 0)
  //   let average = parseFloat((sum/rates.length).toFixed(2))
  //   return average
}
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies) {
  timedMovies = [...movies].map(movie => {
    let duration = movie.duration;
    let hoursMinutes = duration.split(" ");
    if (hoursMinutes[0].includes("h")) {}
    let hours = parseInt(hoursMinutes[0].replace("h", ""));
    let minutes = parseInt(hoursMinutes[1].replace("min", ""));
    let totalMinutes = hours * 60 + minutes;
    movie.duration = totalMinutes;
    return movie;
  });
  return timedMovies
}
// BONUS Iteration: Best yearly rate average - Best yearly rate average
