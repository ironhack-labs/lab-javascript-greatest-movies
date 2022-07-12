console.log(movies);

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const movieDirectors = moviesArray.map((movie) => movie.director); return movieDirectors
} console.log(getAllDirectors);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const spielbergMovies = moviesArray.filter((movies) => movies.director === 'Steven Spielberg' && movies.genre.includes("Drama")); 
  return spielbergMovies.length
} 

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  
if (moviesArray.length === 0) {
    return 0;
}

        let sum = moviesArray.reduce((acc, movie) => {

         if (movie.score) {
           return acc + movie.score;
         } else return acc;
        }, 0);

        const average = sum / moviesArray.length;
        return Number(average.toFixed(2));
          } console.log(scoresAverage(movies));
    



// Iteration 4: Drama movies - Get the average of Drama Movies

/// I DON´T FULLY UNDERSTAND HOW THE ELEMENT THING WORKS AND WHY WE DIDN´T HAVE TO AVERAGE THE SUM ???
      function dramaMoviesScore(moviesArray) {
        const dramaMovies = moviesArray.filter(element => element.genre.includes('Drama'));
        return scoresAverage(dramaMovies);
      }
      //notes: call the code from iteration 3 to average the drama movie scores! that is why there is no average formula here!!!




// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    
        let yearArr = [...moviesArray];
        yearArr.sort((a,b) => {
          if (a.year > b.year){
            return 1;
          } else if (a.year < b.year) {
            return -1
          }
          if (a.title > b.title) {
            return 1;
          } else if (a.title < b.title){
            return -1
          } else{ 
            return 0;
          }
      
        }); return yearArr;
}
///// notes from corrections in class: 
/* 
let yearArr = [...moviesArray];
let moviesCopy.sort ((a, b) =>  {
   
   compare by year:
    if (a.year - b.year) return -1;
    else if (a.year === b.year); {

   if have same year, compare by title:
        if (a.title.toLowerCase() > b.title.toLowerCase()) return -1;
        if (a.title.toLowerCase() < b.title.toLowerCase()) return 1;
    }
        else if {return 1;
        } else {
            return 0;
        }
});
*/

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
let alphaOrderCopy = [...moviesArray];
alphaOrderCopy.sort((a,b) => {
    if (a.title < b.title) {
        return -1;
    } else if (a.title === b.title) {
        return 0
    } else return 1;
});
let onlyTitles = alphaOrderCopy.map((movie) => movie.title) 
return onlyTitles.slice(0, 20)
}
console.log(orderAlphabetically);

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
