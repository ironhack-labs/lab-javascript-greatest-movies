/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes
function turnHoursToMinutes(array) {
  var result = array.slice(0).map(function(elmt) {
    var minutes = 0;
    var elmtcpy = Object.assign({}, elmt);
    if (typeof elmtcpy.duration === "number") return elmtcpy;
    var parsedString =
      elmtcpy.duration.indexOf("h") !== -1
        ? elmtcpy.duration.split("h")
        : ["0", elmtcpy.duration];
    parsedString[0] = parseInt(parsedString[0]) * 60;
    if (parsedString[1]) {
      parsedString[1] = parseInt(parsedString[1]);
      elmtcpy.duration = parsedString[0] + parsedString[1];
    } else {
      elmtcpy.duration = parsedString[0];
    }
    return elmtcpy;
  });
  return result;
}

// Get the average of all rates with 2 decimals
function ratesAverage(array) {
  var arrayGrades = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i].rate===''){array[i].rate='0'}
    arrayGrades.push(parseFloat(array[i].rate));
  }

  var total = arrayGrades.reduce(function(accumulator, current) {
    return accumulator + current;
  }, 0);

  return Math.round((total / array.length) * 100) / 100;
}

// Get the average of Drama Movies
function dramaMoviesRate(array) {
  var arrayDrama = array.filter(function(number) {
    return number.genre.includes("Drama");
  });

var averageDrama=ratesAverage(arrayDrama)

  return arrayDrama.length===0 ? undefined : averageDrama
}

// Order by time duration, in growing order
function orderByDuration(array){
var arrayduration=turnHoursToMinutes(array);

function compare(a,b) {
  if (a.duration < b.duration){
    return -1;}
  if (a.duration> b.duration){
    return 1;}

  if (a.duration===b.duration){
      if(a.title < b.title) return -1;
      if(a.title > b.title) return 1;
      return 0;}
}

return arrayduration.sort(compare);



}



// How many movies did STEVEN SPIELBERG

// Order by title and print the first 20 titles

// Best yearly rate average
