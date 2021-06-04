// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  let directors = movies.map(movie => movie.director);
  return directors;
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  let numMovies = movies.filter(movies => movies.director === 'Steven Spielberg' && movies.genre.includes('Drama'));
  return numMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if(movies.length !== 0){
  const totalScore = movies.filter(movies => movies.score)
  .reduce((sum, movies) => 
  {if(movies.score){
    return sum + movies.score;
  }
  else{
    return sum;
  }},0)
  let avgScore = totalScore/movies.length;
  return parseFloat(avgScore.toFixed(2));
}
else{
  return 0;
}
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  let numMovies = movies.filter(movies => movies.genre.includes('Drama'));
  return scoresAverage(numMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  let movieClone = JSON.parse(JSON.stringify(movies))
  let movieYear = movieClone.sort((latest, oldest) => {
    if(latest.year > oldest.year){
      return 1;
    }
    else if(latest.year < oldest.year){
      return -1;
    }
    else if(latest.year === oldest.year){
      if(latest.title > oldest.title){
        return 1;
      }
      else if(latest.title < oldest.title){
        return -1;
      }
      else{
        return 0;
      }
    }
    else{
      return 0;
    }
  });
  return movieYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  let movieClone2 = JSON.parse(JSON.stringify(movies));
  let movieTitle = movieClone2.sort((latest, oldest) => { 
  if(latest.title > oldest.title){
    return 1;
  }
  else if(latest.title < oldest.title){
    return -1;
  }
  else{
    return 0;
  }
  })
  .map(movie => movie.title);
  
  if(movieTitle.length > 20){
   return movieTitle.splice(0,20) 
  }
  else{
    return movieTitle
  }
  
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  let movieClone3 = JSON.parse(JSON.stringify(movies));
  movieClone3.map((movie) => {
  if(movie.duration.includes('h') && (movie.duration.length > 4)){
    movie.duration = parseInt(movie.duration)*60 + parseInt(movie.duration.slice(3,5))
  }
  else if(movie.duration.includes('h') && (movie.duration.length < 3)){
    movie.duration = parseInt(movie.duration)*60
  }
  else{
    movie.duration = parseInt(movie.duration)                    
  }
  });
  return movieClone3;
  }   


// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(movies) {
  if(movies.length==0){
    return null;
  }

  let movieClone4 = JSON.parse(JSON.stringify(movies));
  let year = movieClone4.filter((movie, index, movies) => {
    return movies.findIndex(m => m.year === movie.year) === index;
  }) //year array
  let highest = 0;
  let bestYear = 0 ;
  
  year.forEach((yearVal) => {
        let movie= movieClone4.filter(movie => movie.year === yearVal.year) 
                if(scoresAverage(movie) > highest){
                highest = scoresAverage(movie)
                bestYear = yearVal.year
                }
                else if(scoresAverage(movie) == highest)
                {
                bestYear = yearVal.year
                }
  }); 

  return `The best year was ${bestYear} with an average score of ${highest}`;
 
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
