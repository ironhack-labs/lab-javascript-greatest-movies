function isArrayEmpty(array) {
    if(array.length === 0) {
        return true;
    }
}

// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(movies) {
    let allDirectors = movies.map(function(movie) {
        return movie.director;
    })
    let uniqueDirectors = [...new Set(allDirectors)];
    return uniqueDirectors;
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(array) {
    return array.filter(function(movie) {
        return movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
    }).length
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(array) {
    if(isArrayEmpty(array)) {
        return 0;
    };
    let ratingSum = array
   .filter(movie => movie.rate)
   .reduce(function(sum, movie) {
        return sum + movie.rate;
    }, 0)
    return parseFloat((ratingSum/array.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(array) {
    let dramaMovies = array.filter(movie => movie.genre.includes('Drama'));
    if(isArrayEmpty(dramaMovies)) {
        return 0
    };
    let dramaRating = dramaMovies.reduce((sum, movie) => {    
        return sum + movie.rate;
    }, 0) 
    return parseFloat((dramaRating/dramaMovies.length).toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(array) {
    let orderedArray = [...array];
    return orderedArray.sort(function(a, b) {
       if(a.year - b.year === 0) {
           return a.title.localeCompare(b.title)
       }
        return a.year - b.year;
    })
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(array) {
    let orderedTitles = array
    .map(movie => movie.title)
    .sort((a, b) => {
      return a.localeCompare(b)
    });
    let firstTitles = orderedTitles.slice(0,20);
    return firstTitles;
}
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(array) {
    return array.map(function (movie) {
        let hour = parseInt(movie.duration.slice(0, movie.duration.indexOf('h'))) || 0;
        let minutes = parseInt(movie.duration.slice(movie.duration.indexOf('h') + 2, movie.duration.indexOf('m'))) || 0;
        movie.duration = hour + minutes;
        return movie;
    })
}
// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
function bestYearAvg(array) {
    if(isArrayEmpty(array)) {
        return null;
    }
    let listOfYears = array.map(movie => movie.year);
    let uniqueYears = [...new Set(listOfYears)];
    let yearlyRatingsArray = [];
  for(let i = 0; i < uniqueYears.length; i++) {
      let yearlyRating = array.filter(function(movie) {
      return movie.year === uniqueYears[i]
    })
      //.reduce(function(sum, movie) {
      //  return sum + movie.rate
      //}, 0);
      //return yearlyRating;
      let avgYearlyRating = ratesAverage(yearlyRating);
      let yearObj = {
        year: uniqueYears[i],
        rating: avgYearlyRating
      };
    
      yearlyRatingsArray.push(yearObj);
  }  
      const maxRating = yearlyRatingsArray.reduce(function(prev, current) {
    return (prev.rating > current.rating) ? prev : current
})
      return `The best year was ${maxRating.year} with an average rate of ${maxRating.rating}`;
}
