/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function sortByYear (movie1, movie2) {
   if (movie1.year > movie2.year) {
       return 1;
   } else if (movie1.year < movie2.year) {
       return -1;
   } else {
       return movie1.title.localeCompare(movie2.title)
   };
}


function orderByYear(movies) {
   let copiedMovies = movies.slice();
    return copiedMovies.sort(sortByYear);
} 


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(movies) {
    let filteredMovies = movies.filter(filterByDirectorAndDrama);
    return filteredMovies.length;
}

function filterByDirectorAndDrama(movie) {
    if (movie.director === "Steven Spielberg" && movie.genre.includes("Drama")) {
        return true;
    } else return false;
}


// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
    let orderedMovies = movies.slice();
    return orderedMovies.sort(sortByTitle).map(extractTitle).splice(0, 20);
    //return [];
}

function sortByTitle (movie1, movie2) {
    return movie1.title.localeCompare(movie2.title);
 }

 function extractTitle(movie) {
     return movie.title;
 }



// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
    if (movies.length === 0) {
        return 0;
    }
    let rateSum = movies.reduce(sumRates, 0);
    return Math.round((rateSum / movies.length)*100)/100;
}

function sumRates(acc,movie) {
    if (typeof movie.rate === "number")  {
        return acc + movie.rate;
    }
    else return acc;
}


// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {
    let filteredMovies = movies.filter(filterByDrama);
    return ratesAverage(filteredMovies);

}

function filterByDrama(movie) {
    if (movie.genre.includes("Drama")) {
        return true;
    } else return false;
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies) {
    return movies.map(function (movie) {
        const newMovie = JSON.parse(JSON.stringify(movie));
        newMovie.duration = convertHoursToMinutes(movie.duration);
        return newMovie;
    })
}

function convertHoursToMinutes(duration) {
    return duration.split(" ").reduce(
        (tot, el) => {
            if(el.includes("h")) tot += (parseInt(el) * 60)
            if(el.includes("min")) tot += (parseInt(el))
            return tot
        }
    , 0)
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average
