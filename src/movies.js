// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const directors = moviesArray.map(movie => movie.director);
  const notDuplicateDirectors = [];
  directors.forEach((director) => {
    if (!notDuplicateDirectors.includes(director)) {
      notDuplicateDirectors.push(director);
    }
  })
  return notDuplicateDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  spielbergDramaMovies = moviesArray.filter(movie => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama'));
  return spielbergDramaMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  } else {
    const scores = moviesArray.map(movie => movie.score || 0);
    const sumScores = scores.reduce((acc, movie) => {
      return acc + movie;
    }, 0);
    const average = sumScores / scores.length;
    return Math.round(average * 100) / 100;
  }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter(movie => movie.genre.includes('Drama'));
  return scoresAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const moviesArrayCopy = moviesArray.map(movie => movie);
  moviesArrayCopy.sort(function (aMovie, bMovie) {
    if (aMovie.year > bMovie.year) {
      return 1;
    } else if (aMovie.year < bMovie.year) {
      return -1;
    } else if (aMovie.year === bMovie.year) {
      if (aMovie.title.toLowerCase().localeCompare(bMovie.title) < 0) {
        return -1;
      } else if (aMovie.title.toLowerCase().localeCompare(bMovie.title) > 0) {
        return 1;
      }
    }
    return 0;

  });
  return moviesArrayCopy;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const moviesArrayCopy = moviesArray.map(movie => movie.title);
  moviesArrayCopy.sort(function (aMovie, bMovie) {
    if (aMovie.toLowerCase().localeCompare(bMovie) < 0) {
      return -1;
    } else if (aMovie.toLowerCase().localeCompare(bMovie) > 0) {
      return 1;
    }
    return 0;
  });
  return moviesArrayCopy.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  const moviesArrayCopy = moviesArray.map(movie => {
    const movieCopy = { ...movie }
    const timeString = movieCopy.duration.replace('h', '').replace('min', '').split(' ').map(string => +string);
    const hoursToMins = timeString.length === 1 ? timeString[0] * 60 : (timeString[0] * 60) + timeString[1];
    movieCopy.duration = hoursToMins;
    return movieCopy;
  })
  return moviesArrayCopy;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  const moviesByYearWithScore = orderByYear(moviesArray).map(movie => {
    return {
      year: movie.year,
      score: movie.score
    }      
  })

  const a = moviesByYearWithScore.reduce((acc, elem) => {
    let yearString = elem.year.toString()
    if (acc[yearString]) {
      const average = (acc[yearString] + elem.score) / 2;
      acc[yearString] = Math.round(average * 10) / 10;
    } else {
      let score = elem.score;
      acc[yearString] = score;
    } 
    return acc
  }, {})
  
console.log('-------result-------');
console.log(a);


  /*

{
  "1994": [9.2,8,7],
  "1974": [7],
  "1975": [9, 8]

  


  //return "The best year was ${YEAR} with an average score of ${RATE}"
  */
}
const moviesCopy = [
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
      year: 1957,
      director: 'Francis Ford Coppola',
      duration: '2h 55min',
      genre: ['Crime', 'Drama'],
      score: 9.2
    },
    {
      title: 'The Godfather: Part II',
      year: 1957,
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
      year: 1994,
      director: 'Steven Spielberg',
      duration: '3h 15min',
      genre: ['Biography', 'Drama', 'History'],
      score: 8.9
    }
  ]
bestYearAvg(moviesCopy);
