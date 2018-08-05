/* eslint no-restricted-globals: 'off' */

// Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
    var newMovies = movies.map(function(element) {
        var length = element.duration;
        // convert hour string to integer
        var hours = parseFloat(length);
        // convert minute string to integer
        var minStart = length[2] + length[3] + length[4] + length[5];
        var minutes = parseFloat(minStart);
        // convert hours to minutes
        var newLength = hours * 60 + minutes;
        element.duration = newLength;
        return element;
    });
    // return array of movies with minute duration value
    return newMovies;
}

// Get the average of all rates with 2 decimals and display in console
function ratesAverage(movies) {
    // Get all the rates and store them in an array
    var ratesArray = movies.map(function(movie) {
        return parseFloat(movie.rate);
    });

    // "reduce" the data to a single value (add all rates together)
    var rateSum = ratesArray.reduce(function(accumulator, value) {
        return (accumulator += value);
    }, 0);

    // => find the average of all rates
    var average = (rateSum / ratesArray.length).toFixed(2);
    // display average on the console
    return parseFloat(average);
    // return "The average is " + average;
}

// Get the average rate of all drama movies
function dramaMoviesRate(movies) {
    // iterate over movies array,
    // check for genre => Drama (movies.genre)
    // save all movies with genre Drama to new array
    var dramaMovies = movies.filter(function(el) {
        var genreArray = el.genre;
        if (genreArray.indexOf("Drama") > -1) {
            return true;
        } else {
            return false;
        }
    });
    // get all the rates => display average
    return ratesAverage(dramaMovies);
}

// Order by time duration, in growing order
function orderByDuration(movies) {
    // Turn duration strings to floats and hours to minutes => and return new array
    var minuteMovies = turnHoursToMinutes(movies);

    // sort the movies in ascending order by their duration.
    minuteMovies.sort(function(a, b) {
        // If two movies have the same duration,
        // order them in alphabetical order by their title!
        if (a.duration === b.duration) {
            return a.title.localeCompare(b.title);
        } else {
            return a.duration - b.duration;
        }
    });
    // return the sorted array
    return minuteMovies;
}

// How many movies did STEVEN SPIELBERG
function howManyMovies(movies) {
    // Filter the array so we can have only the drama movies where Steven Spielberg is the director.

    // Get drama movies
    var dramaMovies = movies.filter(function(el) {
        //console.log(el.genre)

        var genreArray = el.genre;

        if (genreArray.indexOf("Drama") > -1) {
            return true;
        } else {
            return false;
        }
    });

    // Get Spielberg Movies of Drama movies
    var SpielbergDramaMovies = dramaMovies.filter(function(el) {
        return el.director === "Steven Spielberg";
    });
    return SpielbergDramaMovies;
}

// Order by title and print the first 20 titles
function orderAlphabetically(movies) {
    // Change rate values from strings to floats
    var moviesCopy = movies.map(function(movie) {
        movie.rate = parseFloat(movie.rate);
        return movie;
    });

    // Sort the movies in descending order by their rate.
    moviesCopy.sort(function(a, b) {
        return b.rate - a.rate;
    });

    // Get the first 20 movies of movies array
    var firstTwentyMovies = moviesCopy.slice(0, 20);
    console.log(firstTwentyMovies);

    // Store movie titles in new array
    var onlyTitles = firstTwentyMovies.map(function(element) {
        return element.title;
    });
    // sort titles alphabetically
    // return array of ordered titles
    return onlyTitles.sort();
}

// BONUS Best yearly rate average
