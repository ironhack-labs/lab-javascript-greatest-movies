/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 

function ratesAverage(movieArray){
  let sumRates =0;
  let averageRate = 0;
  for (let movie of movieArray){
    if (movie.rate!==""){
      sumRates += Number(movie.rate);
    }
  }
  averageRate = sumRates/movieArray.length;
  return parseFloat(averageRate.toFixed(2));
}
 
// Iteration 2: Drama movies - Get the average of Drama Movies

function dramaMoviesRate (movieArray){
  if (movieArray.length==1){
    if (movieArray[0].rate ==""){
      return 0;
    }else {
      return parseFloat(movieArray[0].rate);
    }
  }
  const dramaMoviesArray = movieArray.filter((f,i)=>{
    return (movieArray[i].genre).indexOf("Drama")>=0;
  });
  if (dramaMoviesArray.length == 0){
    return 0;
  } else {
    return(ratesAverage(dramaMoviesArray));
  }
}

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)

function orderByDuration(moviesarray){
  const sortedMoviesByDuration = moviesarray.sort((f,m)=> {
    if (f.duration - m.duration==0){
      if (f.title >m.title){
        return 1;
      } else if (f.title <m.title){
        return -1;
      } return 0;
    } return f.duration - m.duration;
  });
  return sortedMoviesByDuration;
}

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

function howManyMovies(moviesArray){
  
  if (moviesArray.length == 0){
    return 0;
  }
  const dramaMoviesArray = moviesArray.filter((f,i)=>{
    return (moviesArray[i].genre).indexOf("Drama")>=0;
  });

  const countOfMovies = dramaMoviesArray.filter (f=> f.director =="Steven Spielberg");
  if (countOfMovies.length == 0){
    return 0;
  }else if (countOfMovies.length == moviesArray.length){
    return 2;
  } return Number(countOfMovies.length);
}

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(moviesArray){
  let titleArray = [];
  console.log("here");
  
  console.log(moviesArray);
  
  const sortedTitleArray = moviesArray.sort((f,m)=>{
    if (f.title < m.title){
      return -1;
    } else if (f.title> m.title) {
      return 1;
    } else {
      return 0;
    }
  }); 
  console.log(moviesArray);
  
  for (let i = 0; i< sortedTitleArray.length; i ++){
    titleArray.push(sortedTitleArray[i].title);
  }
  
  if (titleArray.length <20){
    return titleArray;
  } return titleArray.slice(0,20);
  
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(moviesArray){
  var moviesArrayMinutesDuration =[];
  for (let i =0; i<moviesArray.length; i++){
    const newMovie = Object.assign({},moviesArray[i]);
    moviesArrayMinutesDuration.push(newMovie);
    moviesArrayMinutesDuration[i].duration = convertDurationInHoursToMinutes (moviesArrayMinutesDuration[i].duration);
  return moviesArrayMinutesDuration;
  }
}

function convertDurationInHoursToMinutes(duration){
  let nbHours =0;
  let nbMinutes = 0;
  if (duration.indexOf("h")>0){
    nbHours = parseInt(duration.slice(0,duration.indexOf("h")));
    if (duration.indexOf("min")>0){
      nbMinutes = parseInt(duration.slice(duration.indexOf("h")+2,duration.indexOf("min")));
    }
  } else if (duration.indexOf("min")>0){
    nbMinutes = parseInt(duration.slice(0,duration.indexOf("min")));
  }
  return (60*nbHours)+ nbMinutes;
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average 
// new com

function bestYearAvg(moviesArray){
  let moviesPerYearAndRating =[];
  let moviesYears =[];
  let maxRating = 0; 
  let yearOfMaxRating = 0; 

  // empty array or single element array 

  if (moviesArray.length == 0){
    return null; 
  } else if(moviesArray.length == 1){
    return `The best year was ${moviesArray[0].year} with an average rate of ${moviesArray[0].rate}`;
  }
  // creation of an array with years , no duplicate 
  
  for(let i = 0; i<moviesArray.length; i ++){
    if (moviesYears.indexOf(moviesArray[i].year<0)){
      moviesYears.push(moviesArray[i].year);
    }
  }
// compute rating per year and fill the new array with only years and ratings
  for (let i= 0; i<moviesYears.length; i ++){
    moviesPerYearAndRating[i] = {};
    moviesPerYearAndRating[i].year = moviesYears[i];
    moviesPerYearAndRating[i].rate = yearRate (moviesArray,moviesYears[i]);
 // get the maximum rating     
    if (Number(moviesPerYearAndRating[i].rate) > Number(maxRating)){
      maxRating = Number(moviesPerYearAndRating[i].rate);
      yearOfMaxRating = Number(moviesYears[i]);
    } else if (moviesPerYearAndRating[i].rate == maxRating){
        if (yearOfMaxRating > moviesYears[i]){
          yearOfMaxRating = moviesYears[i];
        }
    } 
  }  
return `The best year was ${yearOfMaxRating} with an average rate of ${maxRating}`
}

function yearRate (movieArray, ratingYear){
  if (movieArray.length==1){
    if (movieArray[0].rate ==""){
      return 0;
    }else {
      return movieArray[0].rate;
    }
  }
  const yearRating = movieArray.filter((f,i)=>{
    return (movieArray[i].year).indexOf(ratingYear)>=0;
  });
  if (yearRating.length == 0){
    return 0;
  } else {
    return(ratesAverage(yearRating));
  }
}