// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
    const justDirectors = moviesArray.map((movies) => movies.director);
    return justDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const dramaMovies = moviesArray.filter((movies) => movies.director === "Steven Spielberg" && movies.genre.includes("Drama"));
        return dramaMovies.length;
    }
    

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    const scores = moviesArray.reduce((acc, val) => {
        if(val.score){
            return acc + val.score;     
        } else{
            return acc;
        }
  }, 0);  

   return Math.round ((scores / moviesArray.length) * 100) / 100;
   
}
   

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaScores = moviesArray.reduce((acc, val) => {
        if(val.genre.includes("Drama") && val.score){
            return acc + val.score;     
        } else{
            return acc;
        }
  }, 0);  

   return Math.round ((dramaScores / moviesArray.length) * 100) / 100;
   
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

    const orderedByYear = moviesArray.slice();
                
         function compare(a, b) { 
          if (a.year > b.year) {
                return 1;

            } else if (a.year < b.year){
                return -1;

            } else (a.title < b.title)
               return 1;
            }
        

         return orderedByYear.sort(compare);
    }                

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
        const movieTitles = moviesArray.map(function (movie) {
            return movie.title;
        })
        const ordered= movieTitles.sort();
        const twentyTitles = ordered.slice(0, 20);
        return twentyTitles;
    }



// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}
   

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}

