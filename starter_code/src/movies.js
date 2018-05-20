// eslint no-restricted-globals: 'off'
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(movies)
{
    var moviesMod = movies.map(function(movie){
        if(typeof(movie.duration)==='number') return movie;
        var h = parseInt(movie.duration.substring(0,movie.duration.indexOf("h")));
        if (movie.duration.indexOf("h")===-1)   h=0; 
        var min = parseInt(movie.duration.substring(movie.duration.indexOf("h")+1, movie.duration.indexOf("min")));
        if (movie.duration.indexOf("min")===-1)   min=0; 

        var movieMod = Object.assign({}, movie);
        movieMod.duration = parseInt((h*60)+min);
        return movieMod;
    });

    return moviesMod;
}

// Get the average of all rates with 2 decimals 
function ratesAverage(movies)
{
    var sum = movies.reduce(function(sum, movie){
        var rate=0;
        if(movie.rate!=false) rate=movie.rate;
        return sum + parseInt(rate);
    },0);
    var result = parseFloat(sum/movies.length);
    // return result.toFixed(2);   //Error Jasmine: sense el parseFloat no és un numero? 
    return parseFloat(result); 
}

// Get the average of Drama Movies
function dramaMoviesRate(movies)
{
    var dramaMovies = movies.filter(function(movie){
        var genreMovie = movie.genre.filter(function(genre){
            return genre==='Drama';
        });
        return genreMovie.length!=0;
    });
    var result = dramaMovies.length===0 ? undefined : parseFloat(ratesAverage(dramaMovies).toFixed(2));
    console.log(result);
    return result;
}

// Order by time duration, in growing order
function orderByDuration(movies)
{
    //returns the sorted array
    //same duration: alphabetical order of the title
    if (movies.length===0) return;
    if (movies.length===1) return movies;
    var moviesMod = turnHoursToMinutes(movies);

    moviesMod.sort(function(movieA, movieB){
        // console.log("movie A" + movieA);
        // console.log("movie B" + movieB);
        if (movieA.duration > movieB.duration) return 1;
        else if (movieA.duration < movieB.duration) return -1;
        else 
        {
            if (movieA.title > movieB.title) return 1;
            else return -1;
        }
    });
    
    return moviesMod;
}

// How many movies did STEVEN SPIELBERG
function howManyMovies(movies)
{
    if (movies.length==0) return;
    var moviesSpielberg = movies.filter(function(movie){
        return (movie.genre.indexOf('Drama')!=-1 && movie.director === 'Steven Spielberg');
    });
    return "Steven Spielberg directed " + moviesSpielberg.length + " drama movies!";
}

// Order by title and print the first 20 titles
function orderAlphabetically(movies)
{
    //ordenar per title
    //print els primers 20

    var moviesOrdered = movies.sort(function(movieA, movieB){
        if (movieA.title > movieB.title) return 1;
        else return -1;
    });
    var movies20 = moviesOrdered.slice(0,20);

    var titles = [];
    movies20.forEach(function(movie){
        titles.push(movie.title);
    });
    console.log(titles);
    return titles;
}

// Best yearly rate average
function bestYearAvg(movies){
    if(movies.length === 0) return;

    var yearsMovie = [];    //array d'objectes year, pelicules
    movies.forEach(function(movie){
        var added=false;
        yearsMovie.forEach(function(objYear){
            if(objYear.year === movie.year)
            {
                var movieCopy = Object.assign({},movie);
                objYear.movies.push(movieCopy);
                objYear.sumRate += parseFloat(movieCopy.rate);
                objYear.counter ++;
                added=true;
            }
        });
        if(added === false)
        {
            var newYear = {
                year: movie.year,
                movies: [movie],
                sumRate: parseFloat(movie.rate),
                counter: 1
            };
            yearsMovie.push(newYear);
        }
    });

    yearsMovie.forEach(function(objYear){
        objYear.avg=objYear.sumRate/objYear.counter;
    });

    yearsMovie.sort(function(objYearA, objYearB){
        if(objYearA.avg > objYearB.avg) return -1;
        else if(objYearA.avg > objYearB.avg) return 1;
        else
        {
            if(objYearA.year>objYearB.year) return 1;
            else return -1;
        }
    });

    return "The best year was " + yearsMovie[0].year + " with an average rate of " + yearsMovie[0].avg;
}

