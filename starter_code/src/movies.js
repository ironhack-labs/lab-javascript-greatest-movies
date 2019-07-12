const moviesCopy = require('./data.js');

/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes(moviesObject) {
  let hours = 0;
  let minutes = 0;
  let minutesDuration = moviesObject.map(element => {
    if (element.duration.includes('h')) {
      hours = Number(element.duration[0])
    } 
    if (element.duration.includes('min')) {
      minutes = Number(element.duration.slice(element.duration.length-5, element.duration.length-3))  
    }
    let totalMinutes = hours * 60 + minutes;
    return {
    title: element.title,
    year: element.year,
    director: element.director,
    duration: totalMinutes,
    genre: element.genre,
    rate: element.rate
    }  
  })
  return minutesDuration;
}
 
// console.log(turnHoursToMinutes(moviesCopy));

// Get the average of all rates with 2 decimals 
function ratesAverage(ratesObject) {
  const sumRates = ratesObject.reduce((accumulator, currentValue) => {
    return accumulator + parseFloat(currentValue.rate)
  },0)
  const rateAverageCalculated = sumRates / ratesObject.length
  const fixDecimals = rateAverageCalculated.toFixed(2);
  return Number(fixDecimals);
}

/*
const ratesAverage = movies => {
  let average = 0;

  movies.forEach(movies => {
    if(movie.rate !== ""){
      average += parseFloat(movie.rate);
    }
  });
  average = (average/movies.length).toFixed(2);
  return parseFloat(average);
}

*/

// console.log(ratesAverage(moviesCopy));

// Get the average of Drama Movies

function dramaMoviesRate (moviesObject) {
  let isDrama = moviesObject.filter(element => {
    return element.genre.indexOf('Drama') !== -1;
  });
  if (isDrama.length === 0) {
    return undefined;
  }
  return parseFloat(ratesAverage(isDrama).toFixed(2));
}

// console.log(dramaMoviesRate(moviesCopy));

/*
const dramaMoviesRate = movies => {
  const dramaMovies = movies.filter(movie => {
    for(let i=0; i < movie.genre.length; i += 1) {
      if(movie.genre[i] === "Drama") {
      return true;
      }
    }
    return false;  
  });
  return dramaMovies.length === 0 ? undefined : ratesAverage(dramaMovies);
}
*/

// Order by time duration, in growing order

/*
function orderByDuration(moviesArray) {

  const arrOrderedByDuration = moviesArray.sort((a, b) => {

    if (a.duration === b.duraiton){
      if (a.title < b.title){
      return -1
    } else if (a.title > b.title) {
      return 1;
    } else {
      return 0;
    }
    }
    return a.duration - b.duration;
  })
  return arrOrderedByDuration;
};
const array = turnHoursToMinutes(moviesCopy)
orderByDuration(array);
*/

function orderByDuration(moviesArray) {

  const arrOrderedByDuration = moviesArray.sort((a, b) => {

    if (a.duration < b.duration) {
      return -1;
    } else if (a.duration > b.duration) {
      return 1;
    } else if (a.duration === b.duration) {
      if (a.title < b.title) {
        return -1;
      } else if (a.title > b.title) {
        return 1;
      } else {
        return 0;
      }
   } 
  })
  return arrOrderedByDuration;
};
const array = turnHoursToMinutes(moviesCopy)
orderByDuration(array);


// How many movies did STEVEN SPIELBERG

function howManyMovies (moviesArray) {
  if (moviesArray.length === 0) return undefined;

  let dramaMovies = moviesArray.filter(movie => {
    return movie.director.indexOf('Steven Spielberg') !== -1 && movie.genre.indexOf('Drama') !== -1
  });
    
  return `Steven Spielberg directed ${dramaMovies.length} drama movies!`
};

// console.log(howManyMovies(moviesCopy));


// Order by title and print the first 20 titles

function orderAlphabetically (moviesArray) {
  const titleArr = moviesArray.sort((theTitle1, theTitle2) => {
    const a = theTitle1.title.toLowerCase();
    const b = theTitle2.title.toLowerCase();
    if (a < b){
      return -1;
    } else if (a > b) {
      return 1;
    } else {
      return 0;
    }  
  });
  const titleOnly = titleArr.map((item) => {
    return item.title;
  })  
  return titleOnly.slice(0,20);
}

// console.log(orderAlphabetically(moviesCopy));

// Best yearly rate average

function bestYearAvg (moviesArray) {
  if (moviesArray.length === 0) return undefined;
  const newObject = {};
  for (let i = 0; i < moviesArray.length; i++) {
    if (newObject[moviesArray[i].year] === undefined) {
      newObject[moviesArray[i].year] = {
        count: 1,
        rateSum: parseFloat(moviesArray[i].rate),
        rateAvg: parseFloat(moviesArray[i].rate)
      }
    } else {
      newObject[moviesArray[i].year].count += 1;
      newObject[moviesArray[i].year].rateSum += parseFloat(moviesArray[i].rate);
      newObject[moviesArray[i].year].rateAvg = parseFloat((newObject[moviesArray[i].year].rateSum / newObject[moviesArray[i].year].count).toFixed(2));
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

// console.log(bestYearAvg(moviesCopy));
