/* eslint no-restricted-globals: 'off' */


// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(array) {

    var newArray= [...array];

      newArray.sort(function(a, b) {
        if (a.year === b.year) {
            if (a.title > b.title) {
                return 1;
            }
            else {
                return -1; }
        }
        return a.year - b.year;  
      });
      return newArray;
  }

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(array) {
    var newArray= [...array];
        newArray = newArray.filter(function(movie,i) {
            return movie.director === "Steven Spielberg" && movie.genre.includes("Drama");
         })
         return newArray.length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically (array) {
    // var newArray= [...array];
    return array.map( (a, i) => {
        return a.title;
      }).sort(function(a, b) {
        return a.localeCompare(b)
      }).slice(0, 20);
    // return newArray;
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage (array) {
    var newArray= [...array];
    if (newArray.length === 0) return 0;
    let sommeTotale = newArray.reduce((sum, movie) => {
      if (!movie.rate) return sum + 0;
        return sum + movie.rate;
      },0);
     let moyenne = sommeTotale/newArray.length;
     return parseFloat((moyenne).toFixed (2));
}


// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate (array) {
    var newArray= [...array];
    var dramaMovies = newArray.filter(function(dramaMovies){
        return dramaMovies.genre.includes("Drama");
      });
      if (dramaMovies.length === 0) return 0;
    let sommeTotale = dramaMovies.reduce((sum, movie) => {
        if (!movie.rate) {
            movie.rate === 0;
        }
        return sum + movie.rate;
      },0);
     let moyenne = sommeTotale/dramaMovies.length;
     return parseFloat((moyenne).toFixed(2));
    }
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function bestYearAvg(movies) {
  if (!movies.length) return null;
  const yeardObj = movies.reduce((acc, movie) => {
    if (acc[movie.year]) acc[movie.year].push({ rate: movie.rate });
    else acc[movie.year] = [{ rate: movie.rate }];
    return acc;
  }, {});
​
  let best =  {bestYear: 0, avg: 0}
  for(let key in yeardObj ){
      let avg = ratesAverage(yeardObj[key]);
      if(avg > best.avg) best = {bestYear: key, avg: avg}
  }
  return `The best year was ${best.bestYear} with an average rate of ${best.avg}`
​
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average



