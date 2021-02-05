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

function howManyMovies(list) {
  let stevenMovies = list.filter(function (newlist) {
    return newlist.director === "Steven Spielberg";
  });
  //console.log(stevenMovies);
  return stevenMovies.length;
}

///One of the most famous directors in cinema is Steven Spielberg, and he has some really awesome drama movies that are on our list,
//but we want to know how many of them are there.

//Go ahead and create a howManyMovies() function that receives an array as a parameter and filter 👀 the array so we can have only
//the drama movies where Steven Spielberg is the director.

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

// Iteration 4: Drama movies - Get the average of Drama Movies

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
