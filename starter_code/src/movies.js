/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(array) {
  var result= array.slice(0).map(function(elmt){
      var minutes = 0;
      var elmtcpy = Object.assign({}, elmt)
      if(typeof(elmtcpy.duration) === 'number')
          return elmtcpy;
      var parsedString = (elmtcpy.duration.indexOf('h') !== -1) ? elmtcpy.duration.split('h') : ['0',elmtcpy.duration];
      parsedString[0]= parseInt(parsedString[0]) * 60;
      if (parsedString[1]) {
          parsedString[1]= parseInt(parsedString[1]);
          elmtcpy.duration = parsedString[0] + parsedString[1];
      } else {
          elmtcpy.duration = parsedString[0];
      }
      return elmtcpy
  })
  return result;
}

// Get the average of all rates with 2 decimals
function ratesAverage (array){
var arrayGrades=[];
for (var i=0;i<array.length;i++){
  var temp=arrayGrades.push(parseFloat(array[i].rate));
}

var total = arrayGrades.reduce(function(accumulator, current){
  return accumulator + current;
}, 0);

return Math.round((total/array.length)*100)/100
}


// Get the average of Drama Movies
function dramaMoviesRate(array){
  var arrayGradesDrama=[];
  for (var i=0;i<array.length;i++){
    for (var j=0;j<array[i].genre.length;j++)
    if (array[i].genre[j]==='Drama'){
      arrayGradesDrama.push(parseFloat(array[i].rate))
    }
  }
  
  var total = arrayGradesDrama.reduce(function(accumulator, current){
    return accumulator + current;
  }, 0);
  
  return Math.round((total/array.length)*100)/100
  }




// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
