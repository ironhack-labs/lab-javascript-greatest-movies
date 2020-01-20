/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

const orderByYear = function(arr) {
    let sortYears = arr.slice().sort(function(a,b) {
        if (a.year > b.year) return 1
        if (a.year < b.year) return -1
  
        if (a.title > b.title) return 1
        if (a.title < b.title) return -1
    })
    return sortYears
  }
  
console.log(orderByYear(movies));

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

const howManyMovies = function(arr) {
    return arr.filter(movie => movie.director == "Steven Spielberg" && movie.genre.indexOf('Drama') != -1).length;
}

console.log(howManyMovies(movies))

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

const orderAlphabetically = function(arr) {
    let arrTwo = JSON.parse(JSON.stringify(arr))
    arrTwo.sort(function(a,b) {
        if (a.title > b.title) return 1
        if (a.title < b.title) return -1
    })

    let newArr = [];

    if (arrTwo.length < 20) { 
      for(let i = 0; i<arrTwo.length; i++){
      newArr.push(arrTwo[i].title)}
    } else {
      for(let i = 0; i<20; i++) {
      newArr.push(arrTwo[i].title) 
      }
  
    }
    return newArr;
  }

  orderAlphabetically(movies);


  

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

const ratesAverage = function(arr) {
    let moviesWithRating = arr.filter(movie => movie.rate);
    let avrRating = moviesWithRating.reduce((sum, movie) => {
      return sum + movie.rate / moviesWithRating.length},0)
    return +avrRating.toFixed(2);
}
  
  console.log(ratesAverage(movies));

// Iteration 5: Drama movies - Get the average of Drama Movies

const dramaMoviesRate = function(arr) {
    let moviesWithGenreDrama = arr.filter(movie => movie.genre.indexOf('Drama') != -1);
    let avrRating = moviesWithGenreDrama.reduce((sum, movie) => {
      return sum + movie.rate / moviesWithGenreDrama.length},0)
    return +avrRating.toFixed(2);
    
}
  
  console.log(dramaMoviesRate(movies));

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

const turnHoursToMinutes = function(arr) {
    let copy = JSON.parse(JSON.stringify(arr))
    return copy.map(function(movie) {
      let indexForHours = movie.duration.indexOf('h');
      let indexForMinutes = movie.duration.indexOf('min')
  
      let hours = movie.duration.slice(0,indexForHours);
      let minutes = movie.duration.slice(3,indexForMinutes);
      let ifNoHoursOnlyminutes = movie.duration.slice(0,indexForMinutes);
  
      if(indexForMinutes === -1) {
      movie.duration = Number(hours)*60;
      } else if (indexForHours === -1) {
      movie.duration = Number(ifNoHoursOnlyminutes);
      } else {
      movie.duration = Number(hours)*60 + Number(minutes);
      }
      
      return movie;

    })
  }
  
 console.log(turnHoursToMinutes(movies));

// BONUS Iteration: Best yearly rate average - Best yearly rate average
