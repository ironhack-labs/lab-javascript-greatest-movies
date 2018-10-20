/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(arr) {
    var num, numbers, hours, mins, hourToMinutes, totalMins, newArr;

    num = /\d+/g;
    newArr = [];

    for (let i = 0; i < arr.length; i++) {
        newArr.push(Object.assign({}, arr[i]));
    }

    newArr.map(movie => {
        //numbers = movie.duration.match(num).map(Number);
        timeArr = movie.duration.split(" ");
        if (timeArr.length > 1) {
            if (timeArr[0].includes('h') && timeArr[1].includes('m')) {
                hours = Number(timeArr[0].split("").filter(Number).join(''));
                mins = Number(timeArr[1].split("").filter(Number).join(''));
                hourToMinutes = hours * 60;
                totalMins = hourToMinutes + mins;
            }
        } else if (timeArr[0].includes('m')) {
            mins = Number(timeArr[0].split("").filter(Number).join(''));
            totalMins = mins;
        } else {
            hours = Number(timeArr[0].split("").filter(Number).join(''));
            totalMins = hours * 60;
        }

        movie.duration = totalMins;
    })
    return newArr;
}

// Get the average of all rates with 2 decimals 

function ratesAverage(arr) {
    var movieRates = arr.map(movie => Number(movie.rate));

    var sumRates = movieRates.reduce((sum, rate) => sum + rate, 0);

    return avgRates = sumRates / movieRates.length;
}

// Get the average of Drama Movies
function dramaMoviesRate(arr) {
    var dramaMovies = arr.filter(movie => movie.genre.includes('Drama'));
    if (dramaMovies.length > 0) {
        var dramaMovieRates = dramaMovies.map(movie => Number(movie.rate));

        var sumRates = dramaMovieRates.reduce((sum, rate) => sum + rate, 0);

        var avgRates = sumRates / dramaMovies.length;
        return Number(avgRates.toFixed(2));
    }
}

// Order by time duration, in growing order
function orderByDuration(arr){
    var newMovies = [];
  
    for(i in arr){
      newMovies.push(Object.assign({}, arr[i]));
    }

    var sortedMoviesArr = newMovies.sort(function(a, b) {
        if(a.duration === b.duration){ 
            if(a.title < b.title) {return -1};
            if(a.title > b.title) {return 1};
            return 0;
        } 
        return a.duration - b.duration;
    });
  
    return sortedMoviesArr;
  }

// How many movies did STEVEN SPIELBERG
function howManyMovies(arr){
    if(arr.length > 0){
        var spielbergDramaMovies = arr
            .filter(movies => movies.director === 'Steven Spielberg' && movies.genre.includes('Drama'));
        if(spielbergDramaMovies.length > 0){
            return "Steven Spielberg directed " + spielbergDramaMovies.length + " drama movies!";
        }
        return 'Steven Spielberg directed 0 drama movies!';
    }
  };

// Order by title and print the first 20 titles
function orderAlphabetically(arr){
    var newMovies = [];
  
    for(i in arr){
      newMovies.push(Object.assign({}, arr[i]));
    }

    var sortedMoviesArr = newMovies

    .sort(function(a, b) {
        if(a.title < b.title) {return -1};
        if(a.title > b.title) {return 1};
        return 0;
    })
    .map(movie => movie.title);
    
    return sortedMoviesArr.slice(0,20);
  }

// Best yearly rate average
