/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesParam) {
  let moviesCopy = Array.from(moviesParam);
  let ordenar = (a, b) => {
    if (a.year === b.year) {
      // "sort array objects by string property"
      return b.title < a.title ? 1 : -1
    } else {
      return a.year - b.year;

    }
  };
  return moviesCopy.sort(ordenar);
}



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(moviesCopy) {
  return moviesCopy.filter(
    ({
      director,
      genre
    }) =>
    genre.includes("Drama") && director == "Steven Spielberg"
  ).length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles


function orderAlphabetically(moviesCopy) {
  let arrayTitle = [];
  for (let i = 0; i < moviesCopy.length; i++) {
    arrayTitle.push(moviesCopy[i].title);
  }
  arrayTitle.sort();
  return arrayTitle.slice(0, 20);
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals. 

function ratesAverage(moviesCopy) {
  if (moviesCopy.length === 0) {
    return 0;
  }
  let sumRates = moviesCopy.reduce((acc, val) => {
    if (!val.rate) {
      // val.rate === ''
      // val.rate === null
      // val.rate === undefined
      return acc;
    } else {
      return acc + val.rate
    }
  }, 0); //starts to count at  0

  return parseFloat(parseFloat(sumRates / moviesCopy.length).toFixed(2));

}



// Iteration 5: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(moviesCopy) {
  let {
    sumRates,
    dramaLength
  } = moviesCopy.reduce(
    (acc, movie) => {
      if (movie.genre.includes("Drama")) {
        acc.sumRates += movie.rate;
        acc.dramaLength++;
      }
      return acc;
    }, {
      sumRates: 0,
      dramaLength: 0
    }
  );
  if (dramaLength === 0) {
    return 0;
  }
  if (sumRates.length === 0) return 0;
  return parseFloat((sumRates / dramaLength).toFixed(2));
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes HAY  Q USAR EL JSON


function turnHoursToMinutes(moviesCopy) {
  let newDurationMovies = JSON.parse(JSON.stringify(moviesCopy));
  const splitHours = (hoursString) => {
    return parseInt(hoursString.split("h")[0]) * 60;
  }
  const splitMinutes = (minutesString) => {
    return parseInt(minutesString.split("mins")[0])
  }

  for (let i = 0; i < newDurationMovies.length; i++) {
    let splitDuration = newDurationMovies[i].duration.split(" ");
    let newDuration = 0;

    if (splitDuration.length === 2) {
      // ['2h', '20m']
      let hoursNumber = splitHours(splitDuration[0]) // total minutes sin las h
      let minutesNumber = splitMinutes(splitDuration[1]);
      newDuration = hoursNumber + minutesNumber;
    } else {
      if (splitDuration[0].indexOf('h') === -1) {
        // h DOES NOT exist
        // ['30m']
        newDuration = splitMinutes(splitDuration[0]);
      } else {
        // h DOES exist
        // ['2h']
        newDuration = splitHours(splitDuration[0])
      }
    }
    newDurationMovies[i].duration = newDuration;
  }


  return newDurationMovies;
};



//bonus

function bestYearAvg(moviesCopy) {
  if (!moviesCopy.length) {
    return null
  }
  const printWinnerMessage = (year, rate) => {
    return `The best year was ${year} with an average rate of ${rate}`
  }

  if (moviesCopy.length === 1) {
    return printWinnerMessage(moviesCopy[0].year, moviesCopy[0].rate)
  }
  const calcAverage = (movie) => {
    return movie.accScore / movie.numberOfMovies
  }
  const movieRatesByYear = {}
  /** saco el año 
   * {
   *  1900: {
   *    accScore: 0,
   *    numberOfMovies: 0,
   *    average: 0
   * },
   *  1901: {}
   * }
   */
  moviesCopy.map((movie) => {
    const scoreAccumulated = movieRatesByYear[movie.year] || {
      accScore: 0,
      numberOfMovies: 0,
    };

    movieRatesByYear[movie.year] = {
      accScore: scoreAccumulated.accScore + movie.rate || 0,
      numberOfMovies: scoreAccumulated.numberOfMovies + 1,
    }

    movieRatesByYear[movie.year].average = calcAverage(movieRatesByYear[movie.year])

  })

  let bestYear = 0;
  let bestRate = 0;

  // keys para recorrer objetos
  // Object.keys(movieRatesByYear) => ['1900', '1901'...]
  Object.keys(movieRatesByYear).map((k) => {
    // k = 1900
    const movie = movieRatesByYear[k];
    if (movie.average > bestRate) {
      bestYear = k;
      bestRate = movie.average;
    } else {
      if (movie.average === bestRate) {
        if (k < bestYear) {
          bestYear = k;
          bestRate = movie.average;
        }
      }
    }
  })

  return printWinnerMessage(bestYear, bestRate)
}

