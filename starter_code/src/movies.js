/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes(arr) {
    return arr.map(function(movie) {
        var newMovie = Object.assign({}, movie);

        var durationArray = newMovie.duration.split(" ");

        if (durationArray.length === 2) {
            var hours = durationArray[0].replace("h","");
            hours = parseInt(hours) * 60;
            var minutes = durationArray[1].replace("min","");
            minutes = parseInt(minutes);

            newMovie.duration = hours + minutes;  

        } else if (durationArray[0].includes('h')) {
            var hours = durationArray[0].replace("h","");
            hours = parseInt(hours) * 60;
            newMovie.duration = hours;

        } else {
            var minutes = durationArray[0].replace("min","");
            minutes = parseInt(minutes);
            newMovie.duration = minutes;   

        }
        return newMovie;
    });
}

// Get the average of all rates with 2 decimals 

function ratesAverage(movies) {
    var rates = movies.reduce(function(acc, movie) {
        return acc += parseFloat(movie.rate);
    }, 0);

    return parseFloat((rates / movies.length).toFixed(2));
}

// Get the average of Drama Movies

function dramaMoviesRate(movies){
    var dramaFilms = []
  for (var i = 0; i < movies.length; i++){
    for (var j = 0; j < movies[i].genre.length; j++){
      if (movies[i].genre[j] === 'Drama'){
        dramaFilms.push(movies[i])
      }
    }
  }
  if (dramaFilms == 0){} else {return ratesAverage(dramaFilms);}
  }

// Order by time duration, in growing order

function orderByDuration (movies) {
    return movies.sort(function (movie1,movie2) {
        if (movie1.duration == movie2.duration){
            if(movie1.title < movie2.title) { 
                return -1; }
            if(movie1.title > movie2.title) { 
                return 1; }
            return 0;
        }else { 
        return  (movie1.duration - movie2.duration);
        }
    })
};

// How many movies did STEVEN SPIELBERG

function howManyMovies (movies) {
    if (movies.length !== 0) {
        var spielbergMovies =  movies.filter(function(movie) {
            return movie.director === 'Steven Spielberg' && movie.genre.indexOf('Drama') !== -1;
        });
        return 'Steven Spielberg directed ' + spielbergMovies.length + ' drama movies!';
    } else {
        return undefined;
    }
    
}; 

// Order by title and print the first 20 titles

function orderAlphabetically(movies) {
    return  movies.sort(function (movie1,movie2) {
            if(movie1.title > movie2.title) { 
                return -1; }
            if(movie1.title < movie2.title) { 
                return 1; }
            return 0;
    }).slice (0,20).map(function(movie) {
        return movie.title;
        })
};
// Best yearly rate average
