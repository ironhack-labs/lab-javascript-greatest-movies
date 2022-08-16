// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const directors = moviesArray.map((el) => el.director);
  const cleanDirectors = [];
  directors.map(
    (el) => !cleanDirectors.includes(el) && cleanDirectors.push(el)
  );
  // function getAllDirectors(moviesArray) {
  //   const directors = moviesArray.map((movie) => movie.director);
  //   const cleanDirectors = directors.filter((director) => {
  //     let count = directors.filter((v) => v === director).length;
  //     return count === 1 && director;
  //   });
  //   return cleanDirectors;
  // }
  return cleanDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const spielbergDramas = moviesArray.filter(
    (el) => (el.director === "Steven Spielberg") & el.genre.includes("Drama")
  );
  return spielbergDramas.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  const cleanArray = moviesArray.filter((el) => {
    if (typeof el.score === "number") return el;
  });
  if (cleanArray.length === 0) return 0;
  const average = cleanArray.reduce((acc, curr) => {
    return acc + curr.score / moviesArray.length;
  }, 0);
  const average2dec = parseFloat(average.toFixed(2));
  return average2dec;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramas = moviesArray.filter((el) => el.genre.includes("Drama"));
  return scoresAverage(dramas);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const newArr = [...moviesArray];
  function compare(a, b) {
    if (a.year < b.year) {
      return -1;
    }
    if (a.year > b.year) {
      return 1;
    }
    if (a.year === b.year) {
      if (a.title < b.title) return -1; // a is less than b
      if (a.title > b.title) return 1; // a is greater than b
      if (a.title === b.title) return 0;
    }
  }
  return newArr.sort(compare);
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const names = [...moviesArray].map((el) => el.title);
  const newArr = names.sort();
  const just20 = newArr.slice(0, 20);
  return just20;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  const copy = JSON.parse(JSON.stringify(moviesArray));
  const minutes = copy.map((el) => {
    const duration = el.duration;
    let hours = 0;
    let mins = 0;
    hours = duration.split("h");
    let total = hours[0] * 60;
    if (!hours[1]) {
      mins = hours[1].split("min");
      total += parseInt(mins[0]);
    }
    el.duration = total;
    console.log(total);
    return el;
  });
  return minutes;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average

function bestYearAvg(moviesArray) {
  if (moviesArray.length === 0) return null;
  const years = moviesArray.map((el) => el.year).sort();
  console.log(years);
  let bestYear = 0;
  let bestAverage = 0;
  for (const year of years) {
    const thisYear = moviesArray.filter((el) => el.year === year);
    console.log(year);
    const average = scoresAverage(thisYear);
    console.log(average, bestAverage);
    if (average > bestAverage) {
      bestYear = year;
      bestAverage = average;
    }
  }
  return `The best year was ${bestYear} with an average score of ${bestAverage}`;
}
