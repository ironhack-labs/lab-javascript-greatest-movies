/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes(array){
    var newArray = array.map(function(obj) {
        var timeArray = obj.duration.split(" ");
        var hoursToMinutes = parseInt(timeArray[0]) * 60;
        var minutos = parseInt(timeArray[1]);
        obj.duration = hoursToMinutes + minutos;
        return obj;
    })
    return newArray;
} 

turnHoursToMinutes(movies);


// Get the average of all rates with 2 decimals 


function ratesAverage(array) {
    var ratingsArray = [];
    array.forEach(function(obj){
    var ratingNum = Number(obj.rate);
    ratingsArray.push(ratingNum);
    });
    var totalSum = ratingsArray.reduce(function(sum,elem) {
      return sum+elem;
    });
    return Number(totalSum/ratingsArray.length).toFixed(2);
  }
  
  ratesAverage(movies);


// Get the average of Drama Movies

function dramaMoviesRate(array) {
    var dramaRatingsArray = [];
      array.forEach(function(ob) {
            if (obj.genre.indexOf('Drama') > -1) {
              var dramaRatingNum = Number(ob.rate);
              dramaRatingsArray.push(dramaRatingNum);
  
          }
           });
          var totalSum = dramaRatingsArray.reduce(function(sum,elem) {
        return sum+elem;
      });
        return Number(totalSum/dramaRatingsArray.length).toFixed(2);
    }
  
  dramaMoviesRate(movies);


// Order by time duration, in growing order

function orderByDuration(array) {
    var minutesArray = turnHoursToMinutes(array);
    minutesArray.sort(function(a, b){
        if (a.duration > b.duration){
            return 1;
        }
    
        if (a.duration < b.duration){
            return -1;
        }
    
        return 0;
    });
    return minutesArray;
}

orderByDuration(movies);


// How many movies did STEVEN SPIELBERG

function howManyMovies(array) {
    var spielbergArray = array.filter(function(obj) {
        return obj.director === 'Steven Spielberg' && ob.genre.indexOf('Drama') > -1;
    });
    return spielbergArray.length;
}

howManyMovies(movies);

// Order by title and print the first 20 titles

function orderAlphabetically(array) {
    var sortedArray = array.sort(function(a,b) {
        if (a.title > b.title) {
            return 1;
        }
        if (a.title < b.title){
            return -1;
        }
        return 0;
    });
    var firstTwenty = sortedArray.splice(0,19);
    return firstTwenty;
}

orderAlphabetically(movies);

// Best yearly rate average

