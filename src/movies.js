// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directors = moviesArray.map(movie => movie.director);
    return directors;
    }

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const spielbergDramaMovies = moviesArray.filter((movie) => {
        return movie.director === "Steven Spielberg" && movie.genre.includes("Drama");
      });
    
      return spielbergDramaMovies.length;
    
    }
    

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (!moviesArray.length) {
        return 0;
      }
      let total = moviesArray.reduce((a, b) => {
        if (b.score) {
          return a + b.score;
        } else {
          return a;
        }
      }, 0);
      return Number((total / moviesArray.length).toFixed(2));
}
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

      
      const dramaMovies = moviesArray.filter((movie) => {
        return  movie.genre.includes("Drama");
})
if (!dramaMovies.length) {
    return 0;
}
let total = dramaMovies.reduce((a,b) =>{
    if (b.score)   {
    return a + b.score;
} else {
  return a;
}
}, 0);
return Number((total / dramaMovies.length).toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const newArray = [...moviesArray]

    newArray.sort((a, b) => {
        if (a.year > b.year) {
          return 1;
        } else if (b.year > a.year) {
          return -1;
        } else {
          if (a.title > b.title) {
            return 1;
          } else if (b.title > a.title) {
            return -1;
          }
        }
      },0);
      return newArray;
    }



// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
const orderAlphabetically = [...moviesArray]

orderAlphabetically.sort((a, b) => {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title> b.title) {
      return 1;
    }
    return 0;

 });

 const titlesArray = orderAlphabetically.map(movie => movie.title);

 return titlesArray.slice(0, 20);

}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    const turnHoursToMinutes= [...moviesArray]

}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
