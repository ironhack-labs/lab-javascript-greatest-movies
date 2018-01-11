/* eslint no-restricted-globals: 'off' */
//Funciones auxiliares
function giveMinutes(horaString) {

  var hora = 0;
  var minutos = 0;
  if (typeof (horaString) === 'string') {

    if(horaString.includes('h')){
      hora = parseInt(horaString.split("h").slice(0, 1)[0] * 60);
      if (horaString.includes("min")) {
      var minCadena = horaString.split(" ")[1];
      minutos = parseInt(minCadena.substring(0, minCadena.length - 3));
     }
    }else{
      
  
      var mins = horaString.split("min")[0];
      minutos = parseInt(mins);
      
    }


    
  }
  return hora + minutos;
}
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes(arrayMovie) {

  return arrayMovie.map(function (movie) {
    return Object.assign({}, movie, {
      duration: giveMinutes(movie.duration)
    });

  });


}

var arrayMovie = turnHoursToMinutes(movies);
console.log(arrayMovie);

// Get the average of all rates with 2 decimals 
function ratesAverage(arrayMovies){

  return arrayMovies.reduce(function(acc, movie){
 
    var media = (movie.rate/arrayMovies.length + acc) ;
    return Number(media.toFixed(2));
  },0)

}


// Get the average of Drama Movies
// Get the average of Drama Movies
function dramaMoviesRate(arrayMovies){
  
  var dramaMovies = arrayMovies.filter(function(movie){
    
    return (movie.genre.includes('Drama'));
    
  });
  
  if(dramaMovies.length === 0) {

    return undefined;

  } else {

    return ratesAverage(dramaMovies);

  }

}

// Order by time duration, in growing order
function orderByDuration(arrayMovies){

  return arrayMovies.sort(function(a,b){
     
     if(a.duration === b.duration){
        console.log("Irnhack");
        
        if(a.title > b.title){
          
          return 1;
        }else if(a.title < b.title){
          
          return -1;
        }else{
          
          return  0;
        }
      
     }

     return a.duration - b.duration;

  });


}


// How many movies did STEVEN SPIELBERG
function howManyMovies(arrayMovies){
  
  var textoMovies;
  var moviesSpielberg;
  var moviesSpielbergDrama;
  
  
  
  if(arrayMovies.length !== 0)
  {
    moviesSpielberg = arrayMovie.filter(function(movie){

    return movie.director === 'Steven Spielberg' ;

  });
  
   moviesSpielbergDrama = moviesSpielberg.filter(function(movieDrama){

    return movieDrama.genre.includes('Drama') ;

  });
  
  textoMovies = "Steven Spielberg directed " + moviesSpielbergDrama.length + " drama movies!"
  
  
  }
    

  return textoMovies;

}

// Order by title and print the first 20 titles


// Best yearly rate average