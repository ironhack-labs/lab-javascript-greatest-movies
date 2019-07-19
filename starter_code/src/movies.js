/* eslint no-restricted-globals: 'off' */
// 1) Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(array) {
   movies.map((element) => {
    let hours = parseFloat(element.duration.split(' ')[0]);
    let min = parseFloat(element.duration.split(' ')[1]); 
    let total = hours * 60 + min;
    element.duration = total + " min";
    return element;
   })
}
turnHoursToMinutes(movies)



// 2) Get the average of all rates with 2 decimals 
function ratesAverage(array) {
    var total = array.reduce((total, item) => {
      return total + parseFloat(item.rate)
    }, 0)
    return (total / array.length).toFixed(2)
 }
 ratesAverage(movies)
 


// Get the average of Drama Movies
let dramaMoviesRate = movies.reduce((total, item) => {
    let dramaAvg;
    if(item.genre.includes('Drama')) {
      dramaAvg = parseFloat(total) + parseFloat(item.rate) / movies.length;
    }
    return [Math.round(dramaAvg * 100) / 100];
  }, 0)
  console.log(dramaMoviesRate);


// Order by time duration, in growing order
const orderByDuration = movies.sort(function(a, b) {
    return parseFloat(a.duration) - parseFloat(b.duration);
  })
  console.log(orderByDuration);


// How many movies did STEVEN SPIELBERG
let howManyMovies = movies.filter((element) => {
    if(element.director == 'Steven Spielberg') {
       return element 
    } 
  })
  console.log(howManyMovies);


// Order by title and print the first 20 titles
let titleList = movies.map((item) => { // create an array with the titles
    return item.title
  })
  console.log(titleList)
  
  let orderAlphabetically = titleList.sort(); // sort the titles by alphabetically order
  console.log(orderAlphabetically);

  titleList.length = 20; // set the maximum lenght for the list 
  console.log(titleList)


// Best yearly rate average
// Only for 2000, 2001 and 2002 

var bestYearList = []

// 2000
var moviesFrom2000 = movies.filter((item) => {
  return item.year.includes(2000);
})
var avgRateFrom2000 = moviesFrom2000.reduce((total, item) => {
  return parseFloat(total) + parseFloat(item.rate) / moviesFrom2000.length;
}, 0)
bestYearList.push(Math.round(avgRateFrom2000 * 100) / 100);

// 2001
var moviesFrom2001 = movies.filter((item) => {
  return item.year.includes(2001);
})
var avgRateFrom2001 = moviesFrom2001.reduce((total, item) => {
  return parseFloat(total) + parseFloat(item.rate) / moviesFrom2001.length;
}, 0)
bestYearList.push(Math.round(avgRateFrom2001 * 100) / 100);

// 2002
var moviesFrom2002 = movies.filter((item) => {
  return item.year.includes(2002);
})
var avgRateFrom2002 = moviesFrom2002.reduce((total, item) => {
  return parseFloat(total) + parseFloat(item.rate) / moviesFrom2002.length;
}, 0)
bestYearList.push(Math.round(avgRateFrom2002 * 100) / 100);

console.log(bestYearList); // list of avg rates  
console.log(Math.max(...bestYearList)) // best rate in a specific year

// checking which year has the best avg 
if(bestYearList[0] > bestYearList[1] && bestYearList[0] > bestYearList[2] ) {
  console.log("The best average is from 2000, the avg is: " + avgRateFrom2000);
} else if(bestYearList[1] > bestYearList[0] && bestYearList[1] > bestYearList[2]  ) {
     console.log("The best average is from 2001, the avg is: " + avgRateFrom2001);
} else {
    console.log("The best average is from 2002, the avg is: " + avgRateFrom2002);
}

