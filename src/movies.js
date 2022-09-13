// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map(item => item.director)
};


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    return moviesArray.filter(function(best){
if (best.director === "Steven Spielberg" && best.genre.includes("Drama")) {
    return true;
} else {
    return false;
}
    }).length 
} 

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length ===0 ){
    return 0;
  } 
    const allScores= moviesArray.reduce(function(acc, currentValue) {
if (!currentValue.score) {
    return acc;
} else {
    return acc + currentValue.score;
}
    },0); 
    
    let avgScore = allScores/moviesArray.length;
    avgScore = avgScore.toFixed(2);
    return Number(avgScore);
}
   

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    if(moviesArray.length === 0){
        return 0;
      } 
      const dramaMovies = moviesArray.filter(function(drama){
        return drama.genre.includes("Drama");

      });
      return scoresAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const moviesCopy = [...moviesArray];
  const moviesCopy1 = moviesCopy.sort((a,b) => a.year - b.year);
  const moviesCopy2 = [];
  for (let i = 0; i < moviesCopy1.length; i++) {
    if (!moviesCopy1[i+1]) {
      moviesCopy2.push(moviesCopy1[i]);
      break;
    }
      if (moviesCopy1[i].year === moviesCopy1[i+1].year) {
        
          if (moviesCopy1[i]['title'].localeCompare(moviesCopy1[i+1]['title'])>0) {
              moviesCopy2.push(moviesCopy1[i+1]);
              moviesCopy2.push(moviesCopy1[i]);
          } else {
              moviesCopy2.push(moviesCopy1[i]);
          }
      } else {
          if (!moviesCopy2.includes(moviesCopy2[i])) {
              moviesCopy2.push(moviesCopy1[i]);
          }
      }
  }
  return moviesCopy2;
}

   
    
//     const isyears= moviesArray.map(function(years){
//         return years.year;
        
//     }); const sortedMovies = moviesCopy.sort(function(a,b){
//         return a-b;
//     });
  
//     return sortedMovies;


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const moviesArrayCopy = [...moviesArray];
    const sortedMovies =  moviesArrayCopy.map(item => item.title).sort();
    if (sortedMovies.length > 20) {
        sortedMovies.splice(20);
      }
    return sortedMovies;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    const durationInMinutes = moviesArray.map((muvie) => {
        if (`${muvie.duration}`.split(' ')[1]) {
        muvie.duration = Number(`${muvie.duration}`.split(' ')[0].replace('h', ''))*60 
        + Number(`${muvie.duration}`.split(' ')[1].replace('min', ''));
       } else {
        muvie.duration = Number(`${muvie.duration}`.split(' ')[0].replace('h', ''))*60;
       }
        return muvie;
    });
    return durationInMinutes;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
