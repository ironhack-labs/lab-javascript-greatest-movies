/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  let moviesArray = [...movies];
  moviesArray.sort((a, b) => {
    if (a.year < b.year) {
      return -1;
    }
    if (a.year === b.year && a.title < b.title) {
      return -1;
    }
    return 1;
  });
  return moviesArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(movies) {
  if (movies == []) {
    return 0;
  }
  let x = movies.filter(function(movie) {
    return (
      movie.genre.includes("Drama") && movie.director === "Steven Spielberg"
    );
  });
  return x.length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  let onlyTitles = movies.map(function(element) {
    return element.title;
  });
  let sortedArray = onlyTitles
    .sort(function(a, b) {
      return a.localeCompare(b);
    })
    .slice(0, 20);
  return sortedArray;
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies) {
  return (
    Math.round(
      (movies.reduce((accu, element) => {
        return accu + parseFloat(element.rate || 0);
      }, 0) /
        movies.length) *
        100
    ) / 100
  );
}

// Iteration 5: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(array) {
  let dramaMovies = array.filter(movies => {
    return movies.genre.includes("Drama");
  });
  if (!dramaMovies.length) return 0;
  return ratesAverage(dramaMovies);
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  let durationsOfMovies = movies.map(movie => {
    let hm = movie.duration.split("h");
    let durationInMinutes = 0;
    if (hm.length === 1) {
      durationInMinutes = parseInt(hm[0] * 60);
    } else if (hm[1].length === 0) {
      durationInMinutes = parseInt(hm[0]) * 60 || 0;
    } else {
      let minutes = parseInt(hm[1].trim());
      let hours = parseInt(hm[0]);
      durationInMinutes = minutes + hours * 60;
    }

    let transformedMovie = {
      title: movie.title,
      year: movie.year,
      director: movie.director,
      duration: durationInMinutes,
      genre: movie.genre,
      rate: movie.rate
    };
    return transformedMovie;
  });
  return durationsOfMovies;
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average
function bestYearAvg(arr) {
  if (arr.length !== 0) {
    let yearsArr = [];
    let bestMoviesAvg = [];
    for (let i = 0; i < arr.length; i++) {
      yearsArr.push(Number(arr[i].year));
    }
    let yearUnique = yearsArr.slice();

    yearUnique.forEach(el => {
      let avg = filterByYear(arr, el);
      bestMoviesAvg.push({
        year: el,
        average: avg
      });
    });

    bestMoviesAvg.sort((a, b) => {
      if (a.average > b.average) return -1;
      if (a.average < b.average) return 1;
      if (a.year > b.year) return 1;
      if (a.year < b.year) return -1;
    });

    return `The best year was ${bestMoviesAvg[0].year} with an average rate of ${bestMoviesAvg[0].average}`;
  }
  return null;
}

function filterByYear(arr, year) {
  let ratesArr = [];
  let yearMovies = arr.slice().filter(movie => movie.year === year);
  console.log(yearMovies);
  for (let i = 0; i < yearMovies.length; i++) {
    ratesArr.push(Number(yearMovies[i].rate));
  }
  console.log(ratesArr);
  let averageRate = ratesArr.reduce((a, b) => {
    if (b === undefined) return a;
    else return a + b;
  }, 0);
  averageRate = averageRate / ratesArr.length;
  return Number(averageRate.toFixed(2));
}
