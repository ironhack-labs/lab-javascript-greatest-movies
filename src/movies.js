// Iteration 1: All directors? - Get the array of all directors.
const getAllDirectors = (movieArr) => {
  let directors = movieArr.map((movie) => {
    return movie.director;
  });
  // _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
  const uniqueDirectors = directors.filter((director, index) => {
    return directors.indexOf(director) === index;
  });

  return uniqueDirectors;
};

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

const howManyMovies = (array) => {
  let spielbergMovies = array.filter((movie) => {
    return (
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    );
  });
  return spielbergMovies.length;
};

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

const ratesAverage = (array) => {
  if (!array.length) {
    return 0;
  }

  let totalRates = array.reduce((total, currentMovie) => {
    if (currentMovie.rate) {
      return total + currentMovie.rate;
    } else {
      return total;
    }
  }, 0);

  console.log(totalRates);
  return Number((totalRates / array.length).toFixed(2));
};

// Iteration 4: Drama movies - Get the average of Drama Movies
const dramaMoviesRate = (array) => {
  let dramaMovies = array.filter((movie) => {
    return movie.genre.includes("Drama");
  });
  return ratesAverage(dramaMovies);
};

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
const orderByYear = (array) => {
  let titleArray = array.sort((movie1, movie2) => {
    return movie1.year - movie2.year;
    if (movie1.year === movie2.year) {
      if (movie1 > movie2) {
        return movie1;
      } else {
        return movie2;
      }
    }
  });
  return titleArray;
};

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = (array) => {
  let titleArray = array.map((movie) => {
    return movie.title;
  });

  titleArray.sort();

  if (titleArray.length < 20) {
    return titleArray;
  } else {
    let firstTwenty = titleArray.filter((element, index) => {
      return index < 20;
    });
    return firstTwenty;
  }
};

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
const turnHoursToMinutes = (array) => {
  let newArray = array.map(function (movie) {
    let hourIndex = movie.duration.indexOf("h");
    let hours = movie.duration.slice(0, hourIndex);
    let minutesIndex = movie.duration.indexOf("min");
    let minutes = movie.duration.slice(hourIndex + 1, minutesIndex);
    movie.duration = parseInt(hours * 60) + parseInt(minutes);
    return movie;
  });
  return newArray;
};

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
const bestYearAvg = (array) => {};
