/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 


// Get the average of all rates with 2 decimals 
function ratesAverage(){
  var rate = [];
 movies.forEach(function (oneMovie){
  rate.push(oneMovie.rate);
 });
 
 var total =
 rate.reduce(function (sum, oneRate){
   return sum + parseFloat(oneRate);
 }, 0);
 
 var average = Number((total / 250).toFixed(2));
 
 return average;
 };
 
 ratesAverage(movies);
 

// Get the average of Drama Movies
var drama = 
  movies.filter(function (movies) {
  return movies.genre.includes('Drama');
  });

function dramaMoviesRate(){
var dramaRate = [];
drama.forEach(function (oneMovie){
 dramaRate.push(oneMovie.rate);
});

var totalDrama =
dramaRate.reduce(function (sum, oneRate){
  return sum + parseFloat(oneRate);
}, 0);

var averageDrama = Number((totalDrama / drama.length).toFixed(2));

return averageDrama;

};

dramaMoviesRate(drama);

// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles
var moviesTitle = 
movies.sort(function (a, b){
    if (a.title > b.title){
        return -1;
    }

    if (a.title < b.title){
        return 1;
    }

    return 0;
});

moviesTitle.push(movies.reverse());

moviesTitle.splice(20, moviesTitle.length);

console.log(moviesTitle);

var first20 = [];
function orderAlphabetically(oneMovie){
  oneMovie.forEach(function (oneMovie){
  first20.push(oneMovie.title);
});
  console.log(first20);
};

orderAlphabetically(moviesTitle);

// Drama by Steven Spielberg

function howManyMovies (moviesList){
  if(moviesList.length === 0){
    return undefined;
  } else {
  var spDrama =
  moviesList.filter(function (oneMovie) {
  return oneMovie.director.includes("Steven Spielberg") && oneMovie.genre.includes('Drama');
  });
};
return "Steven Spielberg directed " + spDrama.length + " drama movies!";  
};

howManyMovies(movies);

// Best yearly rate average
