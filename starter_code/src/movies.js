/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes (movies) {
  
    var newMovies = movies.map(function(movie){
    var newDuration;
    if (movie.duration.includes("h")===false) newDuration=parseInt(movie.duration);
    else if (movie.duration.includes("h")===true && movie.duration.includes("min")===false) newDuration=parseInt(movie.duration)*60;
    else{
    var space= "h ";
    var splittedDuration = movie.duration.split(space);
    var hours = splittedDuration[0];
    var minutes = splittedDuration[1];
    newDuration = parseInt(hours) * 60 + parseInt(minutes);}
return {
    title: movie.title,
    year: movie.year,
    director: movie.director,
    duration: newDuration,
    genre: movie.genre,
    rate: movie.rate
    }
    });

    return newMovies;
}

// Get the average of all rates with 2 decimals 

function ratesAverage(movies){
   var filterMovies = movies.filter(function(movie){
       return movie.rate;
   });

    var totalRate = filterMovies.reduce(function(sum, movie){
    return sum + parseFloat(movie.rate);
    }, 0);

    var averageRate = totalRate/filterMovies.length;
    return averageRate.toFixed(2);
}

console.log("The average rate of all movies is: " + ratesAverage(movies));

// Get the average of Drama Movies

function dramaMoviesRate(movies){
    var filterMoviesDrama = movies.filter(function(movie){
        return (movie.genre.includes("Drama") && movie.rate);
    });

    var totalRateDrama = filterMoviesDrama.reduce(function(sum, movie){
        return sum + parseFloat(movie.rate);
        }, 0);
    
    var averageRateDrama = totalRateDrama/filterMoviesDrama.length;
    return averageRateDrama.toFixed(2);
}

console.log("The average rate of  Drama movies is: " + dramaMoviesRate(movies));

// Order by time duration, in growing order

function orderByDuration (movies) {
    var newMovies=turnHoursToMinutes(movies);
    return newMovies.sort(function(a, b){
        if (a.duration > b.duration) return 1;
        else if (a.duration < b.duration) return -1;
        else {
            if(a.title <= b.title) return -1;
            else return 1;
        }
    });
}

// How many movies did STEVEN SPIELBERG

function howManyMovies (movies) {
    var SpielbergMovies = movies.filter(function(movie){
        return movie.director === 'Steven Spielberg';
    });
    return SpielbergMovies;
}

console.log (howManyMovies (movies).lenght);


// Order by title and print the first 20 titles

function orderAlphabetically(movies) {
    movies.sort(function (a, b) {
      return a.title < b.title ? -1 : 1;
    });
    var top20Movies = [];
    var limit = 20;
    if (movies.length < 20) {
      limit = movies.length;
    }
    for (var i = 0; i < limit; i++) {
      top20Movies.push(movies[i].title);
    }
    return top20Movies;
  }
  
  console.log(orderAlphabetically(movies));
// Best yearly rate average
