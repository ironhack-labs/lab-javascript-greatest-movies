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

  let newMovies = movies.map((x) => {
    let timeToSplit = x.duration
    let time = timeToSplit.split("h");
    console.log(time);
    let newTime = 0;
    if (time.length === 2) {
      newTime = time[0] * 60 + parseInt(time[1]);
    } else if (time.length === 1 && time.includes("h")) {
      newTime = time[0] * 60;
    } else if (time.length === 1) {
      newTime = parseInt(time);
    }
    x.duration = newTime;
    return x;
  });
  return newMovies;
}
turnHoursToMinutes(movies);

// BONUS Iteration: Best yearly rate average - Best yearly rate average

