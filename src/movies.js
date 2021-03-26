// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors (movies) {
    return movies.map(movie => movie.director);
    }

// _Bonus_ 1.1

function cleanDirectors(getAllDirectors) {
    const directors = getAllDirectors(movies);
    return directors.filter(function (n, i) {
        if (directors.indexOf(n) < i) {
            return false
        } else {
            return true
        }
    })
};



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {
  return movies.filter(movies => movies.genre.indexOf('Drama') !== -1).filter(movies => movies.director === 'Steven Spielberg').length;
}



// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies) {
  if (movies.length < 1) return 0;

  let sumRate = movies.reduce((accumulator, currentValue) => {
    const movieRate = Number(currentValue.rate) || 0; 
    return accumulator + movieRate;
  }, 0);

  return Number((sumRate/movies.length).toFixed(2));
};
  

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {
   let dramaFilms = movies.filter(movie => movie.genre.indexOf('Drama') !== -1);
  if (dramaFilms.length < 1) return 0;
  return ratesAverage(dramaFilms); 
};

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  let moviesList = movies.slice()
      return moviesList.sort(function (m1, m2) {
if (m1.year === m2.year) {
      return m1.title.localeCompare(m2.title) 
 } else if (m1.year < m2.year) {
      return -1; 
    } else {
        return 1; 
    }
  })
}



// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
  return movies.map(movie => movie.title).sort().slice(0,20);
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes



// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
