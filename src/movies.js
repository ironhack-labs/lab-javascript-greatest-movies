// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(movies) {
  const newArray = movies.map(function (directorsName) {
    return directorsName.director;
  });
  return newArray;
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

function removeDirectorDuplicates(movies) {
  const removeDuplicates = movies.reduce(function (total, el) {
    if (!total.includes(el.director)) {
      total.push(el.director);
    }
    return total;
  }, []);

  console.log(removeDuplicates);
}
removeDirectorDuplicates(movies);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  const stevenDrama = moviesArray.filter(function (el) {
    return el.genre.includes("Drama") && el.director === "Steven Spielberg";
  });
  return stevenDrama.length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
  if (movies.length === 0) {
    return 0;
  }
  const movieRate = movies.reduce(function (total, el) {
    const update = total + el.rate;
    return update;
    // if(el.rate === 0){
    //     return update;
    // }
  }, 0);

  const avgRate = movieRate / movies.length;
  return Math.round(avgRate * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {
  const dramaMovies = movies.filter(function (el) {
    return el.genre.includes("Drama");
  });

  if (dramaMovies.length === 0) {
    return 0;
  }

  //   const dramaRate = dramaMovies.map(function (el) {
  //     const rate = el.rate;
  //     return rate;
  //   });

  const dramaTotal = dramaMovies.reduce(function (total, el) {
    if (!el.rate) {
      return total;
    }
    const update = total + el.rate;
    return update;
  }, 0);
  const avgRate = dramaTotal / dramaMovies.length;
  return Math.round(avgRate * 100) / 100;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const sortMovies = [...movies].sort(function (a, b) {
    if (a.year === b.year) {
      if (a > b) {
        return 1;
      } else {
        return -1;
      }
    }
    return a.year - b.year;
  });
  return sortMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  const titles = movies.map(function (el) {
    const updateTitles = el.title;
    return updateTitles;
  });
  const top20Titles = titles.sort();
  top20Titles.splice(20);
  return top20Titles;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  const duration = [...movies].map(function (el) {
    //el.duration = el.duration.splice(0, 3); // remove letters from string

    const stringHour = el.duration[0];
    const stringMinutes = el.duration[3] + el.duration[4];

    const hour = Number(stringHour) * 60;
    const minutes = Number(stringMinutes);

    const minutesDuration = hour + minutes;

    el.duration = minutesDuration;

    return el;
  });
  return duration;
}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
