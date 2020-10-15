// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors (arr) {
    let output = [];
    let allDirs = arr.forEach((movie)=>{
      //console.log(obj.director)
       output.push(movie.director);
     })
    return output.reduce((acc,currIndex) => {
    if (acc.includes(currIndex)) {
      return acc;
    } else {
      return [...acc, currIndex];
    }
  }, []);
  };
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
    const dramaSpielbergMovies = movies.filter((movie) => {
       return movie.genre.includes("Drama") && movie.director === "Steven Spielberg";
    })
    return dramaSpielbergMovies.length;
}
// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(arr) {
    if(arr.length == 0) {
      return 0;
    }
    let newArr = arr.reduce(function(acumulador, valorActual) {
      var rate = 0
      if(valorActual.rate > 0){
        rate = valorActual.rate;
      }
      return acumulador + rate
    }, 0);
    let average = newArr / arr.length
    return Math.round(average * 100) / 100
  }
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies){
      const dramaRates = movies.filter((movie) => {
          if (movie.genre.includes("Drama")){
            return movie;
          }
      });
     let dramaAverage = ratesAverage(dramaRates);
     return  dramaAverage;
  };
  dramaMoviesRate(movies)

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
    let sortedMovies = [...movies].sort((a,b) => {
        return compare(a,b);
    });
    return sortedMovies;
}

function compare(a,b) {
    if (a.year < b.year) return -1;
    if (a.year > b.year) return 1;
    if (a.year === b.year) { 
       if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
       if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
    }
}
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
    let moviesTitle = movies.map(function (title) {
        return title.title;
      });
    let moviesTitleSort = moviesTitle.sort();
    return moviesTitleSort.slice(0, 20);
}
//console.log(orderAlphabetically(movies));

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arr) {
    const newTime = arr.map(function(movie) {
    const newMovies = Object.assign({}, movie);
    newMovies.duration = hoursToMinutes(movie.duration);
    return newMovies;
  });
    function hoursToMinutes(time) {
        if (!time.includes("min")){
          let hoursAndMinutes = time.split (" ");
          return parseInt(hoursAndMinutes[0])*60;
        }
        if (!time.includes("h")){
          return parseInt(time);
        }
          let hoursAndMinutes = time.split (" ");
          return parseInt(hoursAndMinutes[0])*60+parseInt(hoursAndMinutes[1]);
    }
  return newTime;
  }
// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
function bestYearAvg(movies) {
    
    if (!movies.length) return null;
    let newMovies = {};

    // Creating a new array containing the year as key and an array of rates for that year as the value
    movies.map(movie => {
        if (typeof newMovies[movie.year] !== "object") {
            newMovies[movie.year] = new Array();
        }
        newMovies[movie.year].push(movie.rate);
    })

    // Averaging all the rates for each year
    for (let year in newMovies) {
        newMovies[year] = parseFloat(avg(newMovies[year]));
    }

    // Loop through our object and check which year has the highest rates
    let bestAvg = 0;
    let bestYear = 0;
    for (let year in newMovies) {
        if (newMovies[year] > bestAvg) {
            bestAvg = newMovies[year];
            bestYear = year;
        } else if (newMovies[year] === bestAvg) {
            if (year < bestYear) {
                bestAvg = newMovies[year];
                bestYear = year;
            }
        }
    }
    
    return "The best year was " + bestYear + " with an average rate of " + bestAvg;
}

const avg = (arr => {
    let avg = arr.reduce((accumulator, actualVal) => {
        return accumulator + actualVal;
    })
    return (avg / arr.length).toFixed(1);
})

