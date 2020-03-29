/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

// function orderByYear(array) {
//   const newArray = [...array];
//   newArray.sort(function(a, b) {
//     if (a.year !== b.year) {
//       return a.year - b.year;
//     } else {
//       return a.title.localeCompare(b.title);
//     }
//   });
//   return newArray;
// }

// With ES6 notation:

// callback function definition:
let sortYearAscend = (a, b) => {
  if (a.year !== b.year) {
    return a.year - b.year;
  } else {
    return a.title.localeCompare(b.title);
  }
};

// Main function can now be composed with other callbacks (descending, etc...)
let orderByYear = array => {
  const newArray = [...array];
  newArray.sort(sortYearAscend);
  return newArray;
};

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(array) {
  const newArray = array.filter(
    item => item.director === 'Steven Spielberg' && item.genre.includes('Drama')
  );
  return newArray.length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(array) {
  const orderedArray20 = array.map(item => item.title);
  orderedArray20.sort((a, b) => a.localeCompare(b));
  orderedArray20.splice(20);
  return orderedArray20;
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(array) {
  let sumRates = 0;
  if (array.length > 0) {
    array.reduce((result, item) => {
      if (!item.rate) {
        return 0;
      } else {
        return (sumRates = result + item.rate);
      }
    }, 0);
  } else {
    return 0;
  }
  let avg = +(sumRates / array.length).toFixed(2);
  return avg;
}

// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(array) {
  let sumRates = 0;
  const dramaArray = array.filter(item => item.genre.includes('Drama'));
  return ratesAverage(dramaArray); // function defined in iteration 4
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(array) {
  let newArray = JSON.parse(JSON.stringify(array));
  const updatedMovies = newArray.map(item => {
    let minutes = 0;
    let hours = 0;
    const arrayTime = item.duration.split('');
    if (item.duration.includes('h')) {
      hours = Number(arrayTime.slice(0, arrayTime.indexOf('h')).join('')) * 60;
    }
    if (item.duration.includes('m')) {
      minutes = Number(
        arrayTime
          .slice(arrayTime.indexOf(' ') + 1, arrayTime.indexOf('m'))
          .join('')
      );
    }
    item.duration = minutes + hours;
    return item;
  });
  return updatedMovies;
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average

function bestYearAvg(array) {
  let bestYear = 1900;
  let topByYear = {};
  for (let i = 1900; i <= 2020; i++) {
    topByYear[i] = { yearRates: 0, yearAvg: 0, movieCount: 0 };
  }

  array.map(item => {
    topByYear[item.year].yearRates += item.rate;
    topByYear[item.year].movieCount++;
    topByYear[item.year].yearAvg = +(
      topByYear[item.year].yearRates / topByYear[item.year].movieCount
    ).toFixed(2);
  });

  for (item in topByYear) {
    if (topByYear[item].yearAvg > topByYear[bestYear].yearAvg) {
      bestYear = item;
    }
  }

  if (!array.length) {
    return null;
  } else {
    return `The best year was ${bestYear} with an average rate of ${topByYear[bestYear].yearAvg}`;
  }
}
