// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directors = moviesArray.map(movie => movie.director);
    return directors;

}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    

    const stevenSpielbergDramas = moviesArray.filter(movie => {
        return movie.director === 'Steven Spielberg' && movie.genre.includes('Drama');
      });
      return stevenSpielbergDramas.length;

}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

   //  const score = moviesArray.map(movie => movie.score);
 //const allScores = score.reduce((accumulator, currentValue)=> {return accumulator + currentValue},0);
 //const average = allScores / moviesArray.length;
//const roundedScore = average.toFixed(2);

 //return moviesArray.length === 0 ? 0 : parseFloat(roundedScore);  
 //const numMovies = moviesArray.length;
 
 const numMovies = moviesArray.length;
  

  const ratedMovies = moviesArray.filter(movie => typeof movie.score === 'number');

  const numRatedMovies = ratedMovies.length;

  if (numRatedMovies === 0) {
    return 0;
  }

  const sumScores = ratedMovies.reduce((total, movie) => {
    return total + movie.score;
  }, 0);

  const averageScore = Number((sumScores / numMovies).toFixed(2));
  return averageScore;
 
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
// filter function to get all drama movies

const dramas = moviesArray.filter(movie=>movie.genre.includes(`Drama`));

if (dramas.length ===0){
  return 0;
}
//dramas with score
  const dramaWithScore = dramas.filter(movies => movies.score);
  
  // get average score of those movies
  
  const scores= dramaWithScore.map(movie=> movie.score);
  const tot = scores.reduce((accumulator, currentValue) => accumulator + currentValue);
  const average = Number((tot / dramas.length).toFixed(2));
return average;


}




// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  arrCopy = JSON.parse(JSON.stringify(moviesArray));
   return arrCopy.sort((a,b) => {
     if (a.year> b.year){
       return 1;
     }else if( a.year< b.year){
       return -1;
     }else {
       return a.title>b.title ? 1:-1;
     }
     
   });
  
  

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  arr = JSON.parse(JSON.stringify(moviesArray));
  const titles = arr.map(x => x.title);
  const sorted=  titles.sort();
  let twentie= [];
  if( sorted.length >20){
    for (i = 0; i < 20; i++){
    twentie.push(sorted[i]);
    }
  }else {
    for (i = 0; i < sorted.length; i++){
    twentie.push(sorted[i]);
    
  }
  }
  return twentie;
  


}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
