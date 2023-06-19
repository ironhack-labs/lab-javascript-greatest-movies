
// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const cleanedDirectors = moviesArray.map(name => name.director);
    return cleanedDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let numberOfMovies = 0;
    moviesArray.filter(movie => {
        if (movie.director === "Steven Spielberg" && movie.genre.includes("Drama")) {
            numberOfMovies += 1;
        }
    })
    return numberOfMovies;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    }
    const moviesWithRating = moviesArray.filter(movie => movie.hasOwnProperty("score"))

    const sum = moviesWithRating.reduce((acc, movie) => acc + movie.score, 0);
    const average = sum / moviesArray.length;
    const twoDecimal = average.toFixed(2);
    return parseFloat(twoDecimal);

    }

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMoviesArray = moviesArray.filter(movie => movie.genre.includes("Drama"));
    const dramaMovieAverage = scoresAverage(dramaMoviesArray);
    return dramaMovieAverage;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const orderedArray = moviesArray.slice().sort((a, b) => {
        if (a.year !== b.year) {
            return a.year - b.year;
        } else {
            return a.title.localeCompare(b.title);
        }
    });
    
    return orderedArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    return moviesArray.map(movie => movie.title).sort().slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    return movies.map(function(movie) {
        var duration = movie.duration;
        var hours = 0;
        var minutes = 0;
    
        // Extract hours and minutes from duration string
        var timeComponents = duration.split(" ");
    
        for (var i = 0; i < timeComponents.length; i++) {
          var component = timeComponents[i];
    
          if (component.includes("h")) {
            hours = parseInt(component);
          } else if (component.includes("min")) {
            minutes = parseInt(component);
          }
        }
    
        // Calculate total duration in minutes
        var totalMinutes = hours * 60 + minutes;
    
        // Update the duration property with the equivalent duration in minutes
        movie.duration = totalMinutes;
    
        return movie;
      });
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
