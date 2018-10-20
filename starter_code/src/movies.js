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
                console.log(hours, mins);
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

        console.log(totalMins);

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
function dramaMoviesRate(arr){
    var dramaMovies = arr.filter(movie => movie.genre.includes('Drama'));
    if(dramaMovies.length > 0){
        var dramaMovieRates = dramaMovies.map(movie => Number(movie.rate));
   
    var sumRates = dramaMovieRates.reduce((sum,rate) => sum + rate,0);
  
    var avgRates = sumRates / dramaMovies.length;
    return Number(avgRates.toFixed(2));
    }
  }

// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
