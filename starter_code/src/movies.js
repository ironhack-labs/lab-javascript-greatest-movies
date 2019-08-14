/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 
function ratesAverage(movies){
  let sum=0;
  movies.forEach(function(movie){
    return sum += Number(movie.rate);
  });
  let avgRates = sum/ movies.length;
  return Number(parseFloat(avgRates).toFixed(2));
}
 
// Iteration 2: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies){
  let dramaMovies = movies.filter(function(movie){
    return movie.genre.includes("Drama");
    });
    if (dramaMovies.length === 0){
      return 0;
    }
    else{
      return ratesAverage(dramaMovies);
    }
      }

  
// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
// function orderByDuration(movies){
//   let durationMovies = movies.sort(function(a, b) {
//     if (a.duration < b.duration) return -1;
//     else if (a.duration > b.duration) return 1;
//     else if (a === b){
//       if (a.title < b.title) return -1;
//       else if (a.title > b.title) return 1;
//       else if (a.title === b.title) return; 
//       else return 0; 
//     } 
//   }) 
//   return durationMovies;
// }
//     console.log(orderByDuration(movies));


    function orderByDuration (movies) {
      let duration = movies.sort(function(a, b){
      if (a.duration < b.duration) return -1;
      else if (a.duration > b.duration) return 1;
      else if (a.duration === b.duration) {
        if (a.title < b.title) return -1;
        else if (a.title > b.title) return 1;
        else if (a.title === b.title) return ;
        else return 0;
      }
     })
      return duration;
     }
     console.log(orderByDuration(movies));


// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
function howManyMovies(movies){
  let dramaMovies = movies.filter((movie)=>{
    return movie.genre.includes("Drama");
    });
  let spielbergDramaMovies = dramaMovies.filter((movie)=>{
    return movie.director.includes("Spielberg");
  });
  return spielbergDramaMovies.length; 
  
  console.log(spielbergDramaMovies)
}
howManyMovies(movies);

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies){
  const orderedMovies = movies.sort((a,b)=>{
    if(a.title > b.title){
      return 1
    } else{
      return -1
    }
  })
  const twentyFirstMovies = orderedMovies.map(orderedMovies => orderedMovies.title).slice(0, 20);
  return twentyFirstMovies;
  console.log (orderAlphabetically);
};
orderAlphabetically(movies)


// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(){
  
  return []
};

// BONUS Iteration: Best yearly rate average - Best yearly rate average
function bestYearAvg(){};
