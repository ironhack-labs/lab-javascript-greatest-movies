// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arrayOfMovies) {
  //return all the directors
  let allDirectors = arrayOfMovies.map((movie) => movie.director);
  //filter to have only one time
  allDirectors = allDirectors.filter((director, index) => allDirectors.indexOf(director) === index);
  return allDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arrayOfMovies) {
  const dramaMoviesSpielberg = arrayOfMovies.filter((movie) => {
    //filter if the director is 'Spielberg' and if the movie is a drama
    if ((movie.director === 'Steven Spielberg') && 
        (movie.genre.indexOf('Drama') >= 0)) {
      return true;
    } else {
      return false;
    }
  });
  return dramaMoviesSpielberg.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arrayOfMovies) {
  if (arrayOfMovies.length === 0) {
    return 0;
  }
  const totalScores = arrayOfMovies.reduce((scores, movie) => {
    //if the movie has a score
    if (('score' in movie) && (movie.score !== undefined)) {
      return scores + movie.score;
    } else {
      return scores;
    }
  }, 0);
  //round to 2 decimals the average
  return Math.round((totalScores / arrayOfMovies.length) * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arrayOfMovies) {
  if (arrayOfMovies.length === 0) {
    return 0;
  }
  //filter only Drama movies
  const arrayDramaMovies = arrayOfMovies.filter((movie) => movie.genre.indexOf('Drama') >= 0);
  if (arrayDramaMovies.length === 0) {
    return 0;
  }
  //reduce to have the total of Drama's score
  const totalDramaScores = arrayDramaMovies.reduce((scores, movie) => scores + movie.score, 0);
  //round to 2 decimals the average
  return Math.round((totalDramaScores / arrayDramaMovies.length) * 100) / 100;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arrayOfMovies) {
  //deep cloning
  const newArrayOfMovies = JSON.parse(JSON.stringify(arrayOfMovies));
  //order by movie's year
  const orderedArrayOfMoviesByYearTitle = newArrayOfMovies.sort((movie1,movie2) => {
    if (movie1.year === movie2.year) {
      //if the movies have the same year, the order will be by title
      return movie1.title < movie2.title ? -1 : 1;
    }
    return movie1.year < movie2.year ? -1 : 1;
  });
  return orderedArrayOfMoviesByYearTitle;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arrayOfMovies) {
  //deep cloning
  const newArrayOfMovies = JSON.parse(JSON.stringify(arrayOfMovies));
  //order by title
  const orderedArrayOfMoviesByTitle = newArrayOfMovies.sort((movie1, movie2) => {
    if (movie1.title === movie2.title) {
      return 0;
    }
    return movie1.title < movie2.title ? -1 : 1;
  });
  //return only the names of the movies
  const orderedArrayOfMoviesByTitleOnlyNames = orderedArrayOfMoviesByTitle.map((movie) => movie.title);
  return orderedArrayOfMoviesByTitleOnlyNames.slice(0,20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arrayOfMovies) {
  //deep cloning
  const newArrayOfMovies = JSON.parse(JSON.stringify(arrayOfMovies));
  //changing the object in the array to duration be a number
  const arrayOfMoviesDurationMinutes = newArrayOfMovies.map((movie) => {
    //return the index of the 'h'
    const indexH = movie.duration.indexOf('h');
    let hours = 0;
    if (indexH >= 0) {
      //convert the hour to minutes
      hours = parseInt(movie.duration.slice(0,indexH), 10);
    }
    let minutes = 0;
    //return the index of the 'm' (from 'min') and ' ' (empty)
    const indexM = movie.duration.indexOf('m');
    const indexEmpty = movie.duration.indexOf(' ');
    if (indexEmpty >= 0) {
      //if we have the index of empty, we convert from the index + 1 to index m
      minutes = parseInt(movie.duration.slice(indexEmpty+1,indexM), 10);
    } else if (indexM >= 0) {
      //if the movie has only minutes, we convert from the index 0
      minutes = parseInt(movie.duration.slice(0,indexM));
    }
    //calculate the movie's duration
    movie.duration = (hours * 60) + minutes;
    return movie;
  });
  return arrayOfMoviesDurationMinutes;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(arrayOfMovies) {
  if (arrayOfMovies.length === 0) {
    return null;
  }
  //deep cloning
  let arrayAvgByYear = JSON.parse(JSON.stringify(arrayOfMovies));
  //create an array of the average score by year 
  arrayAvgByYear = arrayAvgByYear.reduce((arrayByYear, movie) => {
    const avgByYearIndex = arrayByYear.findIndex(avgByYear => avgByYear.year === movie.year);
    //if the year is in the array, edit 
    if (avgByYearIndex >= 0) {
      arrayByYear[avgByYearIndex].countMovies++;
      arrayByYear[avgByYearIndex].avgScore = (arrayByYear[avgByYearIndex].avgScore + movie.score) / 
                                              arrayByYear[avgByYearIndex].countMovies; 
    } else {
      //if not in the array, push it
      arrayByYear.push({year: movie.year, 
                        avgScore: movie.score,
                        countMovies: 1});
    }
    return arrayByYear;
  }, []);
  //order by score (and year)
  const orderedArrayByAvgScoreByYear = arrayAvgByYear.sort((year1, year2) => {
    if (year1.avgScore === year2.avgScore) {
      return year1.year < year2.year ? -1 : 1;
    }
    return year1.avgScore > year2.avgScore ? -1 : 1;
  });
  //get the best year and score
  const bestYear = orderedArrayByAvgScoreByYear.slice(0,1);

  return `The best year was ${bestYear[0].year} with an average score of ${bestYear[0].avgScore}`;
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
