// Iteration 1
function getAllDirectors(movies) {
    let uniqueDirectors = [];
      movies.forEach((movie) => {
      if (!uniqueDirectors.includes(movie.director)) {
        uniqueDirectors.push(movie.director);
      }
    });
    return uniqueDirectors;
}

// Iteration 2
function howManyMovies(movies) {
    if (!movies) return 0;
      let stevenSpielbergDrama = movies.filter((movie) => {
      return (
        movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
      );
    });
      return stevenSpielbergDrama.length;
  }

// Iteration 3
function scoresAverage(movies) {
    if (movies.length === 0) return 0;
    let score = movies.reduce((accumulator, actualValue) => {
        if (actualValue.score) {
            return accumulator + actualValue.score;
        } else {
            return accumulator;
        }
    }, 0);
let average = (score / movies.length).toFixed(2);
return Number(average);
}

// Iteration 4

function dramaMoviesScore(movies) {
    if (movies.length === 0) return 0;
      let dramaMovies = movies.filter((movie) => movie.genre.includes("Drama"));
      return scoresAverage(dramaMovies);
  }

// Iteration 5

function orderByYear(movies) {
    let moviesInner = movies.map((movie) => movie);
  
    moviesInner.sort((movieA, movieB) => {
      if (movieA.year > movieB.year) return movieA.year - movieB.year;
      if (movieA.year < movieB.year) return movieA.year - movieB.year;
      else return movieA.title.localeCompare(movieB.title);
    });
  
    return moviesInner;
  }
  

// Iteration 6

function orderAlphabetically(movies) {
    return movies 
    .map((movie) => movie.title)
    .sort()
    .slice(0,20);
}

// BONUS - Iteration 7

function turnHoursToMinutes(movies) {
    return movies.map(movie => {
      const duration = movie.duration;
      const timeParts = duration.match(/(\d+)h (\d+)min/);
      const hours = parseInt(timeParts[1], 10);
      const minutes = parseInt(timeParts[2], 10);
      
      const totalMinutes = (hours * 60) + minutes;

      return {
        ...movie,
        duration: totalMinutes
      };
    });
  }
  
// BONUS - Iteration 8

function bestYearAvg(movies) {
    if (movies.length === 0) return null;
  
    const yearScores = {};
  
    movies.forEach(movie => {
      const year = movie.year;
      const score = movie.score;
  
      if (!yearScores[year]) {
        yearScores[year] = { totalScore: 0, count: 0 };
      }
  
      yearScores[year].totalScore += score;
      yearScores[year].count += 1;
    });
      let bestYear = null;
    let bestAvgScore = 0;
  
    for (const year in yearScores) {
      const avgScore = yearScores[year].totalScore / yearScores[year].count;
  
      if (avgScore > bestAvgScore || (avgScore === bestAvgScore && year < bestYear)) {
        bestAvgScore = avgScore;
        bestYear = year;
      }
    }
  
    return `The best year was ${bestYear} with an average score of ${bestAvgScore.toFixed(1)}`;
  }