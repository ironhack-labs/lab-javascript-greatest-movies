/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(arr) {

  let totalRate = arr.reduce((sum, elem) => {
    return sum + elem.rate;
  }, 0);

  let averageRate = totalRate / arr.length;
  return Number(averageRate.toFixed(2));

}

// Iteration 2: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(arr) {

  let dramaMoviesRate = arr.filter(arr => arr.genre == 'Drama');

  if (dramaMoviesRate < 1) {
    return dramaMoviesRate = 0;
  }
  if (ratesAverage(dramaMoviesRate) == 0) {
    return 0;
  }
  return ratesAverage(dramaMoviesRate);

}

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
function orderByDuration(arr) {

  // let durationArr = turnHoursToMinutes(arr);
  
  // let sortedDuration = durationArr.sort(function(a, b){return a - b});
  // return sortedDuration;
}

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
function howManyMovies(arr) {
  
  let spielbergMovies = arr.filter(arr => arr.director == 'Steven Spielberg');
  
  let spielbergDrama = spielbergMovies.filter(arr => arr.genre.includes('Drama'));
    if (spielbergDrama.length == 0) {
      return 0;
    }
  return spielbergDrama.length;

}

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {

  let titlesArr = [];
  arr.forEach(element => {
    titlesArr.push(element.title);
  });

  let sortedArr = titlesArr.sort(function(a, b){
    if (a > b) {
      return 1;
    }
    if (b > a) {
      return -1;
    }
    return 0;
  });

  let arrLength = sortedArr.length;
    if (arrLength == 0) {
      return sortedArr;
    } else if (sortedArr.length < 20){
      return sortedArr;
    } else {
      return sortedArr.splice(0, 20);
    }
  }

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arr) {

  console.log(arr)

    let newArr = arr.map((eachMovie)=>{
      let element = eachMovie.duration
      let hoursArr = element.split('h');
      let minsArr = element.split('min');

      let hours = parseFloat(minsArr[0]);
      let minutes = parseFloat(hoursArr[1]);
      eachMovie.duration = hours + minutes
      return eachMovie
    })
    console.log(newArr)
    return newArr;

}

// BONUS Iteration: Best yearly rate average - Best yearly rate
