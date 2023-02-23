// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directors = movies.map(movie => movie.director);
    return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    //return 0 if the array is empty, didn't pass the test
    if(movies.length===0){
        return 0;
    }
    const bestDirect = movies.filter(movie =>{
        const isDrama=movie.genre.includes(`Drama`);
        const checkStiven=movie.director===`Steven Spielberg`;
        return isDrama&&checkStiven;
    });
    //return 0 if none of the movies in the array were directed by Spielberg, didn't pass the test
    if(bestDirect.length===0){
        return 0;
    }
    //return the number of filtered Drama Movies
    return bestDirect.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    //check if Array is empty, didn't pass the test
    if(movies.length===0){
        return0;
    }
    //calculate the total score of all movies with a score
    /*"Accumulator" is a parameter of the reduce() method that is used to accumulate the total score 
     of all the movies in the array. The reduce() method is used to iterate over the array and accumulate 
     a single value from it. In this case, we're accumulating the total score of all the movies 
     in the array. The acc parameter is used to keep track of the running total as we iterate over
     the array.*/
    const totalScore=movies.reduce((accumulator, movie)=>{
        if (movie.score){
            return accumulator + movie.score;
        }else{
            return accumulator;
        }
    }, 0);
    //calculate the average score
    const averageScore=totalScore/movies.length;
    //return the average score rounded to 2 decimals
    /*toFixed() is a method in JavaScript that is used to convert a number into a string, 
    rounding the number to a specified number of decimal places.The method takes one argument,
    which is the number of decimal places to round the number to. */
    return Number (averageScore.toFixed(2));

}

// Iteration 4: Drama movies - Get the average of Drama Movies
//didn't pass the test
function dramaMoviesScore(moviesArray) {
    // filter the array to get only drama movies
  const dramaMovies = movies.filter(movie => movie.genre.includes("Drama"));

  // check if there are any drama movies in the array
  if (dramaMovies.length === 0) {
    return 0;
  }

  // calculate the total score of all drama movies
  //acc stands for accumulator
  const totalScore = dramaMovies.reduce((acc, movie) => {
    return acc + movie.score;
  }, 0);

  // calculate the average score of drama movies
  const averageScore = totalScore / dramaMovies.length;

  // return the average score rounded to 2 decimal places
  return Number(averageScore.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
