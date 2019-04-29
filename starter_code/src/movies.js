/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes

function turnHoursToMinutes(arr) {
  return arr.map(obj => {
    let newMovies = { ...movies };
    newMovies.duration = minutifyDuration(obj.duration);
    return newMovies;
  });
}

function minutifyDuration(str) {
  const durationArray = str.split(" ");
  let hours = parseInt(durationArray[0]);
  const minutes = parseInt(durationArray[1]);
  if (durationArray.length === 1) {
    if (durationArray[0].includes("h")) {
      hours *= 60;
      return hours;
    } else if (durationArray[0].includes("min")) {
      return hours;
    }
  } else {
    return hours * 60 + minutes;
  }
}

// Get the average of all rates with 2 decimals

function ratesAverage(arr) {
  const newArray = arr.reduce((acc, currentValue) => {
    return acc + parseInt(currentValue.rate) / arr.length;
  }, 0);
  return Number(newArray.toFixed(2));
}
// Get the average of Drama Movies
function dramaMoviesRate(arr) {
  // FILTERING IF IT HAS DDDDDRAMA!
  dramaMoviesArray = filteringDramas(arr);
  if (dramaMoviesArray.length === 0) {
    return undefined;
  }
  dramaMoviesArray.forEach(obj => {
    if (obj.rate === "") {
      obj.rate = 0;
    }
  });

  return ratesAverage(dramaMoviesArray);
}

filteringDramas = arr => {
  dramaMoviesArray = arr.filter(obj => {
    return obj.genre.includes("Drama");
  });
  return dramaMoviesArray;
};

// Order by time duration, in growing order

function orderByDuration(arr) {
  const sortedByDur = arr.sort((a, b) => {
    const durA = a.duration;
    const durB = b.duration;
    if (durA < durB) {
      return -1;
    }
    if (durA > durB) {
      return 1;
    }
    if (durA === durB && a.title[0] < b.title[0]) {
      return -1;
    }
    return 0;
  });
  console.log(sortedByDur);
  return sortedByDur;
}

// How many movies did STEVEN SPIELBERG
function howManyMovies(arr) {
  // FILTERING IF IT HAS DDDDDRAMA!
  dramaMoviesArray = filteringDramas(arr);
  if (dramaMoviesArray.length === 0) {
    return undefined;
  }
  dramaMoviesArray.forEach(obj => {
    if (obj.rate === "") {
      obj.rate = 0;
    }
  });
  // FILTERING IF IT HAS A SPIELBERGGG
  spielbergMoviesArray = filteringSpielberg(dramaMoviesArray);

  return `Steven Spielberg directed ${
    spielbergMoviesArray.length
  } drama movies!`;
}

filteringSpielberg = arr => {
  spielbergMoviesArray = arr.filter(obj => {
    return obj.director.includes("Spielberg");
  });
  return spielbergMoviesArray;
};

// Order by title and print the first 20 titles

function orderAlphabetically(arr) {
  const sortedByAlph = arr.sort((a, b) => {
    const titleA = a.title.toUpperCase();
    const titleB = b.title.toUpperCase();
    if (titleA < titleB) {
      return -1;
    }
    if (titleA > titleB) {
      return 1;
    }
    return 0;
  });
  const finalArray = [];
  for (let i = 0; i < 20; i++) {
    if (sortedByAlph[i] === undefined) {
      return finalArray;
    }
    console.log(sortedByAlph[i].title);
    finalArray.push(sortedByAlph[i].title);
  }
  console.log(finalArray);
  return finalArray;
}
// Best yearly rate average
