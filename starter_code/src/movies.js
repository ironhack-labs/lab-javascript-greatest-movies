/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes (movies) {
    if (movies.length === 0) { 
      return []; 
    }
    var hours = 0;
    var minutes = 0;
    var minutesDuration = movies.map(function (movie) {
      if ((movie.duration.indexOf("h") !== -1) && (movie.duration.indexOf("m") !== -1)) {
        time = movie.duration.split(" ");
        hours = parseInt(time[0]);
        minutes = parseInt(time[1]);
      } else if (movie.duration.indexOf("h") !== -1) {
        hours = parseInt(movie.duration);
      } else if (movie.duration.indexOf("m") !== -1) {
        minutes = parseInt(movie.duration);
      }
      return { duration: hours * 60 + minutes };
    });
    
    return minutesDuration;
  }

// Get the average of all rates with 2 decimals 
function ratesAverage(movies) {
  return movies.map(function (movie) {
   return parseFloat(movie.rate);
  }).reduce (function (accu, value) {
    return accu + value / movies.length;
  }, 0);
}

console.log(ratesAverage(movies));

// Get the average of Drama Movies

function dramaMoviesRate(movies) {
  
  let dramaMovies = []; 
  
   dramaMovies = movies.filter(function (movie) {
   return movie.genre.indexOf("Drama") !== -1;
  }); 
  
  if (dramaMovies.length === 0) {
   return undefined;
 } else {
    let media = dramaMovies.map(function (movie) {
   if (movie.rate === "") {
     movie.rate = 0;
   }
      return parseFloat(movie.rate);
  }).reduce(function (accu, value) {
   return accu + value;
}, 0);
  return parseFloat((media / dramaMovies.length).toFixed(2));
}
}

console.log(dramaMoviesRate(movies));



// Order by time duration, in growing order

function orderByDuration(movies){
        
  let orderedFilms = movies.sort(function compareFilms(a, b){
      if(a.duration === b.duration){
          return (a.title).localeCompare(b.title);
      }else{
          return a.duration - b.duration;
      }
  });
   return orderedFilms;
}


// How many movies did STEVEN SPIELBERG


function howManyMovies(movies) {
  if (movies.length === 0){
      return undefined
  };

  let spielbergMovies = movies.filter(function(movie){
      return (movie.genre.includes("Drama")&&(movie.director === "Steven Spielberg"))
  });

  let result = spielbergMovies.length
   return "Steven Spielberg directed " + result + " drama movies!"
}

// Order by title and print the first 20 titles


function orderAlphabetically(movies){
  if(movies.length >= 20)  {
      let arraySplited = movies.sort(function compareFilms(a, b){ 
          return (a.title).localeCompare(b.title);
      });
      let orderedarraySplited= arraySplited.slice(0,20);
      return orderedarraySplited.map(function (a) {
        return a.title});
  } else {
      var orderedArray =  movies.sort(function compareFilms(a, b){ 
          return (a.title).localeCompare(b.title);
      });
      return orderedArray.map(function (a) {
        return a.title});
  } 
}
console.log(orderAlphabetically(movies));
// Best yearly rate average


function bestYearAvg (movies) {
    let moviesByYear = {}; //así creo un objeto vacío que voy a rellenar con keys y sus valores
    let max = 0;    // aquí voy a almacenar el máximo valor de medias
    let yearMax = ""; // aquí voy a almacenar el año con media máxima
    movies.forEach(function(movie) {
          if(moviesByYear[movie.year] === undefined) { //al igualarlo a undefined quiere decir que no existe en el objeto. 
            moviesByYear[movie.year] = []; //quiero un array dinámico, esta es una forma dinámica de añadir keys a un objeto. 
             moviesByYear[movie.year].push(parseFloat(movie.rate); //así subo a mi array vacío el año y su rate en formato número
          } else {
            moviesByYear[movie.year].push(parseFloat(movie.rate);
            } 
    });

  for (let year in moviesByYear) { //esto te itera sobre 
      let sumOfRates = moviesByYear[year].reduce(function(acc, rate) {
        return acc + rate; 

      });

      let avg = sumOfRates / moviesByYear[year].length; 
      moveByYear[year] = avg; //objeto que tiene como propiedades las medias de rates
    }
  
  if (max < moviesByYear[year]) {
     max = moviesByYear[year];
     yearMax = year; 
   }
        return {
          rate: max, 
          year: yearMax // se ejecuta duratne el loop mientras el máximo sea menor al valor que esté iterando
        } 
}

console.log(bestYearAvg(movies));