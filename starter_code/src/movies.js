/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arrData) {
  const final = [];
  arrData.map(x => final.push(x));
  return final.sort((a, b) => {
    if (a.year > b.year) {
      return 1;
    } else if (a.year < b.year) {
      return -1;
    } else {
      if (a.title > b.title) {
        return 1;
      } else if (a.title < b.title) {
        return -1;
      } else {
        return 0;
      }
    }
  });
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(stevenArr) {
  return stevenArr.filter((x, i) => x.director === 'Steven Spielberg' && x.genre.includes('Drama'))
    .length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
  const final = arr
    .map(x => x.title)
    .sort()
    .slice(0, 20);
  return final;
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(arr) {
  let sum = arr
    .filter(x => {
      if (x.rate) {
        return true;
      }
    })
    .map(y => {
      return y.rate;
    })
    .reduce((acc, z) => {
      return acc + z;
    }, 0);
  if (!arr[0]) return 0;
  else return Number((sum / arr.length).toFixed(2));
}

// Iteration 5: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(arr) {
  //here I get all movies with Drama
  var s = arr.filter((x, i) => arr[i].genre.filter(z => z === 'Drama')[0] === 'Drama');

  //here I go for the average rate of drama movies
  var ac = 0;
  var r =
    Math.round(
      (s.reduce((acc, val, i) => {
        if (val.rate !== undefined) {
          ac++;
          return acc + val.rate;
        }
      }, 0) /
        ac) *
        100
    ) / 100;
  if (arr.length === 1) return arr[0].rate;
  else if (s[0] === undefined) return 0;
  else return r;
}
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arr) {
  arr.forEach(element => {
    element.time;
  });
}
// BONUS Iteration: Best yearly rate average - Best yearly rate average
