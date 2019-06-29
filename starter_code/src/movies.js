/* eslint no-restricted-globals: 'off' */

// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes (moviesArray) {
  const array = JSON.parse(JSON.stringify(moviesArray));
  const newMoviesArray = array.map(movie =>{
    let durationInMinutes;
    //First let's check if the movie has a duration of hours AND mins
    if (movie.duration.includes("h") && movie.duration.includes("min")) {
      durationInMinutes = Number(movie.duration[0]) * 60 + Number(movie.duration.split(" ")[1].slice(0,-3));
    } else {
      //I already treated cases where there are mins and hours
      //Now I'm checking if the movie has a duration of exact hour(s) ONLY. No 'mins'
      if (movie.duration.includes("h")){
        //it has a duration of exact hour(s)
        durationInMinutes = Number(movie.duration[0]) * 60;
      } else {
        //it has a duration of mins only. no full hours
        durationInMinutes = Number(movie.duration.slice(0,-3));
      }
    }
    movie.duration = durationInMinutes;
    return movie;
  });
  return newMoviesArray;
}

// Get the average of all rates with 2 decimals 
function ratesAverage (moviesArray) {
  let count = 0;
  const finalSum = moviesArray.reduce((sum, movie) => {
    count += 1;
    return typeof movie.rate !== "number" ? sum : sum + parseFloat(movie.rate);
  },0)
  return parseFloat((finalSum / count).toFixed(2));
}

// Get the average of Drama Movies
function dramaMoviesRate (moviesArray) {
  const filteredMovies = moviesArray.filter(movie => {
    return movie.genre.includes("Drama");
  })
  return filteredMovies.length === 0 ? undefined : ratesAverage(filteredMovies);
}

// Order by time duration, in growing order
function orderByDuration (moviesArray) {
  moviesArray.sort((a, b) => {
    if (a.duration === b.duration) return a.title.localeCompare(b.title);
    if (a.duration > b.duration) return 1;
    if (a.duration < b.duration) return -1;
  })
  return moviesArray;
}

// How many movies did STEVEN SPIELBERG
function howManyMovies (moviesArray) {
  if (moviesArray.length === 0) return undefined;
  const dramaMovies = moviesArray.filter(movie => {
    return movie.genre.includes("Drama");
  })
  const dramaSpielberg = dramaMovies.filter(movie => {
    return movie.director === 'Steven Spielberg';
  })
  return `Steven Spielberg directed ${dramaSpielberg.length} drama movies!`
}

// Order by title and print the first 20 titles
function orderAlphabetically (moviesArray) {
  if (moviesArray.length === 0) return moviesArray;
  console.log(moviesArray);
  const sortedArray = moviesArray.sort((a, b) => {
    return a.title.localeCompare(b.title);
  })
  const finalArray = [];
  for (let i = 0; i < sortedArray.length; i++) {
    finalArray.push(sortedArray[i].title);
    if (i === 19) break;
  }
  return finalArray;
}

// Best yearly rate average
function bestYearAvg (moviesArray) {
  if (moviesArray.length === 0) return undefined;
  const newObject = {};
  for (let i = 0; i < moviesArray.length; i++) {
    if (newObject[moviesArray[i].year] === undefined) {
      newObject [moviesArray[i].year] = {
        count: 1,
        rateSum: parseFloat(moviesArray[i].rate),
        rateAvg: parseFloat(moviesArray[i].rate)
      }
    } else {
      newObject [moviesArray[i].year].count += 1;
      newObject [moviesArray[i].year].rateSum += parseFloat(moviesArray[i].rate);
      newObject [moviesArray[i].year].rateAvg = parseFloat((newObject[moviesArray[i].year].rateSum / newObject[moviesArray[i].year].count).toFixed(2));
    }
  }
  const keys = Object.keys(newObject).sort((a, b) => {
    if (newObject[a].rateAvg > newObject[b].rateAvg) return -1;
    if (newObject[b].rateAvg > newObject[a].rateAvg) return 1;
    if (newObject[a].rateAvg === newObject[b].rateAvg) {
      if (+a > +b) return 1;
      if (+b > +a) return -1;
    }
  })
  return `The best year was ${keys[0]} with an average rate of ${newObject[keys[0]].rateAvg}`;
}