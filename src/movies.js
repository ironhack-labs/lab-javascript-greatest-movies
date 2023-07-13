// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  let newArr = moviesArray.map((movie) => movie.director);
  return newArr;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  let filteredMovies = moviesArray.filter((movies) => {
    return (
      movies.director === "Steven Spielberg" && movies.genre.includes("Drama")
    );
  });
  return filteredMovies.length; //  converts from array to number .length -number of elements in the array
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
//want to know the average score of all
// should be rounded to 2 decimals places
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) return 0; //should return 0 if an empty array is passed

  const total = moviesArray.reduce((accumulator, movie) => {
    // movie is placeholder give a visual name to make it more readable
    if (movie.score) {
      return accumulator + movie.score; // need to specify exactly! that its .score
    } else {
      return accumulator; // the previous value // snowball
    }
  }, 0);
  return Number((total / moviesArray.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies // this refers specifically to what the score for drama movies was

function dramaMoviesScore(moviesArray) {
  let filteredDrama = moviesArray.filter((movies) => {
    return movies.genre.includes("Drama");
  });

  let averageNumber = scoresAverage(filteredDrama) // we calculate the averedge 
  return averageNumber;
}


//GO THROUGH THIS ONE
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let newArray = [...moviesArray];
  return newArray.sort((a, b) => {
    if (a.year > b.year) return 1;
    else if (a.year < b.year) return -1;
    else if (a.title > b.title) return 1;
    else if (a.title < b.title) return -1;
    return 0;
  });
}


//GO THROUGH THIS ONE
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let titleArr = moviesArray.slice(0)
    let  ordTitleArr = titleArr.map(el => {
      return el.title
    })
    return ordTitleArr.sort().slice(0, 20)
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
