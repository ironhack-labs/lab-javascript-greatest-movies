// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(movies) {
const directors = movies.map(function (movie) {
    return movie.director
  })
return directors
};

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {
    let numberOfMovies = 0;
    const filteredMovies = movies.filter(function(movie){
      if (movie.director === "Steven Spielberg" && movie.genre.includes("Drama")) {
       numberOfMovies += 1
      } 
    })
    return numberOfMovies
  };


// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
  if (movies.length === 0) return 0;  
  const rates = movies.reduce(function (acc, val) {
      return acc + val.rate
    }, 0)
    return Math.round((rates / movies.length) * 100) / 100
  };


// Iteration 4: Drama movies - Get the average of Drama Movies


function dramaMoviesRate(movies) {
  let sumOfDramaMovies = 0;
  const filteredMovies = movies.reduce(function (total,movie) {
    if (movie.genre.includes("Drama")) {
      sumOfDramaMovies++;
      return total += movie.rate;
    }
    return total
  }, 0) 
  let avg = filteredMovies/sumOfDramaMovies;
  return Math.round(avg * 100) / 100
};



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {
  let orderedMovies = movies.slice(0).sort(function(a, b) {
    if (a.year < b.year) return -1;
    if (a.year === b.year) {
       if (a.title < b.title) return -1;
    if (a.title === b.title) return 0;
    if (a.title > b.title) return 1;
    return b - a;
    };
    if (a.year > b.year) return 1;
    return b - a;
  });
  return orderedMovies
}
        

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
  let orderedMovies = movies.slice(0).sort(function(a, b) {
    if (a.title < b.title) return -1;
    if (a.title === b.title) return 0;
    if (a.title > b.title) return 1;
    return b - a;
  });
  return orderedMovies.map(function(movie) {
    return movie.title.slice(0, 20)
  })
}
 



// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
