/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes (arr) {
  var toMinutes = arr.map(function(movie) {
   
    if (movie.duration.charAt(1) === "h") { 
      var minutes = movie.duration.charAt(0) * 60;
      var lastMin = movie.duration.charAt(3) + movie.duration.charAt(4);
    }
    else {
      var minutes = 0;
      var lastMin = movie.duration.charAt(0) + movie.duration.charAt(1);
    };
   
   
   return {
   title: movie.title,
   year: movie.year,
   director: movie.director,  
   duration: Number(minutes) + Number(lastMin),
   genre: movie.genre,
   rate: movie.rate
   }  
 })
 
 return toMinutes;
 console.log(toMinutes);
 };
 
 turnHoursToMinutes(movies);

// Get the average of all rates with 2 decimals 

function ratesAverage (rate) {
  var totalRates = rate.reduce(function(sum,movie){
    var rates = Number(movie.rate)
    return sum + rates;
  }, 0);
  
  var averageRates = Math.round((totalRates / rate.length)*100)/100;
  return averageRates;
  console.log(averageRates);
  }

// Get the average of Drama Movies
function dramaMoviesRate (drate) {

  var Drama = drate.filter(function(movie){
  return movie.genre == 'Drama';
});

  var totalRates = Drama.reduce(function(sum,movie){
  var rates = Number(movie.rate)
  return sum + rates;
}, 0);

var averageRates = Math.round((totalRates / Drama.length)*100)/100;
if (isNaN(averageRates) === true) {
  return undefined;
}
else {
return averageRates;
console.log(averageRates);
}
}
dramaMoviesRate(movies);


// Order by time duration, in growing order
function orderByDuration (arr) {

  if (typeof(arr[0].duration) === "string") {
    var order = turnHoursToMinutes(arr);
    order.sort(function(a,b) {
      if (a.duration === b.duration) {
        return a.title > b.title;
      }
      return a.duration - b.duration;
  });   
} 
  else if (typeof(arr[0].duration) === "number") {
    var order = arr;
    order.sort(function(a,b) {
      if (a.duration === b.duration) {
        return a.title > b.title;
      }
      return a.duration - b.duration;
  });
 }
 return order;
  console.log(order);
} 

// How many movies did STEVEN SPIELBERG
function howManyMovies (dramaSpielberg) {

  var dramaSp = dramaSpielberg.filter(function(movie){
      
      return movie.genre.includes('Drama') && movie.director === 'Steven Spielberg';
      
    });
  
  if (dramaSpielberg[0] === undefined) {
    
    return undefined;
    
  }   
  
  else {
    
  return ("Steven Spielberg directed " + dramaSp.length + " drama movies!");
    
    }    
  
}

howManyMovies(movies);

// Order by title and print the first 20 titles
function orderAlphabetically (arr) {
    
  var ordered = []
  var first = []
    
  arr.forEach(function(movie) {
    ordered.push(movie.title);
  });
  
    
  ordered.sort(function(a,b) {  
    if (a < b) {
      return -1;
    }
    if (a > b) { 
      return 1;
    }
        return 0;
  });   
  
  for (picture = 0; picture < 20; picture++) {
    if (ordered[picture] === undefined) {
      break;
    }
    first.push(ordered[picture]);
}
  return first;
} 
 
orderAlphabetically(movies);

// Best yearly rate average
/*function bestYearAvg (arr) {
  var listYear = []
  
  arr.forEach(function(movie) {
      listYear.push(movie.year);
    });
  
  if (listYear[0] === )
  var year = [];
  
  for (y = 0; y < listYear.length; y++) {
    
     year[y] = arr.filter(function(movie) {
     return movie.year === listYear[y];
});
}
  var totalRate = year.reduce(function(sum,pict){
  var rate = Number(pict.rate)
  return sum + rate;
}, 0);
  
  var averageRates = Math.round((totalRate / year.length)*100)/100;
  
  console.log(year);
   console.log ("The best year was " + 2007 + " with an average rate of " + averageRates);
}

bestYearAvg ([{ year: '2007', rate: 8 }, { year: '2009', rate: 10 }, { year: '2008', rate: 9 },{ year: '2007', rate: 7 }])*/