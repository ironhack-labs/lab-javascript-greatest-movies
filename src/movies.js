const movies = require('./data');



// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(moviesArray) {
  const getAllDirectors = moviesArray.map((movie) => {
    return movie.director
  })
  return getAllDirectors
}

// _Bonus_1.1 -  It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getUniqueDirectors(moviesArray) {
  const allDirectors = getAllDirectors(moviesArray).sort();
  const UniqueDirectors = [];
  allDirectors.forEach((director) => {
    if (!uniqueDirectors.includes(director)) {
      uniqueDirectors.push(director);
    }
  });
  return uniqueDirectors;
}

//console.log(getUniqueDirectors(movies));




// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const allSpielbergDramas = moviesArray.filter((movie) => {
    return movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
  })
    return allSpielbergDramas.length

}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (!moviesArray.length) {
    return 0
  }
  let allScores = moviesArray.reduce((acc, movie) => {
    let score = movie.score
    if (!score) {
      score = 0
    }
    return acc + score}, 0);
    return Number((allScores/moviesArray.length).toFixed(2))
} 

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let dramaMoveis = moviesArray.filter((movie) => {
    return movie.genre.includes('Drama')
  })
  return scoresAverage(dramaMoveis)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const newMoviesArray = moviesArray.map((movie) => movie);
  newMoviesArray.sort((fisrtElement, secondElement) => {
    if (fisrtElement > secondElement) {
      return 1
    }
    if (secondElement.year > fisrtElement.year) {
      return -1
    }
    if (fisrtElement.title > secondElement.title) {
      return 1;
    }
    if (secondElement.title > fisrtElement.title) {
      return -1;
    }
    return 0;
  })
  return newMoviesArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const titlesArray = moviesArray.map(movie => {
    return movie.title;
  })
  titlesArray.sort();
  return titlesArray.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  const newMoviesArray = moviesArray.map(movie => {
    const newMovie = {...movie, duration: getUniqueDirectors(movie.duration) };
    return newMovie;
  });
  return newMoviesArray;
}

function getInMinutes(duration) {
  let hours = 0;
  let minutes = 0;
  if (duration.includes('h')) {
    const timerArray = duration.split('h');
    hours = parseInt(timerArray[0]);
    if (timerArray[1].includes('min')) {
      minutes = parseInt(timerArray[1].replace("min", "").trim());
   }
  } else if(duration.includes('min')) {
     minutes = parseInt(duration.replace("min", ""));
  }
  return hours * 60 + minutes;
}



// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
 
  

  //crio objeto vazio
  const movieByYear = {};

  //crio chaves dentro do objeto com arrays vazios
  moviesArray.forEach((movies) => {
    movieByYear[movie.year] = [];
  });

  //criar variável para as médias
  const scoreByTear = []
  
  //insiro nos arrays de cada ano os filmes respectivos
  moviesArray.forEach((movie) => {
    movieByYear[movie.year].push(movie);
  });

  //pegar média dos anos
  for (let year in moviesByYear) {
    const yearScore = {
      year: year,
      score: scoresAverage(movieByYear[year])
    };
    scoreByTear.push(yearScore);
  }

  scoreByTear.sort((a, b) => a.score - b.score)

  return 'The best year was ${scoreByYear[0].year} with an average score of ${scoreByYear[0].score}';
}




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
