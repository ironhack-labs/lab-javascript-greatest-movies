
//console.log(movies);
// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
// function getAllDirectors(moviesArray) {
//     const directorsArray = moviesArray.map(function(movie) {
//         return movie.director;
//       });
//       return directorsArray;
//     }


function getAllDirectors(moviesArray) {
    return moviesArray.map(movie => movie.director);

}

const dArray = getAllDirectors(movies);
console.log(dArray)



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if (moviesArray.length === 0) { // check if the array is not empty
        return 0;
    }

    const spielbergDramas = moviesArray.filter(movie => {
        return movie.director === 'Steven Spielberg' && movie.genre.includes('Drama');
    });

    return spielbergDramas.length; //returns quantity of movies with director Steven Spielberg and genre Drama
}

const spielbergArray = howManyMovies(movies);
console.log(spielbergArray)



// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    if (moviesArray.length === 0) {
        return 0; // Return 0 for an empty array
    }

    const totalScores = moviesArray.reduce((accumulator, movie) => {

        return accumulator + (movie.score || 0);
    }, 0);


    const avgScore = totalScores / moviesArray.length
    return parseFloat(avgScore.toFixed(2)); // Round to 2 decimal places and convert back to number
}
console.log(scoresAverage(movies))


// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesScore(moviesArray) {
    const dramaArray = moviesArray.filter(movie => movie.genre.includes('Drama')); // crea nuevo array de genero Drama

    if (dramaArray.length === 0) {
        return 0; // Return 0 if there are no drama movies
    }

    const totalScoresDrama = dramaArray.reduce((accumulator, movie) => {
        return accumulator + (movie.score || 0);
    }, 0);

    const avgScoreDrama = totalScoresDrama / dramaArray.length; // Calculate average based on number of drama movies
    return parseFloat(avgScoreDrama.toFixed(2)); // Round to 2 decimal places and convert back to number
}
console.log(dramaMoviesScore(movies))





// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movieArray) { 

const moviesCopy = [...movieArray]; // Make a copy of the original array using the spread operator

moviesCopy.sort((movieA, movieB) => {
   if (movieA.year === movieB.year) {
     if (movieA.title < movieB.title) {
       return -1;
     }
     if (movieA.title > movieB.title) {
       return 1;
     }
     return 0; // If the titles are the same
   }
   return movieA.year - movieB.year; // If years are different, sort by year
 });
 return moviesCopy;
}
console.log(orderByYear(movies))




// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(moviesArray) {
    const moviesCopyArr = [...moviesArray];  // Make a copy of the original array using the spread operator
  moviesCopyArr.sort((movieA, movieB) => {
    if (movieA.title < movieB.title) { // if movieA title is before in dictionary than movieB move position to the beginning of the string (to the left)
      return -1;
    }
    if (movieA.title > movieB.title) { // if movieA title is after in dictionary than movieB move position to the right
      return 1;
    }
    return 0; // If the titles are the same
  });
  return moviesCopyArr.map(movie => movie.title).slice(0, 20); // Extract only the title of each movie and return the first 20
}
    console.log(orderAlphabetically(movies))
    

    


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }
