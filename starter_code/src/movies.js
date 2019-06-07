/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes
function durationToMinutes(str) {
  let numMin = 0;
  let numHora = 0;

  let indexH = str.indexOf("h");
  if (indexH > -1) {
    numHora = parseInt(str.substring(0, indexH).trim(" "));
    if (isNaN(numHora)) {
      numHora = 0;
    }
  }

  let indexMin = str.indexOf("min");
  if (indexMin > indexH && indexMin > -1) {
    numMin = parseInt(str.substring(indexH + 1, indexMin).trim(" "));
    if (isNaN(numMin)) {
      numMin = 0;
    }
  }

  return minHoras = numHora * 60 + numMin;
}

const turnHoursToMinutes = movies => {
  return movies.map(e => {
    let newElement = Object.assign({}, e);
    newElement.duration = durationToMinutes(e.duration);
    return newElement;
  });
};

// Get the average of all rates with 2 decimals
const ratesAverage = movies => {
  if (movies.length > 0) {
    return parseFloat(
      (
        movies.reduce((a, b) => {
          let num = parseFloat(b.rate);
          if (isNaN(num)) num = 0;
          return a + num;
        }, 0) / movies.length
      ).toFixed(2)
    );
  }
  return undefined;
};

// Get the average of Drama Movies
const dramaMoviesRate = movies => {
  return ratesAverage(movies.filter(e => e.genre.includes("Drama")));
};

// Order by time duration, in growing order
function orderByDuration(movies) {
  return movies.sort((a, b) => {
    if (a.duration > b.duration) return 1;
    else if (a.duration < b.duration) return -1;
    else {
      if (a.title > b.title) return 1;
      else if (a.title < b.title) return -1;
      else return 0;
    }
  });
}

// How many movies did STEVEN SPIELBERG
function howManyMovies(movies) {
  if (movies.length > 0) {
    let num = movies.filter(
      e => e.genre.includes("Drama") && e.director === "Steven Spielberg"
    ).length;
    return `Steven Spielberg directed ${num} drama movies!`;
  }
  return undefined;
}

// Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  return movies
    .sort((a, b) => {
      if (a.title > b.title) return 1;
      else if (a.title < b.title) return -1;
      else return 0;
    })
    .map(e => e.title)
    .slice(0, 20);
}

// Best yearly rate average
function bestYearAvg(movies) {
  if (movies.length > 0) {
    years = [];
    movies.forEach(e => {
      if (!years.includes(e.year)) years.push(e.year);
    });

    maxRateYear = years.reduce(
      (acc, currentYear) => {
        let currentRate = ratesAverage(
          movies.filter(e => e.year === currentYear)
        );
        if (acc.rate < currentRate) {
          return { year: currentYear, rate: currentRate };
        } else if (acc.rate === currentRate) {
          if (acc.year > currentYear) {
            return { year: currentYear, rate: currentRate };
          } else {
            acc;
          }
        } else {
          return acc;
        }
      },
      { year: "", rate: 0 }
    );

    return `The best year was ${maxRateYear.year} with an average rate of ${
      maxRateYear.rate
    }`;
  }
  return undefined;
}
