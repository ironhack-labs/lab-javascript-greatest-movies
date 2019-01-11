/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes(){
    let arr = movies.map(function(movie){
        let time = movie.duration.split(' h','min').join('')  //222
        let hour = Math.floor(time/100)*60
    });} // rapaaaazz, ratinhoooo nho nho - Brazilinha expression to say this is hard

// Get the average of all rates with 2 decimals 
function ratesAverage(array){
    let sumRate = array.reduce(function(sum,movie){    //
        return sum += parseFloat(movie.rate); 
    },0);
    let avgRate = sumRate / array.length;
    return avgRate
}   

// Get the average of Drama Movies
function dramaMoviesRate (array){
    let filDrama = array.filter(function(movie){
        return movie.genre.includes('Drama')
    });
    let sumDrama = filDrama.reduce(function(sum,movie){
        return sum += movie.rate;
    })
    let avgDrama = sumDrama/filDrama.length;
    return avgDrama
}

// Order by time duration, in growing order
    //no previous time specification, no timeshif ninja setups

// How many movies did STEVEN SPIELBERG
function howManyMovies (array){
    let spielbergMovies = array.filter(function(movies){
        return (movie.director.includes('Steven Spielberg') && movie.genre.includes('Drama'));
    });   
}

// Order by title and print the first 20 titles
function orderAlphabetically(array) {
    let orgMovies = array.sort(function (a, b) {
        if (a > b) {
            return 1;
        }
        if (a < b) {
            return -1;
        }
        else {
            return 0;
        }
    });
    let top20 = orgMovies.slice(0, 20); 
    let arrayTitles = []
  
    arrayTitles.forEach(function (movie) {
      top20.push(movie.title);
    }); 
    return arrayTitles;
  }

// Best yearly rate average