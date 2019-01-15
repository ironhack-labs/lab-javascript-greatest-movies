/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(movies) {
    return movies.map(function (movie) {
        var totalMinutes;
        var hours = 0;
        var minutes = 0;
        var durationSplit = movie.duration.split(" ");
        if (durationSplit.length > 1) {
            hours = durationSplit[0].split("h")[0];
            minutes = durationSplit[1].split("min")[0];
        } else if (durationSplit.length === 1 && durationSplit[0].indexOf("h") > 0) {
            hours = durationSplit[0].split("h")[0];
        } else if (durationSplit.length === 1 && durationSplit[0].indexOf("h") < 0) {
            minutes = durationSplit[0].split("min")[0];
        }

        minutes = parseInt(minutes, 10);
        hours = parseInt(hours, 10);
        totalMinutes = hours * 60 + minutes;

        var movieClone = Object.assign({}, movie); // make a clone of the `movie` object
        movieClone.duration = totalMinutes;

        return movieClone;
    });
}

// Get the average of all rates with 2 decimals 
function ratesAverage(movies){
    var average = movies.reduce(function(accumulator, movie){
        return accumulator + movie.rate;
    },0);
    var sumNumber = parseFloat(average);
    return Math.round((sumNumber / movies.length) * 100) / 100;
};

// Get the average of Drama Movies

function dramaMoviesRate(movies){
    var dramaArr = movies.filter(movie => movie.genre.includes("Drama"));

    if(dramaArr.length <= 0){
        return undefined;
    }

    var average = dramaArr.reduce(function(accumulator, movie){
        return accumulator + movie.rate;
    },0);
    var sumNumber = parseFloat(average);
    return Math.round((sumNumber / dramaArr.length) *100) / 100;
}

// Order by time duration, in growing order
function orderByDuration(movies){
    return movies.sort(function (a, b) {
        if (a.duration > b.duration) {
          return 1;
        }else if (a.duration < b.duration) {
          return -1;
        }else if(a.duration === b.duration){
            if(a.title > b.title){
                return 1;
            }else {
                return -1;
            }
        }
      });
      return movies;
    
}

// How many movies did STEVEN SPIELBERG
// I'm try to do that not using arrow function but i can't do it and it's late, but i really like to know how do it
function howManyMovies(movies){
    var films = movies.filter(movie => movie.director === 'Steven Spielberg' && movie.genre.includes("Drama"));
    return `Steven Spielberg directed ${films.length} drama movies!`;
}
// Order by title and print the first 20 titles
function orderAlphabetically(movies){
    
    var movTitle = movies.map(function(movie){
        return movie.title;
    });
    var movs = movTitle.sort(function (a, b) {
        if(a > b){
            return 1;
        }else if (a < b) {
          return -1;
        }else{
            return 0;
        }
    });
      if(movs.length > 20){
        return movs.slice(0, 20);
      } else {
          return movs;
      }
}

// Best yearly rate average
