/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(){

}


// Get the average of all rates with 2 decimals 
function ratesAverage(array){
    var rate;

    var rates = array.reduce(function(acum, movies){

      if(movies.rate === ''){
        rate = 0;
      }else{
        rate = movies.rate;
      }

      return parseFloat(rate + acum);
    },0);

    return Number((rates/array.length).toFixed(2));
}


// Get the average of Drama Movies
function dramaMoviesRate(array){
    var dramaMovies = array.filter(function(movies){
        return movies.genre.indexOf('Drama') !== -1;
    });
    if(isNaN(ratesAverage(dramaMovies))){
        return undefined;
    }
    return (ratesAverage(dramaMovies));
}

// Order by time duration, in growing order
function orderByDuration(){

}


// How many movies did STEVEN SPIELBERG
function howManyMovies(array){
    if(array.length === 0){
        return undefined;
    }
    var spielbergMovies = array.filter(function(movies){
        return movies.director === 'Steven Spielberg' && movies.genre.indexOf('Drama') !== -1;
    });
    return "Steven Spielberg directed "+spielbergMovies.length+ " drama movies!";
}

// Order by title and print the first 20 titles
function orderAlphabetically(array){
    var ordered = [];
    
    array.forEach(function(movie){
        ordered.push(movie.title);
    });
    ordered.sort();
    console.log(ordered.slice(0,20));
    return ordered.slice(0,20);
}

// Best yearly rate average
function bestYearAvg(){
    
}