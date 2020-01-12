/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(arr) {
  // use sort function including slice as to not manipulate original array
  const sortedMovies = arr.slice().sort(function(a, b) {
    // if same year, order by title
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    }
    // else order by year
    return a.year - b.year;
  });
  // return outside sort function because function needs to return sth.
  return sortedMovies;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(arr) {
  // use filter function to create a new array
  const spielbergDramas = arr.filter(function(object) {
    // use && operator to check for director and genre
    if (
      object.director === "Steven Spielberg" &&
      object.genre.includes("Drama")
    ) {
      return true;
    }
  });
  // return the count of Spielberg's dramas by checking the length of the array
  return spielbergDramas.length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
  // use sort function
  const sortedMovies = arr
    .slice()
    .sort(function(a, b) {
      return a.title.localeCompare(b.title);
    })
    // use map method to return only titles
    .map(function(object) {
      return object.title;
    })
    // use slice to return only first 20
    .slice(0, 20);
  return sortedMovies;
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(arr) {
  // return 0 if the array is empty
  if (arr.length === 0) {
    return 0;
  }
  // create 2 variables to hold the avr and total rating
  let avrRate = 0;
  let totalRate = arr.reduce(function(accumulator, currentRating) {
    // return the current average if a movie doesn't have a rating
    if (!currentRating.rate) {
      return accumulator;
    }
    // add up all ratings to get total
    return accumulator + currentRating.rate;
  }, 0);
  // get avr rating by taking the total and dividing it by the amount of ratings, i.e. the array's lenght; round it to 2 decimals
  avrRate = parseFloat((totalRate / arr.length).toFixed(2));
  return avrRate;
}

// Iteration 5: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(arr) {
  // Step 1: filter out all drama movies
  let dramaMovies = arr.filter(function(currentMovie) {
    // if (Object.values(arr)indexOf("Drama") > -1) {
    if (currentMovie.genre.includes("Drama")) {
      return true;
    }
  });
  // return 0 if there's no drama movie in the array
  if (dramaMovies.length === 0) {
    return 0;
  }
  // Step 2: calculate avr rating for all drama movies
  // create 2 variables to hold the avr and total rating of drama movies
  let dramaAvrRate = 0;
  let dramaTotalRate = dramaMovies.reduce(function(accumulator, currentMovie) {
    // add up all ratings to get total
    return accumulator + currentMovie.rate;
  }, 0);

  // get avr rating by taking the total and dividing it by the amount of drama ratings, i.e. the array's lenght; round it to 2 decimals
  dramaAvrRate = parseFloat((dramaTotalRate / dramaMovies.length).toFixed(2));
  return dramaAvrRate;
}

// Compare general avrg. rating and drama avrg. rating
console.log(ratesAverage(movies));
console.log(dramaMoviesRate(movies));

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arr) {
  // create a new array of the same length using map function
  let newArray = arr.map(function(currentMovie) {
    // access the duration of each movie using split and store it in a new variable
    let movieDuration = currentMovie.duration.split(" ");
    // create a new variable to store the new movie duration converted to minutes
    let newDuration = 0;
    // if the movie has an hour and minute value
    if (movieDuration.length > 1) {
      let hours = parseInt(movieDuration[0].replace("h", ""));
      let minutes = parseInt(movieDuration[1].replace("min", ""));
      newDuration = hours * 60 + minutes;
      // if the movie has only an hour value
    } else if (movieDuration[0].indexOf("h") !== -1) {
      let hours = parseInt(movieDuration[0].replace("h", ""));
      newDuration = hours * 60;
      // if the movie has only a minute value
    } else if (movieDuration[0].indexOf("min") !== -1) {
      let minutes = parseInt(movieDuration[0].replace("min", ""));
      newDuration = minutes;
    }
    // currentMovie.duration = newDuration;
    // return currentMovie; - (jasmine doesn't like this one - error: Should return a new array, not update the original one)
    // use spread operator to add elements to the array without mutating the original
    return {
      ...currentMovie,
      duration: newDuration
    };
  });
  return newArray;
}
// console.log(turnHoursToMinutes(movies));

// BONUS Iteration: Best yearly rate average - Best yearly rate average
