/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 
function ratesAverage(arr) {
    let sum = arr.reduce((acc, current) => {
      if (current.rate == "") {
        current.rate = 0;
      }
      return (acc += parseInt(current.rate));
    }, 0);
    return (sum/ arr.length);
  }
  
  console.log(ratesAverage(movies));
  

 
// // Iteration 2: Drama movies - Get the average of Drama Movies

const dramaMoviesRate = (arr) => {
    const dramaMovies = arr.filter((element) => {
        return element.genre.includes('Drama')
    })
    const dramaAvg = ratesAverage(dramaMovies)
    if (dramaMovies.length === 0)
    return 0
    return dramaAvg
}

let result = dramaMoviesRate(movies)/dramaMovies.length
console.log(result);


// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
function orderByDuration(arr) {
  let sortedArray = arr.sort((a, b) => {
    if (a.duration > b.duration) {
      return 1;
    }
    if (a.duration < b.duration) {
      return -1;
    } else {
      if (a.title > b.title) {
        return 1;
      } else {
        return -1;
      }
    }
  });
  return sortedArray;
}

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
const howManyMovies = (arr) => {
  const spielbergMovies = arr.filter((currentMovie) => {
    return currentMovie.director === "Steven Spielberg" && currentMovie.genre.includes('Drama')
  })

   return spielbergMovies.length
}

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = arr => {
  const order = arr.sort(function(a, b) {
    if (a.title < b.title) {
      return -1
    }
    if (a.title > b.title) {
      return 1
    }
    return 0
  })
  const titles = []
  for (let i = 0; i < order.length; i++) {
    titles.push(order[i].title)
  }
  return titles.slice(0, 20)
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
