/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
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
movies.map(function(elem,i){
  return elem.duration === tiempoEnMinutos[i];
});

// Get the average of all rates with 2 decimals 
var ratesAverage = movies.reduce(function(acumulador, current){
  return acumulador + current.rate / movies.length;
}, 0);
ratesAverage = Math.round(ratesAverage * 100) / 100;
console.log(ratesAverage);

// Get the average of Drama Movies
var dramaMovies = movies.filter(function(elem){
  return elem.genre.includes('Drama');
  });
  var dramaMoviesRate = dramaMovies.reduce(function(acc,cur){
  return acc + cur.rate/dramaMovies.length;
  },0);
  dramaMoviesRate = Math.round(dramaMoviesRate * 100) / 100;
  console.log(dramaMoviesRate);

// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average






