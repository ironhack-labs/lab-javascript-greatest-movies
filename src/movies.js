// The `movies` array from the file `src/data.js`.



// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

/* Iteration 1: for i

function getAllDirectors(movies) {
  const directors = [];
  for (let i = 0; i<movies.length ; i++) {
    directors.push(movies[i].director);
  }
  return directors;
}
console.log(getAllDirectors(movies));*/

/* Iteration 1: for of

function getAllDirectors(movies) {      
  const directors = [];
  for (let movie of movies) {
    directors.push(movie.director);
  }
  return directors;
}
console.log(getAllDirectors(movies));*/

function getAllDirectors(movies) { 
  return movies.map(function(movie) {
  return movie.director;
});
}

/*Bonus Iteration 1: 

function getAllDirectors(movies) {
  return movies.map((movie) => movie.director)
  .filter((director, i, directors) => directors.indexOf(director) === i)
} */


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const spielbergDramaMovies = movies.filter ((movie) =>
  movie.director === "Steven Spielberg" && movie.genre.includes("Drama"));
  return spielbergDramaMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals

/*function scoresAverage(averageMovies) {
  const avg = movies.reduce((avg, movie) => {
    if (movie.score) {
      avg += movie.score / movies.length
    }
    return avg
  }, 0)

  return parseFloat(avg.toFixed(2))
}*/

function scoresAverage(movies) {
  if (movies.length === 0) {
    return 0
  }
  /* Otra forma:
   /*if (!movies){
    return 0
  } */
  const scores = movies.map(movie => movie.score)

  const totalAvg = scores.reduce( function(scoresSum, actualScore) {
    return scoresSum + actualScore
  }, 0)

  return Math.round(totalAvg / scores.length *100) / 100
  }


// Iteration 4: Drama movies - Get the average of Drama Movies

/*function dramaMoviesScore(movies) {
  return movies.filter(movie => movie.genre.includes("Drama")
    .reduce((avg, movie, i, dramaMovies) => {
      if(movie.score) {
        avg += movie.score / dramaMovies.length
      }
      if (i === dramaMovies.length -1) {
        return parseFloat(avg.toFixed(2))
      } else {
        return avg
      }
    },0)
}*/

function dramaMoviesScore(movies) {
  
  const dramas = movies.filter(function (dramaMovie) {
    dramaMovie.genre.includes("Drama")
  })

  if (dramas.length === 0) {
    return 0
  }

  const totalDramaAverage = dramas.reduce(function (sum, movie) {
    return sum + movie.score;
  }, 0)

  return parseFloat((totalDramaAverage / dramas.length).toFixed(2))
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {
  return movies.sort((m1,m2) => {
    if (m1.year > m2.year) {
      return 1
    } else if (m1.year < m2.year) {
      return -1
    } else {
      return m1.title.localeCompare(m2.title)
    }
  })
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  return movies.map(movie => movie.title)
    .sort((t1, t2) => t1.localeCompare(t2))
    .slice(0, 20)
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
