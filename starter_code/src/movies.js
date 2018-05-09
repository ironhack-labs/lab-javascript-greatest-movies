/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

// En esta funcion Jasmine me da un error que dice que se debe regresar un numero, cuando entro al error en Jasmine me marca que esta correcto.
function turnHoursToMinutes(array){
    var newArr = [];
    array.map((movie) => {
        if(movie.duration === null){
            return;
        }
        var mins = parseInt(movie.duration.substring(0,1)) * 60;
        var totalminutos= parseInt(movie.duration.substring(3,5)) + mins;
        if(!movie.duration.includes("min")){
            movie.duration = mins;
        }else{
            movie.duration = totalminutos;
        }
    });
    for (i = 0; i < array.length; i++) {
        newArr.push(array[i]);
      }
    return newArr;
}

// Get the average of all rates with 2 decimals 
function ratesAverage(array){
    var rateAverg = array.reduce((x, rating) => {
        if(rating.rate === ""){
            rating.rate = 0;
        }
        return x += parseFloat(rating.rate);
    },0);
    return rateAverg/array.length;
}

// Get the average of Drama Movies
function dramaMoviesRate(array){
    var dram = false;
    var drama = array.filter(function(movie){
        if(movie.genre.indexOf("Drama") != -1){
            dram = true;
        }
        return movie.genre.indexOf("Drama") != -1;
      });
      if(!dram){
          return undefined;
      }
      return parseFloat(ratesAverage(drama));
}


// Order by time duration, in growing order
function orderByDuration (array) {
    array.sort((a, b) => {
        if (a.duration === b.duration) {
            if (a.title > b.title) {
                return 1;
            }
        }
        return a.duration - b.duration;
    });
    return array;
  }


// How many movies did STEVEN SPIELBERG

function howManyMovies(array) {
    if (array.length === 0) {
      return undefined;
    }
    var howMany = array.filter(function(drama){
      for (i = 0; i<drama.genre.length;i++){
         if (drama.genre[i] == "Drama") {
          return drama.director == 'Steven Spielberg' 
         }         
      }    
    });
  
  return ("Steven Spielberg directed "+ howMany.length + " drama movies!");  
  
  }

// Order by title and print the first 20 titles

function orderAlphabetically(array) {
    var pelis = [];
    array.sort((a, b) => {
      if (a.title > b.title) {
        return 1;
      }else if (a.title < b.title) {
        return -1;
      }else{
      return 0;
      }
    });
    for (let i = 0; i < 20 && i < array.length; i++) {
      pelis.push(array[i].title);
    }
    return pelis;
  }

// Best yearly rate average
function bestYearAvg(array){
    if(array === 0){
        return undefined;
    }
    

}