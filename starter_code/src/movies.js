/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes(arrayMovies) {
    return arrayMovies.map(movie => {
    var hoursMinutes = 0;
    var minutes = 0;
    if (movie.duration.indexOf('h') === -1) {
    minutes = parseInt(movie.duration.split(' ')[0]);
    } else {
    hoursMinutes = parseInt(movie.duration.split( 0));
    minutes = parseInt(movie.duration.split(' ')[1]);
    }
    if (!hoursMinutes) {
    return {...movie, duration: minutes};
    } else if (!minutes) {
    return {...movie, duration: hoursMinutes};
    } else {
    return {...movie, duration: hoursMinutes + minutes};
    }
    })
    }
    
    // Get the average of all rates with 2 decimals 
    
    function ratesAverage(movies){
    var rate = movies.reduce((accumulator, movie)=>{
    return accumulator = accumulator + (movie.rate) 
    }, 0)
    return (rate / movies.length);
    }
    
    // Get the average of Drama Movies
    
    // Order by time duration, in growing order
    function orderByDuration (a) { 
    return a.sort(function(a,b){
    return a.duration - b.duration;
    });
    }
    
    /*function orderByDuration (arr) { 
    return arr.sort(function(a,b){
    if (a.duration === b.duration) {
    return 
    }
    return a.duration - b.duration;
    })
    }
    //return Number((rate / movies.length))
    
    // How many movies did STEVEN SPIELBERG
    
    // Order by title and print the first 20 titles
    
    // Best yearly rate average*/