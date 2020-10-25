// Iteration 1: All directors? - Get the array of all directors.
const getAllDirectors = (movies) => {

  const directorsArray = movies.map((item) => {
    return item.director
  });
  return directorsArray
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?


const howManyMovies = (movies) => {
  const films = movies.filter((movie) => {
    return movie.director === 'Steven Spielberg' && movie.genre.includes('Drama');
  });
  return films.length;
};

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
const ratesAverage = (movies) => {
  if (movies.length === 0) {
    return 0.0;
  }
  const totalAverage = movies.reduce((counter, movie) => {
    if (Number(movie.rate)) {
      return counter + movie.rate;
    } else {
      return counter;
    }
  }, 0);
  return Number((totalAverage / movies.length).toFixed(2));
};

// Iteration 4: Drama movies - Get the average of Drama Movies

const dramaMoviesRate = (movies) => {
  const dramaMovies = movies.filter((movie) => movie.genre.includes('Drama'));
  return ratesAverage(dramaMovies);
};



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

const orderByYear = (movies) => {
  const moviesCopy = movies.map((movie) => movie);
  const arrSorted = moviesCopy.sort((a, b) => {
    if (a.year > b.year) return 1;
    if (a.year < b.year) return -1;
    if (a.year === b.year) {
      if (a.title > b.title) return 1;
      if (a.title < b.title) return -1;
      else return 0;
    }
  });
  return arrSorted;
};

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

const orderAlphabetically = (movies) => {
  const listOfTitltes = movies.map((movie) => movie.title)
  const sortedListOfTitles = listOfTitltes.sort()
  if (sortedListOfTitles <= 20) {
    return sortedListOfTitles
  } else {
    return sortedListOfTitles.slice(0, 20)
  }
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average