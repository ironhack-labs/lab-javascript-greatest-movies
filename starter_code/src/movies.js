/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
const orderByYear = array => {
  if (array.length === 0) {
    return [];
  }
  let sortedYear = array.sort(function(a, b) {
    if (a.year > b.year) {
      return 1;
    } else if (a.year < b.year) {
      return -1;
    } else if (a.year === b.year) {
      if (a.title > b.title) {
        return 1;
      } else if (a.title < b.title) {
        return -1;
      } else {
        return 0;
      }
    }
  });
  return sortedYear;
};

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
/*const howManyMovies = array => {
  if (array.length === 0 || array.director != 'Steven Spielberg') {
    return 0;
  }

  let findDramaSteven = array.filter(dramaSteven => {
    if (dramaSteven.director.includes('Steven Spielberg') && dramaSteven.genre.includes('Drama')) {
      return true;
    }
  });

  return findDramaSteven.length;
};*/

const howManyMovies = array => {
  return array
    .filter(movie => movie.director.includes('Steven Spielberg'))
    .filter(spielbergMovie => spielbergMovie.genre.includes('Drama')).length;
};
/*
const howMAnyMovies = array => {
  //First get an array with stevens movies
  const stevenSpielMovies = array.filter(movie => movie.director.includes('Steven Spielberg'));
  const stevenDrama = stevenSpielMovies.filter(movie => movie.genre.includes('Drama'));
  return stevenDrama.length;
};*/

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
/*const orderAlphabetically = array => {
  let sortedTitle = array.sort(function(a, b) {
    if (a.Title > b.Title) {
      return 1;
    } else if (a.Title < b.Title) {
      return -1;
    } else {
      return 0;
    }
  });
  return sortedTitle;

};*/

const orderAlphabetically = array => {
  return (title = array
    .map(title => title.title)
    .sort()
    .slice(0, 20));
};

// Iteration 4: All rates average - Get the average of all rates with 2 decimals
const ratesAverage = array => {
  if (array.length === 0) {
    return 0;
  }

  /* return average !== 'undefined';*/
  let average = array.reduce(function(accumulator, value) {
    return accumulator + value.array;
  });
  return Math.round(ratesAverage / array.length);
};

// Iteration 5: Drama movies - Get the average of Drama Movies

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
