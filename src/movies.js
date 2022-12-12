// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map(movie => movie.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    return moviesArray.filter(
        (movie) => 
        movie.director === "Steven Spielberg" && movie.genre.includes("Drama")).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    }
    const sum = moviesArray.reduce((acc,el) => acc + (el.score || 0), 0);
    return Math.round((sum / moviesArray.length) * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const onlyDrama = moviesArray.filter((m) => m.genre.includes("Drama"));
    return scoresAverage(onlyDrama);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

    const moviesArray2 = Array.from(moviesArray);

    moviesArray2.sort((a, b) => {
        if (a.year === b.year) {
            return a.title.localeCompare(b.title);
        } else {
            return a.year - b.year;
        }
    });
    return moviesArray2;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const moviesArray2 = Array.from(moviesArray);

    return moviesArray2.sort((a,b) => a.title.localeCompare(b.title)).slice(0, 20).map(movie => movie.title);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
    // Create a new array that will store the movie objects with the converted duration
    const convertedMovies = [];
    movies.map( movie => { // Loop through each movie in the array
        
        // Create a clone object for every element of the array "movies"
        const convertedMovie = { ...movie };

        if (movie.duration.includes('h' && 'min')) {
            // Creates array "[hours, minutes]" splitted by "h " where each "part" is converted to number
            const [hours, minutes] = movie.duration.split('h ').map(part => parseInt(part));
            // Convert the hours and minutes to minutes and add them together
            convertedMovie.duration = hours * 60 + minutes;
        } else if (movie.duration.includes('h') && !movie.duration.includes('min')) { //only if includes "h" and not "min"
            convertedMovie.duration = parseInt(movie.duration) * 60;
        } else if (!movie.duration.includes('h') && movie.duration.includes('min')) {//only if includes "min" and not "h"
            convertedMovie.duration = parseInt(movie.duration);
        }
        // Push the converted cloned movie object to the new array
        convertedMovies.push(convertedMovie);
    })
    // Return the new array of movie objects with converted durations
    return convertedMovies;
  }
  

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(movies) {
    if (movies.length === 0) return null; //if array empty return null
    const clonedMovies = Array.from(movies); //clone the array to not edit original array
    const moviesByYearScore = clonedMovies.map(movie => ({ //edit cloned array with 2 properties per object: year & score
        year: movie.year,
        score: movie.score
    }));
    const avgScoresByYear = moviesByYearScore.reduce((acc, movie) => {
        if (acc[movie.year]) { //acc will get year per object of the array and if true (if checked already) adds
        //the next two lines creates temporal properties on the fly to acc[movie.year]: score & count
        acc[movie.year].score += movie.score; //the score of the year + score the movie that is checking
        acc[movie.year].count += 1; //a counter to do the division of average later
        } else { // Otherwise, create a new entry for this year with the score and a count of 1
        acc[movie.year] = {score: movie.score, count: 1};
        }
        return acc; // return sum per iteration: objects with a year property (an object with properties score & count)
    }, {});
  
    // Finally, we find the year with the highest average score and return the result
    let bestYear;
    let bestAvgScore = 0;
    for (const year in avgScoresByYear) { //for..in to access every value property of an object (every different year)
        //avgScor equals object "avgScoresByYear" property "year" > property "score" / -same- property "count"
        const avgScore = avgScoresByYear[year].score / avgScoresByYear[year].count;
        if (avgScore > bestAvgScore) { 
        bestYear = year;
        bestAvgScore = avgScore;
        }
    }
  
    return `The best year was ${bestYear} with an average score of ${bestAvgScore}`;
    //console.log(`The best year was ${bestYear} with an average score of ${bestAvgScore}`)
  }
