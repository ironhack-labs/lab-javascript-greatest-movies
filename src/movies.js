

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const allDirectors = moviesArray.map((aMovie) => {
    return aMovie.director
  });
  return allDirectors
}

/*
function getAllDirectors(moviesArray) {
  return moviesArray.map((aMovie) => {
    return aMovie.director
  });
}



*/



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const stevenMovies = moviesArray.filter((numberOfMovies) => {
    return numberOfMovies.director === "Steven Spielberg" && numberOfMovies.genre.includes("Drama");
  }) 
  return stevenMovies.length;
}


/*
Other way that should also work

function howManyMovies(moviesArray) {
  const stevenMovies = moviesArray.filter((numberOfMovies) => {
    return numberOfMovies.director === "Steven Spielberg"
  });
  const filterbyGenre = moviesArray.filter((stevenMovies) => {
    return numberOfMovies.genre.includes("Drama")
  });
  return filteredMoviefilterbyGenre.length;
}
/*

/*
Other way that should also work

function howManyMovies(moviesArray) {
  const stevenMovies = moviesArray
  .filter((numberOfMovies) => {
    return numberOfMovies.director === "Steven Spielberg"
  });
  .filter((stevenMovies) => {
    return numberOfMovies.genre.includes("Drama")
  });
  return stevenMovies.length;
}
/*

/*

const movies = [
  {
    title: 'The Shawshank Redemption',
    year: 1994,
    director: 'Frank Darabont',
    duration: '2h 22min',
    genre: ['Crime', 'Drama'],
    score: 9.3
  },
  {
    title: 'The Godfather',
    year: 1972,
    director: 'Francis Ford Coppola',
    duration: '2h 55min',
    genre: ['Crime', 'Drama'],
    score: 9.2
  }
]
*/

// Iteration 3: All scores average - Get the average of all scores with 2 decimals

/*
function scoresAverage(movieScore) {
  const averageScore = movieScore.reduce(callbackfn, 0);
  function summation(acc, element) {
    return (acc = acc + element);
  }
  return averageScore / givenScore.length.toFixed(2);
}
*/

/*
function scoresAverage(givenScore) {
  
  const averageScore = givenScore.reduce(function(acc, el) {
    return (acc = acc + el.score);
  }, 0);
  return averageScore / givenScore.length.toFixed(2);
}
*/

function scoresAverage(movieScore) {
  if (movieScore.length === 0) {
    return 0;
  } else {
  let total = movieScore.reduce((acc, movie) => {
    if (movie.score) {
return acc + movie.score;
    } else {
      return acc;
    }
  }, 0);

  return Number((total/ movieScore.length).tofixed(2));





// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  if (!moviesArray.length) {
    return 0;
  } else {
    const filterGenre = moviesArray.filter((dramaMovies) => {
    dramaMovies.genre.includes("Drama")
    return
}





// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
/*function orderByYear(movieYear) {
  const orderedMovies = movieYear.sort().sort(function(a, b) {
    return a-b
  });


}
*/

function orderByYear(movieYear) {
  const orderedMovies = movieYear.map((aMovie) => {
    return aMovie
  })
  orderedMovies.sort(function(a, b) {
    if (a.year > b.year) {
      return 1;
    } else if (a.year < b.year) {
      return -1;
    } else {
      if (a.title < b.title) {
        return -1;
      } else {
        return 0;
      }
    }
  });
  return orderedMovies;
}





// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
const copyOfArray = moviesArray.map((aMovie) => {
  return aMovie
});

const orderedMovies = copyOfArray
.sort((a, b) => {
  return a.title.localeCompare(b.title)
});
.map((movie) => {
  return movie.title;
});

.slice(0, 20);

return orderedMovies;

}




















// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
