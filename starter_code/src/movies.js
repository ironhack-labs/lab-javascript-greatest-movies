/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 


// Get the average of all rates with 2 decimals 

function ratesAverage(myArray) {
  var totalAverage = 
  myArray.reduce(function (acc, oneNumber) {
    return (acc + oneNumber.rate) ;
  }, 0);
  var average = totalAverage / myArray.length ; 
  return average;
}

// Erreur Paul - to not consider
// movies.reduce(function ratesAverage (acc, oneNumber) {
//   return (acc + oneNumber.rate) /   oneNumber.length;
// }, 0);


// Get the average of Drama Movies


var dramaOk =
movies.filter(function(film) {
  return film.genre.indexOf('Drama') != -1;
})

var dramaRatesAverage = dramaOk.reduce(function(sum, note){
  return sum + note.rate;
}, 0);

console.log(dramaRatesAverage);






// movies.forEach(function(film){
//   film.forEach(function (genre){
//     if genre = "Drama" {
//       return true;}})
//   if function (genre) {
//     return film.rate;
//   }
//     }
//   })
// })

// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
