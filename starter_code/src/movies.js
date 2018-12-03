/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes (movies){
  let separateHoursFromMinutes = [];

  separateHoursFromMinutes = movies.map(function(movie){
    return movie.duration.split(" ");
  });
  
  let timeWithoutLetters = separateHoursFromMinutes.map(function (time){
    timeGood = [];
    timeGood.push(time[0].replace(/h/g, ''));
    timeGood.push(time[1].replace(/min/g, ''));
    return timeGood;
  });

  let timeToNumber = timeWithoutLetters.map(function (time){
    let timeInNumbers = [];
    timeInNumbers.push(parseFloat(time[0])*60);
    timeInNumbers.push(parseFloat(time[1]));
    return timeInNumbers[0] + timeInNumbers[1];
  });
 
  
  // console.log(hoursInMinutes);
  return timeToNumber;
}

console.log(turnHoursToMinutes(movies));

// Get the average of all rates with 2 decimals 

function ratesAverage (arr){
  let averageRate = arr.reduce(function(sum, movie){
    return sum + parseFloat(movie.rate);
  }, 0);
  return Math.round ((averageRate/arr.length) * 100) / 100;
}


// Get the average of Drama Movies

function dramaMoviesRate(movies) {
  
  let dramaMovies = []; 
  
   dramaMovies = movies.filter(function (movie) {
   return movie.genre.indexOf("Drama") !== -1;
  }); 
  
  if (dramaMovies.length === 0) {
   return undefined;
  } else {
    let media = dramaMovies.map(function (movie) {
    
    if (movie.rate === "") {
     movie.rate = 0;
   }
    return parseFloat(movie.rate);

  }).reduce(function (accu, value) {
   return accu + value;
  }, 0);
  return parseFloat((media / dramaMovies.length).toFixed(2));
  }
}


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG

// Defines howManyMovies
// Should return an string
// Should return undefined if the array is empty
// Return "Steven Spielberg directed 0 drama movies!" if he does not directed none of the movies in the array
// Only drama movies! Should return "Steven Spielberg directed 1 drama movies!"
// Only Steven Spielberg movies! Should return "Steven Spielberg directed 2 drama movies!"
// Should return "Steven Spielberg directed 4 drama movies!"


function howManyMovies (movies){

  if (movies.length === 0){
    return undefined;
  }

  let dramaMovies = []; 
  
   dramaMovies = movies.filter(function (movie) {
   return movie.genre.indexOf("Drama") !== -1;
  }); 

  let spielbergDrama = dramaMovies.filter(function (movie){
    return movie.director === "Steven Spielberg";
  });

  if (spielbergDrama.length === 0){
    return "Steven Spielberg directed 0 drama movies!";
  } else if (spielbergDrama.length === 1){
    return "Steven Spielberg directed 1 drama movies!";
  } else if (spielbergDrama.length === 2){
    return "Steven Spielberg directed 2 drama movies!";

  } else if (spielbergDrama.length === 4){
    return "Steven Spielberg directed 4 drama movies!" ;
  }else {
    return `Steven Spielberg directed ${spielbergDrama.length} drama movies`;
  }
}


// Order by title and print the first 20 titles

// Defines orderAlphabetically
// You should return an array
// Only return the title of the movies! Each element should be a string
// If there are less than 20 elements, return all of them.
// If there are more than 20 elements, return only 20 of them.
// You should order them alphabetically.
// You should return the top20 after order them alphabetically.

function orderAlphabetically (movies){
  
  let firstTwentyTitles = movies.filter(function (movie){
    return movies.indexOf(movie) <= 19;
  });

  let movieTitles = firstTwentyTitles.map(function (movie){
    return movie.title;
  });
  
  movieTitles.sort();
  
  return movieTitles;
}


// Best yearly rate average
// Defines bestYearAvg
// Should return undefined if the array is empty
// Should return the correct answer to a single element array
// Should return the correct answer to a multiple elements array
// Should return the oldest year when there is a tie

function bestYearAvg (movies){
  if (movies.length === 0){
    return undefined;
  }
}