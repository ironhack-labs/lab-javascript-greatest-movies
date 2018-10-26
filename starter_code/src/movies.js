/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(Film) {
    
    var newArray = Object.assign({},Film);
    return Films({...newArrayFilms, duration: strintToInt(Film.duration)});
}

function stringToInt(stringData) {
    intRaw = stringData.slice(0,-3).split("h "); 

    return parseInt(intRaw[0])*60 + parseInt(intRaw[1]);
}


// Get the average of all rates with 2 decimals 



// Get the average of Drama Movies
function dramaMoviesRate(arrayFilms) {
    var dramaFilm = 0;
    arrayFilms.forEach(function(film){
      film.genre.forEach(function(genresKinds){
        if(genresKinds=="Drama") dramaFilm++;
      });
        
    });
    return dramaFilm/arrayFilms.length;
}

// Order by time duration, in growing order
function orderByDuration(arrayFilms) {
  arrayFilms.sort(function(a,b){
      return b.duration-a.duration;
  });  
}

// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
