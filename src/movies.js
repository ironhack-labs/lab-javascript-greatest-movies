// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map(movie => movie.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    return moviesArray.filter(movie => movie.director === "Steven Spielberg" && movie.genre.includes("Drama")).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) return 0;

    const totalScore = moviesArray.reduce((sum, movie) => {
        if (movie.score) {
            return sum + movie.score;
        }
        return sum;
    }, 0);
return Number((totalScore / moviesArray.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    let dramaArray= moviesArray.filter(movie => movie.genre.includes("Drama"))
    if (dramaArray.length=== 0 ){return 0 ;}
    const totalScore = dramaArray.reduce((sum, movie) => {
        if (movie.score) {
            return sum + movie.score;
        }
        return sum;
    }, 0);
return Number((totalScore / dramaArray.length).toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
   let sortedArray = [...moviesArray];
   return  sortedArray.sort((a,b) => {if(a.year !== b.year) {return a.year-b.year}
    return a.title.localeCompare(b.title);
});
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
let sortedMovies = [...moviesArray];

    sortedMovies.sort((a, b) => a.title.localeCompare(b.title));

    let onlyTitles = sortedMovies.map(movie => movie.title);

    return onlyTitles.slice(0, 20);
}

function turnHoursToMinutes(moviesArray) {
  return moviesArray.map(movie => {
    const durationStr = movie.duration;
    let totalMinutes = 0;

    if (typeof durationStr === 'string') {
      const hoursMatch = durationStr.match(/(\d+)h/);
      if (hoursMatch) {
        totalMinutes += parseInt(hoursMatch[1], 10) * 60;
      }
      const minutesMatch = durationStr.match(/(\d+)min/);
      if (minutesMatch) {
        totalMinutes += parseInt(minutesMatch[1], 10);
      }
    } else if (typeof durationStr === 'number') {
      totalMinutes = durationStr;
    }

    return {
      ...movie,
      duration: totalMinutes
    };
  });
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (moviesArray.length === 0) return null;

  const yearsData = {};

  moviesArray.forEach(movie => {
    const year = movie.year;
    const score = typeof movie.score === 'number' ? movie.score : 0;
    if (!yearsData[year]) {
      yearsData[year] = { totalScore: 0, count: 0 };
    }
    yearsData[year].totalScore += score;
    yearsData[year].count += 1;
  });

  let bestYear = null;
  let bestAvg = -Infinity;
  for (const year in yearsData) {
    const avg = yearsData[year].totalScore / yearsData[year].count;
    if (avg > bestAvg) {
      bestAvg = avg;
      bestYear = Number(year);
    } else if (avg === bestAvg) {
      if (Number(year) < bestYear) {
        bestYear = Number(year);
      }
    }
  }

  const formattedAvg = Number.isInteger(bestAvg)
    ? bestAvg
    : Number(bestAvg.toFixed(1));

  return `The best year was ${bestYear} with an average score of ${formattedAvg}`;
}
