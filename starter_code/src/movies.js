/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(movie){
  var newMovies = [];
for(let i=0; i<movie.length; i++) {
  var hours = movie[i].duration.split('h')[0];
    if(isNaN(hours)){
      hours=0;
    }
  var min = Number(movie[i].duration.split(' ').pop().split('m')[0]);
    if(isNaN(min)){
      min=0;
    }
  var minutes=(hours*60)+min
   newMovies.push({
                    title: movie[i].title,
                    year: movie[i].year,
                    director: movie[i].director,
                    duration: minutes,
                    genre: movie[i].genre,
                    rate: movie[i].rate
                    });
  }
  return newMovies;
  console.log(newMovies);
}


// Get the average of all rates with 2 decimals 

function ratesAverage(movie){
  var allRatings = [];
  for(let i=0; i<movie.length; i++){
    allRatings.push(Number(movie[i].rate));
    }  
    var sum = allRatings.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
  }, 0);
  return Number(parseFloat(sum/movie.length).toFixed(2));
}

ratesAverage(movies)

// Get the average of Drama Movies
function dramaMoviesRate(movie){
  var dramaMovies = [];
  for(let i=0; i<movie.length; i++){
    for(let n=0; n<movie[i].genre.length; n++) {
      if (movie[i].genre[n] == 'Drama') {
        dramaMovies.push(movie[i])
      }
    }
  }
  if(isNaN(ratesAverage(dramaMovies))){
    return undefined;
  }
  else{
      return ratesAverage(dramaMovies)
  }
}
dramaMoviesRate(movies)

// Order by time duration, in growing order
function orderByDuration (movies) {
  movies.sort(function (movieA, movieB) {
    var result = movieA.duration - movieB.duration;
    if (result !== 0) {
      return result;
    }

    if (movieA.title < movieB.title) {
      return -1;
    }

    if (movieA.title > movieB.title) {
      return 1;
    }

    return 0;
  });

  return movies;
}

// How many movies did STEVEN SPIELBERG

function howManyMovies(movie) {
  var dramaMovies = movie.filter(function(drama) {
    return drama.genre.includes('Drama');
  })
  if (dramaMovies<1){
    return undefined;
  }
  var spielbergDrama = dramaMovies.filter(function(spielberg) {
    return spielberg.director.includes('Steven Spielberg');
  })
  return `Steven Spielberg directed ${spielbergDrama.length} drama movies!`
}
howManyMovies(movies);
// Order by title and print the first 20 titles
function orderAlphabetically(movie){
  var titles= [];
  for(i=0; i<movie.length; i++){
    titles.push(movie[i].title)
  } 
 
   titles.sort(function(a, b){
     if(a< b) { return -1; }
     if(a > b) { return 1; }
     return 0;
   })
   if (titles.length > 20) {
     return titles.slice(0,20);
   }  
   else {
     return titles;
   }
 }
 orderAlphabetically(movies)
// Best yearly rate average
