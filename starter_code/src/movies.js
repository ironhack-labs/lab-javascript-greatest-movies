/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
// function turnHoursToMinutes(movie){

//   var newMoviesArray = movies.map(function(movie){
//     arr = movie.duration.split(" ");
//     //[Xh, Xmin]
//     hour = arr.filter(function(el) {
//       return el.indexOf("h") !== -1;
//     })
//     //console.log(hour);
//     if (hour.length > 0) {
//       hour = hour[0].slice(0, hour[0].length-1);
//     }
//     else {
//       hour = 0;
//     }
//     minutes = arr.filter(function(el) {
//       return el.indexOf("m") !== -1;
//     })
//     //console.log(minutes);
//     if (minutes.length > 0) {
//       minutes = minutes[0].slice(0, minutes[0].length-3);
//     }
//     else {
//       minutes = 0;
//     }
//     result = parseInt(hour*60) + parseInt(minutes);
//     nuevo = Object.assign({}, movie);
//     nuevo.duration = result;
//     return nuevo;

//   })
// }

function turnHoursToMinutes(movies){
  
  var newMoviesArray = movies.map(function(movie){
    arr = movie.duration.split(" ");
    console.log(arr);    //[Xh, Xmin]
    hour = arr.filter(function(el) {
      return el.indexOf("h") !== -1;
    })
    //console.log(hour);
    if (hour.length > 0) {
      hour = hour[0].slice(0, hour[0].length-1);
    }
    else {
      hour = 0;
    }
    minutes = arr.filter(function(el) {
      return el.indexOf("m") !== -1;
    })
    //console.log(minutes);
    if (minutes.length > 0) {
      minutes = minutes[0].slice(0, minutes[0].length-3);
    }
    else {
      minutes = 0;
    }
    result = parseInt(hour*60) + parseInt(minutes);
    nuevo = Object.assign({}, movie);
    nuevo.duration = result;
    return nuevo;
  })
  //console.log(newMoviesArray)
  return newMoviesArray
}

// Get the average of all rates with 2 decimals 


// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
