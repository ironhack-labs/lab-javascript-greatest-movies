/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(arr){ 
  return arr.map(function(e,i,a){
    if (e.duration.split(" ").length > 1) {
      return {duration: +e.duration.split(" ")[0].slice(0,1)*60 + +e.duration.split(" ")[1].replace(/min/g,"")}
    } 
    else if (e.duration.split(" ").length == 1 && e.duration.includes("h")) {
      return {duration: +e.duration.split(" ")[0].slice(0,1)*60}
    }
    else {
      return {duration: +e.duration.replace(/min/g,"")}
    }
  });
};

// Get the average of all rates with 2 decimals 
function ratesAverage(arr){ 
  var total = arr.reduce(function(accumulator, current){
    return accumulator + parseInt(current.rate) / arr.length;
  },0);
  return Math.round(total * 100)/100;  
};

// Get the average of Drama Movies
function dramaMoviesRate(arr){
  for(var i = 0; i < arr.length; i++){
    arr.filter(function(e){
      console.log(e.genre);
      return(e.genre);
    });
  }
 
}

// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
