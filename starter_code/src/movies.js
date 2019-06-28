/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
//const movies = require('./data.js');


function turnHoursToMinutes(array) {
  const copy = JSON.parse(JSON.stringify(array));
  const newArray = copy.map((movie) => {
    let minutes = 0;
    let hour = 0;
    let digits = movie.duration.match(/(\d)/g);
    if (digits.length === 3) {
      hour = Number(digits[0]) * 60;
      minutes = Number(digits.slice(1).join(''));
    } else if (digits.length === 2) {
      minutes = Number(digits.join(''));
    } else if (digits.length === 1) {
      hour = Number(digits[0]) * 60;
    }
    movie.duration = hour + minutes;
    return movie
  })
  return newArray
}



// Get the average of all rates with 2 decimals 
function ratesAverage(array) {
  const n = array.length;
  const sumOfRates = array.reduce((acc, movie) => {
    return acc + Number(movie.rate);
  }, 0)
  const average = sumOfRates / n;
  return Number(average.toFixed(2));
}


console.log(ratesAverage(movies));



// Get the average of Drama Movies
function dramaMoviesRate(array) {
  const dramaMovies = array.filter(movie => movie.genre.indexOf('Drama') !== -1);
  if (dramaMovies.length === 0) {
    return;
  }
  return ratesAverage(dramaMovies);
}

console.log(dramaMoviesRate(movies));

// Order by time duration, in growing order
function orderByDuration(array) {
  if (array.length === 1) {
    return array;
  }
  //const orderedArray = turnHoursToMinutes(array);
  //console.log(orderedArray);
  array.sort((a, b) => {
    if (a.duration === b.duration) {
      return a.title.localeCompare(b.title);
    } else {
      return a.duration - b.duration;
    }    
  });
  return array;
}


//console.log(orderByDuration(movies));
//console.log(orderByDuration(movies));

// const movies2 = orderByDuration(movies);

// movies2.forEach((movie) => {
//   console.log(movie.duration);
// });


// How many movies did STEVEN SPIELBERG
function howManyMovies(array) {
  if (array.length === 0) {
    return;
  }

  const spielbergArray = array.filter((movie) => {
    return (movie.genre.indexOf('Drama') !== -1 && movie.director === 'Steven Spielberg')
  });

  return `Steven Spielberg directed ${spielbergArray.length} drama movies!`;
}

// Order by title and print the first 20 titles
function orderAlphabetically(array) {
  const titleArray = [];
  const copy = JSON.parse(JSON.stringify(array));
  copy.sort((a, b) => {
    return a.title.localeCompare(b.title);
  });
  if (copy.length <= 20) {
    copy.forEach((movie) => titleArray.push(movie.title));
  } else {
    for (let i = 0; i < 20; i += 1) {
      titleArray.push(copy[i].title);
    }
  }
  return titleArray;
}

// Best yearly rate average
function bestYearAvg(array) {
  if (array.length === 0) {
    return;
  } else if (array.length === 1) {
    return `The best year was ${array[0].year} with an average rate of ${array[0].rate}`;
  }
  const copyOfMovies = JSON.parse(JSON.stringify(movies));
  copyOfMovies.sort((a, b) => a.year - b.year);
  let bestAvg = 0;
  let bestYear = '';
  let rateSum = 0;
  let count = 0;
  // loop inside array of movies calculating the avg of each year
  for (let i = 0; i < copyOfMovies.length - 1; i += 1) {
    rateSum += Number(copyOfMovies[i].rate);
    count += 1;
    if (copyOfMovies[i].year !== copyOfMovies[i+1].year) {
      let newAvg = Number((rateSum / count).toFixed(2));
      if (newAvg > bestAvg) {
        // update best avg, best year
        bestAvg = newAvg;
        bestYear = copyOfMovies[i].year;
      }
    }
    // restart variables for a new year
    rateSum = 0;
    count = 0;
  }
  
  return `The best year was ${bestYear} with an average rate of ${bestAvg}`;
}

//console.log(bestYearAvg(movies));

