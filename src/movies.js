// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map( movies => movies.director)
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    
    return moviesArray.filter( 
        (movies) => 
        movies.director === 'Steven Spielberg' && movies.genre.includes('Drama')
    ).length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    if (!moviesArray.length) {
      return 0;
  } 
    const scores = moviesArray.map( movies => movies.score );
        if (!scores.length) {
            return 0
        } 

    const onlyScores = scores.filter( scores => !isNaN(scores));
    const sum = onlyScores.reduce((previus, current) => current += previus);
    const average =  sum / onlyScores.length;
    return Math.round(average*100)/100
}
// Esta iretación no me pasa el último punto pero he probado a meterle un objeto del array sin score y si no está definida hace el array solo con las pelis que tienen puntuación

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {    

    if (!moviesArray.length) {
        return 0;
    } 
        const dramaMovies = moviesArray.filter( movies =>  movies.genre.includes('Drama'));
              if (!dramaMovies.length) {
                return 0
            } 
        const scores = dramaMovies.map(dramaMovies => dramaMovies.score);
        const onlyScores = scores.filter( scores => typeof scores === "number");
        const sum = onlyScores.reduce((previus, current) => current += previus);
        const average = sum / onlyScores.length;
        return +average.toFixed(2)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

    return moviesOrderedByYear = moviesArray.map(x => x).sort((a,b) => {
        if (b.year === a.year) {
            return a.title.localeCompare(b.title);
        }
            return (a.year - b.year); 
        
    });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    return moviesArray.map (movies => movies.title).sort().splice(0,20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    const newMoviesArray  = moviesArray.map(movies => movies);
    const turnHoursArray = newMoviesArray;
  
        newMoviesArray.forEach ( newMoviesArray => newMoviesArray.duration = newMoviesArray.duration.replace("h", "").replace("min", "").split(" "));
  
        turnHoursArray.forEach (turnHoursMovies => {
            if (turnHoursMovies.duration.length = 2 ) {
                turnHoursMovies.duration = (turnHoursMovies.duration[0]*60)+(+turnHoursMovies.duration[1]);
            } else if (turnHoursMovies.duration.length < 2 ) {
                turnHoursMovies.duration = (turnHoursMovies.duration[0]*60);
            }
            
        })
  return turnHoursArray;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
