/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 

const ratesAverage = (movies) => {
    if (movies.length === 0) return 0;
    let totalSum = movies.reduce((sum, movie) => //reduce will get the sum of the array
      sum + Number(movie.rate), 0);
    let avg = totalSum / movies.length;
    return Number(avg.toFixed(2));
    // Number() transforms a string into an array. toFixed rounds the decimal houses of numbers
  };

 
// Iteration 2: Drama movies - Get the average of Drama Movies

const dramaMoviesRate = (movies) => {
    let dramaMovies =
      movies.filter(movie => movie.genre.includes('Drama')); // .includes will return true or false if it finds a match 
    return ratesAverage(dramaMovies);
  };
// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)

const orderByDuration = (movies) => {
    let convertedArray = movies;
    if (typeof movies[0].duration == String) {
      convertedArray = turnHoursToMinutes(movies); // reuse the turnHourstoMinutes function
    } 
    convertedArray.sort((movie1, movie2) => { // sort them by duration and title
      if (movie1.duration === movie2.duration) {
        if (movie1.title > movie2.title) {
          return 1;
        } else {
          return -1;
        }
      } else {
        return movie1.duration - movie2.duration;
      }
    });
    return convertedArray;
  };
// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

const howManyMovies = (movies) => {
    let stevenSpielbergDramaMovies = movies.filter(
      movie =>
        movie.genre.includes("Drama") && movie.director == "Steven Spielberg"
    );
    return stevenSpielbergDramaMovies.length;
  };
  
// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = (movies) => {
    let orderedArray = movies.sort((movie1, movie2) => { // sort by title
        if (movie1.title > movie2.title) {
            return 1;
        } else {
            return -1;
        }
    }).slice(0,20); // use slice to make the array shorter
    return orderedArray.map(movie => movie.title);
}
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

const turnHoursToMinutes = (movies)=>  {
    return movies.map(movie => {
      let strDuration = movie.duration
      let duration
  
      // When strDuration === "Xh XXmin"
      if (strDuration.length === "Xh XXmin".length)
        duration = strDuration[0]*60 + strDuration[3]*10 + strDuration[4]*1
      // When strDuration === "Xh Xmin"
      if (strDuration.length === "Xh Xmin".length)
        duration = strDuration[0]*60 + strDuration[3]*1
      // When strDuration === "XXmin"
      if (strDuration.length === "XXmin".length)
        duration = strDuration[0]*10 + strDuration[1]*1
      // When strDuration === "Xh"
      if (strDuration.length === "Xh".length)
        duration = strDuration[0]*60
  
      return {
        title: movie.title,
        year: movie.year,
        director: movie.director,
        duration: duration,
        genre: movie.genre,
        rate: movie.rate
      }
    })
  }


// BONUS Iteration: Best yearly rate average - Best yearly rate average
