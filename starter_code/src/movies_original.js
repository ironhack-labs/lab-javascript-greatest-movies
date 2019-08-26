/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 
function ratesAverage(array){
    return parseFloat((array.reduce((acc, current) => acc + parseFloat(current.rate), 0) / array.length).toFixed(2))
}
console.log(ratesAverage(movies))
// Iteration 2: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(arrayDrama){
    const arrayGenDrama = arrayDrama.filter(arrD => arrD.genre.indexOf('Drama') >= 0)

  if(arrayGenDrama == []){
    return 0
  }else
    return parseFloat((arrayGenDrama.reduce((accD, currentD) => accD + parseFloat(currentD.rate), 0) / arrayGenDrama.length).toFixed(2))
}

console.log(dramaMoviesRate(movies))

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
function orderByDuration(arr){
  const time = arr.sort(function(a,b) {
    if (a.duration < b.duration) {
      return -1;
    } else if (a.duration > b.duration) {
      return 1;
    } else if (a.duration = b.duration) {
      if (a.title < b.title) {
        return -1;
      } else if (a.title > b.title) {
      return 1;
      } else {
      return 0;
      }
    }
});
return time
}

console.log(orderByDuration(movies))
// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
function howManyMovies(arr) {
  const ssmovies = arr.filter(elem => elem.director.includes("Steven Spielberg") && elem.genre.includes("Drama"))
  if(ssmovies == []){
    return 0
  } else {
    return ssmovies
  }   
}
console.log(howManyMovies(movies))

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movie) {
  const alphabet = movie.sort(function(a,b) {
    if (a.title < b.title) {
      return -1;
    } else if (a.title > b.title) {
      return 1;
    } else  {
      return 0  
    }
});
  const orderedTitles = alphabet.map(list => list.title)
    if (orderedTitles.length > 20) {
    return orderedTitles.slice(0, 20);
    }
    return orderedTitles;
  }
console.log(orderAlphabetically(movies))


// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(array) {
var durationInLetters = movies.map(function(movies){
  return movies.duration.split('');
});
var horasSinLetras= durationInLetters.map(function(elem, i){
  return (durationInLetters[i][0] * 60);
});
var minutosSinLetras= durationInLetters.map(function(elem,i){
  if (elem.indexOf("m")!=-1){
      return elem.splice(elem.indexOf(' ')+1,elem.indexOf('m')-elem.indexOf(' ')-1).join("");
  } else {
   return 0;
  }
});
var tiempoEnMinutos = horasSinLetras.map(function(elem, i){
  return horasSinLetras[i] + parseInt(minutosSinLetras[i]);
});
var last = movies.map(function(elem,i){
  return elem.duration === tiempoEnMinutos[i];
});
return tiempoEnMinutos
}
console.log(turnHoursToMinutes(movies))


// BONUS Iteration: Best yearly rate average - Best yearly rate average
