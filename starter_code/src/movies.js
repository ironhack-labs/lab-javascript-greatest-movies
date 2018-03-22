/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minute


// Get the average of all rates with 2 decimals 
function ratesAverage(movies)
{var sumRates = movies.reduce(function(sum, movie){
  var temp = parseFloat(movie.rate);
  return sum + temp;
}, 0);
return Math.floor((sumRates/movies.length)*100)/100;
}

ratesAverage(movies);

// Get the average of Drama Movies
var drama = [];
movies.filter(function(movie){
  if (movie.genre == "Drama"){
      drama.push(movie);
  }
})
function dramaMoviesRate(drama){
 var dramaAverage = ratesAverage(drama);
 console.log(" the average drama movies rate is " + dramaAverage );
}


// Order by time duration, in growing order




// How many movies did STEVEN SPIELBERG
var dramaSteven= [];
function howManyMovies(movie){
  movies.filter(function(movie){
    if (movie.director == "Steven Spielberg"){
        dramaSteven.push(movie);
    }
  })
}
 howManyMovies(drama);
 console.log(dramaSteven);

// Order by title and print the first 20 titles
function orderAlphabetically(movie){
  movie.sort(function(a, b){
    if (a.title < b.title){
        return -1;
    }

    if (a.title > b.title){
        return 1;
    }

    return 0;
});
}

orderAlphabetically(movies);
var movies20 = []
for (var i =0; i<20; i++){
  movies20.push(movies[i]);
}
console.log(movies20);
// Best yearly rate average
