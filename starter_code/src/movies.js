/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {
  const moviesByYear = movies.map(x => x);
   moviesByYear.sort(function comparar(a, b) {
    if (a.year > b.year) {
      return 1;
    }
    if (a.year < b.year) {
      return -1;
    }
    if (a.year === b.year) {
      if (a.title > b.title) {
        return 1;
      }
      if (a.title < b.title) {
        return -1;
      }
    }
  });

  return moviesByYear;
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(movies){
  if(!movies){
    return 0;
  }
  let dramaMovies = movies.filter(element => element.genre.includes("Drama"));
  let dramaMoviesSpielberg = dramaMovies.filter(element => element.director == 'Steven Spielberg');
  return dramaMoviesSpielberg.length;

}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {

  let moviesOrder = movies.map(x => x);
    moviesOrder.sort(function comparar(a, b) {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  });

  let moviesByAlphabet = moviesOrder.map(x => x.title);
  if( moviesByAlphabet.length > 20 ){
    moviesByAlphabet = moviesByAlphabet.splice(0,20)
  }

  return moviesByAlphabet;
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals


function ratesAverage(movies) {
  if (movies.length === 0) {
    return 0;
  }

  let totalAverage = 0;
  let averageNum = movies.reduce((accumulator, currentValue) => {
    if(currentValue.rate){
      return accumulator + currentValue.rate
    } else {
      return accumulator
    }
  }, 0);

  totalAverage = averageNum / movies.length;
  let result = totalAverage.toFixed(2);
  let finalResult = Number(result);

  return finalResult;
}
// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies){

    let dramaMovies = movies.filter(element => element.genre.includes("Drama"));
    let averageDrama = dramaMovies.reduce((accumulator, currentValue) => {
      if (currentValue.rate) {
        return accumulator + currentValue.rate
      } else {
        return accumulator
      }
    }, 0);

    dramaMoviesAverage = averageDrama / dramaMovies.length;
    let result = dramaMoviesAverage.toFixed(2);
     
     let finalResult = Number(result);
     if (isNaN(finalResult)){
       finalResult = 0;
     }
  return finalResult;
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies) {
  let newMovies = movies.map(function (x) {
    let minutes = 0;
    let time = x.duration.split(" ");
    if (time.length === 2) {
      let hours = parseInt(time[0].slice(0, -1));
      minutes = parseInt(time[1].slice(0, -3));
      minutes += hours * 60;
    } else if (time.length === 1) {
      if (time[0].indexOf("h") > -1) {
        minutes = parseInt(time[0].slice(0, -1) * 60);
      } else if (time[0].indexOf("min") > -1) {
        minutes = parseInt(time[0].slice(0, -3));
      }
    }
    let copyMovies = {x};
    copyMovies.duration = minutes;
    return copyMovies;
  });
  return newMovies;
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average

function bestYearAvg(movies){
   if (movies.length === 0) {
     return null;
   }
   if (movies.length === 1) {
     result = `The best year was ${movies[0].year} with an average rate of ${movies[0].rate}`;
     return result;
   }

   let sortedByYear = orderByYear(movies);
   let averages = [];
   let year = sortedByYear[0].year;
   let prevIndex = 0;
   sortedByYear.forEach(function (movie, index, array) {
     if (year !== movie.year) {
       averages.push({
         year: year,
         averageRate: ratesAverage(array.slice(prevIndex, index))
       });

       year = movie.year;
       prevIndex = index;
     }
   });
   averages.sort(function (a, b) {
     if (a.averageRate === b.averageRate) {
       return b.year - a.year;
     }
     return a.averageRate - b.averageRate;
   });
   result = `The best year was ${averages[averages.length - 1].year} with an average rate of ${averages[averages.length - 1].averageRate}`;
   return result;
}