// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(arr){
  let directors = arr.map(films => films.director)
  return directors
}
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr){
  let spielberg = arr.filter(films => films.director === "Steven Spielberg" && films.genre.includes("Drama"));
  return spielberg.length;
}
// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(arr){
  if (!arr.length){
    return 0
  }
  let sum = arr.reduce(function(acc,films){
  if (typeof films.rate === "number"){
    return acc + films.rate;
  }
  return acc + 0
    
  },0)
  let avgToFixed = (sum/arr.length).toFixed(2);
  return Number(avgToFixed);
}
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(arr){
  let dramaMovies = arr.filter(films => films.genre.includes("Drama") && films.genre.length === 1);
  return ratesAverage(dramaMovies);
}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr){
  let newArray = arr.slice(0)
  let orderMovies = newArray.sort(function(a,b){
    if (a.year > b.year){
      return 1;
    } 
      return -1;
    if (a.year === b.year){
      return 0
    }
     
  })
  return orderMovies;
}
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr){
  let onlyTitle = arr.map(function(films){
    return films.title
  })

  let movieOrderAlpha = onlyTitle.sort(function(a,b){
     if (a > b){
       return 1;
     }
     return -1;
  })
  let twentyOrderMovies = movieOrderAlpha.slice(0,20)
  return twentyOrderMovies
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arr) {
  const newTime = arr.map(function(movie) {
    //Creacion de un nuevo objeto con todos los elementos
  const newMovies = Object.assign({}, movie);
  newMovies.duration = hoursToMinutes(movie.duration);
  return newMovies;
});
  //Pasamos el array que queremos cambiar
  function hoursToMinutes(time) {
      if (!time.includes("min")){
        let hoursAndMinutes = time.split (" ");
        return parseInt(hoursAndMinutes[0])*60;  
      }
      //Solo tiene minutos
      if (!time.includes("h")){
        return parseInt(time);
      }
        let hoursAndMinutes = time.split (" ");
        return parseInt(hoursAndMinutes[0])*60+parseInt(hoursAndMinutes[1]);  
  }
return newTime;
}



// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

function bestYearAvg(movies) {
  if (!movies.length) {
     return null 
    }

  let ratesPorYear = movies.reduce(function(a, movie){
      if (movie.year in a) {
          a[movie.year].push({ rate: movie.rate })
      } else {
          a[movie.year] = [{ rate: movie.rate }]
      }
      return a
  }, {})

  let bestYear = 0
  let bestAvg = 0

  for (let year in ratesPorYear) {
      let avg = ratesAverage(ratesPorYear[year])
      if (avg > bestAvg) {
          bestYear = year
          bestAvg = avg
      }
  }
  return `The best year was ${bestYear} with an average rate of ${bestAvg}`
}





































