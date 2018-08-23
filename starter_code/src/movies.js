/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 


function turnHoursToMinutes(arr) {
  var newArray = arr.map(function(e){
    var copy = Object.assign({},e);
    if (e.duration.includes("h") && e.duration.includes("min")) {
      copy.duration = (e.duration[0]* 60)+(e.duration[3]*10)+ (e.duration[4]*1);
      return copy;
    } else if (e.duration.includes("h")){
      copy.duration = (e.duration[0]* 60);
      return copy;
    } else {
      copy.duration = (e.duration[0]*10) + (e.duration[1]*1);
      return copy;
    }
  });
  return newArray;
}

// Get the average of all rates with 2 decimals 
 function ratesAverage(arr){
   var sum = arr.reduce(function(acc, e){
    return acc + e.rate;
   }, 0);
   var average = sum / arr.length;
   return Math.round(average*100)/100;
}


// Get the average of Drama Movies

function dramaMoviesRate(arr){
  var dramaArray = arr.filter(function(e){
    return e.genre.includes("Drama");
  });
  if(dramaArray.length === 0){return;}
  return ratesAverage(dramaArray);
}

// Order by time duration, in growing order
function orderByDuration(arr){
  var sortArray = arr.sort(function(a,b){
    if (a.duration == b.duration ){
      return a.title > b.title
    }
    return a.duration - b.duration
  });
  return sortArray;
}

// How many movies did STEVEN SPIELBERG

function howManyMovies (arr){
  var dramaArray = arr.filter(function(e){
    return e.genre.includes("Drama") && e.director.includes("Spielberg");
  });
  if(arr.length === 0){ return;}
    switch(dramaArray.length){
      case 0:
        return "Steven Spielberg directed 0 drama movies!";
        break;
      case 1:
        return "Steven Spielberg directed 1 drama movies!";
        break;
      case 2:
        return "Steven Spielberg directed 2 drama movies!";
        break;
      case 4:
        return "Steven Spielberg directed 4 drama movies!";
        break;

    }
}

// Order by title and print the first 20 titles

function orderAlphabetically(arr){
  var titleArray = arr.sort(function(a,b){
    if(a.title < b.title){ return -1;}
    if(a.title > b.title){ return 1;}
    return 0;
  });
  titleArray.splice(20);
  var onlyTitleArray = [];
  titleArray.forEach(element => {
    onlyTitleArray.push(element.title)
  });
  return onlyTitleArray;
  
  
}

// Best yearly rate average
