// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
   let directorsArray = moviesArray.map((element) => element.director)
   console.log(directorsArray)
   return directorsArray
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
   let stevenSpielberg = moviesArray.filter(element => element.director === "Steven Spielberg" && element.genre.includes("Drama"));
   console.log(stevenSpielberg.length)
   return stevenSpielberg.length;
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
   if (moviesArray.length === 0) {
      return 0
   }
   let arrayAvgScore = moviesArray.reduce((acc, element) => { 
      return acc + (element.score ? element.score : 0)
   }, 0) / moviesArray.length;
   console.log(+arrayAvgScore.toFixed(2))
   return +arrayAvgScore.toFixed(2)
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
   let dramaArray = moviesArray.filter(element => element.genre.includes("Drama"));
   let dramaAvgScore = dramaArray.reduce((acc, element) =>
      acc + element.score, 0) / dramaArray.length;

   if (dramaArray.length === 0) { return 0 };

   console.log("Drama Movies AvgScore: " + dramaAvgScore.toFixed(2))
   return +dramaAvgScore.toFixed(2)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
   let moviesArrayClone = [...moviesArray]
   let yearArray = moviesArrayClone.sort((a, b) => {
      return a.year - b.year
   });
   let yearandtitleArray = yearArray.sort((a, b) => {
      if (a.year === b.year && a.title < b.title) { return -1; }
      else if (a.year === b.year && a.title > b.title) { return 1; }
      else if (a.year === b.year && a.title === b.title) { return 0; }

   });
   console.log(yearandtitleArray)
   return yearandtitleArray

}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
   let moviesArrayCloneTwo = [...moviesArray]
   let titleArray = moviesArrayCloneTwo.map(element => {
      return element.title.toLowerCase()
   });

   let alphabArray = titleArray.sort((a, b) => {
      if (a < b) {
         return -1;
      }
      else if (a > b) { return 1; }
      else { return 0; }
   });
   console.log(alphabArray.slice(0, 20))
   return alphabArray.slice(0, 20)
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(array) {
  
   let moviehours = array.map(element => element.duration.length>2?element.duration.charAt(0)*60 + element.duration.substring(3, element.duration.length-3)*1 : element.duration.charAt(0)*60);
   console.log(moviehours)
     return(moviehours)
     
   }
   (turnHoursToMinutes(movies));

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }
