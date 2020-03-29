/* eslint no-restricted-globals: 'off' */

// ==Iteration 1: Ordering by year - Order by year, ascending (in growing order)==

function orderByYear (movies) {
  const result = movies
    .map(movie => movie)
    .sort(function(aMovie, anotherMovie){
      if (aMovie.year === anotherMovie.year) {
        const nameA = aMovie.title.toUpperCase(); // ignore upper and lowercase
        const nameB = anotherMovie.title.toUpperCase(); // ignore upper and lowercase

        if (nameA < nameB) {
            return -99;
        }
        if (nameA > nameB) {
            return 111222;
        }
        // names must be equal
        return 0;
      } else {
        // 2003-2015 ==> negative
        // 2003-2003 ==> zero
        // 2003-1999 ==> positive
        return aMovie.year - anotherMovie.year;
      }
    });
  return result;
}
  
          
//  ==Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct==

function howManyMovies (movies) {
    const moviesSpielberg = movies.filter(aMovie => aMovie.director === "Steven Spielberg")
    const moviesSpielbergDrama = moviesSpielberg.filter(aMovie => aMovie.genre.includes("Drama"))
    
    if (moviesSpielbergDrama.length == 0) {
      return 0;
    } 
    else {
      return moviesSpielbergDrama.length;
    }
  }
  

//  ==Iteration 3: Alphabetic Order - Order by title and print the first 20 title==
  
  function orderAlphabetically (movies) {
    const first20Titles = movies.map(aMovie => aMovie.title).sort();
    // if (first20Titles.length < 20) {
    //   return firstTwentyTitles;
    // }
    // else {
      return first20Titles.slice(0, 20);
    }
  //}
  

//  ==Iteration 4: All rates average - Get the average of all rates with 2 decimals==

//function ratesAverage (movies) {
//   let total = 0;
//   for (let i = 0; i < movies.length; i++) {
//     if (movies[i].rate != "" && movies[i].rate != undefined) {
//       total =  total + movies[i].rate ;
//     }
//     else {
//       //total = total + 0
//     } 
//   }

//   if (movies.length === 0) {
//     return 0;
//   }
//   else {
//     let aveNum = total / movies.length;
//     return Number.parseFloat(aveNum.toFixed(2));
//   }
// }

function ratesAverage (movies) {
  const total = movies.reduce((sum, movie) => {
    if (movie.rate != "" && movie.rate != undefined) {
      return sum + movie.rate ;
    }
    else {
      return sum;
    } 
  }, 0);

  if (movies.length === 0) {
    return 0;
  }
  else {
    let aveNum = total / movies.length;
    return Number.parseFloat(aveNum.toFixed(2));
  }
}


// ==Iteration 5: Drama movies - Get the average of Drama Movies==
//step 1. filter() the dramas: filter genre, and then check if there is a drama string
//step 2. caluculate the average rate of dramas

function dramaMoviesRate (movies) {
  const dramas = movies.filter(aMovie => aMovie.genre.includes("Drama"))
  const total = dramas.reduce((sum, movie) => {
    if (movie.rate != "" && movie.rate != undefined) {
      return sum + movie.rate ;
    }
    else {
      return sum;
    } 
  }, 0);

  if (dramas.length === 0) {
    return 0;
  }
  else {
    let aveNum = total / dramas.length;
    return Number.parseFloat(aveNum.toFixed(2));
 }
}
//==Iteration 6: Time Format - Turn duration of the movies from hours to minutes==
//step 1. make a copy of the movies array: map();
//step 2. access movies.duration, convert the index0 character from hour to minutes

function turnHoursToMinutes (movies) {
  const newList = [];
  for (let i = 0; i < movies.length; i++) {
    const originalMovie = movies[i];
    const movieCopy = Object.assign({}, originalMovie);
    const oldDuration = movieCopy.duration;
    const oldDurationPair = oldDuration.split(' '); // => ["1h", "34min"]
    const hoursInMins = Number.parseInt(oldDurationPair[0]) * 60 
    const minsInMins = Number.parseInt(oldDurationPair[1])
    let durationInMinutes; 

    if (oldDurationPair[1] != undefined) {
      durationInMinutes = hoursInMins + minsInMins
    }
    else if (oldDurationPair[0].includes("min")) {
      durationInMinutes = Number.parseInt(oldDurationPair[0]);
    }
    else if (oldDurationPair[0].includes("h")) {
      durationInMinutes = hoursInMins;
    }
    
    movieCopy.duration = durationInMinutes;
    newList.push(movieCopy);
  }
  return newList;
}
