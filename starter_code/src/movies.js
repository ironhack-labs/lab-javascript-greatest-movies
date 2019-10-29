/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear (movies) 
{ 
    let sortedMovies = movies.sort(function(firstMovie, secondMovie) 
    {
        if(firstMovie.year < secondMovie.year) {
            return -1;
        }

        if(firstMovie.year > secondMovie.year) {
            return 1;
        }

        if(firstMovie.year == secondMovie.year) {

            if(firstMovie.title < secondMovie.title) {
                return -1;
            }

            if(firstMovie.title > secondMovie.title) {
                return 1;
            }

            return 0;
        }

    })

    return sortedMovies.map(function(movie) {
        return movie;
    })
};


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct


function howManyMovies (movies) 
{
    let stevenSpielbergDramaMovies = movies.filter(function(movie) {

        return ((movie.genre.indexOf("Drama") != -1)  && (movie.director == "Steven Spielberg")) 
    })

    return stevenSpielbergDramaMovies.length;
   
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles


function orderAlphabetically (movies)
{
    let moviesCopy = movies.map(function(movie) {
        return movie;
    })

    let moviesOrderedAlphabetically = moviesCopy.sort(function(firstMovie, secondMovie) 
    {
        if(firstMovie.title > secondMovie.title) {
            return 1;
        }
        if(firstMovie.title < secondMovie.title) {
            return -1;
        }
        if(firstMovie.title === secondMovie.title) {
            return 0;
        }
    })

    let orderedFirstTwentyMovies = moviesOrderedAlphabetically.slice(0,20);
    
    
    
    let firstTwentyMoviesTitles = orderedFirstTwentyMovies.map(function(movie){
        return movie.title;
    })
    

    return firstTwentyMoviesTitles;
}
// Iteration 4: All rates average - Get the average of all rates with 2 decimals
  function ratesAverage(movies) 
{
    if(movies.length == 0) {
        return 0;
    }

    let moviesRates = movies.map(function (movie) {
        let rate = Number(movie.rate) ? Number(movie.rate) : 0;
        return rate;
    })

    let reducedRates = moviesRates.reduce(function (acu, rate) {
        var sum = acu + rate;
        return sum;
    }, 0);

    let rateAverage = parseFloat((reducedRates/movies.length).toFixed(2));
    
    return rateAverage;
}
// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) 
{
    if(movies.length == 0) {
        return 0;
    }

    let dramaMovies = movies.filter(function (movie){
        return movie.genre.indexOf("Drama") != -1;
    })

    if(dramaMovies.length == 0) {
        return 0;
    }

    let moviesRates = dramaMovies.map(function (movie) {
        let rate = Number(movie.rate) ? Number(movie.rate) : 0;
        return rate;
    })

    let reducedRates = moviesRates.reduce(function (acu, rate) {
        var sum = acu + rate;
        return sum;
    }, 0);

    let rateAverage = parseFloat((reducedRates/dramaMovies.length).toFixed(2));
    
    return rateAverage;
}
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function setDurationInMinutes(duration) 
{ 
  let separatedDuration = duration.split(" ");
  if(separatedDuration.length == 0) {
    return 0;
  } else if (separatedDuration.length == 1) {
    if (separatedDuration[0].includes("h")) {
      return parseInt(separatedDuration[0].replace("h",'')) * 60;
    } else if (separatedDuration[0].includes("min")) {
      return parseInt(separatedDuration[0].replace("min",''));
    } else {
        return 0;
    }
  } else {
    return parseInt(separatedDuration[0]) * 60 + parseInt(separatedDuration[1]);
  }
}


function turnHoursToMinutes(movies) 
{
  let moviesCopy = movies.map(function(movie) {
      return movie;
  })

  let moviesWithDurationInMinutes = moviesCopy.map(function (movie) {
    let copyMovie = Object.assign({},movie);
    copyMovie.duration = setDurationInMinutes(movie.duration);
    return copyMovie;
  })

  return moviesWithDurationInMinutes;
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average
