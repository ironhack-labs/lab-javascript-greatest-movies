// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
  // Use the map function to extract the directors from each movie and create a new array.
  var directors = moviesArray.map(function (movie) {
    return movie.director;
  });
  // Use a Set to remove duplicates and then convert it back to an array.
  var uniqueDirectors = [...new Set(directors)];
  return uniqueDirectors;
}



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {
  const filteredMovies = movies.filter(function (eachMovie) {
    if (
      eachMovie.director === "Steven Spielberg" &&
      eachMovie.genre.includes("Drama")
    ) {
      return true;
    }
  });
  return filteredMovies.length;
}



// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0; 
  }

  // Calculate the sum of all movie scores.
  var totalScore = moviesArray.reduce(function (sum, movie) {
    return sum + (movie.score || 0); // Ensure that score is a number.
  }, 0);

  // Calculate the average score 
  var averageScore = totalScore / moviesArray.length;

  // Round the average score to 2 decimal places.
  return parseFloat(averageScore.toFixed(2));
}



// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesScore(movies) {
  let dramaMoviesArr = movies.filter(function (eachMovie) {
    return eachMovie.genre.includes("Drama");
  });
  return scoresAverage(dramaMoviesArr);
}



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {
  let moviesArr = JSON.parse(JSON.stringify(movies));

  moviesArr.sort((a, b) => {
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
      return 0;
    }
  });
  return moviesArr;
}



// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
  const moviesArr = JSON.parse(JSON.stringify(movies));
  const sortedMoviesArr = moviesArr
    .sort((a, b) => {
      if (a.title > b.title) {
        return 1;
      } else if (a.title < b.title) {
        return -1;
      } else {
        return 0;
      }
    })
    .map((eachMovie) => eachMovie.title)
    .slice(0, 20);

  return sortedMoviesArr;
}



// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies) {
  // return the total minutes per hour as a number.
  function convertHours(hourString) {
    let calculateHour = hourString.split("h"); 
    return Number(calculateHour[0]) * 60; 
  }

  // return the minutes as a number.
  function convertMinutes(minuteString) {
    let calculateMinutes = minuteString.split("min"); 
    return Number(calculateMinutes[0]); 
  }

  //  get the total amount of minutes
  function convertDuration(duration) {
    let timePieces = duration.split(" "); 

    
    let minutes = timePieces.reduce((sum, onePiece) => {
      if (onePiece.includes("h")) {
        return sum + convertHours(onePiece);
      }
      return sum + convertMinutes(onePiece);
    }, 0);

    // return total minutes
    return minutes; 
  }

  // add the newly minutes amount as number to a new array
  let moviesHoursToMinArr = movies.map(function (eachMovie) {
    let fixedMovie = JSON.parse(JSON.stringify(eachMovie)); 
    fixedMovie.duration = convertDuration(fixedMovie.duration); 
    return fixedMovie;
  });

  // return the new array
  return moviesHoursToMinArr; 
}



// BONUS - Iteration 8: Best yearly score average - Best yearly score average

function bestYearAvg(movies) {
  if (!movies.length) return null; 

  let masterObject = {}; 

  movies.forEach((eachMovie) => {
    if (!masterObject[eachMovie.year]) {
      masterObject[eachMovie.year] = [eachMovie]; 
    } else {
      masterObject[eachMovie.year].push(eachMovie);
    }
  });

  let highest = 0; 
  let theActualYear; 

  for (let theYear in masterObject) {

    if (scoresAverage(masterObject[theYear]) > highest) {
      highest = scoresAverage(masterObject[theYear]);
      theActualYear = theYear;
    }
  }
  // return the string as template literals
  return `The best year was ${theActualYear} with an average rate of ${highest}`;
  
}

console.log(bestYearAvg(movies));
