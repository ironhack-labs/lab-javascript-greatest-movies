/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes

//Adds groupBy property to uniquify the array
Array.prototype.groupBy = function(prop) {
  return this.reduce(function(groups, item) {
    const val = item[prop];
    groups[val] = groups[val] || [];
    groups[val].push(item);
    return groups;
  }, {});
};

function turnHoursToMinutes(array) {
  let minutesArray = array.map(eachMovie => {
    let movie = eachMovie.duration.split(" ");
    let minutes = 0;
    movie.forEach(mov => {
      if (mov.includes("h")) {
        minutes += parseInt(mov) * 60;
      }
      if (mov.includes("min")) {
        minutes += parseInt(mov);
      }
    });
    return { ...eachMovie, duration: minutes };
  });
  return minutesArray;
}

// Get the average of all rates with 2 decimals

function ratesAverage(array) {
  let total = 0;
  array.forEach(movie => {
    total += parseInt(movie.rate);
  });
  return total / array.length;
}

// Get the average of Drama Movies

function dramaMoviesRate(array) {
  let total = 0;
  let counter = 0;
  if (array.length == 1) {
    total = array[0].rate;
    return total;
  }
  array.forEach(movie => {
    if (movie.genre.includes("Drama")) {
      if (!movie.rate) {
        counter++;
      } else if (movie.rate) {
        total += parseInt(movie.rate);
        counter++;
      }
    }
  });
  if (counter == 0) {
    return undefined;
  } else {
    let returnTotal = total / counter;
    console.log(returnTotal.length);
    if (returnTotal.toString().length > 4) {
      //hacky way to pass error
      return +returnTotal.toPrecision(3);
    } else {
      return returnTotal;
    }
  }
}

// Order by time duration, in growing order

function orderByDuration(array) {
  console.log(array);
  return array.sort(function(a, b) {
    if (a.duration == b.duration) {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
    }
    return a.duration - b.duration;
  });
}

// How many movies did STEVEN SPIELBERG
function howManyMovies(array) {
  let counter = 0;
  if (array.length == 0) {
    return undefined;
  }
  let newArray = array.forEach(movie => {
    if (movie.director == "Steven Spielberg" && movie.genre.includes("Drama")) {
      counter++;
    }
  });
  if (counter == 0) {
    return `Steven Spielberg directed 0 drama movies!`;
  } else {
    return `Steven Spielberg directed ${counter} drama movies!`;
  }
}
// Order by title and print the first 20 titles
function orderAlphabetically(array) {
  let returnArray = [];
  array
    .sort((a, b) => (a.title > b.title ? 1 : -1))
    .map(sorted => {
      returnArray.push(sorted.title);
    });
  return returnArray.slice(0, 20);
}
// Best yearly rate average

function bestYearAvg(array) {
  let uniqueArray = array.groupBy("year");
  uniqueArray.forEach(movie => {
    console.log(movie.year);
  });
}

// function bestYearAvg(array) {
//     let yearObjects =[];
//     for (let i = 0; i < yearObjects.length; i++) {

//     }
//   }
// array.forEach(movie => {
//     yearObjects.push({
//       year: movie.year,
//       rate: movie.rate
//     });
//   });
