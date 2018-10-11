/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes(movies) {
    var newList = movies.map(function(movie){
        var newMovieObject = {};
        newMovieObject.title = movie.title;
        newMovieObject.year = movie.year;
        newMovieObject.director = movie.director;
        newMovieObject.genre = movie.genre;
        newMovieObject.rate = movie.rate;
        if (movie.duration.indexOf("h") > 0 && movie.duration.indexOf("min") > 0) {
            var hours = movie.duration.split(" ")[0].slice(0,movie.duration.indexOf("h"));
            var minutes = movie.duration.split(" ")[1].slice(0,movie.duration.split(" ")[1].indexOf("min"));
        } else if (movie.duration.indexOf("h") > 0) {
            var hours = movie.duration.slice(0,movie.duration.indexOf("h"));
            var minutes = "0";
        } else {
            var hours = "0";
            var minutes = movie.duration.slice(0,movie.duration.indexOf("min"));
        }
        var newDuration = (60*Number(hours) + Number(minutes));
        newMovieObject.duration = newDuration;
        return newMovieObject;
    });
    return newList;
}


// Get the average of all rates with 2 decimals 

function ratesAverage(listOfMovies) {
    if (listOfMovies.length == 0) return undefined;
    var listOfRankings = listOfMovies.map(function(movie){
        if (movie.rate == ''){
            return 0;
        } else {
            var ranking = parseFloat(movie.rate);
            return ranking;
        }    
    });
    var avg = listOfRankings.reduce(function(acc,n){
        return acc + n;
    }, 0)/listOfRankings.length;
    return Math.round(avg*100)/100
}


// Get the average of Drama Movies

function dramaMoviesRate(listOfMovies) {
    var dramaMovies = listOfMovies.filter(function(movie){
        return movie.genre.indexOf("Drama") >= 0;
    })
    if (dramaMovies.length==0) return undefined;
    return ratesAverage(dramaMovies);
}


// Order by time duration, in growing order

function orderByDuration(listOfMovies) {
    var movies = turnHoursToMinutes(listOfMovies);
    movies.sort(function(a,b){
        if (a.duration === b.duration) {
          if (a.title < b.title)
            return -1;
          else 
            return 1;
        } 
        return a.duration-b.duration
    })
    return movies
}



// How many movies did STEVEN SPIELBERG

function howManyMovies(listOfMovies) {
    if (listOfMovies.length==0) return undefined;
    var spielbergDramas = listOfMovies.filter(function(movie){
        return (movie.director=="Steven Spielberg" && movie.genre.indexOf("Drama") > -1);
    })
    return "Steven Spielberg directed " + spielbergDramas.length + " drama movies!"
}


// Order by title and print the first 20 titles

function orderAlphabetically(listOfMovies) {
    var listOfTitles = listOfMovies.map(function(movie){
        return movie.title
    })
    var alphabeticalMovies = listOfTitles.sort(function(a,b){
        if (a < b)
            return -1;
        else 
            return 1;
    })
    return alphabeticalMovies.slice(0,Math.min(20,alphabeticalMovies.length));
}


// Best yearly rate average

function bestYearAvg(listOfMovies) {
    if (listOfMovies.length == 0) return undefined;
    var bestYear = [undefined,0];
    var averages = listOfMovies.map(function(movie){
        var currentYear = movie.year;
        var allMoviesCurrentYear = listOfMovies.filter(function(film){
            return film.year == currentYear;
        })
        var averageCurrentYear = ratesAverage(allMoviesCurrentYear);
        if (averageCurrentYear > bestYear[1]) {
            bestYear = [currentYear,averageCurrentYear]
        }
        return [currentYear,averageCurrentYear]
    })
    return 'The best year was ' + bestYear[0] + ' with an average rate of ' + bestYear[1]
}
