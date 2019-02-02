/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes
function turnHoursToMinutes (arr) {
  var min = 0;
  var newArr = arr.map(function(elem){
    var duration = elem.duration
   if(duration.length == 2){
       min = parseInt(duration.slice(0 ,1) * 60);
    } 
    if (duration.length == 5) {
       min = parseInt(duration.slice(0, 2));
    } 
    if(duration.length == 8) {
       min =  parseInt(duration) * 60 + parseInt(duration.slice(2, 5)); //no entendemos
    }
   
    return Object.assign({}, elem, {duration:min});   

  })
  return newArr;
}
function ratesAverage (arr) {
  var NewRate = arr.reduce(function(sum, current){
   return sum + parseInt(current.rate) ;
  }, 0) / arr.length
  return NewRate;
}
function dramaMoviesRate (arr) {
  console.log(arr)
  var genRate = [];
  var dramaArr = arr.map(function(elem){
    var dramaMovie = elem.genre;
    var hasDrama = dramaMovie.find(function(gen) {
      return gen == "Drama";
    })
    if (hasDrama != undefined) {
      var rateDrama = elem.rate;
      if( elem.rate){
        genRate.push(parseInt(rateDrama));
      } else {
        genRate.push(0);
      }
      return rateDrama;
    } else {
      return 0;
    }
  });
  var final = genRate.reduce(function(sum, current) {
    return sum + current;
  }) / genRate.length;
  console.log(final)
  return final;

}

// Get the average of all rates with 2 decimals 


// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
