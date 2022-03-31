// The `movies` array from the file `src/data.js`.
//console.log('movies: ', movies);


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(movieList) {
  // Mapping the movieList to get an array of all the directors target by key
  const result = movieList.map((movie)=>(movie.director));
  return result
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movieList) {
  const result = movieList.filter(function(movie){
    if (movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')){ //Filtering in a new array the movieList using an if with 2 conditions tageted by respective keys
      return movie;
    }
  })
  return result.length //Getting the number of movie from the new array using length
};

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movieList) {
  if (movieList.length === 0){ //checking if the coming array is empty => return 0
    return 0;
  }

  const result = movieList.reduce(function(accumulator,currentValue){ //Reducing (sum) the movieList based on the target key "score" - if no score it is replace by 0
    return accumulator + (currentValue.score || 0);
  },0) // making sure the initial value is 0 and its type is a number
  return parseFloat((result / movieList.length).toFixed(2)); //getting the average from the result and the number of movie in movieList
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movieList) {
  const dramaMovies = movieList.filter((movie)=>{ //Getting a new array by filtering movieList with target key "genre"
    if (movie.genre.includes('Drama')){
      return movie
    }
  });

  if (dramaMovies.length === 0){ //checking if the incoming array is empty => return 0
    return 0;
  }

  const result = dramaMovies.reduce(function(accumulator,currentValue){ //Reducing (sum) the dramaMovies list based on the target key "score" - if no score it is replace by 0
    return accumulator + (currentValue.score || 0);
  },0) // making sure the initial value is 0 and its type is a number
  return parseFloat((result / dramaMovies.length).toFixed(2)); //getting the average from the result and the number of movie in movieList
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movieList) {
  const newMovieList = JSON.parse(JSON.stringify(movieList)); //cloning the array into a new array
  const sortedMovie = newMovieList.sort(function(a,b) { //sorting the arrey with the target key "year" - when year equal => sort wit the target ket "title"
    if (a.year === b.year){
      return a.title.localeCompare(b.title);
    } else {
      return a.year - b.year
    };
    }
  );
  return sortedMovie;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movieList) {
  const newMovieList = JSON.parse(JSON.stringify(movieList)); //cloning the array into a new array
  const sortedMovie = newMovieList.sort(function(a,b){ //sorting the new array of object with target key "title"
    if (a.title > b.title){
      return 1
    } else {
      return -1;
    }
  });

  const result = sortedMovie.map(movie=>(movie.title)) //create a new array of only string from the target key "title"

  return result.slice(0,20) // get only the 20 first element of the result
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function getAllMinutes(data){ //Necessary function to manage the time convertion in minuts only
  if (data.includes('h ') && data.includes('min')){
    return ((data.split('h ')[0] * 60) + (data.replace('min', '').split('h ')[1] * 1));
  } else if (!data.includes('h ') && data.includes('min')){
    return data.replace('min', '') * 1;
  } else if (data.includes('h') && !data.includes('min')){
    return data.replace('h', '') * 60
  } else {
    return 0
  }
};

function turnHoursToMinutes(movieList) {
  const newMovieList = JSON.parse(JSON.stringify(movieList)); //cloning the array into a new array
  const result = newMovieList.map(function (movie) { //Mapping the movieList to update the time converted from with the getAllMinutes function - target key "duration"
    movie.duration = getAllMinutes(movie.duration);
    return movie;
  });
  return result;
};

/* SECONDARY ATTEMPT WROKING BUT DIDNT KEEP IT
//function turnHoursToMinutes(movieList) {
//   const result = movieList.map(function (movie) {
//     let newMovie = {};
//     newMovie.title = movie.title;
//     newMovie.year = movie.year;
//     newMovie.director = movie.director;
//     newMovie.duration = getAllMinutes(movie.duration);
//     newMovie.genre = movie.genre;
//     newMovie.score = movie.score;
//     return newMovie;
//   });
//   return result;
// }
*/
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
