/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
  function turnHoursToMinutes(arr){
   let newArr = arr.map(function(val){

    if(val.duration.length > 3) {

      let hrArr = val.duration.split('');
      let hr = parseInt(hrArr[0]) * 60;
      let minArr = hrArr.join('').split(' ');
      let min = parseInt(minArr[1]);
      let sum = hr + min;
      val.duration = sum;
      console.log(val)
      return val;

    } else {
        return val
    }
   }); 
   
   return newArr
  }

// Get the average of all rates with 2 decimals 

function ratesAverage(arr){
  var sum = arr.map(function(val){
    return val.rate;
  }).reduce(function(acc, val){
    return acc + val;
  });

  return sum / arr.length;
}
// Get the average of Drama Movies
function dramaMoviesRate(arr){
  var sum = arr.filter(function(val, i){
    return val.genre.includes("Drama")
  }).map(function(val){
    return val.rate;
  }).reduce(function(acc, val){
    return acc + val;
  });

  return sum / arr.length;
}


// Order by time duration, in growing order

function orderByDuration(arr){
  return arr.sort(function(a, b){
    
    return a.year - b.year;
  })
}


// How many movies did STEVEN SPIELBERG

function howManyMovies(arr){
  if(arr === 0){
    return undefined;
  } 
    let newArr = arr.filter(function(val){
      return val.genre[0] === "Drama" && val.director === "Steven Spielberg" && val.genre.length == 1;
    });

      console.log(newArr.length)
    
      return `Steven Spielberg directed ${newArr.length} drama movies`
 }



// Order by title and print the first 20 titles


// Best yearly rate average

