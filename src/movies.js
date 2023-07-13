// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?


function getAllDirectors (moviesArray) {
    let directorsArray = moviesArray.map((movies)=>{
        return movies.director;
        
    });
    return directorsArray;
};

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(moviesArray) {
    let dramaMoviesSpielberg = moviesArray.filter((movies)=>{
        if(movies.director === 'Steven Spielberg' && movies.genre.includes("Drama")){
            return movies;
        }

    });
    return dramaMoviesSpielberg.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    let scoresSum = moviesArray.reduce((sum, movie)=>{

        if(movie.score === "" || !movie.score){
            movie.score = 0;
        }
        return sum + movie.score;
        },0)

    if  (moviesArray.length === 0) {
        return 0;
    }
    return Number((scoresSum / moviesArray.length).toFixed(2));
}
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let dramaMovieCount = moviesArray.filter((dramas)=>{
        if(dramas.genre.includes("Drama")){
            return dramas;
        }
    })
    return scoresAverage(dramaMovieCount);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
test = [{face: "bumb", bootle: "black", year: 2019}, {face: "tumbless", bootle: "purple", year: 1664}, {face: "aumber", bootle: "yellow", year: 1664}];

function orderByYear(moviesArray) {
    let sortedMoviesArray = moviesArray.slice();
    
  let moviesOrdered = sortedMoviesArray.sort((a,b)=>{
    if( a.year === b.year){
        return a.title.localeCompare(b.title); 
    }

    return a.year - b.year;
   });
   return moviesOrdered;
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    return moviesArray.map(movie => (movie.title)).sort().slice(0,20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
