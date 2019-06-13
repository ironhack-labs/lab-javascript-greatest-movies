/* eslint no-restricted-globals: 'off' */

// Turn duration of the movies from hours to minutes 

turnHoursToMinutes = (arr) => {
  // Accept Array
  newArray = arr.map((movie) => {
    let newMovie = {}
    newMovie.title = movie.title;
    newMovie.year = movie.year;
    newMovie.director = movie.director;
    newMovie.duration = movie.duration;
    newMovie.genre = movie.genre;
 
    if (movie.duration.includes("h") && movie.duration.includes("min")) {
      let newDuration = movie.duration.split(" ");
      let min = parseInt(newDuration[1].slice(0, -3))
      let hour = parseInt(newDuration[0].slice(0, -1) * 60)
      newMovie.duration = min + hour;
      return newMovie;
    }
    else if (movie.duration.includes("h")) {
      let hour = parseInt(movie.duration.slice(0, -1) * 60)
      newMovie.duration = hour;
      return newMovie;
    }
    else if (movie.duration.includes("min")) {
      let min = parseInt(movie.duration.slice(0, -3))
      newMovie.duration = min;
      return newMovie;
    }
  })
  return newArray;
 }

// Get the average of all rates with 2 decimals 

function ratesAverage (anArray) {
  const sumOfRates = anArray.reduce((sum,anArray) => {
    return sum + anArray.rate
  }, 0);
  
  return Math.round(sumOfRates/anArray.length * 100) / 100

}

// Get the average of Drama Movies

dramaMoviesRate = (arr) => {
  newarr = arr.filter((movie) => {
    return movie.genre.includes("Drama");
  })
  if (newarr.length === 0) {
    return undefined;
  }
 return ratesAverage(newarr);
}

// Order by time duration, in growing order


function orderByDuration (anArray) {
  anArray.sort((a, b) => {
    if (a.duration < b.duration){
      return -1;
    }
    if (a.duration > b.duration){
      return 1;
    }
    if (a.duration === b.duration && a.title < b.title){
      return -1;
    }
    return 0;
  });

  return anArray
}

// How many movies did STEVEN SPIELBERG

howManyMovies = (arr) => {
  if (arr.length === 0) {
    return undefined;
  }
  let newarr = arr.filter((movie) => {
    return movie.genre.includes("Drama") && movie.director === "Steven Spielberg";
  });
  let count = newarr.length;
  let result = `Steven Spielberg directed ${count} drama movies!`;
  return result;
}


// Order by title and print the first 20 titles

function orderAlphabetically (anArray) {
  let newArray = anArray.slice(0);
  newArray.sort((a, b) => {
    if (a.title < b.title){
        return -1;
    }
    if (a.title > b.title){
        return 1;
    }
    return 0;
  });
  let shortArray = newArray.slice(0,20);
  let finalArray = [];
  for (var i = 0; i < shortArray.length; i++) {
    finalArray.push(shortArray[i].title)
  }
  return finalArray;
}

// Best yearly rate average