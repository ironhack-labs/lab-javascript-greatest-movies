/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(arr) {
  var res = arr.map((x) => {
    let timeArr = x.duration
      .replace(/[^0-9\s]/g,"")
      .split(" ");
      if(x.duration.includes("h") && x.duration.includes("min")) {
        x.duration = Number(timeArr[0]) * 60 + Number(timeArr[1]);
      } else if(x.duration.includes("h")) {
        x.duration = Number(timeArr[0]) * 60 ;
      } else {
        x.duration = Number(timeArr[0])
      }
    return x;
  })
  console.log(res)
  return res;
}

// Get the average of all rates with 2 decimals 
function ratesAverage(arr) {
  var total = arr.reduce((acc, val) => {
    return acc + Number(val.rate);
  },0)
  return parseFloat((total/arr.length).toFixed(2));
}

// Get the average of Drama Movies
function dramaMoviesRate(arr) {
  var res = arr.filter((x) => {
    return x.genre.includes("Drama")})
  if(res.length === 0) {
    return undefined;
  } else {
    return ratesAverage(res);
  }
}

// Order by time duration, in growing order
function orderByDuration(arr) {
  if(arr.length === 1) {
    return arr;
  } else 
  arr.sort((a,b) => {
    if (a.duration > b.duration) return 1;
    if (a.duration < b.duration) return -1;
    if (b.title > a.title) return -1;
  });
  return arr;
}

// How many movies did STEVEN SPIELBERG
function howManyMovies(arr) {
  if(arr.length === 0) {
    return undefined;
  } else {
    var res = arr.filter((x) => {
      return x.director === "Steven Spielberg";
    });
    var dramaMovies = res.filter((x) => {
      return x.genre.includes("Drama");
    });
    return `Steven Spielberg directed ${dramaMovies.length} drama movies!`;
  }
}

// Order by title and print the first 20 titles
function orderAlphabetically(arr) {
  if(arr.length < 20) {
    var allMovies = arr.sort((a, b) => {
      if (a.title > b.title) return 1;
      if (a.title < b.title) return -1;
      });
    var res = [];
    allMovies.forEach((x) => {res.push(x.title)})
    return res;
  } else {
    var first20Movies = arr.splice(0, 20)
      .sort((a, b) => {
        if (a.title > b.title) return 1;
        if (a.title < b.title) return -1;
      });
    var res = [];
    first20Movies.forEach((x) => {res.push(x.title)})
    return res;

  }
}

// Best yearly rate average
function bestYearAvg(arr) {
  if(arr.length === 1) {
    console.log(arr);
    return `The best year was ${arr.year} with an average rate of ${arr.rate}`;
  }

}

// Tests
// var minutesArray = turnHoursToMinutes(movies);
// var ordered = orderByDuration(minutesArray);
// var alphabeticalArr = orderAlphabetically(minutesArray);
// console.log(alphabeticalArr);