// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  let directorsArray = moviesArray.map(function(movie){
    return movie.director;
  });

  // Bonus: remove duplicate items
  return [...new Set(directorsArray)];
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  let spielbergArray = moviesArray.filter(function(movie){
    return movie.director === "Steven Spielberg" && movie.genre.includes("Drama");
  });

  return spielbergArray.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (!moviesArray.length) {
    return 0;
  }

  let sumScores = moviesArray.reduce(function(total, current){
    if (typeof(current.score) !== 'number'){
      return total;
    }

    return total + current.score;
  }, 0);

  let avg = (sumScores / moviesArray.length).toFixed(2);

  return Number(avg);
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  if (!moviesArray.length) {
    return 0;
  }

  let dramaMovies = moviesArray.filter(function(movie){
    return movie.genre.includes("Drama");
  });

  if (!dramaMovies.length) {
    return 0;
  }

  let dramaScores = dramaMovies.reduce(function(total, current){
    if (typeof(current.score) !== 'number'){
      return total;
    }
    return total + current.score;

  }, 0);

  let avg = (dramaScores / dramaMovies.length).toFixed(2);

  return Number(avg);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  if (moviesArray.length === 1) {
    return moviesArray;
  }

  let moviesSorted = [...moviesArray];

  moviesSorted.sort(function(a, b){
    return a.year - b.year || a.title.localeCompare(b.title);
  });

  return moviesSorted;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  let moviesCopy = JSON.parse(JSON.stringify(moviesArray));

  moviesCopy.sort(function(a, b){
    return a.title.localeCompare(b.title);
  });

  let movieTitles = moviesCopy.map(function(movie){
    return movie.title;
  });

  if (movieTitles.length < 20) {
    return movieTitles;
  }

  else {
    return movieTitles.slice(0, 20);
  }
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  let moviesCopy = JSON.parse(JSON.stringify(moviesArray));

  let moviesTimeFormat = moviesCopy.map(function(movie){
    let totalMins = 0;
    let durationOld = movie.duration.split(" ");

    let hoursToMins = Number(durationOld[0][0] * 60);
    totalMins += hoursToMins;

    if (durationOld.length > 1) {
      let mins = Number(durationOld[1].slice(0, -3));
      totalMins += mins;
    }

    movie.duration = totalMins;

    return movie;
  });

  return moviesTimeFormat;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (!moviesArray.length) {
    return null;
  }

  let yearScores = {};

  moviesArray.forEach(function(movie){
    if (!(movie.year in yearScores)) {
      yearScores[movie.year] = [movie.score];
    }

    else {
      yearScores[movie.year].push(movie.score);
    }
  });

  let yearAverages = [];

  for (const key in yearScores) {
    let yearScoreSum = yearScores[key].reduce(function(total, current){
      return total + current;
    },0);

    let yearAvg = yearScoreSum / yearScores[key].length;
    yearAverages.push({year: key, avg: yearAvg});
  }

  yearAverages.sort(function(a, b){
    return b.avg - a.avg;
  });

  let year = yearAverages[0].year;
  let score = yearAverages[0].avg;

  return `The best year was ${year} with an average score of ${score}`
}