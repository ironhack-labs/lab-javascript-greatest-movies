/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

// var time = "2h 22min";


function giveMeHours(timeString) {
  var hours = timeString.slice(0, timeString.indexOf("h"));
  var minutes = timeString.slice(timeString.indexOf(" ") + 1, timeString.indexOf("min"));
  minutes = parseInt(minutes);
  hours = parseInt(hours);
  return minutes + (hours*60);
}

let turnHoursToMinute = movies.map(function(movie){
  let time = movie.duration;
  let newMovies = {
    title: movie.title, 
    year: movie.year, 
    director: movie.director, 
    duration: giveMeHours(time),
    genre: movie.genre,
    rate: movie.rate
  };
  return newMovies;
});

console.log(turnHoursToMinute);

// Get the average of all rates with 2 decimals 
let ratesSum = movies.reduce(function(sum, movie){
  return sum + parseFloat(movie.rate);
}, 0);

let ratesAverage = (ratesSum/movies.length).toFixed(2); 

console.log(`The average rate for All movies is: ${ratesAverage}`);

// Get the average of Drama Movies

let dramaMovies = movies.filter(function(movie){
  return movie.genre.includes('Drama');
});

let ratesDramaSum = dramaMovies.reduce(function(sum, drama){
  return sum + parseFloat(drama.rate);
}, 0);

let dramaMoviesRate = (ratesDramaSum/dramaMovies.length).toFixed(2);
console.log(`The average rate for Drama movies is: ${dramaMoviesRate}`);


// Order by time duration, in growing order

turnHoursToMinute.sort(function(a, b){
  let orderByDuration = (a.duration < b.duration) ? -1 : 
    (a.duration > b.duration) ? 1 : 
    (a.title < b.title) ? -1 :
    (a.title > b.title) ? 1 : 0 ;
  return orderByDuration;
})

console.log(turnHoursToMinute);

// turnHoursToMinute.sort(function(a, b){
//   if(a.duration < b.duration){
//     return -1;
//   } else if (a.duration > b.duration){
//     return 1;
//   } else if (a.title < b.title){
//     return -1;
//   } else if (a.title > b.title){
//     return 1;
//   } 
//   return 0;
//   });


// How many movies did STEVEN SPIELBERG
function howManyTimes(){
  let counter = 0;
  for (movie of movies){
    if(movie.genre.includes('Drama') && movie.director === 'Steven Spielberg'){
      counter++;
    }
  }
  return counter;
}

let whatMovies = movies.filter(function(movie){
  return movie.genre.includes('Drama') && movie.director === 'Steven Spielberg';
})

console.log(`There are ${howManyTimes()} Drama movies directed by Steven Spielberg`);
console.log(whatMovies);

// Order by title and print the first 20 titles

movies.sort(function(a,b){
  let sortTitle = (a.title < b.title) ? -1 : (a.title > b.title) ? 1 : 0;
  return sortTitle;
})

let sliceMovies = movies.slice(0, 20);

console.log(slicexMovies);


// Best yearly rate average

function getAverage(arr){
  let sum = 0;
  for( let i = 0; i < arr.length; i++ ){
      sum += parseFloat(arr[i]);
  }
  return (sum/arr.length).toFixed(2);
}

function yearCollector(){
  let yearCollection = {};
  for (item of movies){
    if (yearCollection[item.year] === undefined){
      yearCollection[item.year] = [parseFloat(item.rate)];
    } else {
      yearCollection[item.year].push(parseFloat(item.rate));
    }
  }
  console.log(yearCollection);

  let bestRate = 0;
  let bestYear = 0;
  for (let key in yearCollection){
    let currentRate = getAverage(yearCollection[key]);
    if (currentRate > bestRate){
      bestRate = currentRate;
      bestYear = key;
    } 
    console.log(`In the year ${key} the average rate was ${getAverage(yearCollection[key])}`);
  }
  console.log(`The best year for cinema is ${bestYear} with the rate of ${bestRate}`);
}

yearCollector();
