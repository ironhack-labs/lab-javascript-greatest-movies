/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies) {
  const avgRating = movies.reduce((acc, curr) => {
    let defaultRate = 0;
    if (!curr.rate) {
      return acc + parseFloat(defaultRate);
    }
    return acc + parseFloat(curr.rate);
  }, 0);
  return avgRating / movies.length;
}
// Math.round(num * 100) / 100

// Iteration 2: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {
  let filtered = movies.filter(m => m.genre.includes("Drama"));
  const filteredAvg = ratesAverage(filtered);
  return filteredAvg;
}

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
function orderByDuration(movies) {
  if (movies.length === 1) return movies;

  const moviesWithFormatedMinutes = turnHoursToMinutes(movies);

  const result = moviesWithFormatedMinutes.sort(
    (a, b) => a.duration - b.duration
  );
  //   console.log(moviesWithFormatedMinutes);
  //   console.log(result);

  return result;
}
// console.log(orderByDuration(movies));
// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
function howManyMovies(movies) {
  let allDramaMovies = movies.filter(m => m.genre.includes("Drama"));
  const stevenDramaMovies = allDramaMovies.filter(
    m => m.director === "Steven Spielberg"
  );
  return stevenDramaMovies.length;
}
// console.log(howManyMovies(movies));
// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  const alphabeticalOrder = movies.sort(function(a, b) {
    return a.title.localeCompare(b.title);
  });
  let result = [];
  if (alphabeticalOrder < 20) {
    for (let i = 0; i < alphabeticalOrder.length; i++) {
      result.push(alphabeticalOrder[i].title);
    }
  } else {
    for (let i = 0; i < 20; i++) {
      result.push(alphabeticalOrder[i].title);
    }
  }

  return result;
}
// console.log(orderAlphabetically(movies));
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies) {
  const newMovies = movies.map(movie => {
    const newMovie = { ...movie };
    newMovie.duration = durationInMinutes(newMovie.duration);
    return newMovie;
  });

  return newMovies;

  /* Helper Functions */
  function durationInMinutes(duration) {
    let durationArr = duration.split("");

    if (durationArr.length > 5) {
      const onlyMinutes = false;
      return getMinutes(durationArr, onlyMinutes) + getHours(durationArr[0]);
    }
    if (durationArr.length === 2) {
      return getHours(durationArr[0]);
    }
    if (durationArr.length <= 5) {
      const onlyMinutes = true;
      return getMinutes(durationArr, onlyMinutes);
    }

    function getHours(duration) {
      return duration * 60;
    }
    function getMinutes(duration, onlyMinutes) {
      let minutesArr = [];

      if (onlyMinutes) {
        if (duration.length === 5) {
          minutesArr = duration.slice(0, 2);
        }
        if (duration.length === 4) {
          minutesArr = duration.slice(0, 1);
        }
        return convertArrToNumber(minutesArr);
      }
      if (durationArr.length === 8) {
        minutesArr = durationArr.slice(3, 5);
      }
      if (durationArr.length === 7) {
        minutesArr = durationArr.slice(3, 4);
      }
      return convertArrToNumber(minutesArr);
    }

    function convertArrToNumber(arr) {
      return parseInt(arr.join().replace(/,/, ""), 10);
    }
  }
}
console.log(turnHoursToMinutes(movies));

// BONUS Iteration: Best yearly rate average - Best yearly rate average
function bestYearAvg() {}
