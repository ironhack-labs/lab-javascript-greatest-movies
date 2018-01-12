/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

/*

function convertirHora(duracion){
  for(i = 0; i < duracion.length; i++){
    if(duracion[i].duration == "1h"){
      console.log("1h min");
    }else if(duracion[i] == "2h"){
      console.log("2h min");
    }
  }
}
console.log(convertirHora(duracion));

*/

function turnHoursToMinutes(array) {
    var long;
    return array.map(function(e) {
      if(e.duration.length < 3){
        long = parseInt(e.duration.slice(0,1) * 60);
        return Object.assign({}, e, { duration: long });
      } else if (e.duration.length < 6){
        long = parseInt(e.duration.slice(0,2));
        return Object.assign({}, e, { duration: long });
      } else {
        long = parseInt(e.duration.slice(0,1) * 60) + parseInt(e.duration.slice(3,-3));
        return Object.assign({}, e, { duration: long });
      }
    })
  }
  

// Elemento es dado por el Map
// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object/assign
  

function ratesAverage(arrayMovies){
    var average = arrayMovies.map(function(movie){
      return movie.rate;
    }).reduce(function(total, rate){
       return rate/arrayMovies.length + total;
    },0);
 
    var averageRounded = Math.round(average * 100) / 100;
 
    console.log(averageRounded);
 
    return averageRounded;
 } 
 
 
 // Get the average of Drama Movies
 
 function dramaMoviesRate(arrayMovies){
    var dramaArray = arrayMovies.filter(function(movie){
            return movie.genre.indexOf("Drama") !== -1;
        });
    var dramaAverage = dramaArray.map(function(movie){
            return movie.rate;
        }).reduce(function(total, rate){
            return rate/dramaArray.length + total;
        },0);
 
        var averageRounded = Math.round(dramaAverage * 100) / 100;
 
        console.log(averageRounded);
    
        return averageRounded;
 }

function ratesAverage(duracion){

    var mediaPeliculas = movies.map(function(elem) {
      var mediaTotal = (duracion.rate)/2;
      return {
        name: elem.name,
        mediaTotal: parseFloat(mediaTotal)
      }
    });
    }
    
    console.log(ratesAverage(movies));


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG

function howManyMovies(duracion){
    for(i = 0; i < duracion.length; i++){
      if(duracion[i].director === "Steven Spielberg"){
        return ("¡Te encontré Steven y no has dirigido ninguna película de drama!");
      }else if(!duracion.genre === "Drama"){
        return ("Ninguna película de drama encontrada");
      }
      }
    }

console.log(howManyMovies(movies));
  
// Order by title and print the first 20 titles


// Best yearly rate average
