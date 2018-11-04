/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
 
function turnHoursToMinutes(array) {
 var newArray = []; 

  newArray = array.map(function (elem) {
    var newElem = Object.assign({}, el);
    if(newElem.duration.search('h') < 0){
        newElem.duration = newElem.duration.replace('min','');
       
    }else{
        var newDuration = newElem.duration.replace('h','').replace('min','').split(' ');
        newElem.duration = ((Number(newDuration[0])* 60) + Number(newDuration[1])).toString();
    }
  });

  return newArray;
}


// Get the average of all rates with 2 decimals 

function ratesAverage(array) {



}



// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
