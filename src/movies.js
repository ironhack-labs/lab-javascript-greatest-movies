/* eslint no-restricted-globals: 'off' */
//const movies = require("./data")

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

const orderByYear = (arr) => {
    let newArr = [...arr].sort((a, b) => {
        if (a.year === b.year) {
            return a.title.localeCompare(b.title);
        } else {
            return a.year - b.year;
        }
    });
    return newArr;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

const howManyMovies = (arr) => {
        if (arr === "") {
            return 0
        }

         let filteredMovies = arr.filter((movie) => { 
            return movie.director === 'Steven Spielberg' && movie.genre.includes("Drama")
         });

         return filteredMovies.length; 
        }


// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

const orderAlphabetically = (arr) => {

  const sortedTitles = arr.map((movie) => movie.title).sort((a, b) => {
      if (a < b) {
          return -1;
      }
  }).slice(0, 20); 
  
    return sortedTitles  
} 

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

const ratesAverage=(arr)=>{ 

    let sum = arr.reduce((acc, movie)=> {
        if (movie.hasOwnProperty("rate")){
            return acc + movie.rate 
        } else {
            return acc  // because ex rates 1st 8 (Acc=rate --> 0+8=8 so 8 is the new value of the acc), 2nd "no property rate" ( so return acc --> 8)
        }
    },0)

    if (sum === 0){  
        return 0
    }

     let average = sum / arr.length; //here even if the movie has no rating with count them in the average

     return Math.round(average * 100) / 100
     }


// Iteration 5: Drama movies - Get the average of Drama Movies


const dramaMoviesRate = (arr) => {
    let arrDrama = arr.filter(function (movie) {
        return movie.genre.includes("Drama");
    })
    
    return ratesAverage(arrDrama); //use previous function
};

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(arr) {
  // converts a JavaScript value into a JSON string.
  let newArr = JSON.stringify(arr);
  // Reconvert Json String into an object
  newArr = JSON.parse(newArr);
  // Create nw array with conditions
  newArr = newArr.map(function(arr) {
    // 1 - Take only the duration
    let time = arr.duration.split(" ");
    let movieTime = 0;
    // // when the duration is only in hours and min - Divided in 2 section (h) and (min)
    if (time.length === 2) {
      // delete les string 'h' and 'min' in position [0] et [1] of new array
      let nbHour = time[0].split("h");
      let nbMin = time[1].split("min");

      // return the correct number to a short movie - sum of hour * 60 + min
      movieTime = movieTime + nbHour[0] * 60 + parseInt(nbMin[0]);
    } else {
      // when the duration is only in hours
      if (time[0].includes("h")) {
        let nbHours = time[0].split("h");
        movieTime = movieTime + nbHours[0] * 60;
      }
      // when the duration is only in minutes
      else {
        let nbMin = time[0].split("min");
        movieTime = movieTime + parseInt(nbMin);
      }
    }
    // replace arr.duration by movieTime
    arr.duration = movieTime;
    return arr;
  });
  return newArr;
}



// BONUS Iteration: Best yearly rate average - Best yearly rate average

