// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(movies) {
  let directorlist = movies.map(function (movie) {
    return movie.director;
  });
  //console.log("print", typeof(directorlist));
  return directorlist;
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(list) {
  let stevenMovies = list.filter(function (newlist) {
    for (i = 0; i < newlist.genre.length; i++) {
      if (newlist.genre[i] === "Drama") {
        return newlist.director === "Steven Spielberg";
      }
    }
  });
  //console.log(stevenMovies);
  return stevenMovies.length;
}
// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
  if (movies.length === 0) {
    return 0;
  }
  let summoviesrate = movies.reduce(function (previousValue, currentValue) {
    if (currentValue.rate === undefined) {
      return previousValue;
    }
    return previousValue + currentValue.rate;
  }, 0);

  return Math.round((summoviesrate / movies.length) * 100) / 100;
}
// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {
  let dramamovies = movies.filter(function (object) {
    for (i = 0; i < object.genre.length; i++) {
      if (object.genre[i] === "Drama") {
        return object;
      }
    }
  });
  return ratesAverage(dramamovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {
  let cloneMovies = [...movies];

  cloneMovies.sort(function (a, b) {
    if (a.year === b.year) {
      if (a.title.toUpperCase() < b.title.toUpperCase()) {
        //console.log(-1, a.title.toUpperCase());
        return -1;
      }
      if (a.title.toUpperCase() > b.title.toUpperCase()) {
        //console.log(1);
        return 1;
      }
      if (a.title.toUpperCase() === b.title.toUpperCase()) {
        return 0;
      }
    }

    return a.year - b.year;
  });

  return cloneMovies;
}

///function orderByYear(movies) {
  //let byYear = movies.map(function (movie) {
    //for (let i = 0; i < movie.length; i++) return movie.year;
 // });
 // console.log(byYear.length);
 // return byYear;
//}



// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
  let sortedTitles = movies.map(function (arrayOfMovies) {
    return arrayOfMovies.title;
  });
  //console.log(sortedTitles);

  sortedTitles.sort(function (a, b) {
    if (a.toUpperCase() < b.toUpperCase()) {
      //console.log(-1, a.title.toUpperCase());
      return -1;
    }
    if (a.toUpperCase() > b.toUpperCase()) {
      // console.log(1);
      return 1;
    }
    if (a.toUpperCase() === b.toUpperCase()) {
      return 0;
    }
  });

  //console.log("print", typeof(movieTitles));
  return sortedTitles.slice(0, 20);
}
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies) {
  updatedMovies = movies.map(function (moviesElements) {
    const clone = { ...moviesElements };
    if (
      moviesElements.duration.includes("h") &&
      moviesElements.duration.includes("min")
    ) {
      let time = moviesElements.duration.split("h ");
      //console.log("show",time)
      let min = time[1].split("min");
      //console.log("show",min);
      let hours = +time[0];
      let minutes = +min[0];
      let updatedDurationMinutes = hours * 60 + minutes;
      clone.duration = updatedDurationMinutes;
      //console.log(clone);
    } else if (moviesElements.duration.includes("h")) {
      let time = moviesElements.duration.split("h");
      //console.log("show",time)

      //console.log("show",min);
      let updatedDurationMinutes = +time[0] * 60;
      clone.duration = updatedDurationMinutes;
      //console.log(clone);
    } else {
      let min = moviesElements.duration.split("min");
      //console.log("show",time)
      //let min = time[1].split("min");
      //console.log("show",min);
      let updatedDurationMinutes = +min[0];
      clone.duration = updatedDurationMinutes;
      //console.log(clone);
    }

    return clone;
  });
  //console.log("print", updatedMovies);
  return updatedMovies;
}
// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

function bestYearAvg(movies) {
  if (movies.length === 0) {
    return null;
  }
  let yearlist = movies.map(function (movie) {
    let moviesRateTotal = movies.reduce(function (acc, number) {
      return acc + number.rate;
    }, 0);
    console.log(moviesRateTotal);

    return { year: movie.year, rate: movie.rate };
  });
  console.log(yearlist);
  return yearlist;
}

// let oldestYear = movie.sort(function(a,b){
//    if (a.rate === b.rate){
//        connsole.log(a.year -b.year)
//       return a.year - b.year;
//        }
//connsole.log(a.year -b.year)
//   });

//   return oldestYear
