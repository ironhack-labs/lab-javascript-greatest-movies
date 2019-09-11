/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 


function ratesAverage(arrMovies){
  
  const arrRates = arrMovies.map(movie => parseFloat(movie.rate));

  const result = arrRates.reduce(function(totalRate, rate) {
      return (totalRate + rate);
  },0)/arrRates.length;

  return Number(result.toFixed(2));
}

// Iteration 2: Drama movies - Get the average of Drama Movies
// function dramaMoviesRate (arrMovies) {
//     const arrGender = arrMovies.filter(movDrama => movDrama.genre.includes('Drama'));
//     return ratesAverage(arrGender);
// }


function dramaMoviesRate (arrMovies) {
  
  const arrGender = arrMovies.filter(function(movDrama){
      if (movDrama.genre.includes('Drama')) {
          return true;
      } else {
          return false;
      }
  });
  
  if (arrGender.length > 0){
      return ratesAverage(arrGender);    
  } else {
      return 0;
  }
}



// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
  // Sort


  function orderByDuration(movies){
    return movies.sort((a, b) => {
      if(a.duration === b.duration) {
        return a.title > b.title ? 1 : -1
      }
      return (a.duration - b.duration)
    }) 
  }

  orderByDuration(movies)

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
  // Filter


  function howManyMovies(movies) {
    return movies.filter(m => {
      return m.genre.includes('Drama') && m.director === 'Steven Spielberg'
    }).length
  }

  howManyMovies(movies)

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles
  // Sort

  
  function orderAlphabetically(movies) {
   return movies.sort((a, b) => a.title > b.title ? 1 : -1).map(movie => movie.title).splice(0, 20)
    }

  orderAlphabetically(movies)

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes


// BONUS Iteration: Best yearly rate average - Best yearly rate average
