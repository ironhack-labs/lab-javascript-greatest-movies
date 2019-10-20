/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 
function ratesAverage(movies) {

    let container = movies.reduce(function(initial, film) {

        return parseFloat(initial + film.rate)

    }, 0);
    return +((container/movies.length).toFixed(2))
}
 
// Iteration 2: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {
    //get all movies that are drama
    
    let dramaArray = movies.filter(function(film) {
        if (film.genre.includes('Drama') == true) {
            return true;
        }
    })

    if (dramaArray.length == 0) {
        return 0;
    }

    return ratesAverage(dramaArray)
}

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
function orderByYear(movies) {
    let arrayContainer = movies.slice(0);

    arrayContainer.sort(function(a,b) {
        if (Number(a.year) != Number(b.year)) {
            return Number(a.year) - Number(b.year);
        }
        else if (a.title < b.title) { //don't really understand this one
            return -1;
        }
        else if (a.title > a.title) { //don't really understand this one
            return 1;
        }
        return 0;
    })

    return(arrayContainer)
}

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
function howManyMovies(movies) {
    //create array of all movies of Spielberg
    let spielbergArray = movies.filter(function(film) {
        if (film.director.includes('Steven Spielberg') == true) {
            return true;
        }
    });

    //create array that contains only dramas
    let dramaSpielbergArray =spielbergArray.filter(function(film) {
        if (film.genre.includes('Drama') == true) {
            return true;
        }
    });

    //return length of array
    return dramaSpielbergArray.length;
}

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
    let containerArray = movies.slice(0);

    containerArray.sort(function(a, b) {
        if (a.title < b.title) {
            return -1;
        }
        else if (a.title > a.title) { 
            return 1;
        }
        return 0;
    });
    
    let resultArray = [];

    containerArray.forEach(function(object) {
        resultArray.push(object.title);
    });

    if (resultArray.length > 20) {
        return resultArray.slice(0,20);
    }
    else {
        return resultArray;
    }
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes (movies) {
    let tempArray = movies.slice(0);
    
    tempArray = tempArray.map(function(movie) {
        
        //create temporary storage for duration format conversion 
        let duration = movie.duration;

        //transform duration into an array
        duration = duration.split(' ');
        console.log(duration);
        let hours = 0;
        let minutes = 0;
        
        //validation: check for each duration if it contains h AND min or just one of both
        for (let i = 0; i < duration.length; i++) {
            
            if (duration[i].includes('h')) {
                
                hours = duration[i].replace(/\D/g,'');
                console.log("hours: " + hours);
            }
            else {
                minutes = duration[i].replace(/\D/g,'');
                console.log("minutes: " + minutes);
            }
            
        }

        //create storage for converted duration
        let durationMinutes = (Number(hours) * 60) + Number(minutes)

        movie.duration = durationMinutes;

        console.log(typeof(movie.duration));

        return movie;
    })
    return tempArray;
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average
