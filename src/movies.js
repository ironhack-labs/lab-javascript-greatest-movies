// Iteration 1: All directors? - Get the array of all directors.


const getAllDirectors = movies => {
  const arrayDirectors = movies.map(allmovies => allmovies.director);
  return arrayDirectors;
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies (arr) {
  let stevenMovies = [];
  stevenMovies = arr.filter (movie => {
    if (movie.director === "Steven Spielberg" && movie.genre.includes ("Drama")) {
      return movie
    }
  })
  return stevenMovies.length
}
// Iteration 3: All rates average - Get the average of all rates with 2 decimals

const ratesAverage = (arr) => {
  const newArr = arr.filter(movies=>movies.rate);
    const average = newArr.reduce(function(acc,value){
          return acc + value.rate/newArr.length
    },0)
          return Math.round(average * 100) / 100; 
    } 


// Iteration 4: Drama movies - Get the average of Drama Movies

const dramaMoviesRate = (arr) => {
  const newArr = arr.filter(movies=>movies.genre.includes('Drama'));
      if (newArr.length > 0){
          const average = newArr.reduce(function(acc,value){
              return acc + value.rate/newArr.length
  },0)
              return Math.round(average * 100) / 100;
      } else {
              return 0
      }
}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(arr) {
  var newArray = JSON.parse(JSON.stringify(arr));
  const sortYear = newArray.sort(function compare(a,b) {
      if (a.year === b.year) {
          return a.title.localeCompare(b.title);
      };
      return a.year - b.year;
  });
  return sortYear;
}
console.log (orderByYear(movies));
    
    
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
  const orderAlpha = [...movies].sort((a, b) => a.title.localeCompare(b.title));
  const twenty = orderAlpha.slice(0, 20).map((movie) => movie.title);
  return twenty;
  }
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
