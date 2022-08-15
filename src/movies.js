// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directors = moviesArray.map((e => {
        return e.director;
    }));
    return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const filteredMovies = moviesArray.filter(element => {
        return element.director === 'Steven Spielberg' && element.genre.includes('Drama')
    })
    return filteredMovies.length
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0
    }
    const score = moviesArray.filter(el => {
        if (typeof el.score === "number"){
           return el;
      }
        
    })
    const bestMovies = score.reduce(function(acumulador, index) {
        return acumulador + index.score; 
    }, 0); 
    const  total =  bestMovies / moviesArray.length;
    return Math.round(total * 100) / 100; 
    
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter((el => {
        return el.genre.includes("Drama");
    }));
    
    const drama = scoresAverage(dramaMovies);
    return drama;
    
    
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) { 
    const movies = [...moviesArray];
   function compare(a, b) {
  if (a.year < b.year) {
    return -1;
  }
  if (a.year > b.year) {
    return 1;
       }
       if (a.year === b.year) {
           
               if (a.title < b.title) {
                   return -1;
           } if (a.title > b.title) {
               return 1;
           } if (a.title == b.title) {
                 
                   }
                  
              }
   }
 return movies.sort(compare)
      }
  
  
  


   


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const names  = [...moviesArray].map((el) => el.title);
    const newArr = names.sort();
    const just20 = newArr.slice(0, 20);
    return just20

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
