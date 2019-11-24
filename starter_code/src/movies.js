/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
  let movies = arr.map(a => a);

  if (movies.length != 0) {
    movies.sort((a, b) => {
      if (a.year != b.year) {
        return a.year - b.year;
      } else {
        return a.title.localeCompare(b.title);
      }
    });

    return movies;
  }
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(arr) {
  let movies = arr.map(a => a);

  return movies.filter(movie => {
    return (
      movie.director == "Steven Spielberg" && movie.genre.indexOf("Drama") >= 0
    );
  }).length;
}
// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
  let movies = arr.map(a => a);

  movies.sort((a, b) => {
    return a.title.localeCompare(b.title);
  });

  return movies.map(e => e.title).filter((e, i) => i < 20);
}
// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(arr) {
  let movieRates = arr.map(a => a.rate);

  if (movieRates.length === 0) {
    return 0;
  }

  //I used toFix() for the 2 decimal points and then parseFloat() to make it a number again
  return parseFloat(
    (
      movieRates.reduce((acc, e) => {
        if (typeof e === "number") {
          return acc + e;
        } else {
          return acc;
        }
      }) / movieRates.length
    ).toFixed(2)
  );
}
// Iteration 5: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(arr) {
  // create an array with only the drama movies
  let dramaMovies = arr.filter(e => {
    return e.genre.indexOf("Drama") >= 0;
  });

  return ratesAverage(dramaMovies);
}
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arr) {
  //cloning the array of objects 
  let newArr = arr.map( e => {
    return {...e}
  });

  newArr.map(e => {
    
    let minutes = e.duration.split("").map(b => parseInt(b)).filter(c => {
        return !isNaN(c);
      });
    let time = 0;

    if (minutes.length === 1) {
      time += parseInt(minutes) * 60;
    } else if (minutes.length <= 2) {
      time = minutes[0] * 10 + minutes[1];
    } else {
      time = minutes[0] * 60 + minutes[1] * 10 + minutes[2];
    }
    e.duration = time;
  });

  return newArr;
}
// BONUS Iteration: Best yearly rate average - Best yearly rate average

//create a new function to order by year
function simpleOrder(arr) {
  let orderArr = arr.map(a => a);

  return orderArr.sort((a, b) => {
     return a.year - b.year;
  })
}


function bestYearAvg(arr) {
  if (arr.length == 0) {
    return null
  } else if (arr.length === 1 ){
    return `The best year was ${arr[0].year} with an average rate of ${arr[0].rate}`
  }

  let orderArr = simpleOrder(arr);

  let group = [];
  let yearlyMovies = [];
  let year = orderArr[0].year;
  orderArr.forEach( (e,i) => {
    if (year === e.year) {
      yearlyMovies.push(e);
    } else {
      year = e.year;
      group.push(yearlyMovies);
      yearlyMovies = [];
      yearlyMovies.push(e)
    }
  })
  
  //temporary fix for length == 1 array
  //if (group.length === 0) {
  //  group.push([orderArr[0]])
  //}

  group = group.map(a => {
    
    return {rate: ratesAverage(a), year: a[0].year};
  })
  
  console.log(group)

  let result = group.sort( (a,b) => b.rate-a.rate)[0];

  console.log(result)
  return `The best year was ${result.year} with an average rate of ${result.rate}`
}
