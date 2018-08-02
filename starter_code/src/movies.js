/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

/*function turnHoursToMinutes(array) {
  return array.map(function (element) {
    var hours = 0;
    var minutes = 0;
var newDur = element.duration.split(" ");
  hours = Number(newDur[0].replace("h",""))*60
  if (newDur.length >= 2)
    minutes = Number(newDur[1].replace("min",""))
var duration = minutes + hours;
  return {
    title: element.title,
    year: element.year,
    director: element.director,
    duration: duration,
    genre: element.genre,
    rate: element.rate,
  }
}
)
};
*/

function turnHoursToMinutes(moviesArray) {
  return moviesArray.map(function (elem) {
    var hours = 0;
    var minutes = 0;
    if (elem.duration.indexOf('h') !== -1) {
      hours = parseInt(elem.duration[0], 10) * 60;
    }
    if (elem.duration.indexOf('min') !== -1) {
      minutes = parseInt(elem.duration.substring(elem.duration.length - 5, elem.duration.length - 3), 10);
    }
    return Object.assign({}, elem, { duration: hours + minutes });
  });
}

function ratesAverage(movies) {
  var rate = movies.reduce(function(acc, value, ) {
return acc + Number(value.rate);
}, 0);
  return Number((rate / movies.length).toFixed(2));
};


// Get the average of all rates with 2 decimals 


// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
