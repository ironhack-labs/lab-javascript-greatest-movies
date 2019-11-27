/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
  let newArr = arr.map(function(n) {
    return n;
  });
  newArr.sort(function(a,b) {
    if (a.year === b.year) {
      if (a.title > b.title) {
        return 1;
      } else if (a.title < b.title) {
        return -1;
      }
      return 0;
    }
    return a.year - b.year;
  })
    
  return newArr;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(arr) {
  let contador = 0;
  let spielberg = arr.filter(function(movie) {
    if (movie.genre.includes("Drama")) {
      return movie.director === "Steven Spielberg";
    }    
  })
  spielberg.forEach(function(movie) {
    contador++;
  });
  return contador;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
  let resultMovies = [];
  let newMovies = arr.map(function(movie) {
    return movie;
  })
  
  newMovies.sort(function(a,b) {
    if (a.title > b.title) {
      return 1;
    } else if (a.title < b.title) {
      return -1;
    }
    return 0;     
  })
  newMovies = newMovies.map(function(movie) {
    return movie.title;
  })

  if (newMovies.length <= 20) {
    newMovies.forEach(function(movie) {
      resultMovies.push(movie);
    });
  } else {
    for (let i = 0; i < 20; i++) {
      resultMovies.push(newMovies[i]);
    }
  }
  
  return resultMovies;
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(arr) {
  let contador = 0;
  if (arr.length === 0) {
    return 0;
  } else {
    let arrRates = arr.map(function(movie) {
      return movie.rate
    })
      
    for (let i = 0; i < arrRates.length; i++) {
      contador++;
    }
    for (let i = 0; i < arrRates.length; i++) {
      if (isNaN(arrRates[i])) {
        arrRates.splice(i, 1)
      } 
    }
  
    let sumRates = arrRates.reduce(function(acc,value) {  
      return acc + value;
    })
    if (arrRates.length === 0) {
      return 0;
    } else {
      return Math.round((sumRates / arr.length) * 100) / 100;
    }
  }
}
  

// Iteration 5: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(arr) {
  let contador = 0;
  let newArrRates = [];
    
  let arrRates = arr.filter(function(movie) {
    return movie.genre.includes("Drama");   
  })
  
  if (arrRates.length === 0) {
    return 0;
  } else {
    arrRates = arrRates.map(function(movie) {
      return movie.rate;
    })
      
    for (let i = 0; i < arrRates.length; i++) {
     contador++;
    }
    for (let i = 0; i < contador; i++) {
      if (isNaN(arrRates[i])) {
        continue;
      } else {
        newArrRates.push(arrRates[i])
      }
    }
  
    let sumRates = newArrRates.reduce(function(acc,value) {  
      return acc + value;
    })
    if (newArrRates.length === 0) {
      return 0;
    } else {
      return Math.round((sumRates / contador) * 100) / 100;
    }
  }
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arr) {
  let time;
  let hours;
  let mins;
  let newArr = arr.map(function(movie) {
    time = movie.duration;
    if (!time.includes("h")){
      time = "0h " + time;
    }
    if (!time.includes("min")) {
      time = time + " 0min"
    }
    time = time.split("h");
    hours = parseInt(time[0]) * 60;
    mins = time[1].split("min");
    mins = parseInt(mins[0]);
    time = hours + mins;
  
    movie.duration = time;
    return movie;
  })

  return newArr;
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average
function bestYearAvg(arr) {

  if (arr.length === 0) {
    return null;
  } else {
    let maxYear = arr.reduce(function(acc,e){
    if(acc > e.year) return acc;
    return e.year;
  }, arr[0].year)

  let minYear = arr.reduce(function(acc,e){
    if(acc < e.year) return acc;
    return e.year;
  }, arr[0].year)
  
  let newArr = [];
  let suma = 0;
  let average;
  for (let i = minYear; i < maxYear + 1; i++) {
    let contador = 0;
    arr.forEach(function(movie) {
      if (movie.year === i) {
        if (movie.rate) {
          suma += movie.rate;
          contador++;
        }
      }
    })
    if (contador != 0) {
      average = suma / contador;
      newArr.push({
        year: i,
        avRate: Number(average.toFixed(1))
      })
      suma = 0;
    }
  }

  let bestRate = newArr.reduce(function(acc,e){
    if(acc > e.avRate) return acc;
    return e.avRate;
  }, newArr[0].avRate)

  let bestYear = newArr.filter(function(year) {
    return year.avRate === bestRate;
  })
  
  return "The best year was " + bestYear[0].year + " with an average rate of " + bestYear[0].avRate;
  }
}