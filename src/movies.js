// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const directorsArray = moviesArray.map((movie) => {
    return movie.director
  });
  return directorsArray;
};

function getAllUniqueDirectors (directorsArray) {
  const filteredDirectorsArray = directorsArray.filter((director, index) => {
    return directorsArray.indexOf(director) === index;
  });
  return filteredDirectorsArray;
};


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  let SSDrama = moviesArray.filter((movie) => {
    return movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
  })
  return SSDrama.length
};


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arrMovies) {

  if (arrMovies.length === 0) {return 0};


  const sumMovies = arrMovies.reduce((acc, curr) => {

    if (curr.hasOwnProperty('score')) { 

      if (curr.score >= 0) {acc += curr.score} 
      
        else if (curr.score === '') {acc += 0}  
    } 
        
    else {acc += 0}; 

    return Number(acc); 
  }, 0)

  return Number((sumMovies / arrMovies.length).toFixed(2));  
};


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arrMovies) {
  if (arrMovies.length === 0) {return 0};

  const dramaMovies = arrMovies.filter((movie) => {
    return movie.genre.includes('Drama')
  })

  if (dramaMovies.length === 0) {return 0};

  const sumMovies = dramaMovies.reduce((acc, curr) => {
    if (curr.hasOwnProperty('score')) { 

      if (curr.score >= 0) {acc += curr.score} 
      
        else if (curr.score === '') {acc += 0}  
    } 
        
    else {acc += 0}; 

    return Number(acc); 
  }, 0)

  return Number((sumMovies / dramaMovies.length).toFixed(2));  
}



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arrMovies) {
  const newArr = arrMovies.map((movie) => {
    return movie
  });

  const orderedArr = newArr.sort((a, b) => {
    if (a.year > b.year) {
      return 1
    } else if (a.year === b.year) {
      if (a.name > b.name) {
        return 1
      } else {
        return -1
      }
    } else {
      return -1
    }
  });

  return orderedArr
};

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arrMovies) {
  const titlesArr = arrMovies.map(movie => movie.title);

  const alphabeticalArr = titlesArr.sort((a, b) => {
    if (a > b) {
      return 1
    } else {
      return -1
    }
  });

  const twentyArr = alphabeticalArr.filter((movie, index) => {
    return index < 20
  })

  return twentyArr
};


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
