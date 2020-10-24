// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(array) {
  const allDirectors = array.map(function (movie) {
    return movie.director;
  });
  return allDirectors;
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(array) {
  const spielberg = array.filter(function (movie) {
    if (
      movie.director === 'Steven Spielberg' &&
      movie.genre.indexOf('Drama') !== -1
    ) {
      return true;
    }
  });
  return spielberg.length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
// To skip an object without an array filter only ones with numbers then average

function ratesAverage(array) {
    if (array.length === 0) {
      return 0;
    }
  
    let valuesOnly = array.map(function (movies) {
      return movies.rate;
    });
    console.log(valuesOnly);
  
    function bouncer(arr) {
      return arr.filter(Boolean);
    }
    
    let valuesOnlyClean = bouncer(valuesOnly);
  
    let sumRates = valuesOnlyClean.reduce(function (sum, review) {
      return sum + review;
    }, 0);
    return parseFloat((sumRates / array.length).toFixed(2));
  }
  

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(array) {  
  let dramas = array.filter(function (movie) {
    if (movie.genre.includes('Drama')) {
      return true;
    } 
  });

  let dramasSum = dramas.reduce(function (sum, review) {
    return sum + review.rate;
  }, 0);

  
  let dramasAverage = parseFloat((dramasSum / dramas.length).toFixed(2));
  
  if (isNaN(dramasAverage)) {
    return 0;
  } else {
    return dramasAverage;
  }
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
// function orderByYear (array){
// let yearOrder = array.sort(function(a, b){
//     return a.year-b.year;
//   });
//   return [...yearOrder];
// };


function orderByYear(array) {
    let yearOrder = array.sort(function (a, b) {
      if (a.year > b.year) {
        return 1; // or could be any pos number
      }
      if (b.year > a.year) {
        return -1; // or could be any neg number
      }
      if (a.title > b.title) {
        return 1
      }
      if (b.title > a.title){
        return -1
      }
    });
    return [...yearOrder];
  }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(array) {
  let titlesOnly = array.map(function (movies) {
    return movies.title;
  });

  let alphaOrder = titlesOnly.sort(function (a, b) {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  });
  return alphaOrder.splice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
