/* eslint no-restricted-globals: 'off' */
// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
    const sortedMovies = [...movies];
    sortedMovies.sort((movieA, movieB) => {
        // sort by year
        if (movieA.year < movieB.year) {
            return -1;
        }
        if (movieA.year > movieB.year) {
            return 1;
        }

        // if they have the same year, then sort by title
        if (movieA.title < movieB.title) {
            return -1;
        }
        if (movieA.title > movieB.title) {
            return 1;
        }

        // same year and same title
        return 0;
    });

    return sortedMovies;
}



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(movies) {
    /*
    return movies.filter((m) => {
        if (m.director === "Steven Spielberg" && m.genre.includes("Drama"))
            return true;
        else
            return false;
    });
    */

    /*
    return movies.filter((m) => {
        return m.director === "Steven Spielberg" && m.genre.includes("Drama");
    });
    */

    let filteredMovies = movies.filter((m) => m.director === "Steven Spielberg" && m.genre.includes("Drama"));
    return filteredMovies.length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
// sort alpha by title
// only return the title
// only return 20 movies
function orderAlphabetically(movies) {
    const sortedMovies = [...movies];
    sortedMovies.sort((movieA, movieB) => {
        // if they have the same year, then sort by title
        if (movieA.title < movieB.title) {
            return -1;
        }
        if (movieA.title > movieB.title) {
            return 1;
        }

        // same year and same title
        return 0;
    });
    /*
    return movies.map((m) => {
        return m.title;
    });
    */

    let mappedMovies = sortedMovies.map((m) => m.title);

    return mappedMovies.slice(0, 20);

}



// Iteration 4: All rates average - Get the average of all rates with 2 decimals
// get average of all the rates
// return only with 2 decimals
function ratesAverage(movies) {
    if (movies.length === 0) {
        return 0;
    }

    // get the sum of all of them
    let sum = 0;
    for (let m of movies) {
        if (m.rate !== null && m.rate !== undefined)
            sum = sum + m.rate;
        // first movie
        // sum 0
        //  = 0 + 9.3
        // 9.3

        // second movie
        // sum 9.3
        // = 9.3 + 9.2
        // .....
    }

    // divide by the number of elements (length)
    let avg = sum / movies.length;

    return parseFloat(avg.toFixed(2));

}


// Iteration 5: Drama movies - Get the average of Drama Movies

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
    // #h ##min
    // we got the hours
    // transform them into minutes

    // we got the minutes

    // we sum the minutes plus the 'hours in minutes'


    return movies.map((m) => {
        let durationParts = m.duration.split(' ');
        let hours = parseInt(durationParts[0].replace("h", ""));
        let hoursIntoMinutes = hours * 60;
        //console.log(hoursIntoMinutes);
        
        let minutes = 0;
        if(durationParts[1] !== null && durationParts[1] !== undefined) {
            minutes = parseInt(durationParts[1].replace("min", ""));
        }


        let durationInMinutes = minutes + hoursIntoMinutes;
        //console.log(durationInMinutes);

        m.duration = durationInMinutes;
        return m;
    });
}

console.log(turnHoursToMinutes(movies))

// BONUS Iteration: Best yearly rate average - Best yearly rate average