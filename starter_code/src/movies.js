/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 
function ratesAverage(movieArr) {
  let ratesAve = movieArr.reduce((sum, movierate) => {return sum += Number(movierate.rate);}, 0);
  
  return Number((ratesAve / movieArr.length).toFixed(2)) || 0;
}
console.log(ratesAverage(movies));

 
// Iteration 2: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(dramaArr) {
  let dramaFilterArr = dramaArr.filter((dfilter) => {
    return dfilter.genre.includes("Drama");
  })
  let dramaReduce = dramaFilterArr.reduce((dramasum, dramarate) => {return dramasum += Number(dramarate.rate);}, 0);
  
  //return ratesAverage(dramaFilterArr) || 0;
  return Number((dramaReduce / dramaFilterArr.length).toFixed(2)) || 0;
}
console.log(dramaMoviesRate(movies));


// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
function orderByYear(yearsOrder) {
  
  let sorting = yearsOrder.sort((a, b) => {
    if (a.year > b.year) {
      return 1;
    } else if (a.year < b.year) {
      return -1;
    } else {
      if (a.title > b.title) {
        return 1;
      } else if (a.title < b.title) {
        return -1;
      }
    }
  });
  return sorting;
}
console.log(orderByYear(movies));


// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
function howManyMovies(spielbergArr) {
  let dramaMoviesFilterArr = spielbergArr.filter((dramafilter) => {
    return dramafilter.genre.includes("Drama") == true; 
  })
  let HowManySpielberg = dramaMoviesFilterArr.filter((person) => person.director == "Steven Spielberg");
  
  return HowManySpielberg.length;
}
console.log(howManyMovies(movies));


// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(orderArr) {
  let alphabetically = orderArr.sort((a, b) => (a.title > b.title) ? 1 : -1).map(k => k.title).slice(0, 20);
  return alphabetically;
}
console.log(orderAlphabetically(movies));

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(minutesArr) {
  let durationArr = minutesArr.map(currentItem => {
    let stringtime = currentItem.duration;
    if (typeof stringtime === "string" && stringtime !== null && stringtime !== "" && stringtime !== undefined) {
    let strnumbers = stringtime.match(/\d+/g);
    let numbers = strnumbers.map(Number);
    let minutes = 0;
    if (stringtime.includes("h") && stringtime.includes("min")) {
      minutes = (numbers[0] * 60) + numbers[1];
    } else if (stringtime.includes("h")) {
      minutes = numbers[0] * 60;
    } else if (stringtime.includes("min")) {
      minutes = numbers[0];
    } 
    currentItem.duration = minutes;
    return {...currentItem};
    } else if (typeof stringtime === "number") {
      return currentItem.duration;
    }
  });
  
  return durationArr;

}
console.log(turnHoursToMinutes(movies));

// BONUS Iteration: Best yearly rate average - Best yearly rate average
