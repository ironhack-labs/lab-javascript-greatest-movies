/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(arr){
    let sortedArr = arr.concat().sort((a,b) => {
        if(a.year === b.year){
        if(a.title < b.title) return -1;
        if(a.title > b.title) return 1;
        else return 0;
        }
        else return a.year - b.year
    });
    return sortedArr;
}
orderByYear(movies);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(arr){
    let total = 0;
    let filtered = [];
    filtered = arr.filter(movie => {
        if(movie.director === "Steven Spielberg" && movie.genre.includes("Drama")) {
            total++;
            return movie;
        }
        return filtered;
    });
    return total;
}

howManyMovies(movies);

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr){
    let sorted = arr.concat().sort((a,b) => {
      if(a.title > b.title){
        return 1;
      } 
      else if(a.title < b.title){
        return -1;
      }
    });
    let first20 = sorted.slice(0,20);
    let titles = first20.map(movie => {
        return movie.title;
    });
    return titles;
}

orderAlphabetically(movies);

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(arr){
    if(arr.length === 0) return 0;
    const averageRate = arr.reduce((accum, currentValue) => {
        if(!currentValue.rate){
            return accum + 0;
        } else {
            return accum + currentValue.rate;   
        }
    },0) / arr.length;
    return Number(averageRate.toFixed(2));
}

ratesAverage(movies);

// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(arr){
    let dramaMovies = [];
    arr.map(movie => {
        if(movie.genre.includes("Drama")){
            dramaMovies.push(movie);
        }
        return dramaMovies;
    });
    if(dramaMovies.length === 0) return 0;
    let averageRateDrama = dramaMovies.reduce((accum, currentValue) => {
        return accum + currentValue.rate;
    },0) / dramaMovies.length;
    return Number(averageRateDrama.toFixed(2));
}

dramaMoviesRate(movies);

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(arr){
    let newArr = JSON.parse(JSON.stringify(arr));

    let newDuration = newArr.map(movie => {
        let splittedDuration = movie.duration.toString().split(" ");
    
        if(splittedDuration.length === 1){
            if(splittedDuration[0].includes("h")){
                let total = parseFloat(splittedDuration[0]) * 60;
                movie.duration = total;
            } else{
                let total = parseFloat(splittedDuration[0]);
                movie.duration = total;
            }
        }
        else if(splittedDuration.length === 2){
            let hours = parseFloat(splittedDuration[0]) * 60;
            let mins = parseFloat(splittedDuration[1]);
            let total = hours + mins;
            movie.duration = total;
        }
        return{
            title: movie.title,
            year: movie.year,
            director: movie.director,
            duration: movie.duration,
            genre: movie.genre,
            rate: movie.rate
        }
    });
    return newDuration;
}

turnHoursToMinutes(movies);

// BONUS Iteration: Best yearly rate average - Best yearly rate average
