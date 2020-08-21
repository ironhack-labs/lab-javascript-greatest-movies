// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(movies) {
  const mydirectors = movies.map((x) => x.director);

  // _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
  return mydirectors.filter((x, index) => mydirectors.indexOf(x) === index);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const stevenMovies = movies.filter(
    (x) => x.director == "Steven Spielberg" && x.genre.includes("Drama")
  );
  return stevenMovies.length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
  if (movies.length == 0) {
    return 0;
  }

  //
  const emptyRates = movies.filter((x) => !x.rate).map((x) => (x.rate = 0));

  const myAvg =
    Math.round(
      (movies.reduce((accumulator, x) => accumulator + x.rate, 0) * 100) /
        movies.length
    ) / 100;
  return myAvg;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {
  return ratesAverage(movies.filter((x) => x.genre.includes("Drama")));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  let sortMovies = movies
    .map((x) => x)
    .sort((a, b) => {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
      return 0;
    })
    .sort((a, b) => {
      return a.year - b.year;
    });

  return sortMovies;
}
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  return movies
    .map((x) => x.title)
    .sort()
    .slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  const moviesClone = JSON.parse(JSON.stringify(movies));

  moviesClone.forEach((x) => {
    if (x.duration.includes("h ")) {
      x.duration =
        x.duration.split("min").join("").split("h ").join("")[0] * 60 +
        Number(
          x.duration.split("min").join("").split("h ").join("")[1] +
            x.duration.split("min").join("").split("h ").join("")[2]
        );
    } else if (x.duration.includes("h")) {
      x.duration = Number(x.duration.split("h").join("") * 60);
    } else {
      x.duration = Number(x.duration.split("min").join(""));
    }
  });

  return moviesClone;
}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

// getAllDirectors
// howManyMovies
// ratesAverage
// dramaMoviesRate
// orderByYear
// orderAlphabetically
// turnHoursToMinutes

function bestYearAvg(movies) {
  if (movies.length == 0) {
    return null;
  }

  let moviesClone = JSON.parse(JSON.stringify(movies));

  let currentYear = 0;
  let sum = 0;
  let indexCount = 0;
  let biggestYearRate = [0, 0];

  moviesClone = orderByYear(moviesClone);

  dateAndRate = moviesClone.map((x) => [x.year, x.rate]);
  dateAndRate.forEach(eachOneofUS);

  return (
    "The best year was " +
    biggestYearRate[0] +
    " with an average rate of " +
    biggestYearRate[1]
  );

  function eachOneofUS(element, i, array) {
    if (biggestYearRate[1] == 0) {
      currentYear = element[0];
      biggestYearRate[0] = element[0];
      biggestYearRate[1] = 0.01;
    }

    if (element[0] != currentYear) {
      if (biggestYearRate[1] < sum / (i - indexCount)) {
        biggestYearRate = [
          currentYear,
          Math.round((sum / (i - indexCount)) * 100) / 100,
        ];
      }
      currentYear = element[0];
      indexCount = i;
      sum = 0;
    }
    sum += element[1];
  }
}

// function getAllFromProperty(movies, property) {
//   const mydirectors = movies.map((x) => x.property);

//   return mydirectors.filter((x, index) => mydirectors.indexOf(x) === index);
// }
