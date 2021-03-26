// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(moviesArr) {
    const directorsArr = moviesArr.map(function (movie) {
        return movie.director;
    })
    return directorsArr
}


// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(moviesArr) {
    const stevenSpielbergDrama = moviesArr.filter(function (movie) {
        if (movie.director === 'Steven Spielberg' && movie.genre.includes('Drama'))
            return true
    })
    return stevenSpielbergDrama.length
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(moviesArr) {
    if (moviesArr.length === 0) {
        return 0;
    }

    let ratesSum = moviesArr.reduce(function (total, movie) {
        if (typeof movie.rate != 'number') {
            movie.rate = 0;
        }
        return total + movie.rate;
    }, 0);
    return Math.round((ratesSum / moviesArr.length) * 100) / 100;
}


// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(moviesArr) {
    const dramaMovies = moviesArr.filter(function (movie) {
        if (movie.genre.includes('Drama'))
            return true
    })
    return ratesAverage(dramaMovies);
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(moviesArr) {
    let newArray = [...moviesArr];
    const sortedByYear = newArray.sort(function (a, b) {
        if (a.year != b.year) {
            return a.year - b.year;
        } else if (b.title > a.title) {
            return -1;
        }
    });
    return sortedByYear;
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(moviesArr) {

    let newArray = [...moviesArr];

    const sortedByTitle = newArray.sort(function (a, b) {
        if (a.title > b.title) {
            return 1;
        } else {
            return -1
        }
    })

    const firstTwentyMovies = sortedByTitle.filter(function (movie) {
        if (sortedByTitle.indexOf(movie) < 20) {
            return true
        }
    })

    const firstTwentyMoviesTitle = firstTwentyMovies.map(function (movie) {
        return movie.title
    })
    return firstTwentyMoviesTitle
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(moviesArr) {
  
    let newArray = [...moviesArr];
    
    const moviesInMinutes = newArray.map(function (movie) {
      const durations = movie.duration.split('h');
  
      durations[0] = durations[0] * 60;
      durations[1] = durations[1].slice(1, -3);
      durations[1] = parseInt(durations[1]);
  
      let sumMin = 0;
      for (duration of durations) {
        sumMin += duration;
      }
  
      movie.duration = sumMin;
      return movie
    });
    return moviesInMinutes;
  }


// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average