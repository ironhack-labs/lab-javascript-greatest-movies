/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(movies){
    return movies.map(function(movie){
        var newMovie=Object.assign({},movie);
        var duration = newMovie.duration;
        var totalTime = 0;
        var m ;
        var h;

        if(duration.indexOf('h') !== -1 && duration.indexOf('min') !== -1){
            duration = duration.replace("h",'');
            h = number(duration.split(' ')[0]);
            duration = duration.replace("min",'');
            m = number(duration.split(' ')[1]);
            totalTime = h * 60 + m;
            newMovie.duration = totalTime;
        }else if (duration.indexOf('h') !==-1){
            duration = duration.replace("h",' ');
            h = number(duration);
            totalTime = h * 60;
            newMovie.duration = totalTime;
        }else{
            duration = duration.replace("min", ' ');
            m = number(duration);
            totalTime = m;
            newMovie.duration = totalTime;
        }
return newMovie;
    });
}
turnHoursToMinutes(movies);
// Get the average of all rates with 2 decimals 
function ratesAverage(array){
    return array.reduce(function(acc , movie,index,movies){
       var rateAverage = acc + number(movie.rate)/ movies.length;
       var rateAverageRounded = Math.round(rateAverage * 100) / 100;
       return rateAverageRounded; 
    },0);
}
ratesAverage(movies);
// Get the average of Drama Movies
function dramaMoviesRate(array){
    return array.filter(function( movie){
        return movie.genre.indexOf("Drama") !==-1;
    }).reduce (function( acc ,movie,index,movies){
        if (movies.length === 0){
            return undifined;
        }else{
            var dramaRateAverage = acc + number(movie.rate) / movies.length;
            var rateAverageRounded = Math.round(dramaRateAverage * 100) / 100;
            return rateAverageRounded 
        }
        dramaMoviesRate(movies);

// Order by time duration, in growing order
function orderByDuration(array){
    return array.sort(function(a,b){
        if(a.duration === b.duration){
            if(a.title<b.title){
                return -1;
            }else if (a.title>b.title){
                return 1;
            }
        }  return a.duration - b.duration;            
});
orderByDuration (turnHoursToMinutes(movies));
// How many movies did STEVEN SPIELBERG
function howManyMovies(array){
    if(array.length ===0){
        return undefined;
    }
    var films = array.filter(function(movie){
        return movie.genre.indexOf("Drama") !== -1 && movie.director.indexOf("Steven Spielberg") !== -1;
    });
    return "Steven Spielberg directed" + films.length + "drama movies!";
}
howManyMovies(movies);
// Order by title and print the first 20 titles
function orderAlphabetically(array){
    return array.sort(function (a , b){
        if(a.title < b.title){
            return -1;
        }else if (a.title>b.title){
            return 1;
        }
    }).map(function (movie){
        return movie.title;
    }).slice(0 , 20);
}
orderAlphabetically(movies);
// Best yearly rate average
