/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes(arr){
  var newArray = arr.map(function(element){
    var newElement = Object.assign({},element);
    
    var timeArr = element.duration.split(" ");

    var timeArrNum = timeArr.map(function(cad){
      if (cad.endsWith('h')) {
        cad = cad.substring(0,(cad.length-1));
        return parseInt(cad) * 60;
      }
      if (cad.endsWith('min')) {
        cad = cad.substring(0,(cad.length-3));
        return parseInt(cad);
      } 
    });

    var timeMinutes = timeArrNum.reduce(function(accumulator,number){
      return accumulator + number;
    },0);

    newElement.duration = timeMinutes;
    
    return newElement;
  });
  
 return newArray;
}


// Get the average of all rates with 2 decimals 

function ratesAverage(array){
  return prueba;
} 

// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
