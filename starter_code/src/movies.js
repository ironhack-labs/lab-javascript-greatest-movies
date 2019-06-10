/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(movies){
    let dataToReturn = movies.map(movie =>{
        if(movie.duration.length===8){
            h = movie.duration.split(" ")[0].split("")[0]*60;
            min = movie.duration.split(" ")[1];
            min = parseInt(min.substring(0,2));
            dur = h+min;
        }
        else if (movie.duration.length===7){
            h = movie.duration.split(" ")[0].split("")[0]*60;
            min = movie.duration.split(" ")[1];
            min = parseInt(min.substring(0,1));
            dur = h+min;
        }
        else if (movie.duration.length===5){
            min = parseInt(movie.duration.substring(0,2));
            dur = min;
        }
        else{
            h = movie.duration.split(" ")[0].split("")[0]*60;
            dur = h;
        }
        return {...movie, duration:dur};
    })
    return dataToReturn;
}

// Get the average of all rates with 2 decimals 
function ratesAverage(movies){
    const avg = movies.reduce((accu, curr) => {
        return accu + curr.rate;
      },0) / movies.length
      return parseFloat(avg.toFixed(2));
}

// Get the average of Drama Movies
function dramaMoviesRate(movies){
    const avgDrama = movies.filter((movie) => {
        return movie.genre.indexOf("Drama") !== -1;
    })
    if(avgDrama.length===0){
        return undefined;
    }
    return ratesAverage(avgDrama);
}

// Order by time duration, in growing order
function orderByDuration(movies){
    let orderMovies = movies.sort(function(a, b) {
        if(a.duration>b.duration) return 1;
        if(a.duration===b.duration){
            if (a.title > b.title) return 1;
            if (a.title < b.title) return -1;
        }
        else{
            return -1
        }
    })
    return orderMovies;
}

// How many movies did STEVEN SPIELBERG
function howManyMovies(movies){
    if(movies.length === 0){
        return undefined;
    }
    const steven = movies.filter((movie) => {
        return movie.director.indexOf("Steven Spielberg") !==-1 && movie.genre.indexOf("Drama") !== -1;
    })
    return `Steven Spielberg directed ${steven.length} drama movies!`;
}

// Order by title and print the first 20 titles
function orderAlphabetically(movies){
    let orderTitle = movies.sort(function(a, b) {
        if(a.title>b.title) return 1;
        else return -1;
    })
    let takeTitle = orderTitle.map(movie =>{
        return movie.title;
    });
    let final = takeTitle.splice(0,20);
    return final;
}

// Best yearly rate average
function bestYearAvg(){
    
}