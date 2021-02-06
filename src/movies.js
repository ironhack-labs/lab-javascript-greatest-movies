// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(movies) {
  let directorlist = movies.map(function (movie) {
    return movie.director;
  });
  console.log(directorlist.length);
  return directorlist;
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

//const howManyMovies = movies.filter(function(StevenMovies){
//return StevenMovies movies.director[i]=== 'Steven Spielberg';

//});

///One of the most famous directors in cinema is Steven Spielberg, and he has some really awesome drama movies that are on our list,
//but we want to know how many of them are there.

//Go ahead and create a howManyMovies() function that receives an array as a parameter and filter 👀 the array so we can have only
//the drama movies where Steven Spielberg is the director.
function howManyMovies(list) {
  let stevenMovies = list.filter(function (newlist) {
    for (i = 0; i < newlist.genre.length; i++) {
      if (newlist.genre[i] === "Drama") {
        return newlist.director === "Steven Spielberg";
      }
    }
  });
  //console.log(stevenMovies);
  return stevenMovies.length;
}
// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
  if (movies.length === 0) {
    return 0;
  }
  let summoviesrate = movies.reduce(function (previousValue, currentValue) {
    if (currentValue.rate === undefined) {
      return previousValue;
    }
    return previousValue + currentValue.rate;
  }, 0);

  return Math.round((summoviesrate / movies.length) * 100) / 100;
}
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {
  let dramamovies = movies.filter(function (object) {
    for (i = 0; i < object.genre.length; i++) {
      if (object.genre[i] === "Drama") {
        return object;
      }
    }
  });
  return ratesAverage(dramamovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
