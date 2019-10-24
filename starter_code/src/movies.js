/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 
function ratesAverage(array) {
    let average = array.reduce((a, b) => {
        return a + Number(b.rate)
    }, 0) / array.length;
    return parseFloat(average.toFixed(2))
}
 
// Iteration 2: Drama movies - Get the average of Drama Movies

function dramaMoviesRate (array) {
    let dramaMovies = array.filter(movie => movie.genre.includes('Drama'));
    if (dramaMovies.length > 0) {
        let dramaRatings = dramaMovies.reduce((a, b) => {
            return a + Number(b.rate)
        }, 0) / dramaMovies.length;
        return parseFloat(dramaRatings.toFixed(2))
    } else {
        return 0
    }

}

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
function orderByYear (array) {
    array.sort((a, b) => {
        if (parseInt(a.year) > parseInt(b.year)) {
            return 1
        } else if (parseInt(a.year) < parseInt(b.year)) {
            return -1
        } else {
            if (a.title > b.title) {
                return 1
            } else if (a.title < b.title) {
                return -1
            } else {
                return 0
            }
        }
    })
    return array
}

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

function howManyMovies (array) {
    let stevenSpiel = array.filter(movie => movie.genre.includes('Drama') && movie.director === 'Steven Spielberg')
    return stevenSpiel.length
}
// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically (array) {
    array.sort((a,b) => {
        if (a.title > b.title) {
            return 1
        } else if (a.title < b.title) {
            return -1
        } else {
            return 0
        }
    })
    let titleArray = [];
    if (array.length > 0){
        if (array.length < 20) {
            for (let i = 0; i < array.length; i++){
                titleArray.push(array[i].title);
            }
        } else {
            for (let i = 0; i < 20; i++) {
                titleArray.push(array[i].title);
            }
        }
    }

    return titleArray
}
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes (array) {
    let newArray = array.map(movie => {
      let newMovie = {
        title: movie.title,
        year: movie.year,
        director: movie.director,
        duration: movie.duration,
        genre: movie.genre,
        rate: movie.rate
      };
      if (newMovie.duration.indexOf(' ') >= 0) {
        let newTimes = newMovie.duration.split(' ');
        newMovie.duration = (parseInt(newTimes[0]) * 60) + parseInt(newTimes[1]);
      } else if (newMovie.duration.indexOf('h') >= 0) {
        newMovie.duration = parseInt(newMovie.duration) * 60;
      } else {
        newMovie.duration = parseInt(newMovie.duration);
      }
      return newMovie
    });
    return newArray
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average

function bestYearAvg (array) {
    if (array.length < 1) {
        return null
    }
    let moviesByYear = [];
    array.forEach((movie) => {
        let yearPresent = false;
        for (let i = 0; i < moviesByYear.length; i++) {
            if (moviesByYear[i][0].year === movie.year) {
                yearPresent = true;
                moviesByYear[i].push(movie);
            }
        }
        if (!yearPresent) {
            moviesByYear.push([movie])
        }
    })
    let bestYear = '';
    let bestRate = 0;
    moviesByYear.forEach((year) => {
        let yearsRate = ratesAverage(year);
        if (yearsRate > bestRate) {
            bestYear = year[0].year;
            bestRate = yearsRate;
        } else if (yearsRate === bestRate) {
            if (parseInt(year[0].year) < parseInt(bestYear)) {
                bestYear = year[0].year;
            }
        }
    })
    return `The best year was ${bestYear} with an average rate of ${bestRate}`
}