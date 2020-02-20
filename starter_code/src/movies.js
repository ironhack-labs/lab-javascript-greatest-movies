/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(array) {
    const moviesArr = JSON.parse(JSON.stringify(array));
  
    moviesArr.sort((a, b) => {
      if (a.year == b.year) {
        if (a.title < b.title) {
          return -1;
        } else if (a.title > b.title) {
          return 1;
        } else {
          return 0;
        }
      } else {
        return a.year - b.year;
      }
    });
    return moviesArr;
  }
  
  // Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
  function howManyMovies(array) {
      if (!array.length) {
      return 0;
    }
  let moviesArr = array.filter(mov => {
      return mov.director === "Steven Spielberg" && mov.genre.indexOf("Drama") !== -1;});
      return moviesArr.length;
  }
  
  // Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
  
  function orderAlphabetically(array){
      const newArra = array.map(movies => movies.title)
      let alpha = newArra.sort();
      return alpha.slice(0,20);
   }
  
  
  // Iteration 4: All rates average - Get the average of all rates with 2 decimals
  
  function ratesAverage(array){
      
          if(array.length === 0){
          return 0;
          }
          const newArra = array.map(movies => movies.rate)
          let sumRates = newArra.reduce((ac, curVal) => ac + curVal);
          let ave = sumRates / array.length;
          
          return parseFloat(ave.toFixed(2));
      }
  
  // Iteration 5: Drama movies - Get the average of Drama Movies
  
  function dramaMoviesRate(array){
      if(array.length === 0){
          return 0;
          } else {
  
          let newArra = array.filter(movies => movies.genre === "Drama")
          let otroArray = newArra.map(movies => movies.rate)
          let sumRates = otroArray.reduce((ac, curVal) => ac + curVal);
          let ave = sumRates / otroArray.length;
          }
          return parseFloat(ave).toFixed(2);
      }
    
  // Iteration 6: Time Format - Turn duration of the movies from hours to minutes
  
  function turnHoursToMinutes(moviesArray) {
      
      return moviesArray.map(function (elem) {
        var hours = 0;
        var minutes = 0;
        if (elem.duration.indexOf('h') !== -1) {
          hours = parseInt(elem.duration[0], 10) * 60;
        }
        if (elem.duration.indexOf('min') !== -1) {
          minutes = parseInt(elem.duration.substring(elem.duration.length - 5, elem.duration.length - 3), 10);
        }
        return Object.assign({}, elem, { duration: hours + minutes });
      });
    }
    
    return movies;
  
  // BONUS Iteration: Best yearly rate average - Best yearly rate average
  