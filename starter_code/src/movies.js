/* eslint no-restricted-globals: 'off' */



// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(array){
  var arr = array.map(function(e) {
     var a = parseInt(e.duration[0])
       var sum = 0;
       if(e.duration[4] == "m") {
         sum = a*60 + parseInt(e.duration[3]);
       } else {
         sum = a*60 + parseInt(e.duration[3])*10 + parseInt(e.duration[4]);
       }
    //e.duration = sum;
    return {duration: sum};    
  })
  return arr;
}

// Get the average of all rates with 2 decimals 
function ratesAverage(array) {
  var average = array.reduce(function(accumulator, e){
    if(e.rate != "") { 
    var n = parseFloat(e.rate);
    return accumulator + (n/array.length);} else {
      return 0;
    }
  },0);
  return parseFloat(average.toFixed(2));
}

// Get the average of Drama Movies

function dramaMoviesRate (array) {
  if (array.length == 0) {
  return 0;
  } else {
  var f = array.filter(function(e){
    return ((e.genre.indexOf("Drama") !=-1))
  });
  }
  if(f.length == 0) {
    return undefined;
  } else {
    return ratesAverage(f);
  }
}



// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG
function howManyMovies(array) {
  if(array.length == 0) {
    return undefined;
  } else {
  var f = array.filter(function(e){
    return ((e.genre.indexOf("Drama") !=-1) && (e.director == "Steven Spielberg"))
  });
  return("Steven Spielberg directed " + f.length + " drama movies!");
  }
}

// Order by title and print the first 20 titles
function orderAlphabetically(array) {
  var tit = [];
  if(array.length >= 20) {
  for (var i = 0; i < array.length; i++) {
    tit.push(array[i].title);
  }
  var z = tit.sort().slice(0, 20);
  for (var i= 0; i < z.length; i++) {
    z[i] = {title: z[i]};
  }
  } else {
    for (var i = 0; i < array.length; i++) {
    tit.push(array[i].title);
  }
  var z = tit.sort().slice(0, array.length);
  /*for (var i= 0; i < z.length; i++) {
    z[i] = {title: z[i]};
  }
  */
  }
  return z;
}

// Best yearly rate average
