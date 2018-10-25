/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes(arr){
    return minuteArr = arr.map(function(obj){
      var durationMins = 0;
    if(obj.duration.indexOf("h") === -1){
      durationMins = +parseInt(obj.duration);
    }
    else if(obj.duration.indexOf("min") === -1){
      durationMins = +parseInt(obj.duration)*60;
    }else{
      var hourToMins = obj.duration.split(" ");
      durationMins = +hourToMins[0].replace('h','') * 60 + +hourToMins[1].replace('min','');
    }
    
    return Object.assign({},obj, {duration: +durationMins});
    })
  }


// Get the average of all rates with 2 decimals 
function ratesAverage(arr){
    var rateSum = arr.reduce(function(acumulator, current){
        return acumulator + parseInt(current.rate);
    }, 0);
    var average = (rateSum/arr.length);
    return average;
}

// Get the average of Drama Movies
function dramaMoviesrate(arr){
    
}

// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
