/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 

function ratesAverage(array) {
    let result = array.reduce(function (acc, movie) { 
      return acc + Number(movie.rate)
    }, 0) / array.length;
  
    let averageResult = Number(result.toFixed(2)) 
    return averageResult
  }

// Iteration 2: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(array) {  

    let dramaMovies = array.filter(function (movie) { 
      return movie.genre.indexOf('Drama') >= 0;
    })
  
    let result = dramaMovies.map(function (movie) { 
      return movie.rate;
    }).reduce(function (acc, rate) { 
      return acc + Number(rate);
    }, 0)
  
    let average = result / dramaMovies.length 
    if (dramaMovies.length === 0) {
      return 0;
    } else {
      return Number(average.toFixed(2));
    }
  }

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)

function orderByYear(arr){
    return arr.sort((mov1, mov2)=> {
        if (mov1.year - mov2.year ===0){
            if (mov1.title > mov2.title)return 1;
            if (mov1.title< mov2.title) return -1
            return 0
        }
        return mov1.year - mov2.year;
    })
}

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

let howManyMovies = movies =>{
    let howMany= movies.filter(obj => {
      if (obj.director === "Steven Spielberg" && obj.genre.includes ("Drama")){
        return true;
      }
      else {
        return false
      }
    }) 
    return howMany.length || 0;
   }

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(array) {
    let orderAlphArray = array.sort(function (movie1, movie2) { 
      let title1 = movie1.title.toLowerCase();
      let title2 = movie2.title.toLowerCase();
      if (title1 > title2) { 
        return 1;
      } else if (title1 < title2) {
        return -1;
      }
        return 0;
    })
    return orderAlphArray.map(function (movie) { 
      return movie.title
    }).slice(0, 20) 
  
  };

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(array) { // 1
    return array.map(function (movie) { // 2
  
      let newMovie = Object.assign({}, movie); // 3
      let hoursArray = movie.duration.split(' '); // 4
      let total = 0; // 5
  
      if (hoursArray.length === 2) { // 6
        total = (parseInt(hoursArray[0]) * 60) + parseInt(hoursArray[1]);
      } else if (hoursArray.length === 1 && hoursArray[0].indexOf('h') > -1) { // 7
        total = (parseInt(hoursArray[0]) * 60);
      } else if (hoursArray.length === 1 && hoursArray[0].indexOf('min') > -1) { // 8
        total = parseInt(hoursArray[0]);
      }
      newMovie.duration = total; // 9
      return newMovie; // 10
    })
  
  };


// BONUS Iteration: Best yearly rate average - Best yearly rate average

  function bestYearAvg (arr) {
    if (arr.length === 0) return null
    if (arr.length === 1) return `The best year was ${arr[0].year} with an average rate of ${arr[0].rate}`
    let moviesYearAvg = []
    for (i = 0, l = arr.length; i < l; i++) {
      let moviesYear = arr.filter(movie => movie.year.includes(arr[i].year))
      moviesYearAvg.push([ratesAverage(moviesYear), arr[i].year])
    }
    moviesYearAvg.sort((a, b) => {
      if (a[0] === b[0]) {
        return a[1] > b[1] ? 1 : -1
      }
      return b[0] - a[0]
    })
    return `The best year was ${moviesYearAvg[0][1]} with an average rate of ${moviesYearAvg[0][0]}`
   }