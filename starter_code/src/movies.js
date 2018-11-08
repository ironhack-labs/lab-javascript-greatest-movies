/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes(arr){
  var newArray = arr.map(function(element){
    var newElement = Object.assign({},element);
    
    var timeArr = element.duration.split(" ");

    var timeArrNum = timeArr.map(function(cad){
      if (cad.endsWith('h')) {
        cad = cad.substring(0,(cad.length-1));
        return parseInt(cad) * 60;
      }
      if (cad.endsWith('min')) {
        cad = cad.substring(0,(cad.length-3));
        return parseInt(cad);
      } 
    });

    var timeMinutes = timeArrNum.reduce(function(accumulator,number){
      return accumulator + number;
    },0);

    newElement.duration = timeMinutes;
    
    return newElement;
  });
  
 return newArray;
}


// Get the average of all rates with 2 decimals 

function ratesAverage(arr){

  var rateArray = [];

  arr.map(function(element) {
    rateArray.push(parseFloat(element.rate));

    return rateArray;
  });
  var rate = 0;
  rate = rateArray.reduce(function(accumulator, current, index, rateArray){
    accumulator += current;
    if (index == rateArray.length - 1) {
      accumulator /= rateArray.length;
    }
    return accumulator;
  },0);

    return Number(rate.toFixed(2));
} 


// Get the average of Drama Movies

 function dramaMoviesRate(arr){

  var rateDramaArray = [];

  arr.map(function(element) {
    if (element.genre.indexOf('Drama') > -1) {
      if (element.rate === '') {
        rateDramaArray.push(0);
      } else {
        rateDramaArray.push(parseFloat(element.rate));
      }
    }
    return rateDramaArray;
  });
  
  var rate = 0;
  rate = rateDramaArray.reduce(function(accumulator, current, index, rateDramaArray){
    accumulator += current;
    if (index == rateDramaArray.length - 1) {
      accumulator /= rateDramaArray.length;
    }
    return accumulator;
  },0);
  
  if (rate === 0) {
    return undefined;
  } else {
  return Number(rate.toFixed(2));
  }
 }

// Order by time duration, in growing order

function orderByDuration(arr) {

  var moviesOrderedByDuration = arr.sort(function (movieA,movieB) {
    if ( movieA.duration > movieB.duration ) {
      return 1;
    } 
    else if ( movieA.duration < movieB.duration ) {
      return -1;
    }
    else if ( movieA.duration = movieB.duration ) {
      if ( movieA.title > movieB.title ) {
        return 1;
      }
      else if (movieA.title < movieB.title ) {
        return -1;
      }
    };
  });
  return moviesOrderedByDuration;
}

// How many movies did STEVEN SPIELBERG

function howManyMovies(arr) {
  if ( arr.length === 0) {
    return undefined;
  } else {
    var spielbergMovies = [];
    spielbergMovies = arr.filter(function(movie) {
      return movie.director === 'Steven Spielberg';
    });
    var spielberDramaMovies = [];
    spielbergDramaMovies = spielbergMovies.filter(function(movie) {
      if (movie.genre.indexOf('Drama') != -1 ) {
        return movie.director ;
      }
    });
  return 'Steven Spielberg directed ' + spielbergDramaMovies.length + ' drama movies!';
  }
}


// Order by title and print the first 20 titles

function orderAlphabetically(arr) {

  var titlesOfMovies = arr.map(function(element) {
    return element.title;
  });

  var moviesOrderedAlphabetically = titlesOfMovies.sort().slice(0,20);
  return moviesOrderedAlphabetically;
}


// Best yearly rate average

function bestYearAvg(arr) {

  var bestYear = '';
  var bestRate = '';


  return 'The best year was ' + bestYear + ' with an average rate of ' + bestRate ;
}

