
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


// 2) Get the average of all rates with 2 decimals 
function ratesAverage(array) {
    var total = array.reduce((total, item) => {
      return total + parseFloat(item.rate)
    }, 0)
    return (total / array.length).toFixed(2)
 }


// 3 Get the average of Drama Movies
function dramaMoviesRate(array) {
  const dramaMovies = movies.filter((movie) => movie.genre.includes('Drama'))
  const total = ratesAverage(dramaMovies)
  return total
}


// 4 Order by time duration, in growing order
function orderByDuration(array) {
  let moviesByDuration = array.sort((a, b) => {
    return parseFloat(a.duration) - parseFloat(b.duration)
  })
  // ordered in alphabeticall order by their title
   return moviesByDuration.sort((a, b) => (a.title > b.title) ? 1 : -1)
}


// 5 How many DRAMA movies did STEVEN SPIELBERG
function howManyMovies(array) {
  let stevenDramaMovies = array.filter((movie) => {
    return movie.director === 'Steven' && movie.genre.includes('Drama')
  })
  return stevenDramaMovies
}
  console.log(howManyMovies);


// Order by title and print the first 20 titles
function orderAlphabetically(array) {
  var onlyTitles = array.map((movie) => {
    return movie.title
  })
  return onlyTitles.sort((a, b) => (a > b) ? 1 : -1).splice(0, 20)
}

/* ex: array.sort((a,b) => {
  if(a < b) return -1
  else return 1
}) */



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

