/*eslint no-restricted-globals: 'off'*/

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 
function ratesAverage(movies) {
  let average = movies.reduce(function(ac, cu) {
    return ac + +(cu.rate) / movies.length;
  }, 0);
  return +(average.toFixed(2));
}
/*Iteration 2: Drama movies - Get the average of Drama Movies*/
function onlyDrama(movies){
  return movies.filter(function(movie){
    return movie.genre.includes("Drama")===true;
  });
}

function dramaMoviesRate(movies){
  if (ratesAverage(onlyDrama(movies))==0){
    return ratesAverage;
  } else {return ratesAverage(onlyDrama(movies));
  }
}
// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order) 
function orderByDuration(movies){
  return movies.sort(function(a,b){
    if (a.duration===b.duration){
      return a.title > b.title
    } else {
      return a.duration - b.duration;
    }
  });
}

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

let bergMovies = function onlyBergMovies(movies){
  return movies.filter(function(movie){
    return movie.director==="Steven Spielberg";
  });
} 

function howManyMovies(movies){
if (movies.length===0){
  return 0;
} else {
  return "Steven Spielberg directed "+ bergMovies.filter(function(bergMovies){ return movie.genre.includes("Drama")}).length +" drama movies!";
}
}
// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies){
  movies.sort(function(a,b){
    if (a.title > b.title){
      return 1
    } else return -1;
     });
     let first20=[];
     let limit = 20;
     if (movies.length <= 20) {
       limit = movies.length;
     }
     for (let i = 0; i<limit; i++){
       first20.push(movies[i].title);
     }
     return first20;
 }

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

//["2h"] == "2 h"
//["35min"] == "35 min"
//["2h", "35min"] == "2h 35min"

// function turnsHoursToMinutes(movies) {
//   if (array.duration[0].substring(h)) {
//     return 1;
//   }
// }
// BONUS Iteration: Best yearly rate average - Best yearly rate average

// Best yearly rate average
