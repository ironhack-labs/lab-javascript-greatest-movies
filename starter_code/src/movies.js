/* eslint no-restricted-globals: 'off' */
// console.log(movies);

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
const orderByYear = (moviesArr) => {
  /* let newArray = moviesArr.map((x) => x);

  newArray.sort((a, b) => {
    if (a.year === b.year) {
      return a['title'].localeCompare(b['title']);
    }
    return a.year - b.year;
  });
  console.table(newArray);
  return newArray; */

  // one line approach
  return moviesArr.slice().sort((a, b) => {
    if (a.year === b.year) {
      return a['title'].localeCompare(b['title']);
    }
    return a.year - b.year;
  });
};

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

const howManyMovies = (moviesArray) => {
  const director = 'Steven Spielberg';
  const genre = 'Drama';
  const newArray = moviesArray.slice();

  return newArray
    .slice()
    .filter((movie) => movie.director.toLowerCase() === director.toLowerCase())
    .filter((movie) => movie.genre.includes(genre)).length;

  /* return moviesArray
    .slice()
    .filter((movie) => movie.director.toLowerCase() === director.toLowerCase())
    .filter((movie) => movie.genre.contains(genre)); */
};

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = (moviesArr) => {
  return moviesArr
    .slice()
    .map((movie) => movie.title)
    .sort((a, b) => {
      return a.localeCompare(b);
    })
    .slice(0, 20);
};
// Iteration 4: All rates average - Get the average of all rates with 2 decimals

const ratesAverage = (moviesArr) => {
  if (!moviesArr.length) return 0;
  return (
    Math.round(
      (moviesArr.reduce(
        (total, current, index, arr) =>
          current.rate ? total + current.rate : total + 0,
        0,
      ) /
        moviesArr.length) *
        100,
    ) / 100
  );
};

// Iteration 5: Drama movies - Get the average of Drama Movies

const dramaMoviesRate = (moviesArray) => {
  let dramaMovies = moviesArray.slice();
  //console.table(dramaMovies, dramaMovies.genre);
  // console.log(dramaMovies);
  return ratesAverage(
    dramaMovies.filter((movie) => movie.genre.includes('Drama')),
  );
};

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

const turnHoursToMinutes = (moviesArr) => {
  let newArray = [];

  //   console.log(moviesArr[0].duration);
  newArray = moviesArr.map((movie) => {
    // console.log(movie);
    let newTimeArray = movie.duration.split(' ');
    let newDuration = 0;
    // console.log('newtimesarray', newTimeArray);

    if (newTimeArray.length > 1) {
      newDuration =
        parseInt(newTimeArray[0].replace('h', '')) * 60 +
        parseInt(newTimeArray[1].replace('min', ''));
    } else if (newTimeArray[0].search('min') === -1) {
      //it is h
      newDuration = parseInt(newTimeArray[0].replace('h', '')) * 60;
    } else {
      //it is min
      newDuration = parseInt(newTimeArray[1].replace('min', ''));
    }
    movie.duration = newDuration;

    return movie;
  });
  //   console.log("newnewArray);
  return newArray;
};

// BONUS Iteration: Best yearly rate average - Best yearly rate average

const bestYearAvg = (moviesArr) => {
  if (!moviesArr.length) return null;
  shallowCopy = moviesArr.slice();
  allYearsArr = getAllYears(shallowCopy);
  result = [];

  allYearsArr.forEach((year) => {
    result.push({
      year: year,
      avgRate: yearAvg(shallowCopy, year),
    });
  });
  result.sort((a, b) => {
    if (b.avgRate === a.avgRate) {
      a.year - b.year;
    }
    b.avgRate - a.avgRate;
  });
  /* console.log(
    `The Best Year was ${result[0].year} with an avarage Rate of ${result[0].avgRate}`,
  ); */
  result.slice();
  return result.slice(0, 1);
};
/*
  new Array = [{ year: 1999 , avgRate: 10} , { year: 2001, avgRate: 9.5}, ...]
*/

const getAllYears = (moviesArr) => {
  result = [];

  moviesArr.forEach((movie) => {
    if (!result.includes(movie.year)) {
      result.push(movie.year);
    }
  });
  //console.log(result);
  return result.sort();
};

const yearAvg = (moviesArr, year) => {
  if (!moviesArr.length) {
    return 0;
  }
  shallowCopy = moviesArr.slice();
  sumOfRates = 0;
  countOfYearAppearance = 0;

  shallowCopy.forEach((movie) => {
    if (movie.year === year) {
      sumOfRates += movie.rate ? movie.rate : 0;
      countOfYearAppearance++;
    }
  });

  return Math.round((sumOfRates / countOfYearAppearance) * 100) / 100 || 0;
};
