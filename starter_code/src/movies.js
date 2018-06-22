/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToinutes(arrayOfMovies){
  var result = arrayOfMovies.map(function(eachMovie){

    //Make an array that replaces string "min" and keeps the number ONLY. return object
    
    if (!eachMovie.duration.includes('h')){// ! = NOT
      var s = eachMovie.duration;
      var newS = s.replace(/min/g, '')//replaces string, g=global(all matching values are replaced)
      var minutes = Number(newS);
      var newlyFormattedMovie = {};//Stores new information

      newlyFormattedMovie.title = eachMovie.title;
      newlyFormattedMovie.year = eachMovie.year;
      newlyFormattedMovie.director = eachMovie.director;
      newlyFormattedMovie.genre = eachMovie.genre;
      newlyFormattedMovie.rate = eachMovie.rate;
      newlyFormattedMovie.duration = minutes;

      //returns empty object with ALL information. If not, ONLY duration will be returned
      
      return newlyFormattedMovie;

    }

    //Make an array that replaces string "h" and keeps the number ONLY. return object

  if (!eachMovie.duration.inclues('min')){//! = NOT
    var s = eachMovie.duration;
    var newS = s.replace(/h/g, '')//replaces string, g= global
    var hours = Number(newS);
    var totalMinutes = hours * 60;
    var newlyFormattedMovie= {};//Stores new information
    
    newlyFormattedMovie.title = eachMovie.title;
    newlyFormattedMovie.year = eachMovie.year;
    newlyFormattedMovie.director = eachMovie.director;
    newlyFormattedMovie.genre = eachMovie.genre;
    newlyFormattedMovie.rate = eachMovie.rate;
    newlyFormattedMovie.duration = totalMinutes;

    //returns empty object with ALL information. If not, ONLY duration will be returned

    return newlyFormattedMovie;
  }

  
  //Make an array for movies that have both "h" and "min"
  
  var s = eachMovie.duration
  var newS = s.replace(/h|min/g, '') // | means "or"
  var arrayWithTime = newS.split(' '); //Splits string of hours and minutes

  var stringHours = arrayWithTime[0]; // first number in arrayWithTime 
  var hours = Number(stringHours);// turns string into "number"
  var hoursIntoMinutes = hours * 60; 

  var stringMinutes = arrayWithTime[1]; // second number in arrayWithTime 
  var minutes = Number(stringMinutes); //turns string into "number"

  var totalMinutes = hoursIntoMinutes + minutes; //Add hours(that were turned into minutes using var hoursIntoMinutes) and minutes together

  var newlyFormattedMovie = {};
  newlyFormattedMovie.title = eachMovie.title;
  newlyFormattedMovie.year = eachMovie.year;
  newlyFormattedMovie.director = eachMovie.director;
  newlyFormattedMovie.genre = eachMovie.genre;
  newlyFormattedMovie.rate = eachMovie.rate;
  newlyFormattedMovie.duration = totalMinutes;

      //returns empty object with ALL information. If not, ONLY duration will be returned
  
  return newlyFormattedMovie;
  });

  return result; //calls map function(which loops through all objects in movies array)
}


// Get the average of all rates with 2 decimals 

function ratesAverage(theArray){
  var total = theArray.reduce(function(sum, movie){ //.reduce reduces the array to a single value
    return sum + Number(movie.rate);
  },0)
  return Number((total/theArray.length).toFixed(2)); //toFixed(2)= 2 decimals
}

// Get the average of Drama Movies

function dramaMoviesRate(theArray){
  var dramaOnly = theArray.filter(function(movie){ //.filter create an array filled with all array elements that pass a test 
    return movie.genre.includes('Drama'); //filters genre of movies that include 'Drama'
  });

  if (dramaOnly.length < 1){  
    return undefined;
  }

  return ratesAverage(dramaOnly);
}


// Order by time duration, in growing order

function orderByDuration(theArray){
  theArray.sort(function(a,b){   //.sort sorts items of an array

    if (a.duration > b.duration){
      return 1;
    } else if (b.duration > a.duration){
      return -1;
    } else {
      if (a.title < b.title){ //if it has the same duration amount, sort by ABC order
        return 1;
      }
    }
  });
  return theArray;
}


// How many movies did STEVEN SPIELBERG

function howManyMovies(theArray) {
  if(theArray.length === 0) {
    return undefined;
  }
  var dramaOnly = theArray.filter(function(eachMovie){ //Create a variable to store drama only movies
    return eachMovie.genre.includes("Drama"); // .includes and .filter for drama movies
  });
  var stevenSpielbergMovies = dramaOnly.filter(function(eachMovie){
    return eachMovie.director.includes("Steven Spielberg"); // .includes and .filter to search for steven spielberg 
  });
    return stevenSpielbergMovies.length // return the amount of movies steven spielberg has directed 
}


// Order by title and print the first 20 titles

function orderAlphabetically(theArray) {
  var result = []; // stores end result of array because we are completing two things for one result 
  var numberOfMovies = theArray.length < 20 ? theArray.length : 20; //stores other value (only 20 movies)

  theArray.sort(function(a, b){ // sorts the array in alphabetical order
    if (a.title < b.title) {
      return -1
    } else {
      return 1
    }
  });
  for(var i = 0; i < numberOfMovies; i++) {
    result.push(theArray[i].title); // if the index is less than 20 then add one, push to array 
  }
  return result;
} 

// Best yearly rate average
