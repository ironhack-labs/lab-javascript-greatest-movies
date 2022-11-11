


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

// no entiendo por qué no pasa el jasmine

function getAllDirectors(moviesArray) {
  const directorsArr = moviesArray.map(movie => movie.director)
  return directorsArr;
};


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const resultArr = moviesArray.filter((movie) => movie.director === "Steven Spielberg" && movie.genre.includes("Drama"));
    return resultArr.length;
}



// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0){
    return 0;
  }
  let averageSum = 0;
  moviesArray.forEach((movie) => {
    if (typeof movie.score === "number"){
      averageSum += movie.score;
    }
  })

  const avg = averageSum / moviesArray.length;

  return Math.round(avg * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray){
  let dramaScore = 0;
  let dramaArr = [];
  if (!(moviesArray.includes("Drama"))){
    return 0;
  }
  moviesArray.forEach((movie) => {
    if (movie.genre.includes("Drama")){
      dramaArr.push(movie);
      dramaScore += movie.score;
      }
    })
    const dramaRatingAvg = dramaScore / dramaArr.length;

    return Math.round(dramaRatingAvg * 100) / 100;
}
  
    


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const newMoviesArray = []
  newMoviesArray = movie.year.sort((a, b) => {
      if (a > b) {
        return 1
      } else if (a < b) {
        return -1
      } else {
        return 0
      }
    })
    return newMoviesArray;
  }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  let titlesArray = moviesArray.filter(movie => {
    return movie.title;
  })
  titlesArray.sort((title1, title2) => {
    return title1.localeCompare(title2);
  })
  console.log(titlesArray[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20])
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
