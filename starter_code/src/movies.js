/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 
function ratesAverage(movies) {
  const reduced = movies.reduce((acc, movie) => {
    return acc += movie.rate;
  }, 0);
    var sumRates = reduced / movies.length;
    return Number(sumRates.toFixed(2)); // parceFloat()
}

// function ratesAverage(movies) {
//   const reduced = movies.reduce((acc, movie) => {
//    acc += movie.rate;
//    return acc;
//   }, 0) / movies.length;
//    return Number(sumRates.toFixed(2)); // parceFloat()
// }
 
// Iteration 2: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {
  const dramas = movies.filter(movie => movie.genre.includes("Drama"));
  if(dramas.length == 0) {
    return 0;
  }
  return ratesAverage(dramas);
}

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
function orderByDuration(movies) {
  return movies.sort((a,b) => {
    if(a.duration > b.duration) {
      return 1;
    }
    if(a.duration < b.duration) {
      return -1;
    }
    if(a.title > b.title) {
      return 1;
    }
    if(a.title < b.title) {
      return -1;
    }
    return 0;
  });
}

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
function howManyMovies(movies) {
  if(movies.length === 0){
    return 0;
  }

  const spielbergMovies = movies.filter((movie) => {
    return movie.director === "Steven Spielberg" && movie.genre.includes("Drama");
  });
  return spielbergMovies.length;
}

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  var orderedArr = movies.sort((a,b) => {
    if(a.length > b.length) {
      return 1;
    }
    if(a.length < b.length) {
      return -1;
    }
    return 0;
  });
  console.log(orderedArr);
  return orderedArr.slice(20);

}


// filter() new []  (or sort() no new [] but the const orderedTitle will
// create a new array )
// slice() to cut the first 20 values   array.slice(21)
// return the title as a string   array.join() title
// sort() 



// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// to convert the hours and minutes into one number of minutes, array.slice()
// array.slice() returns a new array
// to take out the h and min
// twice because there are two tyes of values, 2h20min OR 54min
// and calculate the hours *60 and add the hours * 60 + minutes 

// (movies)[0].duration).toBe("number") e.g. 2h = 120min

// function turnHoursToMinutes(movies) {
//   //slice() min:
//   const convertMin = movies.slice(2);
//   //slice() h and min:
//   const convertHours = movies.slice(1,2 && 5); // is that valid? -> [2, 20]
//   console.log(convertHours);
  
//   //calculate the minutes:
//   var calculateHours = convertHours * 60;

// }


// BONUS Iteration: Best yearly rate average - Best yearly rate average





