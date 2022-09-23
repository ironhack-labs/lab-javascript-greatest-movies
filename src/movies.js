// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let directorList = moviesArray.map(function(moviesArray) {
        return moviesArray.director;
      }); return directorList
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let stevenDramas = moviesArray.filter(function(movies) {
         
         return (movies.director == 'Steven Spielberg' && movies.genre.includes('Drama'))
       
      }); return stevenDramas.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length == 0) {
        return 0
    }
    let newMoviesArray = moviesArray.filter(function(e){
        return e.score;
    });
    let sum = newMoviesArray.reduce(function(x, y) {
        return x + y.score;
      }, 0);
      let average = sum / moviesArray.length;
      return Number(average.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

  let dramaList = moviesArray.filter(function(movies) {  
    return (movies.genre.includes('Drama'))
 });


  if (dramaList.length == 0) {
    return 0
}
let newMoviesArray = dramaList.filter(function(e){
    return e.score;
});
let sum = newMoviesArray.reduce(function(x, y) {
    return x + y.score;
  }, 0);
  let average = sum / newMoviesArray.length;
  return Number(average.toFixed(2));



}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) { 
  
  let sortedYears = [...moviesArray];
    sortedYears.sort(function(a, b) {
        if (a.year > b.year) {
          return 1;
        } else if (a.year < b.year) {
          return -1
        } else if (a.year == b.year) {
            if (a.title > b.title) {
                return 1;
              } else if (a.title < b.title) {
                return -1;
              }
        }
      }); return sortedYears
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles



function orderAlphabetically(moviesArray) {

  
  let alphabeticalOrder = [...moviesArray];
  
    alphabeticalOrder.sort(function(a, b) {
        
        if (a.title > b.title) {
          return 1;
        } else if (a.title < b.title) {
          return -1;
        } else if (a.title == b.title) {
          return 0;
        }
        
      }); 

      if (alphabeticalOrder.length >= 20) {
        alphabeticalOrder.splice(20)
      }
  
  let alphabeticalTitles = [];

      for (let i = 0; i < alphabeticalOrder.length; i++){
      
        alphabeticalTitles.push(alphabeticalOrder[i].title); 
      }
  
  return alphabeticalTitles;
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
