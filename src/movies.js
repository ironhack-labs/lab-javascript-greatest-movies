// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// let directorlist = movies.map(getAllDirectors (director, index, array) {
//     return directorlist;
// });

const getAllDirectors = (movies) => {
    return movies.map((movie) => movie.director);
};

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

const howManyMovies = (array) => {
    return array.filter((movie) => {
        const directedStevenS = movie.director == 'Steven Spielberg';
        const dramaMovie = movie.genre.includes('Drama');
    return directedStevenS && dramaMovie;
    }).length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(myArr) {
  return (
    Number(
      (
        myArr.reduce((acc, movie) => {
          return (acc += movie.rate || 0);
        }, 0) / myArr.length
      ).toFixed(2)
    ) || 0
  );
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(array){
  const dramaFilter = array.filter((movie) =>{
    return movie.genre.includes('Drama')
  })
  return ratesAverage(dramaFilter)
  }

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(array) {
  const result = array.sort((a, b) => {
    if (a.year > b.year) {
      return 1;
    } else if (b.year > a.year) {
      return -1;
    } else {
      return a.title.localeCompare(b.title);
    }
  })
  return [...result];
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

const orderAlphabetically = (array) => {
    const sortedMovies = [...array];
    sortedMovies.sort((firstMovie, secondMovie) => {
      return firstMovie.title.localeCompare(secondMovie.title);
    });
    const movieTitles = sortedMovies.map((movie) => movie.title);
    return movieTitles.slice(0, 20);
  };

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
