// const movies = require("./data.js")

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(arr) {
    const copyOfArray = [...arr];
    copyOfArray.sort((a, b) => {
        if (a.year === b.year) {
            return (a.title).localeCompare(b.title)
            } else {
            return a.year - b.year;
            }
    });
    return copyOfArray;
}

// // // // Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(arr) {
    const spielbergMovies = arr.filter(movie => {
        if (movie.director === "Steven Spielberg" && movie.genre.includes("Drama")) {
            return true;
        } else {
            return false;
        }  
    });
    return spielbergMovies.length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr) {
    const copyOfArray = [...arr];
    copyOfArray.sort(function(a, b) {
        if (a.title > b.title) {
            return 1;
        } else if (a.title < b.title) {
            return -1;
        } else {
            return 0;
        }
    });

    const onlyTitlesArray = copyOfArray.map(element => element.title);

    let reducedArray = []; // keeping only the first 20
    if (onlyTitlesArray.length < 20) {
        return onlyTitlesArray;
    } else {
        for (let i = 0; i < 20; i++){
        reducedArray.push(onlyTitlesArray[i]);
        }
    }
    return reducedArray;
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(arr) {
    const filteredArray = arr.filter(element => { //filtering out element of objects with empty value or simply undefined
        if (element.rate === undefined || element.rate === '') {
            return false;
        } else {
            return true;
        }
    });
    if (filteredArray.length === 0) {
      return 0;
    } else {
      const sumOfRatings = filteredArray.reduce((accumulator, value) => {
          accumulator += value.rate;
          return accumulator;
      }, 0);
      let avgRating = sumOfRatings/arr.length;
      let roundedRating = Math.round(avgRating * 100) / 100;
      return roundedRating;
    }
}

// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(arr) {
    const filteredArray = arr.filter(element => {
      if (element.genre.includes('Drama')){
        return true;
      } else {
        return false;
      }
    });
    return ratesAverage(filteredArray);
  }

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(arr){

    let arrayCopy = JSON.parse(JSON.stringify(arr)); // Creating a copy of array.

    arrayCopy = arrayCopy.map(function(arr){
        let timeArray = arr.duration.split(' '); // Separating hours and minutes
        let movieDuration = 0;
        if (timeArray.length === 2) { //meaning we have both hours and minutes since we're getting an array of 2 elements
            let hours = timeArray[0].split('h'); //removing letter "h" from first element of array
            let minutes = timeArray[1].split('min'); //removing letters "min" from second element of array
            movieDuration += parseInt(hours[0]) * 60 + parseInt(minutes[0]); //adding calculation to counter
        } else {
            if (timeArray[0].includes('h')) { //case with only hours
            let hours = timeArray[0].split('h');
            movieDuration += parseInt(hours[0]) * 60;
            } else { 
                let minutes = timeArray[0].split('min'); //case with only  minutes
                movieDuration += parseInt(minutes[0]);
            }
        }
        arr.duration = movieDuration; //replacing arr.duration values with calculated values
        return arr;
    });
    return arrayCopy;
  }

// BONUS Iteration: Best yearly rate average - Best yearly rate average
