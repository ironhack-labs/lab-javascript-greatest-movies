// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
    const allDirectors = moviesArray.map((movie) => movie.director);

    return allDirectors;

}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {

    const spielbergMovies = moviesArray.filter((movie) => movie.director == 'Steven Spielberg');

    const spielbergdramaMovies = spielbergMovies.filter((movie) => movie.genre.includes("Drama"));

    return spielbergdramaMovies.length;
}

                



// Iteration 3: All scores average - Get the average of all scores with 2 decimals
// function scoresAverage(moviesArray) {

//     const score = moviesArray.map((movie) => movie.score);
    
//     const scoreAverage = score.reduce((accumulator, currentValue) => (accumulator + currentValue) / score.length); 

//     const scoreAverageRounded = Math.round(scoreAverage * 100) / 100;
    
//     return scoreAverageRounded;
// }

function scoresAverage(moviesArray) {
    const scores = moviesArray
      .map(movie => movie.score);
    
      if (scores.length === 0) {
      return 0;

     }

    const totalScore = scores.reduce((accumulator, currentValue) => {
        if(typeof currentValue === 'string' || currentValue === undefined ){
            currentValue = 0
            return accumulator + currentValue;
           
        } else {
            return accumulator + currentValue;

           }
        
    });

    const averageScore = totalScore / scores.length;

    const averageScoreRounded = Math.round(averageScore * 100) / 100;

    return averageScoreRounded;
  }


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    const dramaMovies = moviesArray.filter((movie) => movie.genre.includes("Drama"));

    const dramaMoviesScores = dramaMovies.map(movie => movie.score);

    const totalScore = dramaMoviesScores.reduce((accumulator, currentValue) => accumulator + currentValue);

    const averageScore = totalScore / dramaMoviesScores.length;

    const averageScoreRounded = Math.round(averageScore * 100) / 100;

    // if (moviesArray.genre !== "Drama") {
    //     return 0;
    
    // } 

    return averageScoreRounded;

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
