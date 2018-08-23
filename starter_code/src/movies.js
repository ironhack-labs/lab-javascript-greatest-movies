/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes(array) {
  var timing = array.map(function(e){
    text = e.duration.replace("h","").replace("min","").split(" ")
    hours = text[0]*60;
    min = text[1];
    totalDuration = parseInt(hours) + parseInt(min);
    console.log(totalDuration)
    return Object.assign({},e,{duration:totalDuration});
  })
  return timing;
 }

// Get the average of all rates with 2 decimals 

function ratesAverage(a) {
  return a.reduce(function(acc, e, i) {
  var media = e.rate / a.length + acc;
  return Number(media.toFixed(2));
  }, 0);
  }

// Get the average of Drama Movies


function dramaMoviesRate(a) {
  var dramaFilter = a.filter(function(e) {
    return e.genre.includes("Drama");
  });
  var averageDrama = ratesAverage(dramaFilter);
  if (averageDrama == 0) {
    return undefined;
  } else {
    return averageDrama;
  }
  };

// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average


/* var movies = [
  {
    title: 'The Shawshank Redemption',
    year: '1994',
    director: 'Frank Darabont',
    duration: '2h 22min',
    genre: ['Crime', 'Drama'],
    rate: '9.3'
  },
]
*/





 
