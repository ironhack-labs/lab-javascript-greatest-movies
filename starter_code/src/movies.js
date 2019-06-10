/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes(moviesArr) {
  let newMovies = moviesArr.map(movie =>{
    const num = movie.duration.split(" ");
    var result;
    if(num.length === 1){
      if(num[0].includes('h')) {
        result = parseInt(num) * 60;
      } else{
        result = parseInt(num);
      }
    }else {
      result = parseInt(num[0].replace("h", "")) * 60 + parseInt(num[1].replace("min", ""));
    }
    return {...movie, duration: result}
  });
  return newMovies;
}

//**************** */

//function(movies){
  

// Get the average of all rates with 2 decimals 


function ratesAverage (movies) {
   let mediaArray = movies.reduce((acumulador, pelicula) => {return acumulador + pelicula.rate}, 0) / movies.length;
     //toFixed2
return parseFloat(mediaArray.toFixed(2));
}

// Get the average of Drama Movies



function dramaMoviesRate (movies){
  let dramaArray = movies.filter(movie => movie.genre.includes("Drama"));
  if (dramaArray.length === 0) {
    return undefined;
} return ratesAverage(dramaArray);
   
}


// Order by time duration, in growing order

function orderByDuration(movies) {
  let sorted = movies.sort(function (a, b) {
      if (a.duration > b.duration) {
          return 1;
      }
      if (a.duration < b.duration) {
          return -1;
      }
      if (a.title < b.title) {
          return -1;
      }
      return 0;
  });
  return sorted;
}

// How many movies did STEVEN SPIELBERG

function howManyMovies(movies) {
  let steveMovies = movies.filter( movie => movie.genre.includes('Drama') && movie.director == 'Steven Spielberg');
    //return movie.director == "Steven Spielberg";

  if (movies.length == 0) {
    return undefined;
  }else {
    return `Steven Spielberg directed ${steveMovies.length} drama movies!`;
}

}
  
  

// Order by title and print the first 20 titles

function orderAlphabetically (movies) {
  let orderedMovies = movies.sort((movie1, movie2) => {
      if (movie1.title > movie2.title) {
          return 1;
      } else {
          return -1;
      }
  }).slice(0,20);

  return orderedMovies.map(movie => movie.title);;

}
// Best yearly rate average

//
function bestYearAvg(movies){}
  