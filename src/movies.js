/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  let yearOrder = movies.slice().sort((a, b) => {
    if (a.year < b.year) return -1;
    else if (a.title < b.title) {
      return -1;
    } else {
      return 1;
    }
  });
  return yearOrder;
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(movies) {
//   const stevenFilms = movies.filter(function(movies) {
//     return (
//     movies.director === "Steven Spielberg" && movies.genre.includes("Drama")
//   );
//   });
//   return stevenFilms.length;
// }
let totalCount = 0;
for (let i = 0; i < movies.length; i++) {
  let bothConditions = movies[i].director.includes("Steven Spielberg") && movies[i].genre.includes("Drama")
  if(bothConditions){
    totalCount++
  }
}
return totalCount
}
// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
 function orderAlphabetically(movies) {
  let yearOrder = movies.slice().sort(function(a, b) {
    if (a.title.localeCompare(b.title) > 0) {
      return 1;
    } else {
      return -1;
    }
  });

  return yearOrder.slice(0, 20).map(elemen => {
    return elemen.title;
  });
}
// let copyArray = [...arr];
// copyArray.sort(function(a, b) {
//   return a.title.localeCompare(b.title);
// });
// let firstTwenty = copyArray.slice(0, 20);
// let firstTwentyTitles = firstTwenty.map(movie => {
//   return movie.title;
// });
// return firstTwentyTitles;
// }
// Iteration 4: All rates average - Get the average of all rates with 2 decimals

// function ratesAverage(movies) {
//   let aveRates = movies.reduce(function(acc, cur) {
//     if (cur.rate) return acc + cur.rate;
//     else return acc + "";
//   }, 0);
//   return Math.round((aveRates / movies.length) * 100) / 100 || 0;
// }
const ratesAverage = (arr) => {
let sum = 0;
if(!arr.length) {
  return 0
}
for(let i=0; i<arr.length; i++){
  if(arr[i].rate){
    sum += arr[i].rate;
  }
}
let avg = sum/arr.length;
return Number (avg.toFixed(2));  // could also use parseFloat
}


// Iteration 5: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {
  const filmDrama = movies.filter(function(movies) {
    return movies.genre.includes("Drama");
  });
  let averadRates = filmDrama.reduce(function(acc, cur) {
    if (cur.rate) return acc + cur.rate;
    else return acc + "";
  }, 0);

  return Math.round((averadRates / filmDrama.length) * 100) / 100 || 0;
}
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function timeConverter(duration){
  let array = duration.split("h");
  let minutes = 0
  if(array.length === 1){
    minutes += parseInt(array[0])
  } else if (array[1]=== ""){
    minutes += array[0] * 60
  } else {
    minutes += array[0] * 60 + parseInt(array[1])
  }
  return minutes
}

function turnHoursToMinutes(movies){
  return movies.map(function(movie){ // ?????
    let copyMovie = { ...movie }
    copyMovie.duration = timeConverter(movie.duration)
    return copyMovie;
  })
}
// BONUS Iteration: Best yearly rate average - Best yearly rate average
function bestYearAvg(movieArr) {
  // test 0 length & 1 movie array case
  if (movieArr.length === 0) {
      return null;
  } else if (movieArr.length === 1) {
      return `The best year was ${movieArr[0].year} with an average rate of ${movieArr[0].rate}`;
  }
  // create an array of the year's movies
  let yearsArray = movieArr.map(movie => movie.year);
  let yearsRateObject = [];
  // definition of {name, avgRate} array & order by avgRate
  for (let i=0; i<yearsArray.length; i++) {
      // if the year is repeated, skip if
      if (yearsArray.indexOf(yearsArray[i]) === i) { // ???
          // filter by year & calculate de average rate
          let yearFiltered = movieArr.filter(movie => movie.year === yearsArray[i]);
          let yearRate = parseFloat((yearFiltered.reduce((acc, rateFilm) => acc + rateFilm.rate, 0)/yearFiltered.length).toFixed(2));
          yearsRateObject.push({year: yearsArray[i], avgRate: yearRate})
      }
  }
  yearsRateObject.sort((mov1, mov2) => mov2.avgRate - mov1.avgRate);
  // in case the rate of the 1st and 2nd are the same, the oldest movie is returned
  if (yearsRateObject[0].avgRate > yearsRateObject[1].avgRate) {
      return `The best year was ${yearsRateObject[0].year} with an average rate of ${yearsRateObject[0].avgRate}`;
  } else if (yearsRateObject[0].avgRate === yearsRateObject[1].avgRate && yearsRateObject[0].year > yearsRateObject[1].year) {
      return `The best year was ${yearsRateObject[1].year} with an average rate of ${yearsRateObject[1].avgRate}`;  
  }
} 
