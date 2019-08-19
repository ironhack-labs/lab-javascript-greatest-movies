/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 
function ratesAverage (movies) {
    let numberArr = movies.map(function (movie) {
        return parseFloat(movie.rate)
    })
    let sumNumbers = numberArr.reduce(function (acc, value) {
        return acc + value || 0;
    },0)

    return sumNumbers / movies.length;

}
// Iteration 2: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) { 
    let dramaArray = movies.filter(function (movie) {
        if (movie.genre.includes("Drama")) return true;
        
    });  
    if (!dramaArray.length) return 0;
    let numberArr = dramaArray.map(function (movie) {return parseFloat(movie.rate||0)
        });  
    let sumNumbers = numberArr.reduce(function (acc, value) {
            return acc+value
        }, 0)
        
        return sumNumbers/dramaArray.length;
    }
            
// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
function orderByDuration(movies) {
    const sorted = movies.slice().sort(function (a, b) {
        if (a.duration === b.duration){
            return a.title.localeCompare(b.title);
} else {
    return a.duration - b.duration;
        }
    });
return sorted;
} 

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
function howManyMovies(movies){
const stevenDramaMovies = movies.filter(function(movie) {
    if (movie.director === "Steven Spielberg" && movie.genre.includes("Drama")) return true;
});

    return stevenDramaMovies.length;
}
// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
    const titles = movies.map(function (movie) {
        return movie.title;
    })
    const sorted = titles.sort(function (a, b) {
        return a.localeCompare(b);
    })
    const sliced = sorted.slice(0, 20);

    return sliced;
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function convertHours(duration) {
    let totalTime = 0;
    let hours = 0; 
    let minutes = 0;

    const time = duration.split(" ");
    if (time.length >= 2) {
        hours = parseInt(time[0]);
        minutes = parseInt(time[1])
    } else {
        if (time[0].indexOf("min") !== -1) {
            minutes = parseInt(time[0])
        } else if (time[0].indexOf("h") !== -1) {
            hours = parseInt(time[0]);
        }
    }
    totalTime = hours * 60 + minutes;
    return totalTime;
}

function turnHoursToMinutes(movies) {
    const newMovies = movies.map(function (movie) {
        const newMovie = { ...movie };
        
        newMovie.duration = convertHours(movie.duration);
        
        return newMovie;
    });
    return newMovies;
};

// BONUS Iteration: Best yearly rate average - Best yearly rate average
