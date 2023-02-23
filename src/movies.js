// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

 function getAllDirectors(moviesArray) {
    const newMoviesArray = moviesArray.map((item) => item.director);
    const uniqueDirectors = [...new Set(newMoviesArray)];
    console.log(uniqueDirectors);
    return uniqueDirectors;
}

/*This is what I did initially but I don't really get what is wrong. 
    function getAllDirectors(moviesArray) {
    const directors = moviesArray.map(moviesArray) => {
    return moviesArray.directors }
  } */

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
        const stevenDramas = moviesArray.filter(currentMovie, index, array) => (  
            if (currentMovie.director === "Steven Spielberg" && currentMovie.genre.includes"Drama")){
                return stevenDramas.length
            }
             }
       
             function howManyMovies(moviesArray) {
                if(moviesArray.length === 0){
                    return 0;
                }else{
                  const result = moviesArray.filter(function(movie) {
                    if(movie.director === 'Steven Spielberg'){
                        for(let i = 0; i < movie.genre.length; i++){
                            if(movie.genre[i] === 'Drama'){
                                return true;
                            }
                        }
                    }
                  })
                 return result.length;
                }
            }

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
