// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arrayOfMovies) {
    let allDirectors = []; {
        for (let movie of arrayOfMovies) {
            allDirectors.push(movie.director)
        }
    }
    return allDirectors
};

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arrayOfMovies) {
    if (arrayOfMovies.length === 0) {
        return 0;
    } let dramasbySpielberg = 0;
      let dramas = 0;
      let bySpielberg = 0;
      for (movie of arrayOfMovies) {
          if (movie.director === "Steven Spielberg" && movie.genre.includes("Drama")) {
            dramasbySpielberg += 1;
          } else if (movie.director === "Steven Spielberg") {
            bySpielberg += 1;
          } else (movie.genre.includes("Drama")); {
            dramas += 1;
          }
      } return dramasbySpielberg
};

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(arrayOfMovies) {
    if (arrayOfMovies.length === 0) {
        return 0;
    }
    let totalRate = 0;
    let averageRate = 0;
    for (movie of arrayOfMovies) {
        if (!movie.rate) {
            continue;
        }
        totalRate += movie.rate;
    }
        averageRate = totalRate / arrayOfMovies.length;
        averageRate = parseFloat(averageRate.toFixed(2));
        return averageRate;
};

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(arrayOfMovies) {
    if (arrayOfMovies.length === 0) {
        return 0;
    }
    let totalRateDrama = 0;
    let averageRateDrama = 0;
    let counter = 0;
     for (movie of arrayOfMovies) {
      if (movie.genre.includes("Drama") && movie.rate) {
          counter += 1;
          totalRateDrama += movie.rate;}
    } 
    if (counter === 0) {
        return 0
    }
    averageRateDrama = totalRateDrama / counter;
    averageRateDrama = parseFloat(averageRateDrama.toFixed(2));
    return averageRateDrama;
      }
  
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
 
  function orderByYear(arrayOfMovies) {
    let moviesOrderedByYear = [...arrayOfMovies];
    moviesOrderedByYear.sort(function(a,b) {
        if (a.year !== b.year) {
            return a.year - b.year;
        } else {
            return a.title.localeCompare(b.title);
        }
    });
    return moviesOrderedByYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

  function orderAlphabetically(arrayOfMovies) {
    let moviesOrderdAlphabetically = [...arrayOfMovies]
    moviesOrderdAlphabetically.sort(function (a,b){
      return a.title.localeCompare(b.title)
    })
    moviesOrderdAlphabetically = moviesOrderdAlphabetically.map(function (a) {
      return a.title
    })
    let top20 = moviesOrderdAlphabetically.splice(0,20)
    return top20
  }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arrayOfMovies) {
    let moviesTimeWithMinutes = [...arrayOfMovies];
    moviesTimeWithMinutes.map(function (movie) {
      if (movie.duration.length < 3) {
    return movie.duration = Number(movie.duration[0]) * 60
  }
    else if (movie.duration.length > 5) {
      return movie.duration = Number(movie.duration[0]) * 60 + Number(movie.duration[3]) * 10 + Number(movie.duration[4]);
    }
    else {
      return movie.duration = Number(movie.duration[0]) * 10 + Number(movie.duration[1]);
    }
    })
    return moviesTimeWithMinutes;
  }



// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

