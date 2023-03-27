// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) { 
    
  const directors = movies.map(movie => movie.director);

  
  const uniqueDirectors = [...new Set(directors)];

  
  return uniqueDirectors;

}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
    if (movies.length === 0) {
        return 0;
      }
    
      
      const spielbergMovies = movies.filter(function(movie) {
        return movie.director === 'Steven Spielberg' && movie.genre.includes('Drama');
      });
    
      return spielbergMovies.length;
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
          
  if (movies.length === 0) {
    return 0;
  }

  const scoresSum = movies.reduce((sum, movie) => {
    
    if (movie.score) {
      return sum + movie.score;
    }
    
    return sum;
  }, 0);

 
  const averageScore = scoresSum / movies.length;


  return Math.round(averageScore * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
   
    const dramaMovies = movies.filter(movie => movie.genre.includes("Drama"));
    const dramaMoviesScoreSum = dramaMovies.reduce((sum, movie) => {
      if (movie.score) {
        return sum + movie.score;
      } else {
        return sum;
      }
    }, 0);
    const dramaMoviesCount = dramaMovies.length;
    if (dramaMoviesCount === 0) {
      return 0;
    } else {
      return parseFloat((dramaMoviesScoreSum / dramaMoviesCount).toFixed(2));
    }

}
 
function orderByYear(movies) {

  const sortedMovies = [...movies].sort((a, b) => {
    if (a.year !== b.year) {
      return a.year - b.year;
    } else {
      return a.title.localeCompare(b.title);
    }
  });
  return sortedMovies;
}
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
    const titles = movies.map((movie) => movie.title).sort();
    const result = titles.length > 20 ? titles.slice(0, 20) : titles;
    return result;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
    const result = movies.map((movie) => {
        const durationArray = movie.duration.split(" ");
        let minutes = 0;
        for (let i = 0; i < durationArray.length; i++) {
          if (durationArray[i].includes("h")) {
            minutes += parseInt(durationArray[i]) * 60;
          } else {
            minutes += parseInt(durationArray[i]);
          }
        }
        return { ...movie, duration: minutes };
      });
      return result;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(movies) {
    if (movies.length === 0) {
        return null;
      }
    
      // create an object to store the average score for each year
      let yearScores = {};
    
      // loop through the movies array
      movies.forEach(movie => {
        let year = movie.year;
        let score = movie.score;
        // if the year is not in the yearScores object, create a new entry
        if (!yearScores[year]) {
          yearScores[year] = { totalScore: score, count: 1 };
        } else {
          // if the year is already in the yearScores object, update the entry
          yearScores[year].totalScore += score;
          yearScores[year].count++;
        }
      });
    
      // calculate the average score for each year and store it in the yearScores object
      Object.keys(yearScores).forEach(year => {
        yearScores[year].avgScore = yearScores[year].totalScore / yearScores[year].count;
      });
    
      // find the year with the highest average score
      let bestYear = null;
      let bestAvgScore = 0;
      Object.keys(yearScores).forEach(year => {
        if (yearScores[year].avgScore > bestAvgScore) {
          bestYear = year;
          bestAvgScore = yearScores[year].avgScore;
        } else if (yearScores[year].avgScore === bestAvgScore) {
          // if there is a tie, choose the oldest year
          if (Number(year) < Number(bestYear)) {
            bestYear = year;
            bestAvgScore = yearScores[year].avgScore;
          }
        }
      });
    
      return `The best year was ${bestYear} with an average score of ${bestAvgScore}`;
    }

