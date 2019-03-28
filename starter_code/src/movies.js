/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes
const turnHoursToMinutes = array => {
  const newArray = array.map(element => {
    const duration = element.duration;
    let minutes = 0;

    if (duration.includes(' ')) {
      duration.split(' ').forEach(time => {
        if (time.includes('h')) minutes += parseInt(time, 10) * 60;
        if (time.includes('m')) minutes += parseInt(time, 10);
      });
    } else {
      if (duration.includes('h')) minutes += parseInt(duration, 10) * 60;
      if (duration.includes('m')) minutes += parseInt(duration, 10);
    }

    return {
      ...element,
      duration: minutes
    };
  });

  return newArray;
};

// Get the average of all rates with 2 decimals
const ratesAverage = array => {
  const sum = array.reduce((accumulator, element) => {
    const add = parseFloat(element.rate * 1);

    return accumulator + add;
  }, 0);
  const average = sum / array.length;

  return parseFloat(average.toFixed(2));
};

// Get the average of Drama Movies
const dramaMoviesRate = array => {
  const filtered = array.filter(element => element.genre.includes('Drama'));

  if (filtered.length === 0) {
    return undefined;
  }

  return ratesAverage(filtered);
};

// Order by time duration, in growing order
const orderByDuration = array => {
  const sorted = array.sort((a, b) => {
    if (a.duration === b.duration) {
      return a.title < a.title ? -1 : 1;
    } else {
      return a.duration - b.duration;
    }
  });

  return sorted;
};

// How many movies did STEVEN SPIELBERG
const howManyMovies = array => {
  if (array.length === 0) {
    return undefined;
  }

  const filtered = array.filter(
    element =>
      element.genre.includes('Drama') && element.director === 'Steven Spielberg'
  );

  return `Steven Spielberg directed ${filtered.length} drama movies!`;
};

// Order by title and print the first 20 titles
const orderAlphabetically = array => {
  const sorted = array.sort((a, b) => (a.title > b.title ? 1 : -1));
  const mapped = sorted.map(element => element.title);
  const top20 = mapped.slice(0, 20);

  return top20;
};

// Best yearly rate average
const bestYearAvg = array => {
  if (array.length === 0) {
    return undefined;
  }

  const yearsObj = {};
  array.forEach(element => {
    const year = element.year;
    if (yearsObj[year] === undefined) {
      yearsObj[year] = { year: year, sum: 0, total: 0 };
    }

    yearsObj[year].sum += parseFloat(element.rate);
    yearsObj[year].total += 1;
  });

  const yearsAvg = Object.values(yearsObj).map(element => {
    const average = element.sum / element.total;
    return {
      year: element.year,
      average: average
    };
  });

  const yearsAvgSorted = yearsAvg
    .sort((a, b) => {
      if (a.average === b.average) {
        return b.year - a.year;
      } else {
        return a.average - b.average;
      }
    })
    .reverse();

  const best = yearsAvgSorted[0];

  return `The best year was ${best.year} with an average rate of ${
    best.average
  }`;
};
