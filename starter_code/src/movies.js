/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(array) {
  // .slice() to create a copy of the original array
  const ascendingYear = array.slice().sort(function(a, b) {
    // if movies have the same year, sort alphabetically
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    }
    // sort by ascending order
    return a.year - b.year;
  });
  return ascendingYear;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(array) {
  const spielbergMovies = array.filter(function(object) {
    if (
      object.director === "Steven Spielberg" &&
      object.genre.includes("Drama")
    ) {
      return true;
    }
  });
  return spielbergMovies.length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
// Sort movies by alphabetical order, but only print the first 20.
// if array.length < 20

// function orderAlphabetically(array) {
//   const firstTwenty = array.slice().sort(function(a, b) {
//     if (firstTwenty.length < 20) {
//       return a.title.localeCompare(b.title);
//     }
//   });
// }

function orderAlphabetically(array) {
  const firstTwenty = array
    // to prevent mutating the original array
    .slice()
    .sort(function(a, b) {
      return a.title.localeCompare(b.title);
    })
    .map(function(object) {
      return object.title;
    })
    // slice again at the end, otherwise will slice first 20 of original list
    .slice(0, 20);
  return firstTwenty;
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals
// Basically the average rating of all the movies in the data set, to two decimal points
// Use .reduce() method

function ratesAverage(array) {
  // return 0 if no movies in the array
  if (array.length === 0) {
    return 0;
  }
  const ratingSum = array.reduce(function(accumulator, currentMovie) {
    // return average even if a movie doesn't have a rating
    if (!currentMovie.rate) {
      return accumulator;
    }
    return accumulator + currentMovie.rate;
  }, 0);
  let avgRating = parseFloat((ratingSum / array.length).toFixed(2));
  return avgRating;
}

// Iteration 5: Drama movies - Get the average of Drama Movies
// Find the average ratings of all drama movies

function dramaMoviesRate(array) {
  // need to filter out drama movies to divide by # of drama movies later for the average
  const dramaMovies = array.filter(function(currentMovie) {
    if (currentMovie.genre.includes("Drama")) {
      return true;
    }
  });
  if (dramaMovies.length === 0) {
    return 0;
  }
  const dramaRatingSum = array.reduce(function(accumulator, currentMovie) {
    if (currentMovie.genre.includes("Drama")) {
      return accumulator + currentMovie.rate;
    } else {
      return accumulator;
    }
  }, 0);
  let dramaRatingAvg = parseFloat(
    (dramaRatingSum / dramaMovies.length).toFixed(2)
  );
  return dramaRatingAvg;
}
// console.log(ratesAverage(movies), dramaMoviesRate(movies));

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(array) {
  const newArr = array.map(function(currentMovie) {
    let durationArr = currentMovie.duration.split(" "); // creates an array like ["2h", "30m"]
    let minConversion;

    // if time has hour and minute value
    if (durationArr.length === 2) {
      let hourValue = parseFloat(durationArr[0]);
      let minValue = parseFloat(durationArr[1].replace(/min/, ""));
      minConversion = hourValue * 60 + minValue;
      // if time only has hour value
    } else if (durationArr[0].indexOf("h") !== -1) {
      let hourValue = parseFloat(durationArr[0].replace(/h/, ""));
      minConversion = hourValue * 60;
      // if time only has min value
    } else if (durationArr[0].indexOf("min") !== -1) {
      let minValue = parseFloat(durationArr[0].replace(/min/, ""));
      console.log(minValue);
      minConversion = minValue;
    }

    return {
      ...currentMovie,
      duration: minConversion
    };
  });
  return newArr;
}

// 2h 22min --> 142 min
// 2*60 + 22 = 142
// take an array
// iterate through its objects
// target its duration property
// split at "h " currentMovie.duration.split("h ")
// delete min
// let duration = "2h 30min";
// let arr = duration.split("h ");

// let hours = arr[0];
// let minutes = arr[1].replace(/min/, "");

// console.log(hours);
// console.log(minutes);

// BONUS Iteration: Best yearly rate average - Best yearly rate average
