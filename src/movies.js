// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  moviesArray = moviesArray.map((movie) => movie.director);

  const cleanMoviesArr = [];
  
  for (let i = 0; i < moviesArray.length; i++) {
    if (cleanMoviesArr.indexOf(moviesArray[i]) === -1) {
      cleanMoviesArr.push(moviesArray[i]);
    }
  }
  return cleanMoviesArr
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  
  const movStevenArr = moviesArray.filter(
    (movie) => movie.director === 'Steven Spielberg'
  );  

  const result = movStevenArr.filter(
    (movie) => movie.genre.indexOf(`Drama`) >= 0
  );

  return result.length
  
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0
  }

  const revisedArray = moviesArray.filter((movie) => typeof movie.score === 'number');

  console.log(revisedArray);

  const sum = revisedArray.reduce(
    (accumulator, currentValue) => accumulator + currentValue.score,
    0
  );

  const average = sum / moviesArray.length;

  return Number(average.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  
  const dramaArray = moviesArray.filter(
    (movie) => movie.genre.indexOf('Drama') >= 0
    );
    
    if (dramaArray.length ===0) {
      return 0;
    }
 
  const sum = dramaArray.reduce ((accumulator, currentValue) => accumulator + currentValue.score,0);
  
  const average = sum / dramaArray.length
  
  return Number(average.toFixed(2));
  
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const moviesArrCopy = [...moviesArray];

  const novArrAsc = moviesArrCopy.sort(function (a, b) {
    return a.year - b.year || a.title.localeCompare(b.title);  //--> note to self: localeCompare a good way to concatenate filters when sorting.
  });
  
  return novArrAsc;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const titleArray = [];
  let number;

  moviesArray.forEach((movie) => titleArray.push(movie.title));
  
  const sortedFullArr = titleArray.sort();
  
  if (sortedFullArr.length < 20) {
    number = sortedFullArr.length;
  } else {
    number = 20;
  }
  
  sortedArr = sortedFullArr.splice(0, number);
  
  return sortedArr;
  
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  const moviesArrCopy = [...moviesArray];

  const moviesArrayCopy = moviesArrCopy.map((movie) => {
    let findHour = movie.duration.indexOf('h');
    let findMin = movie.duration.indexOf('min');
    let hoursInMin = Number(movie.duration.slice(0, findHour)) * 60;
    let min = Number(movie.duration.slice(findHour + 1, findMin));
    let totalDuration = hoursInMin + min;
    return { ...movie, duration: totalDuration };
  });

return moviesArrayCopy;

}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  const yearArr = moviesArray.map((movie) => movie.year);

  const uniqueYearArr = [];

  for (let i = 0; i < yearArr.length; i++) {
    if (uniqueYearArr.indexOf(yearArr[i]) === -1) {
      uniqueYearArr.push(yearArr[i]);
    }
  }

  const sortUniqueYearArr = uniqueYearArr.sort((a, b) => a - b);

  let moviesArrCopy = [...moviesArray];

  let moviesByYearArr = [[]];


  for (let i = 0; i < sortUniqueYearArr.length; i++) {
    for (let j = 0; j < moviesArrCopy.length; j++) {
      if (sortUniqueYearArr[i] === moviesArrCopy[j].year) {
        moviesByYearArr[i].push(moviesArrCopy[j]);
      }
      continue;
    }
  }

  return moviesByYearArr;

}



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
