// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(arr) {
  return arr.map(movie => movie.director);
}
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
  let director = arr.filter(movie => movie.director == 'Steven Spielberg')
  let gender = director.filter((e) => {
    return e.genre.includes('Drama');
  });
  return gender.length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(arr) {
  if (arr.length != 0) {
  let average = arr.reduce((acc, cv) => {
    if (cv.rate) {
      return acc + cv.rate;
    } else {
      return acc + 0;
    }
  }, 0) / arr.length;

  return parseFloat(average.toFixed(2));
  } else {
    return 0
  }
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(arr) {
  let gender = arr.filter((e) => {
    return e.genre.includes('Drama');
  });

  return ratesAverage(gender);
  
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(arr) {
  let orderedArray = [...arr].sort(function(a, b){
      if (a.year - b.year) {
          return a.year - b.year
      } else {
          if (a.title < b.title) {
              return -1
          } else if (a.title > b.title) {
              return 1
          } else {
              return 0
          }
      }
  })
  return orderedArray;
}
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(array) {
  let titleArray = array.map(array => array.title);
  let orderedArray = titleArray.sort().slice(0,20);
  return orderedArray;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
