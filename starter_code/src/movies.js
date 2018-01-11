/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes(array) {
  var long;
  return array.map(function(e) {
    if(e.duration.length < 3){
      long = parseInt(e.duration.slice(0,1) * 60);
      return Object.assign({}, e, { duration: long });
    } else if (e.duration.length < 6){
      long = parseInt(e.duration.slice(0,2));
      return Object.assign({}, e, { duration: long });
    } else {
      long = parseInt(e.duration.slice(0,1) * 60) + parseInt(e.duration.slice(3,-3));
      return Object.assign({}, e, { duration: long });
    }
  })
}

console.log(turnHoursToMinutes(movies))

// Get the average of all rates with 2 decimals 

function ratesAverage(a){

  
  var allRates = a.map(function(movie){
    return movie.rate;
  });
  
  allRates = allRates.reduce(function(acc,e,i){
    return e/a.length + acc;
  },0)
  
  
  if(allRates.toString().indexOf(".") > -1){
    allRates = allRates.toFixed(2);
  }
  return parseFloat(allRates);
}


// function ratesAverage(a){
  
//   var allRates = a.map(function(movie){
//     return movie.rate;
//   });
  
//   allRates = allRates.reduce(function(acc,e,i){
//     return e/a.length + acc;
//   },0)
  
  
//   if(allRates.toString().indexOf(".") > -1){
//     allRates = allRates.toFixed(2);
//   }

//   return parseInt(allRates);
// }

// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
