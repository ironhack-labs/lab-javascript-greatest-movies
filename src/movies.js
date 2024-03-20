// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

const test =[{
    "title": "The Shawshank Redemption",
    "year": 1994,
    "director": "Frank Darabont",
    "duration": "2h 22min",
    "genre": ["Crime","Drama"],
    "score": 9.3
  }]

function getAllDirectors(moviesArray) {
  // using indexOf as uniqueness to filter out duplicates.
  return moviesArray
    .map((movie) => movie.director)
    .filter(
      (director, index, directors) => directors.indexOf(director) === index
    );
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  // filtering out and then just ... measuring the length :)).
  return moviesArray.filter(
    (movie) =>
      movie.director === `Steven Spielberg` && movie.genre.includes("Drama")
  ).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  // if there are movied in the array  calculate the score if there is a score, and format the result. easy-peasy :D
  return moviesArray.length > 0
    ? parseFloat(
        (
          moviesArray.reduce(
            (total, movie) => total + (movie.score ? movie.score : 0),
            0
          ) / moviesArray.length
        ).toFixed(2)
      )
    : 0;
}



// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  // could have laso done it in one liner .. but meh .. to long ;)

  // filtering for Dramas !
  dramaMoviesArray = moviesArray.filter((movie) =>
    movie.genre.includes("Drama")
  );
  // returning 0 if no Dramas !
  return dramaMoviesArray.length > 0
    ? parseFloat(
        (
          dramaMoviesArray.reduce(
            (total, movie) => total + (movie.score ? movie.score : 0),
            0
          ) / dramaMoviesArray.length
        ).toFixed(2)
      )
    : 0;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  return moviesArray.toSorted((a, b) => {
    if (a.year !== b.year) {
      return a.year - b.year;
    }
    // If years are the same, sort alphabetically, including ... french elements 
    return a.title.localeCompare(b.title);
  });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const top20Movies = [];
    sortedMoviesArray = moviesArray.toSorted((a, b) => a.title.localeCompare(b.title));
    moviesArray.toSorted((a, b) => a.title.localeCompare(b.title)).map((movie, maxList) => maxList < 20 ? top20Movies.push(movie.title) : top20Movies );
    return top20Movies
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  return moviesArray.map((movie) => ({
    ...movie,
    duration:
      parseInt((movie.duration.match(/(\d+)h/) || [])[1] || "0", 10) * 60 +
      parseInt((movie.duration.match(/(\d+)min/) || [])[1] || "0", 10),
  }));
}


// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (!moviesArray.length) return null;
    
    // creating an object with unique years as the KEY with another object with 2 keys the total score for that year and how many titles had that year.
    // it starts from an empty object.
    // if it encounters the year for the first time,it creates the key entry since acc is persistent.
    const yearStats = moviesArray.reduce((acc, { year, score }) => {
      if (!acc[year]) acc[year] = { totalScore: 0, count: 0 };
      acc[year].totalScore += score;
      acc[year].count++;
      return acc;
    }, {});
  
    // creating the best of the best
    let best = { year: null, avgScore: 0 };
    // console.log(yearStats)



    // looing through the keys(years) in the object, calculating average and checking to see which is the best
    for (const year in yearStats) {
      const { totalScore, count } = yearStats[year];
      const avgScore = parseFloat((totalScore / count).toFixed(1));
  
      if (avgScore > best.avgScore || (avgScore === best.avgScore && (best.year === null || year < best.year))) {
        best.year = year;
        best.avgScore = avgScore;
      }
    }
  
    // yeah .. right :D
    return `The best year was ${best.year} with an average score of ${best.avgScore}`;
  }
  