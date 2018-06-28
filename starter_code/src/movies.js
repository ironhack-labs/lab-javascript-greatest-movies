/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
 function turnHoursToMinutes(movies){
     var newMovies = movies.map(function(movie){
        var time = movie.duration;
        var acc = '';
        var durationMin = 0;
        for (var i = 0; i < time.length; i++){
            if (time[i] === 'h'){
                durationMin += parseInt(acc)*60;
                acc = '';
            } else if (time[i] === ' '){
                continue;
            } else if (time[i] === 'm'){
                durationMin += parseInt(acc)
                break;
            } else {
                acc += time[i];
            }
        }
        movie.duration = durationMin;
        return movie;
     });
     return newMovies;
 }


// Get the average of all rates with 2 decimals 
function ratesAverage(movies){
    var avgRate = movies.reduce(function(accumulator, current){
        return accumulator + parseFloat(current.rate);
    }, 0);
    return parseFloat(avgRate/movies.length.toFixed(2));
}

// Get the average of Drama Movies
function dramaMoviesRate(movies){
    var average;
    var drama = movies.filter(function(movie){
        return movie.genre.includes('Drama');
    })
    if (movies.length > 0 && drama.length > 0){
        average = parseFloat(ratesAverage(drama).toFixed(2));
    }
    return average;
}


// Order by time duration, in growing order
function orderByDuration(movies){
    movies.sort(function(a,b) {
        if (a.duration > b.duration){
            return 1;
        } else if (a.duration < b.duration){
            return -1;
        } else {
            if (a.name > b.name){
                return -1;
            } else {
                return 1;
            }
        }
      });
      return movies;
}

// How many movies did STEVEN SPIELBERG
function howManyMovies(movies){
    var str;
    var moviesSS = movies.filter(function(movie){
        return movie.director === 'Steven Spielberg' && movie.genre.includes('Drama');
    });
    if (movies.length > 0){
        if (moviesSS.length === 0){
            str = 'Steven Spielberg directed 0 drama movies!';
        } else {
            str = 'Steven Spielberg directed '+moviesSS.length+' drama movies!';
        }
    }
    return str;
}

// Order by title and print the first 20 titles
function orderAlphabetically(movies){
    var titles = movies.map(function(movie){
        return movie.title
    });
    titles.sort();
    var twentyTitles = titles.splice(0,20);
    return twentyTitles;
}

// Best yearly rate average
function bestYearAvg(movies){

}