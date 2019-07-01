/* eslint no-restricted-globals: 'off' */

// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(arrayOfMovies){
  let newArray = arrayOfMovies.map((eachMovie)=>{
      let newMovieObject = {...eachMovie};
  let stringOfTime = newMovieObject.duration;
  if(stringOfTime.includes('h') && stringOfTime.includes('min')){
      let arrayWithHoursAndMinutesSeparately = stringOfTime.split('h');
      let numberOfHours = parseInt(arrayWithHoursAndMinutesSeparately[0]);
      let numberOfMinutes = parseInt(arrayWithHoursAndMinutesSeparately[1]);
      newMovieObject.duration = numberOfHours*60 + numberOfMinutes;
  } 
  else if (stringOfTime.includes('h')){
      let arrayWithHoursAndMinutesSeparately = stringOfTime.split('h');
      let numberOfHours = parseInt(arrayWithHoursAndMinutesSeparately[0]);
      newMovieObject.duration = numberOfHours*60
  } 
  else {
    newMovieObject.duration = parseInt(stringOfTime);
  }
  return newMovieObject
  })
  return newArray;
}

// Get the average of all rates with 2 decimals 

function ratesAverage (ratesOfMovies){
  let total = ratesOfMovies.reduce((accumulator, eachMovie) => {
    if(isNaN(parseFloat(eachMovie.rate))){
      return accumulator + 0;
    }
    return accumulator + parseFloat(eachMovie.rate);
  },0)
 
  let average =  total/ratesOfMovies.length;
  let another = average * 100;
  another = Math.round(another);
  another /= 100;
  return another;
 }
 
// Get the average of Drama Movies

function dramaMoviesRate(someArray){
  let dramaRate = 0;
  let newArray = []
  someArray.forEach((movieObject) => {
    if(movieObject.genre.includes("Drama")){
      dramaRate = movieObject.rate;
      newArray.push({'rate': dramaRate});
    }
  })
  let avgDramaRate = ratesAverage(newArray);
  if(isNaN(avgDramaRate)){
    return undefined;
  }
  return avgDramaRate;
}  

// Order by time duration, in growing order

function orderByDuration(someArray){

  someArray.sort((a,b) => {
    if(a.duration < b.duration){
      return -1
    } 
    else if (a.duration > b.duration){
      return 1;
    } 
    
    else {
        if(a.title<b.title){
          return -1
        } else if(b.title<a.title) {
          return 1
        } 
      }
      return 0;
  });

  return someArray;
} 

// How many movies did STEVEN SPIELBERG

function howManyMovies(someArray){

  if (someArray === undefined || someArray.length == 0) {
    return undefined;
}

  let counter = 0;
  let newArray = someArray.filter(function(movieObject){
    
    if(movieObject.director.includes("Spielberg") && movieObject.genre.includes("Drama")){
        counter++;
        return movieObject;
    }
  })

  return `Steven Spielberg directed ${counter} drama movies!`;
}

// Order by title and print the first 20 titles

function orderAlphabetically(someArray){

  let newArray = someArray.map(function(movieObj){
    return movieObj.title;
  })
  
  let onlyMaxTwentyTitles = [];
  let index = 0;
  while(index < 20){
    if(newArray[index] === undefined){
      break;
    }
    onlyMaxTwentyTitles.push(newArray[index]);
    index++;
  }
    onlyMaxTwentyTitles.sort();
    return onlyMaxTwentyTitles;
}

// Best yearly rate average
