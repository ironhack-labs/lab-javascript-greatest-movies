// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
const getAllDirectors = (movies) => {
  let directorsNames = movies.map(elem => {
    return elem.director
  });
  let uniqueNames = directorsNames.filter((elem, index, arr) => {
    return arr.indexOf(elem) === index
  });
  return uniqueNames
};

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
const howManyMovies = (movies) => {
  let spielbergMovies = movies.filter(elem => {
    if (elem.director == 'Steven Spielberg' && elem.genre.includes('Drama')) {
      return elem
    };
  });
  return spielbergMovies.length
};

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
const ratesAverage = (movies) => {
  if (movies.length == 0) {
    return 0
  }
  let rate = movies.reduce((acc, elem) => {
    return acc + (elem.rate || 0)
  }, 0);
  return Math.round(rate/movies.length * 100)/100
};

// Iteration 4: Drama movies - Get the average of Drama Movies
const dramaMoviesRate = (movies) => {
  let dramaMoviesCounter = 0
  let dramaRates = movies.reduce((acc, elem) => {
    if (elem.genre.includes('Drama')) {
      dramaMoviesCounter += 1
      return acc + (elem.rate || 0)
    } else {
      return acc
    }
  }, 0);

  if (dramaMoviesCounter == 0) {
    return 0
  }
  return Math.round(dramaRates/dramaMoviesCounter * 100)/100
};

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
const orderByYear = (movies) => {
  let clonedMovies = JSON.parse(JSON.stringify(movies))
  let orderdByYear = clonedMovies.sort((elem1, elem2) => {
    if(elem1.year > elem2.year) {
      return 1
    } else if(elem1.year < elem2.year) {
      return -1
    } else {
      if(elem1.title > elem2.title) {
        return 1
      } else if(elem1.title < elem2.title) {
        return -1
      } else {
        return 0
      }
    }
  });
  return orderdByYear
};

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = (movies) => {
  let clonedMovies = JSON.parse(JSON.stringify(movies))
  let alphabeticallyOrdered = clonedMovies.sort((elem1, elem2) => {
    if(elem1.title > elem2.title) {
      return 1
    } else if(elem1.title < elem2.title) {
      return -1
    } else {
      return 0
    }
  });

  return alphabeticallyOrdered.slice(0,20).map(elem => elem.title)
};

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
