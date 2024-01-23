// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const allDirectors = moviesArray.map(movies => movies.director);
    return allDirectors; 
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const spielbergMovies = moviesArray.filter(movies => movies.director === 'Steven Spielberg' && movies.genre.includes('Drama'));
        return spielbergMovies.length; 
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    const averageScore = moviesArray.reduce((acc, current) => {
        if (current.score !== undefined) {
            acc += current.score;
        }
        return acc;
    }, 0) / moviesArray.filter (movies => movies.score).length;

        if (isNaN(averageScore)){
            return 0;
        }
    return Math.round(averageScore * 100) / 100; 

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(movie => movie.genre.includes('Drama'));
    
    if (dramaMovies.length === 0) {
      return 0;
    }
  
    const dramaScores = dramaMovies.map(movie => movie.score);
    const totalDramaScore = dramaScores.reduce((acc, score) => acc + score, 0);
    const averageDramaScore = totalDramaScore / dramaMovies.length;
  
    return parseFloat(averageDramaScore.toFixed(2));
  }
  

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const sortMovies = moviesArray.slice();
    sortMovies.sort((a,b) => {
        if (a.year !== b.year) {
            return a.year - b.year;
        } else {
            return a.title.localeCompare(b.titel);
        }
    });
    return sortMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const sortMovies = moviesArray.slice();
    sortMovies.sort((a,b) => a.title.localeCompare(b.titel));
    const titles = sortMovies.slice(0, 20).map(movies => movies.title);

    return titles;

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    const modifiedMovies = moviesArray.slice();
    modifiedMovies.forEach(movies => {
      const durationArray = movies.duration.split(' ');
  
      let totalMinutes = 0;
  
      for (const part of durationArray) {
        if (part.includes('h')) {
          totalMinutes += parseInt(part) * 60;
        } else if (part.includes('min')) {
          totalMinutes += parseInt(part);
        }
      }
      movies.duration = totalMinutes;
    });
  
    return modifiedMovies;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
      const years = {};
      
      moviesArray.forEach(movies => {
        if (movies.year in years) {
          years[movies.year].sum += movies.score;
          years[movies.year].count += 1;
        } else {
          years[movies.year] = { sum: movies.score, count: 1 };
        }
      });
    
      const averages = Object.entries(years).map(([year, { sum, count }]) => ({
        year: parseInt(year), average: sum / count,
      }));
      averages.sort((a, b) => b.average - a.average || a.year - b.year);

      if (averages.length === 0) { 
        return null; }

      const bestYear = averages[0];
  
      return `The best year was ${bestYear.year} with an average score of ${bestYear.average.toFixed(2)}`;
    
}
