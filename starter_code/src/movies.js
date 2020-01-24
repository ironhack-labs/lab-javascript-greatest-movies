/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

// receives an array as parameter and returns a new sorted array
// If two movies have the same year, order them in alphabetical order by their title
// Make sure not to mutate the original array

function orderByYear(a) {
  const arrayMovies = [...a];
  arrayMovies.sort((b, c) => {
    if (b.year === c.year) {
      return b.title.localeCompare(c.title);
    }
    return b.year - c.year;
  });
  return arrayMovies;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
//  function that receives an array as a parameter and filter, the array so we can have only the drama movies where Steven Spielberg is the director
// filter();

function howManyMovies(a) {
  let arr = Object.values(a);
  let total = arr.filter(b => {
    if (b.director === 'Steven Spielberg' && b.genre.includes('Drama')) {
      return true;
    }
  });
  return total.length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(a) {
  let titles = a
    .map(b => {
      return b.title;
    })
    .slice()
    .sort()
    .filter((b, c) => {
      if (c < 20) {
        return true;
      }
    });
  return titles;
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(a) {
  let average = a
    .filter(b => {
      if (b.rate) {
        return true;
      }
    })
    .map(b => {
      return b.rate;
    })
    .reduce((b, c) => {
      return b + c;
    }, 0);
  return Number((average / a.length).toFixed(2));
}

// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(a) {
  let dramaMovies = a.filter(b => {
    if (b.genre.includes('Drama')) {
      return true;
    } else {
      return 0;
    }
  });
  return ratesAverage(dramaMovies);
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(a) {
  let total = a.map(function(b) {
    if (!b.duration.includes('h')) {
      return {
        ...b,
        duration: Number(b.duration[0] + b.duration[1])
      };
    } else if (b.duration.length === 2) {
      return {
        ...b,
        duration: Number(b.duration[0]) * 60
      };
    } else if (isNaN(Number(b.duration[4]))) {
      return {
        ...b,
        duration: Number(b.duration[0]) * 60 + Number(b.duration[3])
      };
    } else {
      return {
        ...b,
        duration: Number(b.duration[0]) * 60 + Number(b.duration[3] + b.duration[4])
      };
    }
  });
  return total;
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average

// need to find out average for all the movies in each year
// get all movies in each year
// then get the rates and find average
// then compare the all the years averages

function bestYearAvg(a) {
  let bestAverage = null;
  let bestAverageYear = null;

  if (!a.length) {
    return null;
  }

  a.forEach(b => {
    let bestYear = a.filter(m => {
      return m.year == b.year;
    });

    average = ratesAverage(bestYear);

    if (average > bestAverage) {
      bestAverage = average;
      bestAverageYear = bestYear[0].year;
    } else if (average == bestAverage) {
      bestAverage = average;

      parseInt(bestAverageYear) > parseInt(bestYear[0].year)
        ? (bestAverageYear = bestYear[0].year)
        : (bestAverageYear = bestAverageYear);
    }
  });
  return `The best year was ${bestAverageYear} with an average rate of ${bestAverage}`;
}
