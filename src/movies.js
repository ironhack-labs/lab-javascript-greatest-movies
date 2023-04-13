  // Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
  let directorsName = [];
  directorsName = moviesArray.map((movie) => {
      return movie.director;
  });
  return directorsName;
};


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movieArray) {  // feeding the movies into the array, we then create a function that filters each movie based on if Spielberd and Drama. We return the length so we know how many.
  if (movieArray.length == 0) {
     return 0;
  }
  const spielbergFilter = movieArray.filter((movie) =>
   movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
   );
   
  return spielbergFilter.length;
}
const resultSpielbergFilter = howManyMovies(movies); // here we create a constant so we can call the fucntion and log the result
console.log(resultSpielbergFilter);



// Iteration 3: All scores average - Get the average of all scores with 2 decimals
 function scoresAverage(movies) {
  if (movies.length === 0) {
    return 0;
  }
  
  const totalScore = movies.reduce((accumulator, currentValue) => {
    if (currentValue.score) {
      return accumulator + currentValue.score;
    }
    return accumulator;
  }, 0);
  
  const averageScore = totalScore / movies.length;
  return Math.round(averageScore*100)/100;
} 

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(movie => movie.genre.includes('Drama'));
    if (dramaMovies.length === 0) {
      return 0;
    }
    const sumOfScores = dramaMovies.reduce((accumulator, currentValue) => {
      if (currentValue.score) {
        return accumulator + currentValue.score;
      }
      return accumulator;
    }, 0);
    const averageScoreDrama = sumOfScores / dramaMovies.length;
    return Math.round(averageScoreDrama*100)/100;
  
} 
  



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let copyOfMoviesArray = [...moviesArray];
  copyOfMoviesArray.sort(function(a,b){
      if(a.year>b.year) {
          return 1;
      } else if (b.year>a.year) {
          return -1;
      } else {
          if(a.title>b.title) {
              return 1;
          } else if (b.title>a.title) {
              return -1;
              }
              return 0;
      }
  })
  return copyOfMoviesArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(moviesArray) {
  const copyOfMoviesTitles = [...moviesArray].map(element => element.title);
  const top20Movies = copyOfMoviesTitles.sort(function(a,b) {
    return a.localeCompare(b);
  })
  return top20Movies.slice(0,20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  const copyOfMoviesDur = [...moviesArray].map(element => element.duration);
  Number(copyOfMoviesDur);
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}


