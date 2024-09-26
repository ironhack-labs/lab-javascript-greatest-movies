// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const allDirectors = moviesArray.map((movie) => movie.director);
  return allDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const stevenMovies = moviesArray.filter(
    (movie) =>
      movie.director.toLowerCase() === "steven spielberg" &&
      movie.genre.includes("Drama")
  );
  return stevenMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray == "") {
    return 0;
  }

  const totalScore = moviesArray.reduce((accumulator, element) => {
    if (typeof element.score === "number") {
      return accumulator + element.score;
    }
    return accumulator + 0;
  }, 0);

  let result = totalScore / moviesArray.length;

  return Number(result.toFixed(2));
}

// Iteration 4: Drama movies - Get the score average of Drama Movies
function dramaMoviesScore(moviesArray) {
  if (moviesArray == "") {
    return 0;
  }
  const dramaMovies = moviesArray.filter((movie) =>
    movie.genre.includes("Drama")
  ); // get all the drama movies
  if (dramaMovies.length === 0) {
    return 0;
  }
  const totalScore = dramaMovies.reduce((accumulator, movie) => {
    if (typeof movie.score === "number") {
      return accumulator + movie.score;
    }
    return accumulator + 0; // if it's not a number just return accumulator without adding anything
  }, 0);

  let result = totalScore / dramaMovies.length;

  return Number(result.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let orderedMovies = [...moviesArray]; // array cloned
  orderedMovies.sort((a, b) => {
    if (a.year === b.year) {
      return a.title < b.title ? -1 : 1; // ASCENDING order
    }
    return a.year - b.year;
  });
  return orderedMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const orderedArray = moviesArray.map((movie) => movie.title).sort(); // it will sort asc.
  if (orderedArray.length >= 20) {
    return orderedArray.slice(0, 20); // last item not inclued
  }
  return orderedArray;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  const horsToMinutes = moviesArray.map((movie) => {
    let time = movie.duration.split("h");
    let hour = time[0];
    let min = time[1].split("min")[0];
    time = Number(hour * 60) + Number(min);
    // movie.duration = `${time} min`; // it modifies the original array :(
    // is there any better way to do this?
    return {
      director: movie.director,
      duration: time,
      genre: movie.genre,
      score: movie.score,
      title: movie.title,
      year: movie.year,
    };
  });
  return horsToMinutes;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (moviesArray.length == 0) return null;
  let resAvg = 0;
  let resYear = 0;
  moviesArray.forEach((element, index) => {
    const arrayYear = moviesArray.filter(
      (movie) => movie.year === element.year
    ); // get all the movies with the same year
    const avgYear = scoresAverage(arrayYear); // get the avg of those movies
    if (avgYear > resAvg || (resAvg == avgYear && resYear > element.year)) {
      // greatest avg or greatest year in case of same avgs
      resAvg = avgYear;
      resYear = element.year;
    }
  });
  return `The best year was ${resYear} with an average score of ${resAvg}`;
}
