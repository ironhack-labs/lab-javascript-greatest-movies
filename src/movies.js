/*
    title: 'The Shawshank Redemption',
    year: 1994,
    director: 'Frank Darabont',
    duration: '2h 22min',
    genre: ['Crime', 'Drama'],
    score: 9.3
  */

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
  const directorsArray = moviesArray.map((crocodile) => crocodile.director);
  return directorsArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(moviesArray) {
  const spielbergArray = moviesArray.filter(function (crocodile) {
    return (
      crocodile.director === "Steven Spielberg" &&
      crocodile.genre.includes("Drama")
    );
  });

  const numberSpielbergDramas = spielbergArray.length;
  return numberSpielbergDramas;
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(moviesArray) {
    
   if (moviesArray.length === 0) {
        return 0
    };
const allScores = moviesArray.map((crocodile) => crocodile.score );
    //console.log(allScores)

  
    if (typeof allScores === 'number') {
        const scoresTotal = allScores.reduce((acc, cur) => acc + cur, 0);
    
     const scoresAvg = scoresTotal/allScores.length;
     const scoresAvg2Decimal = scoresAvg.toFixed(2);
         return console.log(scoresAvg2Decimal);
        
     }}
     scoresAverage(movies)
  // Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    
    const dramaMovies = moviesArray.filter((crocodile) => crocodile.genre.includes('Drama'));

    if (dramaMovies.length === 0) {
        return 0;
    } 
    const dramaScores = dramaMovies.map((crocodile) => crocodile.score);
    const dramaScoresTotal = dramaScores.reduce((acc, cur) => {
        return acc + cur 
    }, 0);
   // console.log(dramaScoresTotal)
    const dramaAvg = dramaScoresTotal/ dramaScores.length;
    return dramaAvg;
    
    
}
dramaMoviesScore(movies)

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
