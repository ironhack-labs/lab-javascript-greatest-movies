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
  },
  {
    title: 'The Godfather: Part II',
    year: 1974,
    director: 'Francis Ford Coppola',
    duration: '3h 22min',
    genre: ['Crime', 'Drama'],
    score: 9
  },
  {
    title: 'The Dark Knight',
    year: 2008,
    director: 'Christopher Nolan',
    duration: '2h 32min',
    genre: ['Action', 'Crime', 'Drama', 'Thriller'],
    score: 9
  },
  {
    title: '12 Angry Men',
    year: 1957,
    director: 'Sidney Lumet',
    duration: '1h 36min',
    genre: ['Crime', 'Drama'],
    score: 8.9
  },
  {
    title: 'Schindler"s List',
    year: 1993,
    director: 'Steven Spielberg',
    duration: '3h 15min',
    genre: ['Biography', 'Drama', 'History'],
    score: 8.9
  },
  {
    title: 'Pulp Fiction',
    year: 1994,
    director: 'Quentin Tarantino',
    duration: '2h 34min',
    genre: ['Crime', 'Drama'],
    score: 8.9
  }]
// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const directors = movies.map(eachmovie => {
    return eachmovie.director
    //este return rellena el array
  })
  //resultado de la funcion
  return directors
}





// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const spielbergDirector = movies.filter(eachmovie => {
    if ((eachmovie.director === 'Steven Spielberg') && (eachmovie.genre.includes('Drama'))) {
      return true

    }


  })
  return spielbergDirector.length
}





// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  const totalScore = movies.reduce((acc, eachmovie) => {
    return acc + eachmovie.score
  }, 0)
  const average = (totalScore / movies.length)
  return Math.round(average * 100) / 100
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  const dramaMovies = movies.filter(eachfilm => {
    if (eachfilm.genre.includes('Drama')) {
      return true
    }
  })
  const dramaScore = dramaMovies.reduce((acc, eachdrama) => {
    return acc + eachdrama.score
  }, 0)
  const dramaAverage = (dramaScore / dramaMovies.length)
  return Math.round(dramaAverage * 100) / 100
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear() {
  const realMovies = [...movies]
  realMovies.sort((a, b) => {
    if (a.year < b.year) {
      return -1
    } else if (a.year > b.year) {
      return 1
    } else return 0;
  }
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically() {
  const alphaMovies = [...movies]
  alphaMovies.sort((a, b))=> {
    if (a.name < b.name) {
      return -1
    } else if (a.name > b.name) {
      return 1
    } else return 0;
  }
}

  }
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() { }



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
