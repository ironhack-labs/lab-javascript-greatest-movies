// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray){
   const allDirectors = moviesArray.map((directors) => {
    return directors.director
   })
   return allDirectors
}



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let spielbergMovies = 0
    moviesArray.filter((dramaMovies) => {
        if (dramaMovies.director === "Steven Spielberg"){
            for (i = 0; i<dramaMovies.genre.length; i++){
                if (dramaMovies.genre[i] === "Drama"){
                    spielbergMovies++
                }
            }
        }
    })
    return spielbergMovies
}
// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray){
    if (moviesArray.length === 0) return 0;

    let totalScore = 0;
    let movieCount = 0;
    for (let i = 0; i < moviesArray.length; i++) {
      if (moviesArray[i].score) {
        totalScore += moviesArray[i].score;
        movieCount++;
      }
    }
  
    if (movieCount === 0) return 0;
  
    let average = totalScore / movieCount;
    return Number(average.toFixed(2));
}



// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let averageDramaScore = 0
    moviesArray.filter((dramaMovies) =>{
      if (dramaMovies.length === 1) {
      averageDramaScore = dramaMovies[0].score;
    } else if (dramaMovies.length > 1) {
      averageDramaScore = dramaMovies.reduce((acc, movie) => acc + movie.score, 0) / dramaMovies.length;
    } else {
      averageDramaScore = 0;
    }   
    
    })
   
    return averageDramaScore
}
    
  ;

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const orderedMovies = [...moviesArray];
  orderedMovies.sort((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    }
    return a.year - b.year;
  });
  
  return orderedMovies;
}


// Iteration 6: Alphabetic Order - Order by movie and print the first 20 titles
function orderAlphabetically(moviesArray) {
    
  const sortedMovies = [...moviesArray];


  sortedMovies.sort((a, b) => {
    if (a.title < b.title) return -1;
    if (a.title > b.title) return 1;
    return 0;
  });

  return sortedMovies.slice(0, 20).map(movie => movie.title);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
