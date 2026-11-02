// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const  allDirectors = new Set();
    moviesArray.forEach(movie => {
             allDirectors.add(movie.director);
        })
    return [...allDirectors];
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    return moviesArray.reduce((total, movie) => 
        total + (movie.director === "Steven Spielberg" && movie.genre.includes("Drama"))
        , 0)
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    if(moviesArray.length === 0) return 0;
    const totalScore = moviesArray.filter(movie => typeof movie.score === "number" )
                                  .reduce((total, movie) => total + movie.score , 0);

    const average = Number((totalScore/moviesArray.length).toFixed(2));
    return average;
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(movie => movie.genre.includes("Drama"));
    if(dramaMovies.length == 0) return 0;

    const totalScoreOfDramaMovies = dramaMovies.reduce((total, movie) => total + movie.score, 0);
    return Number((totalScoreOfDramaMovies/dramaMovies.length).toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
     return [...moviesArray].sort((a,b) =>  a.year === b.year ?  a.title.localeCompare(b.title) :  a.year - b.year )
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

   return [...moviesArray]
          .sort((a, b) => a.title.localeCompare(b.title))
          .map(movie => movie.title).slice(0,20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {

    return moviesArray.map(movie => {            
        return { ...movie, 
                 duration: movie.duration.split(" ").reduce((total,time) => 
                           time.includes("h") 
                           ? total + Number(time.slice(0,-1)) * 60 
                           : total + Number(time.slice(0,-3)), 0)
                }
        });
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    
    if(moviesArray.length === 0) return null;

    const years = new Set(moviesArray.map(movie => movie.year));
    let bestMovie = { bestYear : null, bestYearAvg: null}
    let maxScoreAvg = 0;

    years.forEach(year => {
        const totalMoviesInYear = moviesArray.filter(movies => movies.year === year);
        const totalScoreInYear =  totalMoviesInYear.reduce((total,movie) => total + movie.score, 0);
        const averageYearScore = totalScoreInYear/totalMoviesInYear.length;

        if( maxScoreAvg < averageYearScore){
            bestMovie = {...bestMovie, bestYear: year, bestYearAvg: averageYearScore };
            maxScoreAvg = averageYearScore;
        }else if( maxScoreAvg === averageYearScore){
            bestMovie = {...bestMovie, bestYear: Math.min(year, bestMovie.bestYear), bestYearAvg: averageYearScore };
            maxScoreAvg = averageYearScore;
        }
    });
    return  `The best year was ${bestMovie.bestYear} with an average score of ${bestMovie.bestYearAvg}`
}
