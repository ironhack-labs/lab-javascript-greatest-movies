/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes

const turnHoursToMinutes = arr => {
  const newArr = JSON.parse(JSON.stringify(arr));
  newArr.map(movie => {
    const hDurationSplit = movie.duration.split('h')[0];
    let hours;
    let mins;
    if (isNaN(hDurationSplit)) {
      hours = 0;
      mins = parseInt(hDurationSplit.split('min')[0]);
    } else {
      hours = parseInt(hDurationSplit * 60);
      if (movie.duration.split('h')[1] !== '') {
        mins = parseInt(movie.duration.split('h')[1].split('min')[0]);
      } else {
        mins = 0;
      }
    }
    movie.duration = hours + mins;
  })
  return newArr;
};


// console.log(turnHoursToMinutes(movies))


// Get the average of all rates with 2 decimals 
const ratesAverage = arr => parseFloat((arr.reduce((totalRate, movie) => totalRate + parseFloat(movie.rate), 0) / arr.length).toFixed(2));
// console.log(ratesAverage(movies));

// Get the average of Drama Movies
const dramaMoviesRate = arr => {
  const filteredDramaArr = arr.filter(movie => movie.genre.includes('Drama'));
  if (filteredDramaArr.length === 0) {
    return;
  }
  return parseFloat((filteredDramaArr.reduce((totalRate, movie) => totalRate + movie.rate, 0) / filteredDramaArr.length).toFixed(2));
}

// console.log(dramaMoviesRate(movies));

// Order by time duration, in growing order
const orderByDuration = arr => {
  const newArrSort = JSON.parse(JSON.stringify(arr));
  newArrSort.sort((a, b) => {
    if (a.duration > b.duration) {
      return 1;
    }
    if (a.duration < b.duration) {
      return -1;
    }
    if (a.duration === b.duration) {
      return a.title.localeCompare(b.title);
    }
    return 0;
  });
  return newArrSort;
};

// console.log(orderByDuration(movies))

// How many movies did STEVEN SPIELBERG
const howManyMovies = arr => {
  const stevenAllGenreArr = arr.filter(movie => movie.director === 'Steven Spielberg');
  const stevenArr = arr.filter(movie => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama'));
  if (arr.length === 0) {
    return undefined;
  }
  if (stevenAllGenreArr.length === 0) {
    return `Steven Spielberg directed 0 drama movies!`
  }
  return `Steven Spielberg directed ${stevenArr.length} drama movies!`
};

// Order by title and print the first 20 titles
const orderAlphabetically = arr => {
  const moviesArr = JSON.parse(JSON.stringify(arr));
  moviesArr.sort((a, b) => {
    return a.title.localeCompare(b.title);
  });
  let titlesArr = [];
  if (moviesArr.length < 20) {
    for (let i = 0; i < moviesArr.length; i += 1) {
      titlesArr.push(moviesArr[i].title);
    }
  } else {
    for (let i = 0; i < 20; i += 1) {
      titlesArr.push(moviesArr[i].title);
    }
  }
  return titlesArr;
};

// Best yearly rate average
const yearsArr = arr => arr.reduce((yearsArr, movie) => {
  if (!yearsArr.includes(movie.year)) {
    yearsArr.push(movie.year);
  }
  yearsArr.sort();
  return yearsArr;
}, []);

const moviesPerYear = (moviesArray, yearsArray, idx) => moviesArray.filter(movie => movie.year === yearsArray[idx]);

const allMoviesPerYear = arr => {
  const years = yearsArr(arr);
  let allMoviesPerYearArr = [];
  for (let i = 0; i < years.length; i += 1) {
    allMoviesPerYearArr.push(moviesPerYear(arr, years, i));
  }
  return allMoviesPerYearArr;
};

const filteredSingleYear = arr => {
  let years = yearsArr(arr);
  const ratesArr = [];
  for (let i = 0; i < years.length; i += 1) {
    let singleYearMovies = allMoviesPerYear(arr)[i];
    const ratePerYear = ratesAverage(singleYearMovies);
    ratesArr.push([years[i], ratePerYear]);
  }
  return ratesArr;
};


const bestYearAvg = arr => {
  if (arr.length === 0) {
    return undefined;
  }
  if (arr.length === 1) {
    return `The best year was ${arr[0].year} with an average rate of ${arr[0].rate}`;
  }
  const allRatesArr = filteredSingleYear(arr);
  let maxRate = 0;
  let maxRateYear = 0;
  for (let i = 0; i < allRatesArr.length; i += 1) {
    if (allRatesArr[i][1] > maxRate) {
      maxRate = allRatesArr[i][1];
      maxRateYear = allRatesArr[i][0];
    }
  }
  return `The best year was ${maxRateYear} with an average rate of ${maxRate}`;
}
console.log(bestYearAvg(newMoviesArr));
