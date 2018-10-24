/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

// Get the average of all rates with 2 decimals 
function ratesAverage(movies){
  var totalRates = 
  movies.reduce(function(acc,elem){
    return acc += parseFloat(elem.rate);
  },0)
  return Math.round(totalRates/(movies.length)*100)/100
}
ratesAverage(movies)

// Get the average of Drama Movies

function dramaMoviesRate(movies){
    var dramaMovie = 
    movies.filter(function(oneMovie){
    return ((oneMovie.genre.indexOf("Drama")) > -1);
  })
    return ratesAverage(dramaMovie);
  }
  dramaMoviesRate(movies)

// Order by time duration, in growing order

function compare(a,b) {
  if (a.title < b.title)
    return -1;
  if (a.title > b.title)
    return 1;
  return 0;
}

movies.sort(compare);

// How many movies did STEVEN SPIELBERG

function howManyMovies(movies){
  if (movies.length !== 0){

 
  var dramaMovieSpielberg = 
  movies.filter(function(oneMovie){
  return ((oneMovie.director=="Steven Spielberg")&&((oneMovie.genre.indexOf("Drama")) > -1));
})
if (dramaMovieSpielberg.length == 0) {
  return "Steven Spielberg directed 0 drama movies!"
}
else if (dramaMovieSpielberg.length == 1){
  return "Steven Spielberg directed 1 drama movies!"
}
else{
  return "Steven Spielberg directed " + dramaMovieSpielberg.length + " drama movies!"
}
 }
}
howManyMovies(movies)

// Order by title and print the first 20 titles
function orderAlphabetically(movies){
  var topMovies = movies
topMovies.sort(compare).splice(20)

var first20movies = [];
movies.forEach(function(oneMovie){
  first20movies.push(oneMovie.title);
})
return first20movies
}

orderAlphabetically(movies)


// Best yearly rate average
function bestYearAvg(movies){
  var years = [];
  movies.forEach(function(oneMovie){
    if((years.indexOf(oneMovie.year) == -1)){
    years.push(oneMovie.year)
    }
    return years.sort()
  })
  
  averagePerYears =[];
  years.forEach(function(oneYear){
    var averageFor1Year = 
    movies.filter(function(oneMovie){
      return ((oneMovie.year == oneYear))
    })
    averagePerYears.push(parseFloat(ratesAverage(averageFor1Year)))
  })
  
  var bestAverage = Math.max.apply(Math, averagePerYears);
  
  indexBestYear = averagePerYears.indexOf(bestAverage);
  
  console.log(years[indexBestYear]);
  }
  
  bestYearAvg(movies);