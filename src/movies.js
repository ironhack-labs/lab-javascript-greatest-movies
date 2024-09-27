// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
   const movie =  movies[0];
   const directors = moviesArray.map(function (movie) {
    return movie.director;
   });  
  return directors;
}
 
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const movie =  movies[0];
    const spielbergMovies = moviesArray.filter(function (movie) {
        return movie.director === 'Steven Spielberg';
    });

   const spielbergDrama = spielbergMovies.filter(function (drama) {
        return drama.genre.includes('Drama');
   });

    return spielbergDrama.length;
};

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    const punctuation = movies[0]
    if (moviesArray.length === 0){
        return 0;
    } else {
     const score = moviesArray.filter(function(punctuation) {          //declared all scores
        return punctuation.score;
     });

     const averageScore = score.reduce(function(acc, element) {        //the sum of all scores  
        return acc + element.score
     }, 0);

     const average = averageScore / moviesArray.length;               //avarage calculation
        return Math.round(average * 100) / 100;                       //rounded to 2 decimals
     }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
   const dramaMovies = moviesArray.filter(movie => movie.genre.includes('Drama'));
   return (scoresAverage (dramaMovies));                                              //use the previous metthod to get average score
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order) . NOS FINISHED YET!
function orderByYear(moviesArray) {
   const newArray = [...moviesArray];
    const sortedByYear = moviesArray.sort((a, b) => a.Year - b.Year) ;
    return newArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
   const moviesTittle = moviesArray.map((movie) => movie.title);
   return moviesTittle.sort() && moviesTittle.slice(0,20);


}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
