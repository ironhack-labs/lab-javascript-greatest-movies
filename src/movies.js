// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
        
        const newMoviesArray = [...moviesArray];
    
        const directors = newMoviesArray.map(movie => movie.director);
    
        return directors;
    }
    

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(someMovies) {
    return someMovies.filter(
      (eachMovie) =>
        eachMovie.director === "Steven Spielberg" &&
        eachMovie.genre.includes("Drama")
    ).length;
  }  

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  
    if (!moviesArray.length) {
      return 0;
    }
  
    let total = moviesArray.reduce((a, b) => {
      if (b.score) {
        return a + b.score;
      } else {
        return a;
      }
    }, 0);
  
    return Number((total / moviesArray.length).toFixed(2));
  }

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let dramaMovies = moviesArray.filter((eachMovie) =>
      eachMovie.genre.includes("Drama")
    );

    if (!dramaMovies.length) {
        return 0;
      }
    
      let total = dramaMovies.reduce((a, b) => {
        if (b.score) {
          return a + b.score;
        } else {
          return a;
        }
      }, 0);
    
      return Number((total / dramaMovies.length).toFixed(2));
  }

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const newArray = [...moviesArray]

    newArray.sort((a, b) => {
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
        }
      },0);
      return newArray;
    }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const orderAlphabetically = [...moviesArray]

    orderAlphabetically.sort((a, b) => {
        if (a.title > b.title) {
            return 1;
          } else if (b.title > a.title) {
            return -1;
          }
    });

    const titleOrder = orderAlphabetically.map(movie => movie.title)
    return titleOrder.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  return moviesArray.map(function(movie) {
      const duration = movie.duration;
      const hoursIndex = duration.indexOf("h");
      const minutesIndex = duration.indexOf("min");
      
      let totalMinutes = 0;
      
      if (hoursIndex !== -1) {
          totalMinutes += parseInt(duration.substring(0, hoursIndex)) * 60;
      }
      
      if (minutesIndex !== -1) {
          totalMinutes += parseInt(duration.substring(hoursIndex + 1, minutesIndex));
      }
      
      return {
          ...movie,
          duration: totalMinutes
      };
  });
}

// BONUS - Iteration 8: Best yearly score average
function bestYearAvg(moviesArray) {
  if (moviesArray.length === 0) {
      return null;
  }

  const yearlyData = {};

  for (const movie of moviesArray) {
      const year = movie.year;
      const score = movie.score;

      if (!yearlyData[year]) {
          yearlyData[year] = { totalScore: 0, movieCount: 0 };
      }

      yearlyData[year].totalScore += score;
      yearlyData[year].movieCount += 1;
  }

  let bestYear = null;
  let bestAverage = -1;

  for (const year in yearlyData) {
      const averageScore = yearlyData[year].totalScore / yearlyData[year].movieCount;

      if (averageScore > bestAverage || (averageScore === bestAverage && year < bestYear)) {
          bestYear = year;
          bestAverage = averageScore;
      }
  }

  return `The best year was ${bestYear} with an average score of ${bestAverage}`;
}
