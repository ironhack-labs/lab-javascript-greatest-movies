/*eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 

function ratesAverage(movies)  {
    return Math.round((movies.reduce((acc, obj) => { return acc + Number(obj.rate) }, 0) / movies.length) * 100) / 100;
}

// Iteration 2: Drama movies - Get the average of Drama Movies

function dramaMoviesRate (movies){
    return (movies.filter(movie => movie.genre.includes("Drama")).length == 0) ? 0 : ratesAverage(movies.filter(movie => movie.genre.includes("Drama")))
}

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)

function orderByYear(movies){
    let ordenados = [...movies].sort((film1,film2) => {
      if ((Number(film1.year) - Number(film2.year)) !== 0) {
        return Number(film1.year) - Number(film2.year);
      }
      else {
        if (film1.title > film2.title) {
          return 1;
        } else if (film1.title < film2.title) { 
          return -1; 
        } else {
          return 0;
        }
      }
    })
return ordenados
} 

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

function howManyMovies(movies) {
    return ((movies.filter(movie => movie.genre.includes("Drama"))).filter(movie => movie.director.includes("Steven Spielberg"))).length;  
}

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies){
    let allMovies = [...movies].sort((film1, film2) => {
      if (film1.title > film2.title) {
        return 1;
      } 
      else if (film1.title < film2.title) { 
        return -1; 
      } 
      else {
        return 0;
      }
    })
    let orderMovies = []; 
    allMovies.forEach((obj, index) => {
      if (index < 20) {
        orderMovies.push(obj.title)
      }
      });
    return orderMovies;
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function durationToNumber(duration) {
    let total = 0;
    for (let i = 0; i < duration.length ; i++) {
      if ((duration[i+1] === "m")) {
        total += Number(duration[i])
      }
      else if (duration[i+2] == "m") {
        total += 10 * Number(duration[i])
      }
      else if (duration[i+1] == "m") {
        total += Number(duration[i])
      }
      else if (i == 0) {
        total += 60 * Number(duration[i])
      }
    }
    return total;
  }
  
  function turnHoursToMinutes(movies) {
    return newArr = movies.map((obj) => {
        return { ...obj, duration: durationToNumber(obj.duration)  }
    })
  }

// BONUS Iteration: Best yearly rate average - Best yearly rate average

/*
function iteration(array, obj, i){
  
  do {
    console.log(array[i].year)
    console.log("yes")
    i++;
  }while (Number(array[i].year) == Number(array[i+1].year));
  return i;
}*/

function bestYearAvg(movies) {
    if (movies.length == 0){
        return null;
    }
    let array = movies.map((obj) => {
      return {...obj};
    })
    array = orderByYear(array)

    let obj = array.map((obj) => {
        return {year: obj.year, rate: []};
    })
    /*let i = 0;
    while(i < obj.length){
      i = iteration(array, obj, i);
    }*/

}