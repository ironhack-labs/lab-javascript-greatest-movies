// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let directors = [];

    for(let i=0 ; i < moviesArray.length ; i++){

        directors.push(moviesArray[i].director);
    }
    return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if(moviesArray.length === 0){
        return 0;
    }else{
    let count = 0;
    for (let i = 0 ; i < moviesArray.length ; i++) {
    if (
      moviesArray[i].director === "Steven Spielberg" &&
      (moviesArray[i].genre.includes("Drama"))
    ) {
      count++;
    }
    }

    return count;
}
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    
    let sum = 0;
    let counter = 0;
    

    for (let i = 0 ; i < moviesArray.length ; i++) {
        if(moviesArray[i].score){
            sum = sum + moviesArray[i].score;
            counter++;
        }
         
    }
    if(counter === 0) return 0;

    let avg = sum / counter;

    return Number(avg.toFixed(2));
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    if(moviesArray.length === 0) return 0;

    let sum = 0;
    let counter = 0;

    for(let i = 0 ; i < moviesArray.length ; i++){
        if(moviesArray[i].genre.includes("Drama")){
            sum = sum + moviesArray[i].score;
            counter ++;
        }
    }
    if(counter === 0 ) return 0;

    return Number((sum / counter).toFixed(2));

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    return [...moviesArray].sort(function(a, b) {
    if (a.year !== b.year) {
      return a.year - b.year;                      
    } else {
      return a.title.localeCompare(b.title);        
    }
  });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

     return moviesArray
    .slice()
    .sort((a, b) => a.title.localeCompare(b.title))
    .slice(0, 20)
    .map(movie => movie.title);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    return moviesArray.map(movie => {

    let parts = movie.duration.split(' ');
 
    let hours = 0;
    let minutes = 0;
 
    for (let i = 0; i < parts.length; i++) {
      if (parts[i].includes('h')) {
        hours = Number(parts[i].replace('h', ''));
      }
      if (parts[i].includes('min')) {
        minutes = Number(parts[i].replace('min', ''));
      }
    }
 
    return { ...movie, duration: hours * 60 + minutes };
  });
}


// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    
  if (moviesArray.length === 0) return null;
 
  let yearScores = {};

  for (let i = 0; i < moviesArray.length; i++) {

    let year = moviesArray[i].year;
    let score = moviesArray[i].score;
 
    if (yearScores[year] === undefined) {
      yearScores[year] = [];
    }
 
    yearScores[year].push(score);
  }
 
  let bestYear = null;
  let bestAvg = 0;
 
  for (let year in yearScores) {
    let scores = yearScores[year];
 
    let sum = 0;
    for (let i = 0; i < scores.length; i++) {
      sum = sum + scores[i];
    }
 
    let avg = Number((sum / scores.length).toFixed(2));
 
    if (avg > bestAvg) {
      bestAvg = avg;
      bestYear = year;
    }
  }
 
  return 'The best year was ' + bestYear + ' with an average score of ' + bestAvg;
}
