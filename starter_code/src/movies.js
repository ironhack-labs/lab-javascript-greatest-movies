/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes (array) {
    var findMinutes = array.map(function (movie) {
      var copyMovie = Object.assign({}, movie);
      var horasEnMinutos = 0;
      var minutos = 0;
      if (copyMovie.duration.indexOf('h') > -1) {
        horasEnMinutos += copyMovie.duration[0]*60;
      }
      if (copyMovie.duration.indexOf('min') > -1) {
        if (copyMovie.duration.indexOf('h') > -1) {
          minutos += copyMovie.duration.substring(3, (copyMovie.duration.length-3));
        } else {
          minutos += copyMovie.duration.substring(0, (copyMovie.duration.length-3));
        }
      }
        var totalMinutes = Number(horasEnMinutos) + Number(minutos);
        copyMovie.duration = totalMinutes;
        return copyMovie;
    });
    return findMinutes;
}   

// Get the average of all rates with 2 decimals 
function ratesAverage(array){
    var sum = array.reduce(function(acc, currentValue){
        return acc += currentValue.rate
    }, 0);
    return sum/array.length
}

// Get the average of Drama Movies
function dramaMoviesRate(array){
        var dramaMovies = array.filter(function(movie){
            return movie.genre.find(function(sinGen){
                return sinGen === "Drama"
        });
    });
    if(!dramaMovies.length){
        return undefined;
    }
    else{
        return Math.round(ratesAverage(dramaMovies) * 100)/100;
    }
};


// Order by time duration, in growing order
function orderByDuration(array){
    array.sort(function(a,b){
        if(a.duration === b.duration){
            array.sort(function(a,b){
                if(a.title < b.title){
                    return 1;
                }
            }) 
        }
        return a.duration - b.duration
    });
    return array;
}

// How many movies did STEVEN SPIELBERG
function howManyMovies(array){
    if (!array.length){
        return undefined;
    }
    var dramamov = array.filter(function(dramas){
        return dramas.genre.find(function(drama){
            return drama === "Drama";
        });
    });
    var dramasOfSpielberg = dramamov.filter(function(movsofspi){
        return movsofspi.director === "Steven Spielberg";
    });
    var total = "Steven Spielberg directed " + dramasOfSpielberg.length + " drama movies!"
        return total;
    //Me iluminé (ni siquiera recordaba por qué había hecho el map) :D
};

// Order by title and print the first 20 titles
function orderAlphabetically(array){
    var movieTitles = array.map(function(titles){
        return titles.title;
    }).sort();
    var AlphOrder =[]
    if(movieTitles.length < 20){
        for(var i = 0; i < movieTitles.length;i++){
            AlphOrder.push(movieTitles[i]);
        }
    }else{
        for(var i = 0; i < 20;i++){
        AlphOrder.push(movieTitles[i]);
        }
    }
    return AlphOrder
}

// Best yearly rate average
