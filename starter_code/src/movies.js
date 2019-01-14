/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(arr) {
    let newArr = [];
    arr.forEach(function(item){
      item.duration = parseInt(item.duration.substring(0, 1)) * 60 + parseInt(item.duration.substring(3, 5));
      newArr.push(item);
    });
    return newArr;
  }
  console.log(turnHoursToMinutes(movies));
  // Get the average of all rates with 2 decimals 
  function ratesAverage(arr) {
    let newArr = [];
    let count = 0;
    arr.forEach(function(item){
      count += parseInt(item.rate);
      newArr.push(item);
    });
    return count / newArr.length;
  }

// Get the average of all rates with 2 decimals 


// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
