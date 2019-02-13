/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 



function turnHoursToMinutes (newArray){
  return newArray.map(movie => {

    let m;
    let h;
    let minute;
    let hour;
    let minTotal;

    durationArr = movie.duration.split(" ");

  if (durationArr.length == 1){
    if(movie.duration.indexOf("m")!== -1){
      minTotal = parseInt(durationArr[0]);
    } else {
      minTotal = parseInt(durationArr[0])*60;
    } 
  } else {
    minTotal = parseInt(durationArr[0])*60 + parseInt(durationArr[1]);
  }

  let mov = {
    title: movie.title,
    year: movie.year,
    director: movie.director,
    duration: minTotal,
    genre: movie.genre,
    rate: movie.rate
  }
  return mov;
  });
}


// Get the average of all rates with 2 decimals ç

function ratesAverage (mov) {
  var total = mov.reduce((sum, movie) => {
    if (movie.rate == undefined) {
      movie.rate = '0.0';
    }
    return sum + parseFloat(movie.rate);
  }, 0);
  var avg =Math.round( (total/mov.length) * 100 ) / 100;
  return avg;
}


// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
