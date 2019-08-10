/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 
function ratesAverage(movies){
  let moviesRateSum = movies.reduce((accumulator, currMovie) => {
    return accumulator = accumulator + Number(currMovie.rate)
  },0);
    let movieRateAverage = (moviesRateSum / movies.length).toFixed(2)
    return Number(movieRateAverage)
}
 
// Iteration 2: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies){
  let dramaMovies = movies.filter((movie) => {
    return movie.genre == "Drama"
  });
  if(dramaMovies == 0){
    return 0;
  } else{
  return ratesAverage(dramaMovies)
  }
}

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)

function orderByDuration(movies){
  let movieDuration = movies.sort((movie1, movie2)=>{
    if (movie1.duration > movie2.duration){return 1}
    if (movie1.duration < movie2.duration){return -1}
    if (movie1.duration === movie2.duration && movie1.title > movie2.title){
      return 1
    } if (movie1.duration === movie2.duration && movie1.title < movie2.title){
      return -1
    }
  });
  return movieDuration
}

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

function howManyMovies(movies){
    let dramaMovies = movies.filter((movie) => {
    return movie.genre.indexOf("Drama") >= 0 && movie.director === "Steven Spielberg"
  });
  return dramaMovies.length
}


// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies){
  let titleMovies = movies.filter((movie)=>{
    return movie.title
  }).map(movie => movie.title).sort((movie1,movie2)=>{
    if (movie1 > movie2){return 1}
    if (movie1 < movie2){return -1}
    return 0
  });
  if (titleMovies.length > 20){
  return(titleMovies.slice(0,20))
  } else 
  {return titleMovies }
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies){
  let minutesDuration = movies.map((movie)=>{
    let hour = 0
    let min = 0
    if (movie.duration.indexOf("h") === -1 && movie.duration.indexOf("min") !== -1){
      min = Number(movie.duration[movie.duration.indexOf("min")-2]) * 10 + Number(movie.duration[movie.duration.indexOf("min")-1])
    }
    else if (movie.duration.indexOf("h") !== -1 && movie.duration.indexOf("min") === -1){
      hour = Number(movie.duration[movie.duration.indexOf("h")-1]) * 60
    
    } 
    else if (movie.duration.indexOf("h") !== -1 && movie.duration.indexOf("min") !== -1){
      hour = Number(movie.duration[movie.duration.indexOf("h")-1]) * 60
      min = Number(movie.duration[movie.duration.indexOf("min")-2]) * 10 + Number(movie.duration[movie.duration.indexOf("min")-1])
    }

    return Object.assign({},movie, {duration : hour + min})
    })
    
  ;
    return minutesDuration
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average

function bestYearAvg(movies){
  let moviesByYear = movies.reduce((acc,curr) => {
    if(acc.hasOwnProperty(curr.year)){ //hasOwnProperty permet de savoir si cette propriété/key existe 
      acc[curr.year].push(Number(curr.rate)); //obj[key] = obj.key
      return acc;
    }else{
      const newArr = [];
      acc[curr.year]= newArr;
      newArr.push({ year: curr.year, rate: [curr.rate]})
      return acc;
    }
  }, {}) //inital value is an object
  return moviesByYear
  } 


