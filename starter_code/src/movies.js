/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes(array) {
  let mapping = array.map(movie => {
    let duracion = movie.duration;
    let splitedHours = duracion.split(" ");
    let splitedMinutes = duracion.split(" ");
    if(duracion.indexOf("h") !== -1 && duracion.indexOf("min") !== -1){
     let calculo = parseInt(splitedHours[0]) * 60 + parseInt(splitedMinutes[1]);
     duracion = calculo;
    } else if(duracion.indexOf("h") !== -1) {
        let hours = parseInt(splitedHours[0]) * 60;
        duracion = hours;
    } else if(duracion.indexOf("min") !== -1) {
        let minutes = parseInt(splitedMinutes[0]);
        duracion = minutes;
    }
      
    return {
      ...movie, 
      duration: parseInt(duracion)
    };
    
  });
  return mapping;
}
//  turnHoursToMinutes(movies);


// Get the average of all rates with 2 decimals 

function ratesAverage(array) {
  let avg =
    array.reduce((accum, movie) => {
      return accum + movie.rate;
    }, 0) / array.length;
  return parseFloat(avg.toFixed(2));
}

// ratesAverage(movies);

// Get the average of Drama Movies

function dramaMoviesRate(array) {
  
  let dramita = array.filter( movie => movie.genre.indexOf("Drama") !== -1);
  if(dramita.length === 0) {
      return undefined;
  }
  return ratesAverage(dramita);
}


// Order by time duration, in growing order

function orderByDuration(array) {
  let conversion = array.sort((a, b) => {
    if (a.duration === b.duration) {
      if (a.title > b.title) return 1;
      if (a.title == b.title) return 0;
      if (a.title < b.title) return -1;
    }
    return a.duration - b.duration;
  });
  return conversion;
}

// How many movies did STEVEN SPIELBERG
function howManyMovies(array) {
    if(array.length === 0) {
        return undefined;
    }

  let spielberg = array.filter(movie => {
    return (
      movie.director.includes("Steven Spielberg") &&
      movie.genre.includes("Drama")
    );
  });
  return `Steven Spielberg directed ${spielberg.length} drama movies!`;
}



// Order by title and print the first 20 titles
function orderAlphabetically(array) {
  let ordered = array.sort((a, b) => {
    if (a.title > b.title) return 1;
    if (a.title == b.title) return 0;
    if (a.title < b.title) return -1;
  });
  let maped = ordered.map(element => element.title);
  return maped.splice(0, 20);
}

orderAlphabetically(movies);





// Best yearly rate average


function bestYearAvg(array) {

}