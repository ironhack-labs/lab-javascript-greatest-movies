// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArr) {
    let directorsArr = moviesArr.map(movie => movie.director);
    return directorsArr;
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies (moviesArr) {
    let movies = moviesArr.filter(function (movie) {
      return (movie.director === 'Steven Spielberg' && movie.genre.includes('Drama'))
    });
    return movies.length;
  }

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(moviesArr) {
    let avg = 0;
    if (moviesArr.length === 0) {
      return avg;
    }

    let sumOfRates = moviesArr.reduce (function(ac, cur) {
      if (cur.rate === null || cur.rate === undefined || cur.rate === '') {
        return ac + 0;
      } else {
        return ac + cur.rate;
      }
      
    }, 0)

    avg = Math.round( (sumOfRates/moviesArr.length) * 100 ) / 100 
       
    return (avg);
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(moviesArr) {
    let dramaMovies = moviesArr.filter(movie => movie.genre.includes('Drama'))

    let dramaAvg = ratesAverage(dramaMovies);

    return dramaAvg;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(moviesArr) {
    let sorted = moviesArr.map(movie => movie);
    sorted.sort((a,b) => (a.year > b.year) ? 1 : (a.year === b.year) ? ((a.title > b.title) ? 1 : -1) : -1)
    return sorted
  }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(moviesArr) {
    let titles = moviesArr.map(movie => movie.title);
    let sorted = titles.sort((a,b) => (a > b) ? 1 : -1 )
  
    if (sorted.length > 20) {
      for (let i = 0; i <= 19; i++) {
        console.log(sorted[i])
      } 
    } else {
        sorted.forEach(function(i) {
          console.log(sorted[i])
        })
      }
    sorted = sorted.slice(0,20)
    return sorted;
  }


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(moviesArr) {
    let moviesArrCopy = JSON.parse(JSON.stringify(moviesArr));
    let moviesMod = moviesArrCopy.map(
      function(movie) {
        let splitStr;
        let hours;
        let minutes;
        
        if (movie.duration.length === 2) {
            movie.duration = parseInt(movie.duration)*60
        } else if (movie.duration.length > 2 && movie.duration.length < 6) {
            movie.duration = parseInt(movie.duration)
        } else {
          splitStr = movie.duration.split(" ");
          hours = parseInt(splitStr[0])*60;
          minutes = parseInt(splitStr[1]);
          movie.duration = hours + minutes;
        }
        return movie;
      })
  return moviesMod;
}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
