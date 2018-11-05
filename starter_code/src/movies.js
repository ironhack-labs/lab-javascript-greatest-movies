/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arr) {
  
  return arr.map(movie => {
    
    if (movie.duration.charAt(1) === "h") {
        let tempDuration = movie.duration;
        let hours = parseInt(tempDuration, 10) * 60;
        movie.duration = hours;
          if (parseInt(tempDuration.substr(2), 10)) {
          let minutes = parseInt(tempDuration.substr(2), 10);
          movie.duration += minutes;
          }
          return movie
    }     else  {
            movie.duration = parseInt(movie.duration, 10);
            return movie
    }
  });
}



// return movies.map((movieObject)=>{

// Get the average of all rates with 2 decimals
function ratesAverage(arr) {
  return Number((arr.reduce((total, movie) => {
    return total + Number(movie.rate);
  }, 0/arr.length).toFixed(2))
};
ratesAverage(movies);

// avg 1. convert rate strings into numbers. parseFloat
// 2. run .reduce() through movies Array, to sum up all of the rate values in the Array.
// 3. With the totalRate, then divide the total rate by the Array.length to get the average.





// Get the average of Drama Movies
function dramaMoviesRate(arr) {
  let filteredArray = arr.filter(movie => {
    return movie.genre.indexOf("Drama") !== -1;
  });
  if (!filteredArray.length) {
    return undefined
  }

  return Number(ratesAverage(filteredArray));
};
dramaMoviesRate(movies);

// let dramaMoviesRate = movies.genre['drama'].reduce.
// Then with the total drama rate, let avgDramaRate = divide by a totalDrama = movies.genre['drama'].length to get the avg.

// Order by time duration, in growing order
function orderByDuration(arr) {
  if (arr.length) === 1) {
    return arr;
  }
  let resultArray = turnHoursToMinutes(arr);
  resultArray.sort((a, b) => {
    if (Number(a.duration) > Number(b.duration)) {
      return 1;
    }
    if (Number(a.duration) < Number(b.duration)) {
      return -1
    }
    else if (Number(a.duration) = Number(b.duration)) {
      if (a.title > b.title) {
        return 1;
      }
      if (a.title < b.title) {
        return -1;
      }
    }
        return 0;
  })
        return resultArray;
}
orderByDuration(movies);


// let orderByDuration = movies.duration.sort()

// How many movies did STEVEN SPIELBERG
function howManyMovies(arr) {
  if (arr.length === 0){
    return undefined;
  }
  let filteredArray = arr.filter(movie => {
      return movie.genre.indexOf("Drama") !== -1;
  });
  let spielbergMovies = filteredArray.filter(movie => {
    return movie.director.indexOf("Steven Spielberg") !== -1;
  }).length;
  return `Steven Spielberg directed ${spielbergMovies} drama movies!`
}
howManyMovies(movies);



// let howManyMovies = movies.filter(function(number){
//   return number.genre['drama'].includes('Steven Spielberg')
// });

// Order by title and print the first 20 titles
// let orderAlphabetically = movies.map()
function orderAlphabetically(arr) {
  let resultArray = arr.sort((a, b) => {
    if (a.title > b.title) {
      return 1;
    }
    if (a.title < b.title) {
      return -1;
    }
      return 0;
  })
    let titleArray = resultArray.map(x => {
      return x.title;
    });
    return titleArray.splice(0,20);
}
orderAlphabetically(movies);





// Best yearly rate average


function groupBy(arr, key) {
  return arr.reduce((x, y) => {
    (x[y[key]] = x[y[key]] || []).push(y);
    return x;
  }, {});
};
 function bestYearAvg(arr) {
  if (arr.length === 0) {
    return undefined
  } else if (arr.length === 1) {
    return `The best year was ${arr[0].year} with an average rate of ${arr[0].rate}`;
  }

  let moviesByYear = groupBy(arr, "year");

  let yearsArr = Object.keys(moviesByYear);

  let ratesArr = [];

  yearsArr.map(year => {
    ratesArr.push({"year":year, "rate":ratesAverage(moviesByYear[year])})
    return year 
  });

  let result = ratesArr.reduce((x, y) => {
    if(x.rate > y.rate) {
      return x
    } else if(y.rate > x.rate) {
      return y
    } else if (x.year > y.year) {
      return y
    } else return x
    ;
    
  });
    return `The best year was ${result.year} with an average rate of ${result.rate}`
};
