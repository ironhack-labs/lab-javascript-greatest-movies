// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
 function getAllDirectors(moviesArray) {
     const allDirectors = moviesArray.map(function(movieDirectors){
         return movieDirectors.director;
     }); return allDirectors;
 };

//  Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
 function howManyMovies(moviesArray){
    const spielMovies = moviesArray.filter(function(spielBerg){
        return spielberg.director === 'Steven Spielberg' && spielberg.genre === 'Drama'; 
    }); return spielMovies;
 }

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {}
//     const moviesScoreSum = moviesArray.map(movie => movie.score).reduce(acc,currentVal) => acc + current
//     const averageScore = movieScoreSum/moviesArray.length
// }

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray){}

//     const dramaMovies = moviesArray.filter(movie => movie.genre.includes ("Drama"));
//  console.log (dramaMovies.lenght)

//     const moviesScoreSum = dramaMovies.map(movie =>movie.score).reduce(acc,currentVal) => acc + currentVal;
//     const averageScore= dramaMovies/dramaMovies.lengthl
//     return averageScore.toFixed(2);
// }
// console.log(dramamMovies)



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray){}
//     const copyMoviesArray = [...noviesArray];
//     const orderedArray = copyMoviesArray.sort(function(a,b){
//         if (a.title < b.title) return -1;
//         if (a.title < b.title) return 1  
    
//     })
//     const firstTwentyMovies = orderedArray.slice(0.20);
//     return firstTwentyMovies;
// }
// orderByYear(movies);
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
