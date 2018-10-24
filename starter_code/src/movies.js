/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 



var moviesInMinutes = movies.map(function(oneMovie){
    // RETURN the value for the new array//
    return oneMovie.duration * 60;
});

console.log(array);
console.log(doubleArray);








// Get the average of all rates with 2 decimals 

function ratesAverage(movies){
  var totalRates=  movies.reduce (function (sum, oneMovie){
return (sum + parseFloat(oneMovie.rate));
}, 0);
console.log(total)
return totalRates /movies.length;
}

console.log(ratesAverage(movies));




// Get the average of Drama Movies

// drama movies rate//




function dramaMoviesRate(movies){
    
    var dramaMoviesOnly = movies.filter(function(oneMovie){
        //RETURN the CONDITION that should test each item //
        return oneMovie.genre.includes("Drama");
    });


    var total=  dramaMoviesOnly.reduce (function (sum, oneMovie){
  return (sum + parseFloat(oneMovie.rate));
  }, 0);
        if (total===0 ){
            return undefined
        }


  
  return Math.round(total /dramaMoviesOnly.length * 100) / 100
  }
  
console.log(ratesAverage(dramaMovies));
  










// Order by time duration, in growing order





var orderByDuration = movies.sort(function(movieA, movieB){
if (movieA.duration < movieB.duration) {
return -999;
}
else {
    return 500;
}
});

console.log(orderByDuration);







// How many movies did STEVEN SPIELBERG

var howManyMovies = movies.filter(function(oneMovie){
    //RETURN the CONDITION that should test each item //
    return oneMovie.director.includes("Steven Spielberg");
    return howManyMovies.length
});
console.log(howManyMovies);











// Order by title and print the first 20 titles


var orderAlphabetically= movies.sort(function(movieA, movieB){

if (movieA.title < movieB.title) {
return -999;
}

else {

    return 500;
}
});

console.log(orderAlphabetically.slice(0,19));







// Best yearly rate average
